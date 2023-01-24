import {Arma, Team, Jugador} from "./clases.js";
import { eventosAleatorios1 } from "./eventosAleatorios1.js";
import { eventosLootGenerico } from "./lootGenerico.js";
const pistola = new Arma("pistola","pistola",190,3,"f","");
const granada = new Arma("granada","",480,1,"f","");
const guitarra = new Arma("guitarra","",100,1,"f","");
const alfiler = new Arma("alfiler","",10,1,"m","");
const martilloThor = new Arma("martillo de Thor","",500,2,"m","");
const bomba = new Arma("bomba","",250,1,"f","");
    
var armas = [pistola,granada,guitarra,alfiler,martilloThor,bomba];
    
const lynn = new Jugador("lynn",1074);
const robert = new Jugador("robert",15644);
const k = new Jugador("k",561);
const yugito = new Jugador("yugito",54356);
const draco = new Jugador("draco",5486);
const chun = new Jugador("chun",1010);

var maxHP = 1000;
var teams = [];

let buscarTeamDe2 = ()=>{   //retorna null si no hay teams de 2 miembros
    let team;
    let idTeam;
    for(let i=0; i < teams.length; i++){
        team = teams[i];
        idTeam = team.getID();
        if(team.nombresVivos().length == 2){
            console.log(`buscarTeamDe2 devuelve ${idTeam}`);
            return idTeam;
        }
    }
    console.log(`buscarTeamDe2 no encontro team de 2`);
    return null;
}

let imprimirTeams = (teams1 = teams)=>{
    for(let countTeams = 0; countTeams < teams1.length; countTeams++){
        console.log(`%cTEAM ${teams1[countTeams].getID()}`,"color:orange");
        if(teams1[countTeams].getPlayer1() != null){
            console.log(`%c${teams1[countTeams].getPlayer1().getNombre()} - HP: ${teams1[countTeams].getPlayer1().getHP()}`,"color:orange");
        }        
        if(teams1[countTeams].getPlayer2() != null){
            console.log(`%c${teams1[countTeams].getPlayer2().getNombre()} - HP: ${teams1[countTeams].getPlayer2().getHP()}`,"color:orange");
        }    
        if(teams1[countTeams].getPlayer3() != null){
            console.log(`%c${teams1[countTeams].getPlayer3().getNombre()} - HP: ${teams1[countTeams].getPlayer3().getHP()}`,"color:orange");
        }    
        console.log(``);
    }
}


let generarArma = ()=>{
    var rand = parseInt(Math.random()*armas.length);
    //console.log(`%c${JSON.stringify(armas[rand])}`,"color:orange");

    //return armas[rand];
    return JSON.parse(JSON.stringify(armas[rand]));
}


let danioExtra = (min,max)=>{
    let danio = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(`%c${danio} de danio extra`,"color:#808080");
    return danio;
}

let calcularVivos = (jugadores)=>{
    let cantConVida = 0;
    let player;
    for(let m=0; m<jugadores.length; m++){
        player = jugadores[m];
        if(player.alive == 1){
            cantConVida++;
        }
    }
    return cantConVida;
}

let copiarJugadores = (jugadores)=>{
    let copia = [];
    for(let i=0;i<jugadores.length;i++){ 
        copia[i] = jugadores[i];
    }

    return copia;
}

const shuffleJugadores = (jugadores)=>{         //algoritmo de Fisher-Yates para reordenar los players de forma random
       for (let i = jugadores.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         const temp = jugadores[i];
         jugadores[i] = jugadores[j];
         jugadores[j] = temp;
        }

}

let buscarPorID = (id, players)=>{
    let jugador;
    for(let i=0;i<players.length;i++){
        jugador = players[i];
        if(jugador.getID() == id){
            return players[i];
        }
    }
    console.log("no lo encontre");
    return null;
}

let esDelMismoTeam = (jugadora,jugadorb)=>{
    return (jugadora.team.getID() == jugadorb.team.getID());
}

let buscarJugador = (jugador,jugadores)=>{    //el jugador del parametro es el q ataca, y esta funcion retorna otro jugador vivo 
    shuffleJugadores(jugadores);
    let victima;
    for(let i=0;i<jugadores.length;i++){
        victima = jugadores[i];
        if((victima.alive==1) && victima.id != jugador.id){
            return victima;
        }
    }
return null;
}

let buscarJugadorConArma = (jugador,jugadores)=>{    //esta funcion retorna otro jugador vivo que tenga arma 
    shuffleJugadores(jugadores);
    let victima;
    for(let i=0;i<jugadores.length;i++){
        victima = jugadores[i];
        if((victima.alive==1) && victima.id != jugador.id && victima.arma){
            return victima.getID();
        }
    }
return null;
}

let encontrarGanador = (jugadores)=>{
    let ganador;
    for (let i = 0; i < jugadores.length; i++) {
        ganador = jugadores[i];
        if(ganador.alive == 1){return ganador};
    }
    return null;
}

let recibirJugadores = ()=>{
    let jugadores = [lynn, yugito, robert, k, draco, chun];
    return jugadores;
}

let haySuficientes = (jugadores)=> {
    let cont = 0;
    let jugador;
    for(let i=0; i<jugadores.length; i++){
        jugador = jugadores[i];
        if(jugador.team == null){
            cont++;
        }
     }
     return cont;
}

let chequearSonMismoEquipo = (players)=> {
    var ganadores = [];
    let jugador;
    let team;
    let count = 0;
    for(let i=0; i<players.length; i++){
        jugador = players[i];
        if(jugador.alive == 1){

            if(count>=1 && jugador.team.getID() == team){
                count++;
                ganadores.push(jugador);
            }

            if(count == 0){
                count++;
                team = jugador.team.getID();
                ganadores.push(jugador);
            }

        }
     }  
     return ganadores;
}

let formarEquipo = (jugadores)=> {
    let jugador;
    let jugadorA;   //auxiliar
    let jugadorB;   //auxiliar
    let idEquipo = 1;
    shuffleJugadores(jugadores);
     for(let i=0; i<jugadores.length; i++){ 
        jugador = jugadores[i];
        if(jugador.team == null){   //si no tiene equipo definido
            let r = Math.random();

            if(r > 0.5){
                //team de 2 - 50% prob
                let valid = haySuficientes(jugadores)
                if(valid >= 2){  //forma team de 2 si hay 2 libres

                    jugadorA = jugadores[i+1];

                     var thisTeam = new Team(idEquipo);
                     thisTeam.setPlayer1 = jugador;
                     thisTeam.setPlayer2 = jugadorA;
                     teams.push(thisTeam);

                     jugador.setTeam(thisTeam);
                     jugadorA.setTeam(thisTeam);

                    idEquipo++;
                }else{  //team de 1

                    var thisTeam = new Team(idEquipo);  
                    thisTeam.setPlayer1 = jugador;
                    teams.push(thisTeam);

                    jugador.setTeam(thisTeam);

                    idEquipo++;
                }
                
            }else if(r < 0.2){
                //team de 3 - 20% prob
                let valid = haySuficientes(jugadores)
                if(valid >= 3){  //forma team de 3 si hay 3 libres

                    jugadorA = jugadores[i+1];
                    jugadorB = jugadores[i+2];

                    var thisTeam = new Team(idEquipo);  
                    thisTeam.setPlayer1 = jugador;
                    thisTeam.setPlayer2 = jugadorA;
                    thisTeam.setPlayer3 = jugadorB;
                    teams.push(thisTeam);

                    jugador.setTeam(thisTeam);
                    jugadorA.setTeam(thisTeam);
                    jugadorB.setTeam(thisTeam);

                    idEquipo++;    
                }else{  //team de 1

                    var thisTeam = new Team(idEquipo);  
                    thisTeam.setPlayer1 = jugador;
                    teams.push(thisTeam);

                    jugador.setTeam(thisTeam);

                    idEquipo++;    
                }
            }else{
                //team de 1 - 30% prob

                var thisTeam = new Team(idEquipo);  
                thisTeam.setPlayer1 = jugador;
                teams.push(thisTeam);

                jugador.setTeam(thisTeam);

                idEquipo++; 
            }
        }
    }  

    let n = 1;
/*    while(n < idEquipo){
        console.log(`%c EQUIPO ${n} `,"border-radius:8px; border:2px solid white;");
        for(let k=0; k<jugadores.length; k++){
            let jugador = jugadores[k];
            if(jugador.team.getID() == n){
                console.log(`• ${jugador.getNombre()}`);
            }
        }
        n++;
    }
*/
    let arrayConTodo = [];
    while(n < idEquipo){
        arrayConTodo.push(`EQUIPO ${n}`);
        for(let k=0; k<jugadores.length; k++){
            let jugador = jugadores[k];
            if(jugador.team.getID() == n){
                arrayConTodo.push(` ${jugador.getNombre()}`);
            }
        }
        console.log(`%c ${arrayConTodo}`,"border-radius:8px; border:2px solid white; padding-top:7px; padding-bottom:7px;padding-right:4px;");
        arrayConTodo = [];
        n++;
    }


}


let mostrarResultados = (players) =>{
    let jugador;
    console.log(`%c--------------------`,"color:#808080");
    for(let i=0; i<players.length; i++){
        let jugador = players[i];
        //faltaria ordenar la lista por kills en orden descendente
        console.log(`%c${jugador.getNombre()} -  Kills: ${jugador.getKills()}`,"color:#808080");
    }
}

let eventoAleatorio1 = (jugador, players)=>{
    let resultado;
    console.log(" Sucedió un evento aleatorio");
    do{
        var rand = parseInt(Math.random()*eventosAleatorios1.length);  
        console.log(`%c ${rand}`,"color:yellow");
        resultado = eventosAleatorios1[rand](jugador, players, maxHP, teams); //le paso el array original
    }
    while(resultado!=1) //si el evento no cumple alguna condicion especial, retorna null y buscamos otro evento

};
let lootEspecificoxCategoria = (jugador, arma)=>{
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} looteó una ${arma["nombre"]}`);
};

let lootGenerico = (jugador, arma, players)=>{
    //console.log(` ${jugador.getNombre()} looteó una ${arma["nombre"]}`);
    let resultado;
    do{
        var rand = parseInt(Math.random()*eventosLootGenerico.length);  
        console.log(`%c ${rand}`,"color:yellow");
        resultado = eventosLootGenerico[rand](jugador, players, arma, maxHP); //le paso el array original
    }
    while(resultado!=1) //si el evento no cumple alguna condicion especial, retorna null y buscamos otro evento
};

let eventoAleatorio2 = ()=>{
    console.log(" Sucedió un evento aleatorio");
}

let ataqueEspecificoxCategoria = (jugador, victima)=>{
    console.log(` ${jugador.getNombre()} atacó con su ${jugador.getArma()["nombre"]} a ${victima.getNombre()}`);
    let danio = jugador.getArma()["danio"] + danioExtra(1,500);
    victima.setHP(Math.max(0,victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

    jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso
    if(jugador.getArma()["usos"] <= 0){
        console.log(`La ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se quedó sin usos`);
        jugador.setArma(null);
    } //si su arma se queda sin usos, la pierde

    console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
    if(victima.getHP()<=0){
        victima.alive=0;
        jugador.kills++;
        console.log(`%cKills de ${jugador.getNombre()}: ${jugador.getKills()}.`,"color:#808080");
    }
};

let ataqueGenericoConArma = (jugador, victima)=>{
    console.log(` ${jugador.getNombre()} atacó con su ${jugador.getArma()["nombre"]} a ${victima.getNombre()}`);
    let danio = jugador.getArma()["danio"] + danioExtra(1,500);
    victima.setHP(Math.max(0,victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0
    
    jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
    if(jugador.getArma()["usos"] <= 0){
        console.log(`La ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se quedó sin usos`);
        jugador.setArma(null);
    } //si su arma se queda sin usos, la pierde

    console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
    if(victima.getHP()<=0){
        victima.alive=0;
        jugador.kills++;
        console.log(`%cKills de ${jugador.getNombre()}: ${jugador.getKills()}.`,"color:#808080");
    }
};

let ataqueGenericoSinArma = (jugador, victima)=>{
    console.log(` ${jugador.getNombre()} atacó sin arma a ${victima.getNombre()}`);
    let danio = danioExtra(30,90);
    victima.setHP(Math.max(0,victima.getHP() - danio)); 

    console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
    if(victima.getHP()<=0){
        victima.alive=0;
        jugador.kills++;
        console.log(`%cKills de ${jugador.getNombre()}: ${jugador.getKills()}.`,"color:#808080");
    }
};


// ronda de loot
let rondaLoot = (jugador, players)=>{
        let probabilidad = Math.random();
        if(probabilidad < 0.2){
            eventoAleatorio1(jugador, players);
        }else{
            let arma = generarArma();
            jugador.setArma(arma);  //ya le pongo el arma aca
            if(arma.categoria){
                lootEspecificoxCategoria(jugador, arma);
            }else{
                lootGenerico(jugador, arma, players);
            }
        }
    };

// ronda de ataque
let rondaAtaque = (jugador,jugadores, cantidadConVida)=>{
        if(jugador.alive == 1){
            if(cantidadConVida >= 2){
             let probabilidad = Math.random();
             if(probabilidad < 0.05){
                eventoAleatorio2();
             }else{
            let victima = buscarJugador(jugador,jugadores);
              if(!jugador.arma){
                    ataqueGenericoSinArma(jugador,victima);
                }else{
                    if(jugador.arma.categoria){
                        let probabilidadEspecial = Math.random();
                        if(probabilidadEspecial < 0.2){
                            ataqueEspecificoxCategoria(jugador,victima);
                        }else{
                            ataqueGenericoConArma(jugador,victima);
                        }
                    }else{
                            ataqueGenericoConArma(jugador,victima); 
                    }
                }
             }
        }
    }
}

let arreglarIDs= ()=>{
    let team;
    for(let i=0;i<teams.length;i++){
        team = teams[i];
        team.setID = i+1;
    }
}

let eliminarTeam = (teamID)=>{
    let index;
    console.log(`eliminando el team ${teamID}`);
    index = teamID-1;
    teams.splice(index,1);
    arreglarIDs();
}

export {
    ataqueEspecificoxCategoria,
    ataqueGenericoConArma,
    ataqueGenericoSinArma,
    buscarJugador,
    buscarJugadorConArma,
    buscarPorID,
    calcularVivos,
    chequearSonMismoEquipo,
    copiarJugadores,
    danioExtra,
    encontrarGanador,
    esDelMismoTeam,
    eventoAleatorio1,
    eventoAleatorio2,
    formarEquipo,
    generarArma,
    haySuficientes,
    lootEspecificoxCategoria,
    lootGenerico,
    mostrarResultados,
    recibirJugadores,
    rondaAtaque,
    rondaLoot,
    shuffleJugadores,
    imprimirTeams,
    buscarTeamDe2,
    eliminarTeam
}
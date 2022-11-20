let maxHP = 1000;

class Arma{
    constructor(nombre,categoria,danio,usos,genero,plural){
        this.nombre = nombre;
        this.categoria = categoria;
        this.danio = danio;
        this.usos = usos;
        this.pronombre = genero;
        this.plural = plural;
    }
}
    // las categorias lo dejamos pa despues
const pistola = new Arma("pistola","pistola",190,3,"f","");
const granada = new Arma("granada","",480,1,"f","");
const guitarra = new Arma("guitarra","",100,1,"f","");
const alfiler = new Arma("alfiler","",10,1,"m","");
const martilloThor = new Arma("martillo de Thor","",500,2,"m","");
const bomba = new Arma("bomba","",250,1,"f","");

var armas = [pistola,granada,guitarra,alfiler,martilloThor,bomba];


class Jugador{
	constructor(nombre,id){
		this.nombre = nombre;
		this.alive = 1;
        this.arma = null;
        this.id = id;
        this.hp = 1000;
        this.team = null;
        this.kills = 0;
	}

    setArma(arma){
		this.arma= arma;
	}

    setTeam(numero){
		this.team=numero;
	}

    setHP(hp){
        this.hp=hp;
    }

    getArma(){
		return this.arma;
	}

    getNombre(){
        return this.nombre;
    }

    getHP(){
        return this.hp;
    }

    getID(){
        return this.id;
    }

    getKills(){
        return this.kills;
    }

    getTeam(){
        return this.team;
    }
}

const lynn = new Jugador("lynn",1074);
const robert = new Jugador("robert",15644);
const k = new Jugador("k",561);
const yugito = new Jugador("yugito",54356);
const draco = new Jugador("draco",5486);
const chun = new Jugador("chun",1010);

class Team{
	constructor(id){
        this.id = id;
        this.player1 = null;
        this.player2 = null;
        this.player3 = null;
	}

    set setPlayer1(player){
		this.player1= player;
	}

    set setPlayer2(player){
		this.player2= player;
	}

    set setPlayer3(player){
		this.player3= player;
	}

    getID(){
        return this.id;
    }

    getPlayer1(){
        return this.player1;
    }

    getPlayer2(){
        return this.player2;
    }

    getPlayer3(){
        return this.player3;
    }

    estaVivo1(){
        return (this.player1.alive == 1);
    }

    estaVivo2(){
        return (this.player2.alive == 1);
    }

    estaVivo3(){
        return (this.player3.alive == 1);
    }

    nombresVivos(){
        let nombres = [];
        if(this.getPlayer1()!=null && this.estaVivo1()){
            nombres.push(this.getPlayer1().getNombre());
        }    
        if(this.getPlayer2()!=null && this.estaVivo2()){
            nombres.push(this.getPlayer2().getNombre());
        }    
        if(this.getPlayer3()!=null && this.estaVivo3()){
            nombres.push(this.getPlayer3().getNombre());
        }    
        return nombres;
    }

}

var teams = [];

imprimirTeams = ()=>{
    for(let countTeams = 0; countTeams < teams.length; countTeams++){
        console.log(`%cTEAM ${teams[countTeams].getID()}`,"color:orange");
        if(teams[countTeams].getPlayer1() != null){
            console.log(`%c${teams[countTeams].getPlayer1().getNombre()} - HP: ${teams[countTeams].getPlayer1().getHP()}`,"color:orange");
        }        
        if(teams[countTeams].getPlayer2() != null){
            console.log(`%c${teams[countTeams].getPlayer2().getNombre()} - HP: ${teams[countTeams].getPlayer2().getHP()}`,"color:orange");
        }    
        if(teams[countTeams].getPlayer3() != null){
            console.log(`%c${teams[countTeams].getPlayer3().getNombre()} - HP: ${teams[countTeams].getPlayer3().getHP()}`,"color:orange");
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

let buscarPorID = (id)=>{
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
    return (jugadora.team == jugadorb.team);
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

let chequearSonMismoEquipo = ()=> {
    var ganadores = [];
    let jugador;
    let team;
    let count = 0;
    for(let i=0; i<players.length; i++){
        jugador = players[i];
        if(jugador.alive == 1){

            if(count>=1 && jugador.team == team){
                count++;
                ganadores.push(jugador);
            }

            if(count == 0){
                count++;
                team = jugador.team;
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
                    jugador.team = idEquipo;
                    jugadorA = jugadores[i+1];
                    jugadorA.team = idEquipo;

                     var thisTeam = new Team(idEquipo);  
                     thisTeam.setPlayer1 = jugador;
                     thisTeam.setPlayer2 = jugadorA;
                     teams.push(thisTeam);

                    idEquipo++;
                }else{
                    jugador.team = idEquipo;

                    var thisTeam = new Team(idEquipo);  
                    thisTeam.setPlayer1 = jugador;
                    teams.push(thisTeam);

                    idEquipo++;
                }
                
            }else if(r < 0.2){
                //team de 3 - 20% prob
                let valid = haySuficientes(jugadores)
                if(valid >= 3){  //forma team de 3 si hay 3 libres
                    jugador.team = idEquipo;
                    jugadorA = jugadores[i+1];
                    jugadorA.team = idEquipo;
                    jugadorB = jugadores[i+2];
                    jugadorB.team = idEquipo;

                    var thisTeam = new Team(idEquipo);  
                    thisTeam.setPlayer1 = jugador;
                    thisTeam.setPlayer2 = jugadorA;
                    thisTeam.setPlayer3 = jugadorB;
                    teams.push(thisTeam);

                    idEquipo++;    
                }else{
                    jugador.team = idEquipo;

                    var thisTeam = new Team(idEquipo);  
                    thisTeam.setPlayer1 = jugador;
                    teams.push(thisTeam);

                    idEquipo++;    
                }
            }else{
                //team de 1 - 30% prob
                jugador.team = idEquipo;

                var thisTeam = new Team(idEquipo);  
                thisTeam.setPlayer1 = jugador;
                teams.push(thisTeam);

                idEquipo++; 
            }
        }
    }  

    let n = 1;
/*    while(n < idEquipo){
        console.log(`%c EQUIPO ${n} `,"border-radius:8px; border:2px solid white;");
        for(let k=0; k<jugadores.length; k++){
            let jugador = jugadores[k];
            if(jugador.team == n){
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
            if(jugador.team == n){
                arrayConTodo.push(` ${jugador.getNombre()}`);
            }
        }
        console.log(`%c ${arrayConTodo}`,"border-radius:8px; border:2px solid white; padding-top:7px; padding-bottom:7px;padding-right:4px;");
        arrayConTodo = [];
        n++;
    }


}


let mostrarResultados = () =>{
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
        resultado = eventosAleatorios1[rand](jugador, players); //le paso el array original
    }
    while(resultado!=1) //si el evento no cumple alguna condicion especial, retorna null y buscamos otro evento

};
let lootEspecificoxCategoria = (jugador, arma)=>{
    console.log(` ${jugador.getNombre()} looteó una ${arma["nombre"]}`);
};
let lootGenerico = (jugador, arma)=>{
    //console.log(` ${jugador.getNombre()} looteó una ${arma["nombre"]}`);
    let resultado;
    do{
        var rand = parseInt(Math.random()*eventosLootGenerico.length);  
        console.log(`%c ${rand}`,"color:yellow");
        resultado = eventosLootGenerico[rand](jugador, players, arma); //le paso el array original
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
let rondaLoot = (jugador)=>{
        let probabilidad = Math.random();
        if(probabilidad < 0.2){
            eventoAleatorio1(jugador, players);
        }else{
            let arma = generarArma();
            jugador.setArma(arma);  //ya le pongo el arma aca
            if(arma.categoria){
                lootEspecificoxCategoria(jugador, arma);
            }else{
                lootGenerico(jugador, arma);
            }
        }
    };

// ronda de ataque
let rondaAtaque = (jugador,jugadores)=>{
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


let cantidadConVida = 0;

//se unen los jugadores
var players = recibirJugadores();

cantidadConVida = calcularVivos(players);

//Inicio del juego

//ronda de formar equipos
let copia1 = copiarJugadores(players)
    formarEquipo(copia1);

      console.log(`%c${JSON.stringify(teams)}`,"color:orange");

//primera ronda de loot
for(let i=0;i<cantidadConVida;i++){
    let jugador = players[i];
    console.log(`%cRonda inicial de Loot - ${jugador.getNombre()}`,"color:#6068da; font-weight:bold");
    rondaLoot(jugador);
}

cantidadConVida = calcularVivos(players);
console.log(`%cQuedan ${cantidadConVida} jugadores con vida.`,"color:#808080");

let nroRonda = 1;
let danioSuma = 50;
whileGrande:
while(cantidadConVida > 1 ){
    console.log(`%cRonda ${nroRonda}.`,"color:#808080");
    shuffleJugadores(players);      //por cada ronda, reordeno la lista para que ataquen en orden random
    for(let j=0;j<players.length;j++){

        cantidadConVida = calcularVivos(players);

        if(cantidadConVida == 3){   //si quedan 3 jugadores y son del mismo team, termina el juego
            let check = chequearSonMismoEquipo();
            if(check.length == 3){
                console.log(`%c Los ganadores son ${check[0].getNombre()}, ${check[1].getNombre()} y ${check[2].getNombre()}`,"color:green; font-weight:bold");
                break whileGrande;
            }
    
        }    
    
        if(cantidadConVida == 2){   //si quedan 2 jugadores y son del mismo team, termina el juego
            let check = chequearSonMismoEquipo();
            if(check.length == 2){
                console.log(`%c Los ganadores son ${check[0].getNombre()} y ${check[1].getNombre()}`,"color:green; font-weight:bold");
                break whileGrande;
            }
    
        }    
        let probabilidadExtra = 0;
        let jugador = players[j];
        if(jugador.alive == 1){
            console.log(`%cTurno de ${jugador.getNombre()}`,"color:green; font-weight:bold");
            if(jugador.getArma() == null){probabilidadExtra = 0.50;} //si el jugador no tiene arma, tiene 50% mas de chances de lootear que de atacar
            let probabilidad = Math.random();
            if(probabilidad < (0.25 + probabilidadExtra)){
                console.log(`%c Loot`,"color:#6068da");
                rondaLoot(jugador);
            }else{
                console.log(`%c Ataque`,"color:red");
                let copia = copiarJugadores(players);
                rondaAtaque(jugador,copia);  //le mando una copia para que los que atacan sigan un orden, pero los que reciben el ataque sean random
            }
        }
    }
    nroRonda++;
    cantidadConVida = calcularVivos(players);
    console.log(`%cQuedan ${cantidadConVida} jugadores con vida.`,"color:#808080");

    imprimirTeams();

    if(nroRonda>=4){
        for(let contador = 0;contador<players.length;contador++){
            let playerRonda = players[contador];
            if(playerRonda.getArma()){
                console.log(`danio antes ${playerRonda.getArma()["danio"]}`);
                playerRonda.getArma().danio += danioSuma;
                console.log(`danio despues ${playerRonda.getArma()["danio"]}`);
            }
        }
        danioSuma+=25;
    }
}

if(cantidadConVida==1){
let ganador = encontrarGanador(players);
console.log(`%c El ganador es ${ganador.getNombre()}`,"color:green; font-weight:bold");
}

mostrarResultados();
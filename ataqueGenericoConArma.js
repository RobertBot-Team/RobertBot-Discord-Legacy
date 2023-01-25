/*------------ ataque generico con arma ------------*/
//let maxHP = 1000;
import {
    buscarJugadorConArma,
    buscarPorID,
    calcularVivos,
    chequearSonMismoEquipo,
    copiarJugadores,
    danioExtra,
    esDelMismoTeam,
    generarArma,
    haySuficientes,
    shuffleJugadores,
    imprimirTeams,
    buscarJugadorDistintoA2
} from "./utils.js"
import {Arma, Team, Jugador} from "./clases.js";

var ataquesGenericosConArma = [];

ataquesGenericosConArma[0] = (jugador, players, victima)=>{
    console.log(`${jugador.getNombre()} atacó con su ${jugador.getArma()["nombre"]} a ${victima.getNombre()}`);
    let danio = jugador.getArma()["danio"] + danioExtra(1,500);
    victima.setHP(Math.max(0,victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0
    
    jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
    if(jugador.getArma()["usos"] <= 0){
        console.log(`El/La ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se quedó sin usos`);
        jugador.setArma(null);
    } //si su arma se queda sin usos, la pierde

    console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
    if(victima.getHP()<=0){
        victima.alive=0;
        jugador.kills++;
        console.log("\x1b[90m%s\x1b[0m",`Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`);
    }
return 1;
}

ataquesGenericosConArma[1] = (jugador, players, victima)=>{
    console.log(`${jugador.getNombre()} la arroja su ${jugador.getArma()["nombre"]} a ${victima.getNombre()}`);
    let danio = danioExtra(100,200);
    victima.setHP(Math.max(0,victima.getHP() - danio));
    
        console.log(`${jugador.getNombre()} perdió su ${jugador.getArma()["nombre"]}`);
        jugador.setArma(null);

    console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
    if(victima.getHP()<=0){
        victima.alive=0;
        jugador.kills++;
        console.log("\x1b[90m%s\x1b[0m",`Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`);
    }
return 1;
}

ataquesGenericosConArma[2] = (jugador, players, victima)=>{
    console.log(`${jugador.getNombre()} aprovecha cuando ${victima.getNombre()} está durmiendo y le lanza su ${jugador.getArma()["nombre"]}.`);
    let danio = danioExtra(100,200);
    victima.setHP(Math.max(0,victima.getHP() - danio));
    
        console.log(`${jugador.getNombre()} perdió su ${jugador.getArma()["nombre"]}`);
        jugador.setArma(null);

    console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
    if(victima.getHP()<=0){
        victima.alive=0;
        jugador.kills++;
        console.log("\x1b[90m%s\x1b[0m",`Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`);
    }
return 1;
}

ataquesGenericosConArma[3] = (jugador, players, victima)=>{
    console.log(`${jugador.getNombre()} iba a atacar a ${victima.getNombre()} pero se enamora al ver sus ojos. ${victima.getNombre()} escapa.`);
return 1;
}

ataquesGenericosConArma[4] = (jugador, players, victima)=>{
    console.log(`${jugador.getNombre()} está a punto de matar a ${victima.getNombre()} con su ${jugador.getArma()["nombre"]} pero le da penita y lo deja escapar.`);
return 1;
}

ataquesGenericosConArma[5] = (jugador, players, victima)=>{
    console.log(`${jugador.getNombre()} se escabulle para matar a ${victima.getNombre()}, pero como nunca usó un/a ${jugador.getArma()["nombre"]}, termina lastimándose a si mismo.`);
    let danio = jugador.getArma()["danio"] + danioExtra(1,500);
    jugador.setHP(Math.max(0,jugador.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0
    
    jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
    if(jugador.getArma()["usos"] <= 0){
        console.log(`El/La ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se quedó sin usos`);
        jugador.setArma(null);
    } //si su arma se queda sin usos, la pierde

    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
    if(jugador.getHP()<=0){
        jugador.alive=0;
        jugador.kills++;
        console.log("\x1b[90m%s\x1b[0m",`Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`);
    }
return 1;
}

ataquesGenericosConArma[6] = (jugador, players, victima)=>{
    console.log(`${jugador.getNombre()} toma a ${victima.getNombre()} desprevenido y lo ataca con su ${jugador.getArma()["nombre"]}.`);
    let danio = jugador.getArma()["danio"] + danioExtra(1,500);
    victima.setHP(Math.max(0,victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0
    
    jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
    if(jugador.getArma()["usos"] <= 0){
        console.log(`El/La ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se quedó sin usos`);
        jugador.setArma(null);
    } //si su arma se queda sin usos, la pierde

    console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
    if(victima.getHP()<=0){
        victima.alive=0;
        jugador.kills++;
        console.log("\x1b[90m%s\x1b[0m",`Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`);
    }
return 1;
}

ataquesGenericosConArma[7] = (jugador, players, victima)=>{
    console.log(`${victima.getNombre()} se puso un Padoru antes de diciembre y todo el server se unió para matarlo.`);
    victima.setHP(0);
    console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
    victima.alive=0;
return 1;
}



export {ataquesGenericosConArma};
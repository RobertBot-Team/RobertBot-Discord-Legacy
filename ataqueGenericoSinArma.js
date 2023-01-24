/*------------ loot generico de armas ------------*/
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

var ataquesGenericosSinArma = [];

ataquesGenericosSinArma[0] = (jugador, players, victima)=>{
    console.log(`${jugador.getNombre()} atacó sin arma a ${victima.getNombre()}`);
    let danio = danioExtra(30,90);
    victima.setHP(Math.max(0,victima.getHP() - danio)); 

    console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
    if(victima.getHP()<=0){
        victima.alive=0;
        jugador.kills++;
        console.log("\x1b[90m%s\x1b[0m",`Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`);
    }
    return 1;
}

ataquesGenericosSinArma[1] = (jugador, players, victima)=>{
    console.log(`${jugador.getNombre()} atacó con sus puños a ${victima.getNombre()}`);
    let danio = danioExtra(30,90);
    victima.setHP(Math.max(0,victima.getHP() - danio)); 

    console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
    if(victima.getHP()<=0){
        victima.alive=0;
        jugador.kills++;
        console.log("\x1b[90m%s\x1b[0m",`Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`);
    }
    return 1;
}

ataquesGenericosSinArma[2] = (jugador, players, victima)=>{
    if(victima.getArma()==null){return null;}
    //console.log(JSON.stringify(victima.getArma()));
    console.log(`${jugador.getNombre()} mata a ${victima.getNombre()} con su propio/a ${victima.getArma()["nombre"]}`);
    victima.setHP(0); 
    console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
        victima.alive=0;
        jugador.kills++;
        console.log("\x1b[90m%s\x1b[0m",`Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`);
    return 1;
}

ataquesGenericosSinArma[3] = (jugador, players, victima)=>{
    console.log(`${jugador.getNombre()} encuentra a ${victima.getNombre()} campeando y le ataca por detrás`);
    let danio = danioExtra(80,150);
    victima.setHP(Math.max(0,victima.getHP() - danio)); 

    console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
    if(victima.getHP()<=0){
        victima.alive=0;
        jugador.kills++;
        console.log("\x1b[90m%s\x1b[0m",`Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`);
    }
    return 1;
}

ataquesGenericosSinArma[4] = (jugador, players, victima)=>{
    console.log(`${jugador.getNombre()} persigue a ${victima.getNombre()} pero ${victima.getNombre()} es más rapido`);
  
    return 1;
}

ataquesGenericosSinArma[5] = (jugador, players, victima)=>{
    console.log(`${jugador.getNombre()} persigue a  ${victima.getNombre()} y consigue atacarlo`);
    let danio = danioExtra(80,150);
    victima.setHP(Math.max(0,victima.getHP() - danio)); 

    console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
    if(victima.getHP()<=0){
        victima.alive=0;
        jugador.kills++;
        console.log("\x1b[90m%s\x1b[0m",`Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`);
    }
    return 1;
}

ataquesGenericosSinArma[6] = (jugador, players, victima)=>{
    console.log(`${jugador.getNombre()} cae de un acantilado y aterriza justo encima de ${victima.getNombre()}. ${jugador.getNombre()} está bien. ${victima.getNombre()} no tanto.`);
    let danio = danioExtra(100,170);
    victima.setHP(Math.max(0,victima.getHP() - danio)); 

    console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
    if(victima.getHP()<=0){
        victima.alive=0;
        jugador.kills++;
        console.log("\x1b[90m%s\x1b[0m",`Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`);
    }
    return 1;
}

ataquesGenericosSinArma[7] = (jugador, players, victima)=>{
    let jugador2;
    jugador2 = buscarJugadorDistintoA2(jugador,victima,players);
    if(jugador2 == null){return null;}
    console.log(`${jugador2.getNombre()} ayuda a ${jugador.getNombre()} a ahogar a ${victima.getNombre()}`);
    victima.setHP(0); 
    console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
        victima.alive=0;
        jugador.kills++;
        console.log("\x1b[90m%s\x1b[0m",`Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`);
    return 1;
}


ataquesGenericosSinArma[8] = (jugador, players, victima)=>{
    console.log(`${victima.getNombre()} insulta la waifu de ${jugador.getNombre()} y se dan a putazos un buen rato`);
    let danio = danioExtra(100,200);
    let danio2 = danioExtra(45,95);
    victima.setHP(Math.max(0,victima.getHP() - danio)); 
    jugador.setHP(Math.max(0,jugador.getHP() - danio2)); 

    console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
    if(victima.getHP()<=0){
        victima.alive=0;
        jugador.kills++;
        console.log("\x1b[90m%s\x1b[0m",`Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`);
    }
    if(jugador.getHP()<=0){
        jugador.alive=0;
        victima.kills++;
        console.log("\x1b[90m%s\x1b[0m",`Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`);
    }
    return 1;
}


export {ataquesGenericosSinArma};
/*------------ ataque especifico por categoría ------------*/
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
    buscarJugadorDistintoA2,
    randomSelector,    
    pluralS,
    pronombreUnUnaUnosUnas,
    pronombreOAOsAs,
    pronombreElLaLosLas
} from "./utils.js"
import {Arma, Team, Jugador} from "./clases.js";

var eventosAtaqueEspecificoxCategoria = [];

eventosAtaqueEspecificoxCategoria[0] = (jugador, players, victima)=>{   //recibe una COPIA, luego buscar la victima original
    let arma = jugador.getArma();

    let categoria = arma["categoria"];
    console.log(`%c${arma["nombre"]} > ${categoria}`,"color:orange");
    let posicion;
    let seleccionado;
    let arrayPosiciones = [];

    let pronombreUno = pronombreUnUnaUnosUnas(arma);

    switch(categoria){

        case "pistola":
            arrayPosiciones = [1,2,4,5];
            posicion = randomSelector(0,3);
            seleccionado = arrayPosiciones[posicion];
            eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima);
            break;
      
         default:
    //jugador.setArma(arma);
    //console.log(` ${jugador.getNombre()} looteó ${pronombreUno} ${arma["nombre"]}.`);

    }

return 1;
}


// "pistola"
eventosAtaqueEspecificoxCategoria[1] = (jugador, players, victima)=>{
    console.log(`nononono`);
    console.log(` ${jugador.getNombre()} dispara con su ${jugador.getArma()["nombre"]} a ${victima.getNombre()}, causándole graves heridas.`);

    let pronombre = pronombreElLaLosLas(jugador.getArma());

    let danio = jugador.getArma()["danio"] + danioExtra(1,300);
    victima.setHP(Math.max(0,victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0
    
    jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
    if(jugador.getArma()["usos"] <= 0){
        console.log(`${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se quedó sin usos`);
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

// "pistola"
eventosAtaqueEspecificoxCategoria[2] = (jugador, players, victima)=>{
    console.log(`nononono`);
    console.log(` ${jugador.getNombre()} le dispara a ${victima.getNombre()} en el pie con su ${jugador.getArma()["nombre"]}.`);

    let pronombre = pronombreElLaLosLas(jugador.getArma());

    let danio = jugador.getArma()["danio"] + danioExtra(1,150);
    victima.setHP(Math.max(0,victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0
    
    jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
    if(jugador.getArma()["usos"] <= 0){
        console.log(`${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se quedó sin usos`);
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

// "otro"
eventosAtaqueEspecificoxCategoria[3] = (jugador, players, victima)=>{
    console.log(`nononono`);
    console.log(` ${jugador.getNombre()} dfgfgddfga ${victima.getNombre()} fgdsdfg su ${jugador.getArma()["nombre"]}.`);

    let pronombre = pronombreElLaLosLas(jugador.getArma());

    let danio = jugador.getArma()["danio"] + danioExtra(1,150);
    victima.setHP(Math.max(0,victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0
    
    jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
    if(jugador.getArma()["usos"] <= 0){
        console.log(`${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se quedó sin usos`);
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

// "pistola"
eventosAtaqueEspecificoxCategoria[4] = (jugador, players, victima)=>{
    console.log(`nononono`);
    console.log(` ${jugador.getNombre()} dispara con su ${jugador.getArma()["nombre"]} a ${victima.getNombre()} pero la bala apenas le roza.`);

    let pronombre = pronombreElLaLosLas(jugador.getArma());

    let danio = danioExtra(10,50);
    victima.setHP(Math.max(0,victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0
    
    jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
    if(jugador.getArma()["usos"] <= 0){
        console.log(`${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se quedó sin usos`);
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

// "pistola"
eventosAtaqueEspecificoxCategoria[5] = (jugador, players, victima)=>{
    console.log(`nononono`);
    console.log(` ${jugador.getNombre()} dispara con su ${jugador.getArma()["nombre"]} a ${victima.getNombre()} pero ${victima.getNombre()} esquiva la bala al estilo Matrix`);

    let pronombre = pronombreElLaLosLas(jugador.getArma());

    jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
    if(jugador.getArma()["usos"] <= 0){
        console.log(`${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se quedó sin usos`);
        jugador.setArma(null);
    } //si su arma se queda sin usos, la pierde

    console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);

    return 1;
}




export { eventosAtaqueEspecificoxCategoria };
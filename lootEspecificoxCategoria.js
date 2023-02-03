/*------------ loot especifico por categoría ------------*/
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
    randomSelector
} from "./utils.js"
import {Arma, Team, Jugador} from "./clases.js";

var eventoslootEspecificoxCategoria = [];

/*
    let resultado;
    do{
        var rand = parseInt(Math.random()*lootEspecificoxCategoria.length);  
        console.log("\x1b[33m%s\x1b[0m",` ${rand}`);
        resultado = lootEspecificoxCategoria[rand](jugador, players, arma); //le paso el array original
    }   
     while(resultado!=1)
*/

eventoslootEspecificoxCategoria[0] = (jugador, players, arma)=>{
    let categoria = arma["categoria"];
    console.log(`%c${categoria}`,"color:orange");
    let seleccionado;

    switch(categoria){

        case "martillo de Thor":
            seleccionado = randomSelector(1,2);
            eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma);
            break;

        case "ramo de flores":
            eventoslootEspecificoxCategoria[3](jugador, players, arma);
            break;

        case "death note":
            eventoslootEspecificoxCategoria[4](jugador, players, arma);
            break;

        case "espada":
            if(arma["nombre"] == "Espada Maestra"){
                eventoslootEspecificoxCategoria[5](jugador, players, arma);
                break;
            }
            if(arma["nombre"] == "espada de madera"){
                eventoslootEspecificoxCategoria[6](jugador, players, arma);
                break;
            }
            seleccionado = randomSelector(7,9);
            eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma);
            break;           

        default:
            console.log(` ${jugador.getNombre()} looteó un/a ${arma["nombre"]}`);

    }
    
    return 1;
}

// "martillo de Thor"
eventoslootEspecificoxCategoria[1] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    //jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} encontró el Martillo de Thor. Lamentablemente no lo pudo levantar porque no es digno.`);
    return 1;
}

// "martillo de Thor"
eventoslootEspecificoxCategoria[2] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} encontró el Martillo de Thor. Como ${jugador.getNombre()} es “alguien digno”, lo puede levantar y se lo lleva.`);
    return 1;
}

// "ramo de flores"
eventoslootEspecificoxCategoria[3] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} recolecta flores con espinas de sus alrededores, y arma un ramo de flores. 🌼`);
    return 1;
}

// "death note"
eventoslootEspecificoxCategoria[4] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} encontró una Death Note y está listo para ponerse a escribir nombres.`);
    return 1;
}

// "espada maestra"
eventoslootEspecificoxCategoria[5] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} acaba de encontrar LA ESPADA MAESTRA. El arma mas mamadísima del juego. Cuidadito.`);
    return 1;
}

// "espada de madera"
eventoslootEspecificoxCategoria[6] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} construye una espada de madera con ramas de los árboles.`);
    return 1;
}

// "espada"
eventoslootEspecificoxCategoria[7] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} looteó un/a ${arma["nombre"]}.`);   
    return 1;
}

eventoslootEspecificoxCategoria[8] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} looteó un/a ${arma["nombre"]}. A ver a quién se lo/a clava.`);   
    return 1;
}

eventoslootEspecificoxCategoria[9] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} looteó un/a ${arma["nombre"]} y piensa "ojala hubiera tomado clases de esgrima"`);   
    return 1;
}



export { eventoslootEspecificoxCategoria };
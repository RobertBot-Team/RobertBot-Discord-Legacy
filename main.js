import {
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
    imprimirTeams
} from "./utils.js"

let cantidadConVida = 0;

//se unen los jugadores
var players = recibirJugadores();

cantidadConVida = calcularVivos(players);

//Inicio del juego

//ronda de formar equipos
let copia1 = copiarJugadores(players)
    formarEquipo(copia1);

    //console.log(`%c${JSON.stringify(teams)}`,"color:orange");
    imprimirTeams();

//primera ronda de loot
for(let i=0;i<cantidadConVida;i++){
    let jugador = players[i];
    console.log("\x1b[34m%s\x1b[0m",`Ronda inicial de Loot - ${jugador.getNombre()}`);
    rondaLoot(jugador, players);
}

cantidadConVida = calcularVivos(players);
console.log("\x1b[90m%s\x1b[0m",`Quedan ${cantidadConVida} jugadores con vida.`);

let nroRonda = 1;
let danioSuma = 50;
whileGrande:
while(cantidadConVida > 1 ){
    console.log("\x1b[90m%s\x1b[0m",`Ronda ${nroRonda}.`);
    shuffleJugadores(players);      //por cada ronda, reordeno la lista para que ataquen en orden random
    for(let j=0;j<players.length;j++){

        cantidadConVida = calcularVivos(players);

        if(cantidadConVida == 3){   //si quedan 3 jugadores y son del mismo team, termina el juego
            let check = chequearSonMismoEquipo(players);
            if(check.length == 3){
                console.log("\x1b[32m%s\x1b[0m",` Los ganadores son ${check[0].getNombre()}, ${check[1].getNombre()} y ${check[2].getNombre()}`);
                break whileGrande;
            }
    
        }    
    
        if(cantidadConVida == 2){   //si quedan 2 jugadores y son del mismo team, termina el juego
            let check = chequearSonMismoEquipo(players);
            if(check.length == 2){
                console.log("\x1b[32m%s\x1b[0m",` Los ganadores son ${check[0].getNombre()} y ${check[1].getNombre()}`);
                break whileGrande;
            }
    
        }    
        let probabilidadExtra = 0;
        let jugador = players[j];
        if(jugador.alive == 1){
            console.log("\x1b[32m%s\x1b[0m",`Turno de ${jugador.getNombre()}`);
            if(jugador.getArma() == null){probabilidadExtra = 0.55;} //si el jugador no tiene arma, tiene 55% mas de chances de lootear que de atacar
            let probabilidad = Math.random();
            if(probabilidad < (0.25 + probabilidadExtra)){
                console.log("\x1b[34m%s\x1b[0m",`> Loot`);
                rondaLoot(jugador, players);
            }else{
                console.log("\x1b[31m%s\x1b[0m",`> Ataque`);
                let copia = copiarJugadores(players);
                rondaAtaque(jugador,copia, cantidadConVida);  //le mando una copia para que los que atacan sigan un orden, pero los que reciben el ataque sean random
            }
            probabilidadExtra = 0;
        }
    }
    nroRonda++;
    cantidadConVida = calcularVivos(players);
    console.log("\x1b[90m%s\x1b[0m",`Quedan ${cantidadConVida} jugadores con vida.`);

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
console.log("\x1b[32m%s\x1b[0m",` El ganador es ${ganador.getNombre()}`);
}

if(cantidadConVida<1){
console.log("\x1b[32m%s\x1b[0m",` Parece que esta vez no hubo ganadores...`);
}

mostrarResultados(players);
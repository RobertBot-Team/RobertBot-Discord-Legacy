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
    console.log(`%cRonda inicial de Loot - ${jugador.getNombre()}`,"color:#6068da; font-weight:bold");
    rondaLoot(jugador, players);
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
            let check = chequearSonMismoEquipo(players);
            if(check.length == 3){
                console.log(`%c Los ganadores son ${check[0].getNombre()}, ${check[1].getNombre()} y ${check[2].getNombre()}`,"color:green; font-weight:bold");
                break whileGrande;
            }
    
        }    
    
        if(cantidadConVida == 2){   //si quedan 2 jugadores y son del mismo team, termina el juego
            let check = chequearSonMismoEquipo(players);
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
                rondaLoot(jugador, players);
            }else{
                console.log(`%c Ataque`,"color:red");
                let copia = copiarJugadores(players);
                rondaAtaque(jugador,copia, cantidadConVida);  //le mando una copia para que los que atacan sigan un orden, pero los que reciben el ataque sean random
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

mostrarResultados(players);
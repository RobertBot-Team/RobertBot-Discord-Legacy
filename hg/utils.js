import { Arma, Team, Jugador } from "./clases.js";
import { eventosAleatorios1 } from "./eventosAleatorios1.js";
import { eventosAleatorios2 } from "./eventosAleatorios2.js"
import { eventoslootEspecificoxCategoria } from "./lootEspecificoxCategoria.js"
import { eventosAtaqueEspecificoxCategoria } from "./ataqueEspecificoxCategoria.js"
import { eventosLootGenerico } from "./lootGenerico.js";
import { ataquesGenericosSinArma } from "./ataqueGenericoSinArma.js"
import { ataquesGenericosConArma } from "./ataqueGenericoConArma.js"

//En español               (nombre, categoria, daño base, usos, pronombre, pluralidad)
const pistola = new Arma("pistola", "pistola", 190, 3, "f", "");
const granada = new Arma("granada", "explosivos", 480, 1, "f", "");
const guitarra = new Arma("guitarra", "rompibles", 100, 1, "f", "");
const alfiler = new Arma("alfiler", "alfiler", 10, 1, "m", "");
const martilloThor = new Arma("martillo de Thor", "", 500, 2, "m", "");
const bomba = new Arma("bomba", "", 250, 1, "f", "");
const jeringuilla = new Arma("jeringuilla usada", "jeringuilla", 50, 6, "f", "");
const bate = new Arma("bate de beisbol", "rompibles", 85, 6, "m", "");
const jericho = new Arma("Jericho 941-R", "pistola", 380, 4, "f", "");
const estrellasNinja = new Arma("estrellas ninja", "estrellas", 100, 3, "f", "p");
const espadaCuadruple = new Arma("espada cuádruple", "espada", 300, 2, "f", "");
const grimorio = new Arma("grimorio antiguo", "grimorio", 300, 1, "m", "");
const daRules = new Arma("da rules", "", 100, 1, "m", "");
const cuchillo = new Arma("cuchillo", "arma blanca", 50, 4, "m", "");
const navaja = new Arma("navaja", "arma blanca", 66, 5, "f", "");
const navajaVictorinox = new Arma("Navaja Suiza Multiusos Victorinox Climber 5000 ++", "arma blanca", 66, 5, "f", "");
const tirachinas = new Arma("tirachinas", "", 75, 15, "f", "");
const molotov = new Arma("molotov", "explosivos", 275, 1, "f", "");
const roca = new Arma("roca", "roca", 100, 1, "f", "");
const cuchilloCarnicero = new Arma("cuchillo de carnicero", "arma blanca", 159, 4, "m", "");
const trozoCristal = new Arma("trozo de cristal", "arma blanca", 70, 2, "m", "");
const granadaFruta = new Arma("granada (pero la fruta)", "granada fruta", 10, 1, "f", "");
const lanza = new Arma("lanza", "", 110, 2, "f", "");
const punioAmericano = new Arma("puño americano", "", 100, 9, "m", "");
const latigo = new Arma("latigo", "", 50, 6, "m", "");
const sableDeLuz = new Arma("sable de luz", "sable de luz", 250, 4, "m", "");
const revolver = new Arma("revolver", "pistola", 310, 4, "m", "");
const gasPimienta = new Arma("gas pimienta", "", 30, 8, "m", "");
const banana = new Arma("banana", "", 5, 1, "f", "");
const plantaVenenosa = new Arma("planta venenosa", "veneno", 90, 1, "f", "");
const espadaMadera = new Arma("espada de madera", "espada", 80, 2, "f", "");
const guadania = new Arma("guadaña", "espada", 250, 3, "f", "");
const hoz = new Arma("hoz", "espada", 165, 2, "f", "");
const tridente = new Arma("tridente demoníaco", "", 300, 3, "m", "");
const lapiz = new Arma("lapiz", "arma blanca", 10, 1, "m", "");
const ballesta = new Arma("ballesta", "arco y flecha", 100, 4, "f", "");
const dardosVenenosos = new Arma("dardos venenosos", "veneno", 175, 3, "m", "p");
const reglaMetal = new Arma("regla de metal", "regla", 130, 2, "f", "");
const rocaPequenia = new Arma("roca pequeña", "", 30, 1, "f", "");
const samsungGalaxy = new Arma("Samsung Galaxy Note 7", "explosivos", 320, 1, "m", "");
const encendedor = new Arma("encendedor", "encendedor", 15, 3, "m", "");
const caniche = new Arma("caniche", "", 80, 2, "m", "");
const varitaMagica = new Arma("varita mágica", "varita magica", 20, 3, "f", "");
const pescado = new Arma("pescado congelado", "espada", 70, 1, "m", "");
const lanzacohetes = new Arma("lanzacohetes", "lanzacohetes", 150, 3, "m", "");
const llaveEspada = new Arma("Llave Espada", "espada", 190, 3, "f", "");
const espadaMaestra = new Arma("Espada Maestra", "espada", 999, 5, "f", "");
const nokia1100 = new Arma("nokia 1100", "nokia", 999, 1, "m", "");
const espadaIron = new Arma("espada de iron", "espada", 100, 3, "f", "");
const espadaOro = new Arma("espada de oro", "espada", 80, 1, "f", "");
const pikachu = new Arma("pikachu", "pikachu", 150, 3, "m", "");
const caparazonAzul = new Arma("caparazón azul", "caparazon", 35, 1, "m", "");
const ramoDeFlores = new Arma("ramo de flores", "", 35, 2, "m", "");
const arcoYFlechas = new Arma("arco y flechas", "arco y flecha", 80, 7, "m", "");
const mandoPlei = new Arma("mando de plei", "mando", 50, 1, "m", "");
const mandoXbox = new Arma("mando de xbox", "mando", 50, 1, "m", "");
const libroMatematicas = new Arma("libro de matemáticas", "libro de mates", 40, 1, "m", "");
const manzana = new Arma("manzana", "manzana", 20, 1, "f", "");
const deathNote = new Arma("Death Note", "death note", 30, 6, "f", "");
const botellaDeVodka = new Arma("botella de Vodka", "botella", 100, 1, "f", "");
const botellaDeFernet = new Arma("botella de Fernet", "botella", 100, 1, "f", "");
const botellaDeVino = new Arma("botella de vino", "botella", 100, 1, "f", "");
const fuegosArtificiales = new Arma("fuegos artificiales", "explosivos", 170, 1, "m", "p");
const skate = new Arma("skate", "rompibles", 120, 1, "m", "");
const motosierra = new Arma("motosierra", "motosierra", 250, 3, "f", "");
const panDuro = new Arma("pan duro", "pan duro", 105, 3, "m", "");
const nunchaku = new Arma("nunchaku", "nunchaku", 50, 8, "m", "");
const cuboRubik = new Arma("cubo Rubik", "cubo rubik", 50, 5, "m", "");
const kunai = new Arma("kunai", "arma blanca", 99, 5, "m", "");
const estiletes = new Arma("par de estiletes de color dorado", "arma blanca", 127, 5, "m", "");
const espadaEsgrima = new Arma("espada de esgrima", "espada", 90, 2, "f", "");
const escopeta = new Arma("escopeta", "pistola", 487, 2, "f", "");
const agujas = new Arma("agujas", "arma blanca", 50, 10, "f", "p");



var armas = [pistola, granada, guitarra, alfiler, martilloThor, bomba, jeringuilla, bate, jericho, estrellasNinja, espadaCuadruple, grimorio, daRules, cuchillo, navaja,
    tirachinas, molotov, roca, cuchilloCarnicero, trozoCristal, granadaFruta, lanza, punioAmericano, latigo, sableDeLuz, revolver, gasPimienta, banana, plantaVenenosa,
    espadaMadera, guadania, hoz, tridente, lapiz, ballesta, dardosVenenosos, reglaMetal, rocaPequenia, samsungGalaxy, encendedor, caniche, varitaMagica, pescado, lanzacohetes,
    llaveEspada, espadaMaestra, nokia1100, espadaIron, espadaOro, pikachu, caparazonAzul, ramoDeFlores, arcoYFlechas, mandoPlei, mandoXbox, libroMatematicas, manzana, deathNote,
    botellaDeFernet, botellaDeVino, botellaDeVodka, fuegosArtificiales, skate, motosierra, panDuro, nunchaku, cuboRubik, navajaVictorinox, kunai, estiletes, espadaEsgrima, escopeta, agujas];

//                   (nombre, id) <-- esto se va a tener que recibir de discord
const lynn = new Jugador("lynn", 1074);
const robert = new Jugador("robert", 15644);
const k = new Jugador("k", 561);
const yugito = new Jugador("yugito", 54356);
const draco = new Jugador("draco", 5486);
const chun = new Jugador("chun", 1010);
const lynn2 = new Jugador("lynn", 10741);
const robert2 = new Jugador("robert", 156144);
const k2 = new Jugador("k", 5611);
const yugito2 = new Jugador("yugito", 543516);
const draco2 = new Jugador("draco", 54861);
const chun2 = new Jugador("chun", 10101);
const lynn3 = new Jugador("lynn", 107411);
const robert3 = new Jugador("robert", 1561344);
const k3 = new Jugador("k", 55611);
const yugito3 = new Jugador("yugito", 5643516);
const draco3 = new Jugador("draco", 548761);
const chun3 = new Jugador("chun", 101801);
const lynn4 = new Jugador("lynn", 1067411);
const robert4 = new Jugador("robert", 15613474);

var maxHP = 1000;

export let buscarTeamDe2 = (teams) => {   //retorna null si no hay teams de 2 miembros
    let team;
    let idTeam;
    for (let i = 0; i < teams.length; i++) {
        team = teams[i];
        idTeam = team.getID();
        if (team.nombresVivos().length == 2) {
            console.log(`buscarTeamDe2 devuelve ${idTeam}`);
            return idTeam;
        }
    }
    console.log(`buscarTeamDe2 no encontro team de 2`);
    return null;
}

let buscarTeamDe3 = (teams) => {   //retorna null si no hay teams de 3 miembros
    let team;
    let idTeam;
    for (let i = 0; i < teams.length; i++) {
        team = teams[i];
        idTeam = team.getID();
        if (team.nombresVivos().length == 3) {
            console.log(`buscarTeamDe3 devuelve ${idTeam}`);
            return idTeam;
        }
    }
    console.log(`buscarTeamDe3 no encontro team de 3`);
    return null;
}

export let imprimirTeams = (teams) => {
    for (let countTeams = 0; countTeams < teams.length; countTeams++) {
        console.log("\x1b[36m%s\x1b[0m", `TEAM ${teams[countTeams].getID()}`);
        if (teams[countTeams].getPlayer1() != null) {
            if (teams[countTeams].getPlayer1().getHP() == 0) {
                console.log("\x1b[31m%s\x1b[0m", `${teams[countTeams].getPlayer1().getNombre()} - HP: ${teams[countTeams].getPlayer1().getHP()}`);
            } else {
                console.log("\x1b[36m%s\x1b[0m", `${teams[countTeams].getPlayer1().getNombre()} - HP: ${teams[countTeams].getPlayer1().getHP()}`);
            }
        }
        if (teams[countTeams].getPlayer2() != null) {
            if (teams[countTeams].getPlayer2().getHP() == 0) {
                console.log("\x1b[31m%s\x1b[0m", `${teams[countTeams].getPlayer2().getNombre()} - HP: ${teams[countTeams].getPlayer2().getHP()}`);
            } else {
                console.log("\x1b[36m%s\x1b[0m", `${teams[countTeams].getPlayer2().getNombre()} - HP: ${teams[countTeams].getPlayer2().getHP()}`);
            }
        }
        if (teams[countTeams].getPlayer3() != null) {
            if (teams[countTeams].getPlayer3().getHP() == 0) {
                console.log("\x1b[31m%s\x1b[0m", `${teams[countTeams].getPlayer3().getNombre()} - HP: ${teams[countTeams].getPlayer3().getHP()}`);
            }
            else {
                console.log("\x1b[36m%s\x1b[0m", `${teams[countTeams].getPlayer3().getNombre()} - HP: ${teams[countTeams].getPlayer3().getHP()}`);
            }
        }
        console.log(``);
    }
}


let generarArma = () => {
    var rand = parseInt(Math.random() * armas.length);
    //console.log(`%c${JSON.stringify(armas[rand])}`,"color:orange");

    //return armas[rand];
    return JSON.parse(JSON.stringify(armas[rand]));
}


let danioExtra = (min, max) => {
    let danio = Math.floor(Math.random() * (max - min + 1) + min)
    console.log("\x1b[90m%s\x1b[0m", `${danio} de danio extra`);
    return danio;
}

let porcentajeDeVidaRandom = (min, max) => {
    let vida = Math.floor(Math.random() * (max - min + 1) + min)
    console.log("\x1b[90m%s\x1b[0m", `${vida} de vida`);
    return vida;
}

let randomSelector = (min, max) => {
    let selected = Math.floor(Math.random() * (max - min + 1) + min)
    console.log("\x1b[90m%s\x1b[0m", `${selected} selected`);
    return selected;
}


let calcularVivos = (jugadores) => {
    let cantConVida = 0;
    let player;
    for (let m = 0; m < jugadores.length; m++) {
        player = jugadores[m];
        if (player.alive == 1) {
            cantConVida++;
        }
    }
    return cantConVida;
}

let copiarJugadores = (jugadores) => {
    let copia = [];
    for (let i = 0; i < jugadores.length; i++) {
        copia[i] = jugadores[i];
    }

    return copia;
}

const shuffleJugadores = (jugadores) => {         //algoritmo de Fisher-Yates para reordenar los players de forma random
    for (let i = jugadores.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = jugadores[i];
        jugadores[i] = jugadores[j];
        jugadores[j] = temp;
    }

}

let buscarPorID = (id, players) => {
    let jugador;
    for (let i = 0; i < players.length; i++) {
        jugador = players[i];
        if (jugador.getID() == id) {
            return players[i];
        }
    }
    console.log("no lo encontre");
    return null;
}

let esDelMismoTeam = (jugadora, jugadorb) => {
    return (jugadora.team.getID() == jugadorb.team.getID());
}

let buscarJugador = (jugador, jugadores) => {    //el jugador del parametro es el q ataca, y esta funcion retorna otro jugador vivo 
    shuffleJugadores(jugadores);
    let victima;
    for (let i = 0; i < jugadores.length; i++) {
        victima = jugadores[i];
        if ((victima.alive == 1) && victima.id != jugador.id) {
            return victima;
        }
    }
    return null;
}

let buscarJugadorOtroTeam = (jugador, jugadores) => {    //el jugador del parametro es el q ataca, y esta funcion retorna otro jugador vivo DE OTRO TEAM
    shuffleJugadores(jugadores);
    let victima;
    for (let i = 0; i < jugadores.length; i++) {
        victima = jugadores[i];
        if ((victima.alive == 1) && (victima.id != jugador.id) && (victima.team.id != jugador.team.id)) {
            return victima;
        }
    }
    return null;
}

let buscarJugadorDistintoA2 = (jugador1, jugador2, jugadores) => {    //esta funcion retorna un jugador vivo distinto a los 2 recibidos
    shuffleJugadores(jugadores);
    let victima;
    for (let i = 0; i < jugadores.length; i++) {
        victima = jugadores[i];
        if ((victima.alive == 1) && victima.id != jugador1.id && victima.id != jugador2.id) {
            return victima;
        }
    }
    return null;
}

let buscarJugadorConArma = (jugador, jugadores) => {    //esta funcion retorna otro jugador vivo que tenga arma 
    shuffleJugadores(jugadores);
    let victima;
    for (let i = 0; i < jugadores.length; i++) {
        victima = jugadores[i];
        if ((victima.alive == 1) && victima.id != jugador.id && victima.arma) {
            return victima.getID();
        }
    }
    return null;
}

let encontrarGanador = (jugadores) => {
    let ganador;
    for (let i = 0; i < jugadores.length; i++) {
        ganador = jugadores[i];
        if (ganador.alive == 1) { return ganador };
    }
    return null;
}

let recibirJugadores = () => {
    //20
    //let jugadores = [lynn, yugito, robert, k, draco, chun,lynn2, yugito2, robert2, k2, draco2, chun2,lynn3, yugito3, robert3, k3, draco3, chun3,lynn4,robert4];

    //6
    let jugadores = [lynn, yugito, robert, k, draco, chun];
    return jugadores;
}

let haySuficientes = (jugadores) => {
    let cont = 0;
    let jugador;
    for (let i = 0; i < jugadores.length; i++) {
        jugador = jugadores[i];
        if (jugador.team == null) {
            cont++;
        }
    }
    return cont;
}

let chequearSonMismoEquipo = (players) => {
    var ganadores = [];
    let jugador;
    let team;
    let count = 0;
    for (let j = 0; j < players.length; j++) {
        jugador = players[j];
        if (jugador.alive == 1) {
            team = players[0].team.getID();
            break;
        }
    }

    for (let i = 0; i < players.length; i++) {
        jugador = players[i];
        if (jugador.alive == 1) {

            if (count >= 1 && jugador.team.getID() == team) {
                count++;
                ganadores.push(jugador);
            }

            if (count == 0) {
                count++;
                team = jugador.team.getID();
                ganadores.push(jugador);
            }

        }
    }
    return ganadores;
}

let formarEquipo = (jugadores, teams) => {
    let jugador;
    let jugadorA;   //auxiliar
    let jugadorB;   //auxiliar
    let idEquipo = 1;
    shuffleJugadores(jugadores);
    for (let i = 0; i < jugadores.length; i++) {
        jugador = jugadores[i];
        if (jugador.team == null) {   //si no tiene equipo definido
            let r = Math.random();

            if (r > 0.5) {
                //team de 2 - 50% prob
                let valid = haySuficientes(jugadores)
                if (valid >= 2) {  //forma team de 2 si hay 2 libres

                    jugadorA = jugadores[i + 1];

                    var thisTeam = new Team(idEquipo);
                    thisTeam.setPlayer1 = jugador;
                    thisTeam.setPlayer2 = jugadorA;
                    teams.push(thisTeam);

                    jugador.setTeam(thisTeam);
                    jugadorA.setTeam(thisTeam);

                    idEquipo++;
                } else {  //team de 1

                    var thisTeam = new Team(idEquipo);
                    thisTeam.setPlayer1 = jugador;
                    teams.push(thisTeam);

                    jugador.setTeam(thisTeam);

                    idEquipo++;
                }

            } else if (r < 0.2) {
                //team de 3 - 20% prob
                let valid = haySuficientes(jugadores)
                if (valid >= 3) {  //forma team de 3 si hay 3 libres

                    jugadorA = jugadores[i + 1];
                    jugadorB = jugadores[i + 2];

                    var thisTeam = new Team(idEquipo);
                    thisTeam.setPlayer1 = jugador;
                    thisTeam.setPlayer2 = jugadorA;
                    thisTeam.setPlayer3 = jugadorB;
                    teams.push(thisTeam);

                    jugador.setTeam(thisTeam);
                    jugadorA.setTeam(thisTeam);
                    jugadorB.setTeam(thisTeam);

                    idEquipo++;
                } else {  //team de 1

                    var thisTeam = new Team(idEquipo);
                    thisTeam.setPlayer1 = jugador;
                    teams.push(thisTeam);

                    jugador.setTeam(thisTeam);

                    idEquipo++;
                }
            } else {
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
    while (n < idEquipo) {
        arrayConTodo.push(`EQUIPO ${n}`);
        for (let k = 0; k < jugadores.length; k++) {
            let jugador = jugadores[k];
            if (jugador.team.getID() == n) {
                arrayConTodo.push(` ${jugador.getNombre()}`);
            }
        }
        console.log(`%c ${arrayConTodo}`, "border-radius:8px; border:2px solid white; padding-top:7px; padding-bottom:7px;padding-right:4px;");
        arrayConTodo = [];
        n++;
    }


}


let mostrarResultados = (players) => {
    let jugador;
    console.log("\x1b[90m%s\x1b[0m", `--------------------`);
    for (let i = 0; i < players.length; i++) {
        let jugador = players[i];
        //faltaria ordenar la lista por kills en orden descendente
        console.log("\x1b[90m%s\x1b[0m", `${jugador.getNombre()} -  Kills: ${jugador.getKills()}`);
    }
}

export function mostrarKills(players) {
    let textoFinal = "";
    players.sort((a, b) => b.kills - a.kills);

    for (let i = 0; i < players.length; i++) {
        let jugador = players[i];
        let jugadorIterado = `${jugador.getNombre()} -  Kills: ${jugador.getKills()}`;
        textoFinal = textoFinal.concat(jugadorIterado);
        textoFinal = textoFinal.concat('\n');
    }
    console.log(`texto final is: ${textoFinal}`);
    return textoFinal;
}

/*
  if(json.extra.length > 0){
        for(let i=0; i<json.extra.length; i++){
          let textoIterado = json.extra[i];        
          textosExtra = textosExtra.concat(textoIterado);
          textosExtra = textosExtra.concat('\n');
      }
  }
*/

let eventoAleatorio1 = (jugador, players) => {
    let resultado;
    console.log(" Sucedió un evento aleatorio 1");
    do {
        var rand = parseInt(Math.random() * eventosAleatorios1.length);
        console.log("\x1b[33m%s\x1b[0m", ` ${rand}`);
        resultado = eventosAleatorios1[rand](jugador, players, maxHP, teams); //le paso el array original
    }
    while (resultado != 1) //si el evento no cumple alguna condicion especial, retorna null y buscamos otro evento

};

let lootEspecificoxCategoria1 = (jugador, arma) => {
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} looteó una ${arma["nombre"]}`);
};

let lootEspecificoxCategoria = (jugador, arma, players) => {

    eventoslootEspecificoxCategoria[0](jugador, players, arma); //le paso el array original

};

let lootGenerico = (jugador, arma, players) => {
    //console.log(` ${jugador.getNombre()} looteó una ${arma["nombre"]}`);
    let resultado;
    do {
        var rand = parseInt(Math.random() * eventosLootGenerico.length);
        console.log("\x1b[33m%s\x1b[0m", ` ${rand}`);
        resultado = eventosLootGenerico[rand](jugador, players, arma, maxHP); //le paso el array original
    }
    while (resultado != 1) //si el evento no cumple alguna condicion especial, retorna null y buscamos otro evento
};

let eventoAleatorio2 = (jugador, players) => {
    let resultado;
    console.log(" Sucedió un evento aleatorio 2");
    do {
        var rand = parseInt(Math.random() * eventosAleatorios2.length);
        console.log("\x1b[33m%s\x1b[0m", ` ${rand}`);
        resultado = eventosAleatorios2[rand](jugador, players, maxHP, teams); //le paso el array original
    }
    while (resultado != 1) //si el evento no cumple alguna condicion especial, retorna null y buscamos otro evento
};

let ataqueEspecificoxCategoria1 = (jugador, victima) => {
    console.log(` ${jugador.getNombre()} atacó con su ${jugador.getArma()["nombre"]} a ${victima.getNombre()}`);
    let danio = jugador.getArma()["danio"] + danioExtra(1, 500);
    victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

    jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso
    if (jugador.getArma()["usos"] <= 0) {
        console.log(`La ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se quedó sin usos`);
        jugador.setArma(null);
    } //si su arma se queda sin usos, la pierde

    console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
    if (victima.getHP() <= 0) {
        victima.alive = 0;
        jugador.kills++;
        console.log("\x1b[90m%s\x1b[0m", `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`);
    }
};

let ataqueEspecificoxCategoria = (jugador, players, victima) => {

    eventosAtaqueEspecificoxCategoria[0](jugador, players, victima); //le paso una COPIA, luego buscar la victima original

};



let ataqueGenericoConArma1 = (jugador, victima) => {
    console.log(` ${jugador.getNombre()} atacó con su ${jugador.getArma()["nombre"]} a ${victima.getNombre()}`);
    let danio = jugador.getArma()["danio"] + danioExtra(1, 500);
    victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

    jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
    if (jugador.getArma()["usos"] <= 0) {
        console.log(`La ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se quedó sin usos`);
        jugador.setArma(null);
    } //si su arma se queda sin usos, la pierde

    console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
    if (victima.getHP() <= 0) {
        victima.alive = 0;
        jugador.kills++;
        console.log("\x1b[90m%s\x1b[0m", `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`);
    }
};

let ataqueGenericoConArma = (jugador, players, victima, playersReal) => {
    let resultado;
    console.log(`Ataque generico con arma`);
    do {
        var rand = parseInt(Math.random() * ataquesGenericosConArma.length);
        console.log("\x1b[33m%s\x1b[0m", ` ${rand}`);
        resultado = ataquesGenericosConArma[rand](jugador, players, victima, playersReal); //le paso una copia
    }
    while (resultado != 1) //si el evento no cumple alguna condicion especial, retorna null y buscamos otro evento
};

let ataqueGenericoSinArma1 = (jugador, victima) => {

    console.log(` ${jugador.getNombre()} atacó sin arma a ${victima.getNombre()}`);
    let danio = danioExtra(30, 90);
    victima.setHP(Math.max(0, victima.getHP() - danio));

    console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
    if (victima.getHP() <= 0) {
        victima.alive = 0;
        jugador.kills++;
        console.log("\x1b[90m%s\x1b[0m", `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`);
    }
};

let ataqueGenericoSinArma = (jugador, players, victima, playersReal) => {
    let resultado;
    console.log(`Ataque generico sin arma`);
    do {
        var rand = parseInt(Math.random() * ataquesGenericosSinArma.length);
        console.log("\x1b[33m%s\x1b[0m", ` ${rand}`);
        resultado = ataquesGenericosSinArma[rand](jugador, players, victima, playersReal); //le paso una copia
    }
    while (resultado != 1) //si el evento no cumple alguna condicion especial, retorna null y buscamos otro evento
};

// ronda de loot
let rondaLoot = (jugador, players) => {
    //let armaVieja = jugador.getArma();
    let probabilidad = Math.random();
    if (probabilidad < 0.2) {
        eventoAleatorio1(jugador, players);
    } else {
        let arma = generarArma();

        if (arma.categoria) {
            lootEspecificoxCategoria(jugador, arma);
        } else {
            lootGenerico(jugador, arma, players);
        }

        /*if(armaVieja != null && armaVieja.danio > arma.danio){
            console.log("\x1b[33m%s\x1b[0m",` Como el arma anterior hacía más daño, ${jugador.getNombre()} decide no cambiarla.`);
            jugador.setArma(armaVieja);
        }*/
    }
};

// ronda de ataque
let rondaAtaque = (jugador, jugadores, cantidadConVida) => {
    if (jugador.alive == 1) {
        if (cantidadConVida >= 2) {
            let probabilidad = Math.random();
            if (probabilidad < 0.2) {
                eventoAleatorio2(jugador, jugadores);
            } else {
                let victima = buscarJugadorOtroTeam(jugador, jugadores);
                if (victima == null) { console.log("hay problemas"); }
                if (!jugador.arma) {
                    ataqueGenericoSinArma(jugador, jugadores, victima);
                } else {
                    if (jugador.arma.categoria) {
                        let probabilidadEspecial = Math.random();
                        if (probabilidadEspecial < 0.4) {
                            ataqueEspecificoxCategoria(jugador, jugadores, victima);
                        } else {
                            ataqueGenericoConArma(jugador, jugadores, victima);
                        }
                    } else {
                        ataqueGenericoConArma(jugador, jugadores, victima);
                    }
                }
            }
        }
    }
}

let arreglarIDs = (teams) => {
    let team;
    for (let i = 0; i < teams.length; i++) {
        team = teams[i];
        team.setID = i + 1;
    }
}

let eliminarTeam = (teamID, teams) => {
    let index;
    console.log(`eliminando el team ${teamID}`);
    index = teamID - 1;
    teams.splice(index, 1);
    arreglarIDs(teams);
}

let buscarUnMuerto = (players) => {
    let jugador;
    for (let i = 0; i < players.length; i++) {
        jugador = players[i];
        if (jugador.alive == 0) {
            return jugador;
        }
    }
    return null;
}

let pronombreElLaLosLas = (arma) => {
    let pronombre = "";
    //console.log(`111111111111`);
    if (arma["plural"] == "") {
        if (arma["pronombre"] == "m") {
            pronombre = "El";
        }
        else {
            pronombre = "La";
        }
    } else {
        if (arma["pronombre"] == "m") {
            pronombre = "Los";
        }
        else {
            pronombre = "Las";
        }
    }

    return pronombre;
}

let pronombreUnUnaUnosUnas = (arma) => {
    let pronombre = "";
    //console.log(`111111111111`);
    if (arma["plural"] == "") {
        if (arma["pronombre"] == "m") {
            pronombre = "un";
        }
        else {
            pronombre = "una";
        }
    } else {
        if (arma["pronombre"] == "m") {
            pronombre = "unos";
        }
        else {
            pronombre = "unas";
        }
    }

    return pronombre;
}

let pronombreOAOsAs = (arma) => {
    let pronombre = "";
    //console.log(`111111111111`);
    if (arma["plural"] == "") {
        if (arma["pronombre"] == "m") {
            pronombre = "o";
        }
        else {
            pronombre = "a";
        }
    } else {
        if (arma["pronombre"] == "m") {
            pronombre = "os";
        }
        else {
            pronombre = "as";
        }
    }

    return pronombre;
}


let pluralS = (arma) => {
    let plural = "";
    if (arma["plural"] == "p") { plural = "s" };
    return plural;
}

let englishPronoun = (arma) => {
    if (arma["pluralEn"] === "p") return "";

    const firstLetter = arma["name"][0].toLowerCase();
    const vowels = ["a", "e", "i", "o", "u"];

    return vowels.includes(firstLetter) ? "an " : "a ";
};

let pronounIsAre = (arma) => {
    if (arma["pluralEn"] === "p") return "are";
    return "is";
}

let pronounItThem = (arma) => {
    if (arma["pluralEn"] === "p") return "them";
    return "it";
}

let pluralQuedar = (arma) => {
    let plural = "quedó";
    if (arma["plural"] == "p") { plural = "quedaron" };
    return plural;
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
    eliminarTeam,
    buscarJugadorDistintoA2,
    buscarUnMuerto,
    porcentajeDeVidaRandom,
    randomSelector,
    pronombreElLaLosLas,
    pluralS,
    englishPronoun,
    pronounIsAre,
    pronounItThem,
    pronombreUnUnaUnosUnas,
    pronombreOAOsAs,
    pluralQuedar,
    buscarJugadorOtroTeam
}








/*------------ eventos aleatorios 2 ------------*/
import { buscarTeamDe2, copiarJugadores, buscarPorID, danioExtra, buscarJugador, buscarJugadorDistintoA2, buscarUnMuerto, shuffleJugadores, porcentajeDeVidaRandom,pluralS } from "./utils.js";
import {Team,Jugador} from "./clases.js";

var eventosAleatorios2 = [];

eventosAleatorios2[0] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} se cansó del juego, se escapó de la arena y se convirtió en un monje tibetano.`);
    jugador.setHP(0);
    jugador.alive = -1;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    return 1;
}

eventosAleatorios2[1] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} es atacado por onis salvajes y muere en el acto.`);
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    return 1;
}

eventosAleatorios2[2] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} es atacado por onis salvajes y logra escapar por los pelos.`);

    let danio = danioExtra(50,200);
    jugador.setHP(Math.max(1,jugador.getHP() - danio)); 
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    return 1;
}

eventosAleatorios2[3] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} se tropieza con una ramita. Maldita naturaleza!!`);
    
    let danio = danioExtra(50,150);
    jugador.setHP(Math.max(0,jugador.getHP() - danio)); 
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    if(jugador.getHP()<=0){
        jugador.alive=0;
    }
    return 1;
}

eventosAleatorios2[4] = (jugador, players, maxHP, teams)=>{
    console.log(` Cae un rayo del cielo y le viene a pegar justo JUSTO a ${jugador.getNombre()}.`);
    
    let danio = danioExtra(200,400);
    jugador.setHP(Math.max(0,jugador.getHP() - danio)); 
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    if(jugador.getHP()<=0){
        jugador.alive=0;
    }
    return 1;
}

eventosAleatorios2[5] = (jugador, players, maxHP, teams)=>{
    const paises = ["argentina","bolivia","brasil","colombia","venezuela","ecuador","chile","uruguay","paraguay"];
    let pais;
    var rand = parseInt(Math.random()*paises.length);  
    pais = paises[rand];

    console.log(` ${jugador.getNombre()} intentó investigar los casos de corrupción en ${pais}`);
    
    jugador.setHP(0);
    jugador.alive = 0;

    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    return 1;
}

eventosAleatorios2[6] = (jugador, players, maxHP, teams)=>{
    console.log(` Comienza a granizar y ${jugador.getNombre()} no encontró refugio.`);
    
    let danio = danioExtra(100,350);
    jugador.setHP(Math.max(0,jugador.getHP() - danio)); 
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    if(jugador.getHP()<=0){
        jugador.alive=0;
    }
    return 1;
}

eventosAleatorios2[7] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} accidentalmente pisa una mina de la segunda guerra mundial.`);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    return 1;
}

eventosAleatorios2[8] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} resbala con una cáscara de banana. Qué cliché.`);
    
    let danio = danioExtra(20,100);
    jugador.setHP(Math.max(0,jugador.getHP() - danio)); 
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    if(jugador.getHP()<=0){
        jugador.alive=0;
    }
    return 1;
}

eventosAleatorios2[9] = (jugador, players, maxHP, teams)=>{
    let jugadorDos = buscarJugador(jugador,players);
    if(jugadorDos==null){return null;}

    console.log(` ${jugadorDos.getNombre()} le robó una cajita de pollux a ${jugador.getNombre()}. ${jugador.getNombre()} se entristeció y murió de tristeza.`);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    return 1;
}

eventosAleatorios2[10] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} murió de cringe.`);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    return 1;
}

eventosAleatorios2[11] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} vió una pelicula de K.`);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    return 1;
}

eventosAleatorios2[12] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} intentó nadar en lava.`);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    return 1;
}

eventosAleatorios2[13] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} pensó que podía atravesar un lago nadando. Pero no sabía nadar.`);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    return 1;
}

eventosAleatorios2[14] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} jura que fue atacado por un misterioso tulanejo, pero nadie le cree.`);
    
    let danio = danioExtra(50,200);
    jugador.setHP(Math.max(5,jugador.getHP() - danio)); 
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    return 1;
}

eventosAleatorios2[15] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} decide acabar con su sufrimiento.`);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    return 1;
}

eventosAleatorios2[16] = (jugador, players, maxHP, teams)=>{
    if(jugador.getArma()==null){return null;}

    let plural = pluralS(jugador.getArma());

    console.log(` ${jugador.getNombre()} juega con su${plural} ${jugador.getArma()["nombre"]} y se corta un dedo.`);
    
    let danio = danioExtra(100,400);
    jugador.setHP(Math.max(0,jugador.getHP() - danio)); 
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
    
    if(jugador.getHP()<=0){
        jugador.alive=0;
    }
    return 1;
}

eventosAleatorios2[17] = (jugador, players, maxHP, teams)=>{
    let jugadorDos = buscarJugador(jugador,players);
    if(jugadorDos==null){return null;}

    console.log(` ${jugador.getNombre()} le pide por favor a ${jugadorDos.getNombre()} que lo mate. ${jugadorDos.getNombre()} se rehúsa.`);
    
    return 1;
}

eventosAleatorios2[18] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} fue absorbido por un agujero negro.`);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    return 1;
}

eventosAleatorios2[19] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} pasó a un mundo mejor.`);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    return 1;
}

eventosAleatorios2[20] = (jugador, players, maxHP, teams)=>{
    console.log(` A ${jugador.getNombre()} lo atropelló un camión y ya debe andar en algun mundo con elfas tetonas y animales que hablan.`);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    return 1;
}

eventosAleatorios2[21] = (jugador, players, maxHP, teams)=>{
    console.log(`Avión ✈`);

    return 1;
}

eventosAleatorios2[22] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} tocó antimateria y se desintegró.`);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    return 1;
}

eventosAleatorios2[23] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} se pregunta ¿qué hago aquí?`);

    return 1;
}

eventosAleatorios2[24] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} intenta trepar un árbol para tener ventaja táctica. Pero se resbala y se cae.`);
    
    let danio = danioExtra(100,250);
    jugador.setHP(Math.max(0,jugador.getHP() - danio)); 
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
    
    if(jugador.getHP()<=0){
        jugador.alive=0;
    }
    return 1;
}

eventosAleatorios2[25] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} muere por la abstinencia de WiFi.`);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    return 1;
}

eventosAleatorios2[26] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} no quiere ganar esta partida del bot y decide suicidarse.`);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    return 1;
}

eventosAleatorios2[27] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} entró a Wabi Sabi y se murió del asco.`);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    return 1;
}

eventosAleatorios2[28] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} se pone a jugar LOL y K lo mata personalmente.`);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    return 1;
}

eventosAleatorios2[29] = (jugador, players, maxHP, teams)=>{
    let jugadorDos = buscarJugador(jugador,players);
    if(jugadorDos==null){return null;}

    console.log(` ${jugador.getNombre()} ve a ${jugadorDos.getNombre()}. ${jugador.getNombre()} pero se aleja porque le da miedo.`);

    return 1;
}

eventosAleatorios2[30] = (jugador, players, maxHP, teams)=>{
    console.log(` A ${jugador.getNombre()} se le fue el internet y se desconectó del juego. LATAM moment`);
    jugador.setHP(0);
    jugador.alive = -1;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    return 1;
}

eventosAleatorios2[31] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} murió. F en el chat.`);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    return 1;
}




export {eventosAleatorios2};
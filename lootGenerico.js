/*------------ loot generico de armas ------------*/
//let maxHP = 1000;
var eventosLootGenerico = [];


eventosLootGenerico[0] = function2=(jugador, players, arma)=>{
    console.log(` ${jugador.getNombre()} looteó un/a ${arma["nombre"]}`);
    return 1;
}

eventosLootGenerico[1] = function2=(jugador, players, arma)=>{
    console.log(` ${jugador.getNombre()} encontró un/a ${arma["nombre"]} en un rincón`);
    return 1;
}

eventosLootGenerico[2] = function2=(jugador, players, arma)=>{
    let hp;
    console.log(` ${jugador.getNombre()} se lastima con las espinas de una flor.`);
    hp = jugador.getHP();
    console.log(` HP antes: ${hp}`);
    hp -= 0.06*hp;
    jugador.setHP(Math.max(1,~~(hp)));
    console.log(` HP luego: ${jugador.getHP()}`);
    return 1;
}

eventosLootGenerico[3] = function2=(jugador, players, arma)=>{
    console.log(` ${jugador.getNombre()} iba caminando cuando pisó un/a ${arma["nombre"]}. Agradecido con Dios lo/a levanta y se lo/a guarda.`);
    return 1;
}

eventosLootGenerico[4] = function2=(jugador, players, arma)=>{
    let hp;
    console.log(` ${jugador.getNombre()} come bayas silvestres para recuperar vida. El problema es que eran tóxicas.`);
    hp = jugador.getHP();
    console.log(` HP antes: ${hp}`);
    hp -= 0.18*hp;
    jugador.setHP(Math.max(1,~~(hp)));
    console.log(` HP luego: ${jugador.getHP()}`);
    return 1;
}

eventosLootGenerico[5] = function2=(jugador, players, arma)=>{
    console.log(` ${jugador.getNombre()} consigue un/a ${arma["nombre"]}`);
    return 1;
}

eventosLootGenerico[6] = function2=(jugador, players, arma)=>{
    console.log(` ${jugador.getNombre()} encuentra un/a ${arma["nombre"]}. Nada mal.`);
    return 1;
}

eventosLootGenerico[7] = function2=(jugador, players, arma)=>{
    console.log(` ${jugador.getNombre()} saca de su bolso un/a ${arma["nombre"]}. que tenía guardado/a desde antes de empezar el juego. Ilegalísimo?`);
    return 1;
}

eventosLootGenerico[8] = function2=(jugador, players, arma)=>{
    arma2 = generarArma();
    console.log(` A ${jugador.getNombre()} no le alcanzan las manos para elegir entre un/a ${arma["nombre"]} y un/a ${arma2["nombre"]}, así que decide quedarse con el/la ${arma["nombre"]}.`);
    return 1;
}

eventosLootGenerico[9] = function2=(jugador, players, arma)=>{
    arma2 = generarArma();
    console.log(` A ${jugador.getNombre()} no le alcanzan las manos para elegir entre un/a ${arma2["nombre"]} y un/a ${arma["nombre"]}, así que decide quedarse con el/la ${arma["nombre"]}.`);
    return 1;
}

eventosLootGenerico[10] = function2=(jugador, players, arma)=>{
    arma2 = generarArma();
    console.log(` ${jugador.getNombre()} ve un/a ${arma2["nombre"]} y un/a ${arma["nombre"]} en el suelo, Obviamente se queda con el/la ${arma["nombre"]}.`);
    return 1;
}

eventosLootGenerico[11] = function2=(jugador, players, arma)=>{
    arma2 = generarArma();
    console.log(` ${jugador.getNombre()} ve un/a ${arma["nombre"]} y un/a ${arma2["nombre"]} en el suelo, Obviamente se queda con el/la ${arma["nombre"]}.`);
    return 1;
}

eventosLootGenerico[12] = function2=(jugador, players, arma)=>{
    console.log(` ${jugador.getNombre()} encuentra un/a ${arma["nombre"]}.`);
    return 1;
}

eventosLootGenerico[13] = function2=(jugador, players, arma)=>{
    console.log(` ${jugador.getNombre()} encuentra un/a ${arma["nombre"]} semi-enterrado/a y decide llevárselo/a.`);
    return 1;
}

eventosLootGenerico[14] = function2=(jugador, players, arma)=>{
    console.log(` ${jugador.getNombre()} se hace con un/a  ${arma["nombre"]}.`);
    return 1;
}


eventosLootGenerico[15] = function2=(jugador, players, arma)=>{
    if(jugador.hp == maxHP){return null};

    console.log(` ${jugador.getNombre()} come frutas de un árbol.`);
    hp = jugador.getHP();
    console.log(` HP antes: ${hp}`);
    hp += 0.13*hp;
    jugador.setHP(Math.max(1,~~(hp)));
    console.log(` HP luego: ${jugador.getHP()}`);
    return 1;
}

eventosLootGenerico[16] = function2=(jugador, players, arma)=>{
    if(jugador.hp == maxHP){return null};

    console.log(` ${jugador.getNombre()} encuentra un medikit con vendas y cura sus heridas.`);
    hp = jugador.getHP();
    console.log(` HP antes: ${hp}`);
    hp += 0.55*hp;
    jugador.setHP(Math.max(1,~~(hp)));
    console.log(` HP luego: ${jugador.getHP()}`);
    return 1;
}

eventosLootGenerico[17] = function2=(jugador, players, arma)=>{
    if(jugador.hp == maxHP){return null};

    console.log(` ${jugador.getNombre()} toma awa`);
    hp = jugador.getHP();
    console.log(` HP antes: ${hp}`);
    hp += 0.05*hp;
    jugador.setHP(Math.max(1,~~(hp)));
    console.log(` HP luego: ${jugador.getHP()}`);
    return 1;
}

eventosLootGenerico[18] = function2=(jugador, players, arma)=>{
    let copia = copiarJugadores(players);
    let idVictima = buscarJugadorConArma(jugador, copia);
    if(idVictima==null){return null;}
    
    let jugadorOriginal = buscarPorID(idVictima);
    if(jugadorOriginal==null){ 
    return null;
    }

    //console.log(JSON.stringify(jugadorOriginal));

    console.log(` ${jugador.getNombre()} le dice a ${jugadorOriginal.getNombre()} “Mira, tu waifu!” y cuando se da la vuelta le roba su ${jugadorOriginal.getArma()["nombre"]}.`);
   
    jugador.arma=jugadorOriginal.getArma();
    jugadorOriginal.arma=null;

    let variable = "tiene arma";
    if(jugadorOriginal.getArma() == null){
        variable = "vacio";
    }
    
    console.log(`%c ${jugadorOriginal.getNombre()} - ${variable} // ${jugador.getNombre()} - ${jugador.getArma()["nombre"]}`,"color:yellow");
    return 1;
}


eventosLootGenerico[19] = function2=(jugador, players, arma)=>{
    let copia = copiarJugadores(players);
    let idVictima = buscarJugadorConArma(jugador, copia);
    if(idVictima==null){return null;}
    
    let jugadorOriginal = buscarPorID(idVictima);
    if(jugadorOriginal==null){ 
    return null;
    }

    //console.log(JSON.stringify(jugadorOriginal));

    console.log(` ${jugador.getNombre()} le quita el/la  ${jugadorOriginal.getArma()["nombre"]} a ${jugadorOriginal.getNombre()} mientras está distraido.`);
   
    jugador.arma=jugadorOriginal.getArma();
    jugadorOriginal.arma=null;

    let variable = "tiene arma";
    if(jugadorOriginal.getArma() == null){
        variable = "vacio";
    }
    
    console.log(`%c ${jugadorOriginal.getNombre()} - ${variable} // ${jugador.getNombre()} - ${jugador.getArma()["nombre"]}`,"color:yellow");
    return 1;
}
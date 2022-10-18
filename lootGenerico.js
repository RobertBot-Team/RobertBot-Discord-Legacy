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
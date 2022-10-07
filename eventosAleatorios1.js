/*------------ eventos aleatorios 1 ------------*/
let maxHP = 1000;
var eventosAleatorios1 = [];

eventosAleatorios1[0] = function1=(jugador, players)=>{
    if(jugador.hp == maxHP){return null};

    console.log(` HP antes: ${jugador.getHP()}`);
    jugador.hp = Math.min(maxHP, jugador.hp+=200);
    console.log(` ${jugador.getNombre()} se bebe una Punch y se pone a bailar 💃 recuperando así energía.`);
    console.log(` HP luego: ${jugador.getHP()}`);
    return 1;
}

eventosAleatorios1[1] = function1=(jugador, players)=>{
    if(jugador.hp == maxHP){return null};

    console.log(` HP antes: ${jugador.getHP()}`);
    jugador.hp = Math.min(maxHP, jugador.hp+=20);
    console.log(` ${jugador.getNombre()} se come un pescao crudo.`);
    console.log(` HP luego: ${jugador.getHP()}`);
    return 1;
}

eventosAleatorios1[2] = function1=(jugador, players)=>{
    console.log(` ${jugador.getNombre()} va tan sobrado que ni busca armas.`);
    return 1;
}

eventosAleatorios1[3] = function1=(jugador, players)=>{
    console.log(` ${jugador.getNombre()} toma una mochila y se va corriendo mientras rie maniáticamente. Lástima que está vacía. Al menos se ve feliz.`);
    return 1;
}

eventosAleatorios1[4] = function1=(jugador, players)=>{
    console.log(` ${jugador.getNombre()} se sienta a pescar.`);
    return 1;
}

eventosAleatorios1[5] = function1=(jugador, players)=>{
    console.log(` ${jugador.getNombre()} se acuesta a dormir todo el día.`);
    return 1;
}

eventosAleatorios1[6] = function1=(jugador, players)=>{
    console.log(` ${jugador.getNombre()} no sabe cómo se juega esto`);
    return 1;
}

eventosAleatorios1[7] = function1=(jugador, players)=>{
    console.log(` ${jugador.getNombre()} pregunta "¿Ya me morí?"`);
    return 1;
}

eventosAleatorios1[8] = function1=(jugador, players)=>{
    if(jugador.arma == null){return null};
    console.log(` ${jugador.getNombre()} necesitaba dinero para gachas así que vendió su ${jugador.getArma()["nombre"]}`);
    jugador.arma = null;
    return 1;
}


eventosAleatorios1[9] = function1=(jugador, players)=>{
    let copiaJugadores = copiarJugadores(players);
    console.log(`%c AAAA A A A A A`,"color:yellow");
    let comprador;
    let jugadorACambiar;
    let limit=0;
    let id;
    if(jugador.arma == null){return null};

    do{
       comprador = buscarJugador(jugador, copiaJugadores);
       limit++;
       if(limit>=8){return null;}
    } 
    while (comprador.arma != null); //no es la forma ideal de buscar un jugador sin arma, pero bueno

    id = comprador.getID();
    jugadorACambiar = buscarPorID(id);

    console.log(` ${jugador.getNombre()} necesitaba dinero para gachas así que vendió su ${jugador.getArma()["nombre"]} a ${jugadorACambiar.getNombre()}`);
    jugadorACambiar.arma = jugador.getArma();
    jugador.arma = null;
    return 1;

}

    //este evento recibe el array original de jugadores
    //hace una copia, reordena la copia y busca una "victima"/"comprador" en la copia
    //compara el id, buscando ese id en la lista original
    //y hace los cambios en la lista original sin reordenarla

    //dejo este comentario porque hay que hacer lo mismo en varios eventos



// si algun evento necesita una condicion extra, por ejemplo tener 3 jugadores
// con vida para imprimir sus nombres, el propio evento chequea la condicion.
// si no se cumple, devuelve null
// del otro lado, cuando llamamos a esta funcion para elegir un evento, hacemos un do while(not null)
// entonces si recibe null, genera otro evento distinto
// si se cumple, retorna 1
/*----------------------------------------------*/

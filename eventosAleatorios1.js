/*------------ eventos aleatorios 1 ------------*/
let maxHP = 1000;
var eventosAleatorios1 = [];

eventosAleatorios1[0] = function1=(jugador)=>{
    if(jugador.hp == maxHP){return null};
    console.log(` HP antes: ${jugador.getHP()}`);
    jugador.hp = Math.min(maxHP, jugador.hp+=200);
    console.log(` ${jugador.getNombre()} se bebe una Punch y se pone a bailar 💃 recuperando así energía.`);
    console.log(` HP luego: ${jugador.getHP()}`);
    return 1;
}

eventosAleatorios1[1] = function1=(jugador)=>{
    if(jugador.hp == maxHP){return null};
    console.log(` HP antes: ${jugador.getHP()}`);
    jugador.hp = Math.min(maxHP, jugador.hp+=20);
    console.log(` ${jugador.getNombre()} se come un pescao crudo.`);
    console.log(` HP luego: ${jugador.getHP()}`);
    return 1;
}

eventosAleatorios1[2] = function1=(jugador)=>{
    console.log(` ${jugador.getNombre()} va tan sobrado que ni busca armas.`);
    return 1;
}

eventosAleatorios1[3] = function1=(jugador)=>{
    console.log(` ${jugador.getNombre()} toma una mochila y se va corriendo mientras rie maniáticamente. Lástima que está vacía. Al menos se ve feliz.`);
    return 1;
}




// si algun evento necesita una condicion extra, por ejemplo tener 3 jugadores
// con vida para imprimir sus nombres, el propio evento chequea la condicion.
// si no se cumple, devuelve null
// del otro lado, cuando llamamos a esta funcion para elegir un evento, hacemos un do while(not null)
// entonces si recibe null, genera otro evento distinto
// si se cumple, retorna 1
/*----------------------------------------------*/

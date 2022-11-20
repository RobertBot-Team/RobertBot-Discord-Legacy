/*------------ eventos aleatorios 1 ------------*/

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

eventosAleatorios1[10] = function1=(jugador, players)=>{
    console.log(`%c this is evento 100000000000000`,"color:purple");
    console.log(`%c${JSON.stringify(jugador)}`,"color:purple");
    let nroTeam = jugador.getTeam();
    let team = teams[nroTeam-1];
    let cantEnTeam = 1;
    let newTeamId = teams.length + 1;

    //console.log(`%c${JSON.stringify(team)}`,"color:purple");

    let player1 = buscarPorID(team.getPlayer1().getID());
    let player2 = null;
    let player3 = null;
    var newTeam = null;

    if(team.getPlayer2()==null){return null;}
    if(team.getPlayer2()!=null){
        cantEnTeam = 2;
        player2 = buscarPorID(team.getPlayer2().getID());
    }
    if(team.getPlayer3()!=null){
        cantEnTeam = 3;
        player3 = buscarPorID(team.getPlayer3().getID());
    }

    let r = Math.random();

    if(cantEnTeam == 2){
        if(!(team.estaVivo1() && team.estaVivo2())){ return null;}    //si alguno de los 2 está muerto, no se hace este evento
        if(r < 0.5){
            console.log(`${player1.getNombre()} no se aguanta más a ${player2.getNombre()} y decide irse del equipo por su cuenta.`);
            
            team.setPlayer1 = team.getPlayer2();
            team.player2 = null;

            player1.setTeam(newTeamId);
            newTeam = new Team(newTeamId);  
            newTeam.setPlayer1 = player1;
            teams.push(newTeam);

        } else {
            console.log(`${player2.getNombre()} no se aguanta más a ${player1.getNombre()} y decide irse del equipo por su cuenta.`); 
            
            team.player2 = null;
            
            player2.setTeam(newTeamId);
            newTeam = new Team(newTeamId);  
            newTeam.setPlayer1 = player2;
            teams.push(newTeam);
        }
    }

    if(cantEnTeam == 3){

        if(r < 0.3){
            if(!(team.estaVivo1() && team.estaVivo2())){ return null;}
            console.log(`${player1.getNombre()} no se aguanta más a ${player2.getNombre()} y decide irse del equipo por su cuenta.`);
           
            team.setPlayer1 =team.getPlayer2();
            team.setPlayer2 = team.getPlayer3();
            team.player3 = null;

            player1.setTeam(newTeamId);
            newTeam = new Team(newTeamId);  
            newTeam.setPlayer1 = player1;
            teams.push(newTeam);

        } else if(r < 0.6){
            if(!(team.estaVivo2() && team.estaVivo3())){ return null;}
            console.log(`${player2.getNombre()} no se aguanta más a ${player3.getNombre()} y decide irse del equipo por su cuenta.`);

            team.setPlayer2 = team.getPlayer3();
            team.player3 = null;
            
            player2.setTeam(newTeamId);
            newTeam = new Team(newTeamId);  
            newTeam.setPlayer1 = player2;
            teams.push(newTeam);

        } else {
            if(!(team.estaVivo3() && team.estaVivo1())){ return null;}
            console.log(`${player3.getNombre()} no se aguanta más a ${player1.getNombre()} y decide irse del equipo por su cuenta.`);

            team.player3 = null;
            
            player3.setTeam(newTeamId);
            var newTeam = new Team(newTeamId);  
            newTeam.setPlayer1 = player3;
            teams.push(newTeam);
        }

    }

    imprimirTeams();
    return 1;
}

eventosAleatorios1[11] = function1=(jugador, players)=>{
    let team = teams[jugador.getTeam() - 1]
    let vivos = team.nombresVivos();
    if(team.getPlayer2()!=null && team.getPlayer3()!= null) //team de 3
    {
        if(vivos.length == 3){
            console.log(`${vivos[0]}, ${vivos[1]} y ${vivos[2]} hacen un concurso de talentos. Las habilidades de canto de ${jugador.getNombre()} sorprendieron a todos.`);
            return 1;
        }
        if(vivos.length == 2){
            console.log(`${vivos[0]} y ${vivos[1]} hacen un concurso de talentos. Las habilidades de canto de ${jugador.getNombre()} sorprendieron a todos.`);
            return 1;
        }
        if(vivos.length <=1){return null;}
    }
    if(team.getPlayer2()!=null && team.getPlayer3()== null) //team de 2
    {
        if(vivos.length == 2){
            console.log(`${vivos[0]} y ${vivos[1]} hacen un concurso de talentos. Las habilidades de canto de ${jugador.getNombre()} sorprendieron a todos.`);
            return 1;
        }
        if(vivos.length <=1){return null;}
    }
    if(team.getPlayer2()==null && team.getPlayer3()== null) //team de 1
    {
        return null;
    }

}





// si algun evento necesita una condicion extra, por ejemplo tener 3 jugadores
// con vida para imprimir sus nombres, el propio evento chequea la condicion.
// si no se cumple, devuelve null
// del otro lado, cuando llamamos a esta funcion para elegir un evento, hacemos un do while(not null)
// entonces si recibe null, genera otro evento distinto
// si se cumple, retorna 1
/*----------------------------------------------*/
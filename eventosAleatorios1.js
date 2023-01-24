/*------------ eventos aleatorios 1 ------------*/
import { buscarTeamDe2, copiarJugadores, buscarPorID, imprimirTeams, buscarJugador, eliminarTeam } from "./utils.js";
import {Team} from "./clases.js";

var eventosAleatorios1 = [];

eventosAleatorios1[0] = (jugador, players, maxHP, teams)=>{
    if(jugador.hp == maxHP){return null};

    console.log(` HP antes: ${jugador.getHP()}`);
    jugador.hp = Math.min(maxHP, jugador.hp+=200);
    console.log(` ${jugador.getNombre()} se bebe una Punch y se pone a bailar 💃 recuperando así energía.`);
    console.log(` HP luego: ${jugador.getHP()}`);
    return 1;
}

eventosAleatorios1[1] = (jugador, players, maxHP, teams)=>{
    if(jugador.hp == maxHP){return null};

    console.log(` HP antes: ${jugador.getHP()}`);
    jugador.hp = Math.min(maxHP, jugador.hp+=20);
    console.log(` ${jugador.getNombre()} se come un pescao crudo.`);
    console.log(` HP luego: ${jugador.getHP()}`);
    return 1;
}

eventosAleatorios1[2] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} va tan sobrado que ni busca armas.`);
    return 1;
}

eventosAleatorios1[3] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} toma una mochila y se va corriendo mientras rie maniáticamente. Lástima que está vacía. Al menos se ve feliz.`);
    return 1;
}

eventosAleatorios1[4] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} se sienta a pescar.`);
    return 1;
}

eventosAleatorios1[5] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} se acuesta a dormir todo el día.`);
    return 1;
}

eventosAleatorios1[6] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} no sabe cómo se juega esto`);
    return 1;
}

eventosAleatorios1[7] = (jugador, players, maxHP, teams)=>{
    console.log(` ${jugador.getNombre()} pregunta "¿Ya me morí?"`);
    return 1;
}

eventosAleatorios1[8] = (jugador, players, maxHP, teams)=>{
    if(jugador.arma == null){return null};
    console.log(` ${jugador.getNombre()} necesitaba dinero para gachas así que vendió su ${jugador.getArma()["nombre"]}`);
    jugador.arma = null;
    return 1;
}


eventosAleatorios1[9] = (jugador, players, maxHP, teams)=>{
    let copiaJugadores = copiarJugadores(players);
    //console.log("\x1b[33m%s\x1b[0m",` AAAA A A A A A`);
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
    jugadorACambiar = buscarPorID(id, players);

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

eventosAleatorios1[10] = (jugador, players, maxHP, teams)=>{
    //console.log("\x1b[35m%s\x1b[0m",` this is evento 100000000000000`);
    //console.log(`%c${JSON.stringify(jugador)}`,"color:purple");
    let team = jugador.getTeam();
    let cantEnTeam = 1;
    let newTeamId = teams.length + 1;

    //console.log(`%c${JSON.stringify(team)}`,"color:purple");

    let player1 = buscarPorID(team.getPlayer1().getID(), players);
    let player2 = null;
    let player3 = null;
    var newTeam = null;

    if(team.getPlayer2()==null){return null;}
    if(team.getPlayer2()!=null){
        cantEnTeam = 2;
        player2 = buscarPorID(team.getPlayer2().getID(), players);
    }
    if(team.getPlayer3()!=null){
        cantEnTeam = 3;
        player3 = buscarPorID(team.getPlayer3().getID(), players);
    }

    let r = Math.random();

    if(cantEnTeam == 2){
        if(!(team.estaVivo1() && team.estaVivo2())){ return null;}    //si alguno de los 2 está muerto, no se hace este evento
        if(r < 0.5){
            console.log(`${player1.getNombre()} no se aguanta más a ${player2.getNombre()} y decide irse del equipo por su cuenta.`);
            
            team.setPlayer1 = team.getPlayer2();
            team.player2 = null;

            newTeam = new Team(newTeamId);  
            newTeam.setPlayer1 = player1;
            teams.push(newTeam);

            player1.setTeam(newTeam);

        } else {
            console.log(`${player2.getNombre()} no se aguanta más a ${player1.getNombre()} y decide irse del equipo por su cuenta.`); 
            
            team.player2 = null;
            
            newTeam = new Team(newTeamId);  
            newTeam.setPlayer1 = player2;
            teams.push(newTeam);

            player2.setTeam(newTeam);
        }
    }

    if(cantEnTeam == 3){

        if(r < 0.3){
            if(!(team.estaVivo1() && team.estaVivo2())){ return null;}
            console.log(`${player1.getNombre()} no se aguanta más a ${player2.getNombre()} y decide irse del equipo por su cuenta.`);
           
            team.setPlayer1 = team.getPlayer2();
            team.setPlayer2 = team.getPlayer3();
            team.player3 = null;

            newTeam = new Team(newTeamId);  
            newTeam.setPlayer1 = player1;
            teams.push(newTeam);

            player1.setTeam(newTeam);

        } else if(r < 0.6){
            if(!(team.estaVivo2() && team.estaVivo3())){ return null;}
            console.log(`${player2.getNombre()} no se aguanta más a ${player3.getNombre()} y decide irse del equipo por su cuenta.`);

            team.setPlayer2 = team.getPlayer3();
            team.player3 = null;
            
            newTeam = new Team(newTeamId);  
            newTeam.setPlayer1 = player2;
            teams.push(newTeam);

            player2.setTeam(newTeam);

        } else {
            if(!(team.estaVivo3() && team.estaVivo1())){ return null;}
            console.log(`${player3.getNombre()} no se aguanta más a ${player1.getNombre()} y decide irse del equipo por su cuenta.`);

            team.player3 = null;
            
            var newTeam = new Team(newTeamId);  
            newTeam.setPlayer1 = player3;
            teams.push(newTeam);

            player3.setTeam(newTeam);
        }

    }

    imprimirTeams();
    return 1;
}

eventosAleatorios1[11] = (jugador, players, maxHP, teams)=>{
    //console.log(`%c${JSON.stringify(jugador)}`,"color:purple");
    let team = jugador.getTeam();
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

eventosAleatorios1[12] = (jugador, players, maxHP, teams)=>{
    //console.log(`%c${JSON.stringify(jugador)}`,"color:purple");
    //console.log("\x1b[35m%s\x1b[0m",` this is evento 122222222222222222`);
    let team = jugador.getTeam();
    let vivos = team.nombresVivos();
    let newTeamId = teams.length + 1;
    var newTeam = null;

    if(team.getPlayer2()!=null && team.getPlayer3()!= null) //team de 3
    {
        if(vivos.length == 3){
            let id1 = team.getPlayer1().getID();
            let id2 = team.getPlayer2().getID();
            let id3 = team.getPlayer3().getID();

            if(jugador.getID() == id1){
                team.setPlayer1 = team.getPlayer2();
                team.setPlayer2 = team.getPlayer3();
                team.player3 = null;
    
                newTeam = new Team(newTeamId);  
                newTeam.setPlayer1 = jugador;
                teams.push(newTeam);

                jugador.setTeam(newTeam);
            }
            else if(jugador.getID() == id2){
                team.setPlayer2 = team.getPlayer3();
                team.player3 = null;
                
                newTeam = new Team(newTeamId);  
                newTeam.setPlayer1 = jugador;
                teams.push(newTeam);

                jugador.setTeam(newTeam);
            }
            else if(jugador.getID() == id3){
                
                team.player3 = null;
                
                var newTeam = new Team(newTeamId);  
                newTeam.setPlayer1 = jugador;
                teams.push(newTeam);

                jugador.setTeam(newTeam);
            }
            else{
                console.log("ERROR ERROR ERROR");
            }

            console.log(`${vivos[0]}, ${vivos[1]} y ${vivos[2]} hacen un concurso de talentos. ${jugador.getNombre()} es tan malo que deciden echarlo del equipo.`);
            return 1;
        }

        if(vivos.length <3){return null;}
    }

    if(team.getPlayer2()!=null && team.getPlayer3()== null) //team de 2
    {
        return null;

    }
    if(team.getPlayer2()==null && team.getPlayer3()== null) //team de 1
    {
        return null;
    }
    //este evento solo puede ocuurrir si son 3 miembros en el team
}

eventosAleatorios1[13] = (jugador, players, maxHP, teams)=>{
    //console.log(`%c${JSON.stringify(jugador)}`,"color:purple");
    let team = jugador.getTeam();
    let vivos = team.nombresVivos();
    if(team.getPlayer2()!=null && team.getPlayer3()!= null) //team de 3
    {
        if(vivos.length == 3){
            console.log(`${vivos[0]}, ${vivos[1]} y ${vivos[2]} se cuentan historias alrededor de una fogata.`);
            return 1;
        }
        if(vivos.length == 2){
            console.log(`${vivos[0]} y ${vivos[1]} se cuentan historias alrededor de una fogata.`);
            return 1;
        }
        if(vivos.length == 1){
            console.log(`${vivos[0]} empieza a perder la cordura y hablar consigo mismo.`);            
            return 1;
        }
        if(vivos.length < 1){return null;}
    }
    if(team.getPlayer2()!=null && team.getPlayer3()== null) //team de 2
    {
        if(vivos.length == 2){
            console.log(`${vivos[0]} y ${vivos[1]} se cuentan historias alrededor de una fogata.`);
            return 1;
        }
        if(vivos.length == 1){
            console.log(`${vivos[0]} empieza a perder la cordura y hablar consigo mismo.`);
            return 1;            
        }
        if(vivos.length < 1){return null;}
    }
    if(team.getPlayer2()==null && team.getPlayer3()== null) //team de 1
    {
        console.log(`${vivos[0]} empieza a perder la cordura y hablar consigo mismo.`);
        return 1;
    }

}

eventosAleatorios1[14] = (jugador, players, maxHP, teams)=>{
    let idTeamDe2;
    let team;
    let teamActual;
    //console.log(`%c${JSON.stringify(jugador)}`,"color:purple");
    //console.log(`%c${JSON.stringify(jugador.getTeam())}`,"color:purple");
    //console.log("\x1b[35m%s\x1b[0m",`aaaaaaaaaaaaaaaaaaaaaaaaaa`);
    teamActual = jugador.getTeam();
    if((teamActual.getPlayer2()) != null){return null;}
    idTeamDe2 = buscarTeamDe2();
    if(idTeamDe2==null){return null;}
    team = teams[idTeamDe2 - 1];

    console.log(`${jugador.getNombre()} encuentra a ${team.getPlayer1().getNombre()} y ${team.getPlayer2().getNombre()} y les suplica hacer equipo. 
    ${team.getPlayer1().getNombre()} y ${team.getPlayer2().getNombre()} aceptan y permiten que ${jugador.getNombre()} se una.`);

    eliminarTeam(teamActual.getID());

    jugador.setTeam(team);
    team.setPlayer3 = jugador;
    return 1;
}

// si algun evento necesita una condicion extra, por ejemplo tener 3 jugadores
// con vida para imprimir sus nombres, el propio evento chequea la condicion.
// si no se cumple, devuelve null
// del otro lado, cuando llamamos a esta funcion para elegir un evento, hacemos un do while(not null)
// entonces si recibe null, genera otro evento distinto
// si se cumple, retorna 1
/*----------------------------------------------*/

export {eventosAleatorios1};
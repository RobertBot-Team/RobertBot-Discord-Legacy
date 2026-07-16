/*------------ eventos aleatorios 1 ------------*/
import {
  buscarTeamDe2, copiarJugadores, buscarPorID, imprimirTeams, buscarJugador,
  //buscarJugadorDistintoA2, shuffleJugadores, porcentajeDeVidaRandom, pluralS, randomSelector 
} from "../utils.js";
import {
  Team
  //, Jugador 
} from "../clases.js";
import {
  createObject,
  // buscarUnMuerto, funcionDePrueba, leerArchivoDevolverLinea, get_line, get_food, get_lineOfFile, generarJugadorFake, 
  cargarAvatar, funcionCrearImagen, muerteJugador, buscarTresTeamsSolo, eliminarTeam
} from "../../utils.js";

var eventosAleatorios1 = [];
// var totalAdjetivos = 395;
// var totalComidas = 100;
// var totalPersonajes = 100;
// var totalFumos = 16;
// let idIncremental = 1000;
// let fileAdjetivos = 'adjetivos.txt';
// let fileComidas = 'comidas.txt';
// let filePersonajes = 'personajesAnime.txt';
// let fileFumos = 'fumos.txt';

eventosAleatorios1[0] = async (jugador, players, maxHP, teams, req, channel) => {
  if (jugador.hp == maxHP) { return null };

  let curacion;
  if (maxHP - jugador.hp < 200) {
    curacion = -(maxHP - jugador.hp);
  } else {
    curacion = -200;
  }

  jugador.hp = Math.min(maxHP, jugador.hp += 200);
  let evento = ` ${jugador.getNombre()} finds a purple can with a drawing of a fist. It's a Punch! ${jugador.getNombre()} drinks it and starts dancing 💃, recovering energy.`;
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [curacion], []);

  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventosAleatorios1[1] = async (jugador, players, maxHP, teams, req, channel) => {
  if (jugador.hp == maxHP) { return null };

  let curacion;
  if (maxHP - jugador.hp < 20) {
    curacion = -(maxHP - jugador.hp);
  } else {
    curacion = -20;
  }

  jugador.hp = Math.min(maxHP, jugador.hp += 20);
  let evento = ` ${jugador.getNombre()} eats a raw fish.`;
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [curacion], []);
  funcionCrearImagen(json, "1", channel);

  return 1;
}

eventosAleatorios1[2] = async (jugador, players, maxHP, teams, req, channel) => {
  let evento = ` ${jugador.getNombre()} is so cracked they don't even look for weapons.`;
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);

  return 1;
}

eventosAleatorios1[3] = async (jugador, players, maxHP, teams, req, channel) => {
  let evento = ` ${jugador.getNombre()} takes a backpack and runs while laughing maniacally. Too bad it's empty. At least they seem happy.`;
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);

  return 1;
}

eventosAleatorios1[4] = async (jugador, players, maxHP, teams, req, channel) => {
  let evento = ` ${jugador.getNombre()} sits down and starts fishing.`;
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventosAleatorios1[5] = async (jugador, players, maxHP, teams, req, channel) => {
  let evento = ` ${jugador.getNombre()} goes to bed and sleeps all day.`;
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventosAleatorios1[6] = async (jugador, players, maxHP, teams, req, channel) => {
  let evento = ` ${jugador.getNombre()} doesn't know how to play this game.`;
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventosAleatorios1[7] = async (jugador, players, maxHP, teams, req, channel) => {
  let evento = ` ${jugador.getNombre()} asks "Have I died yet?"`;
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventosAleatorios1[8] = async (jugador, players, maxHP, teams, req, channel) => {
  if (jugador.arma == null) { return null };
  let evento = ` ${jugador.getNombre()} needed money for gachas, so they sold their ${jugador.getArma()["name"]}`;
  jugador.arma = null;
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], [])
  funcionCrearImagen(json, "1", channel);
  return 1;
}


eventosAleatorios1[9] = async (jugador, players, maxHP, teams, req, channel) => {
  let copiaJugadores = copiarJugadores(players);
  let comprador;
  let jugadorACambiar;
  let limit = 0;
  let id;
  if (jugador.arma == null) { return null };

  do {
    comprador = buscarJugador(jugador, copiaJugadores);
    if (comprador == null) { return null };
    limit++;
    if (limit >= copiaJugadores.length) { return null; }
  }
  while (comprador.arma != null); //no es la forma ideal de buscar un jugador sin arma, pero bueno

  id = comprador.getID();
  jugadorACambiar = buscarPorID(id, players);
  let evento = ` ${jugador.getNombre()} needed money for gachas, so they sold their ${jugador.getArma()["name"]} to ${jugadorACambiar.getNombre()}`;
  jugadorACambiar.arma = jugador.getArma();
  jugador.arma = null;
  let json = createObject(evento, [jugador.getNombre(), jugadorACambiar.getNombre()],
    [jugador.getID(), jugadorACambiar.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players),
    await cargarAvatar(jugadorACambiar.getFoto(), jugadorACambiar.getID(), jugadorACambiar.getTieneOtraFoto(), req.body.channel.guild_id, players)],
    [jugador.getHP(), jugadorACambiar.getHP()], [0, 0], [])

  funcionCrearImagen(json, "1x1", channel);
  return 1;
}
//este evento recibe el array original de jugadores
//hace una copia, reordena la copia y busca una "victima"/"comprador" en la copia
//compara el id, buscando ese id en la lista original
//y hace los cambios en la lista original sin reordenarla

//dejo este comentario porque hay que hacer lo mismo en varios eventos

eventosAleatorios1[10] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  let team = jugador.getTeam();
  let cantEnTeam = 1;
  let newTeamId = teams.length + 1;
  let player1 = buscarPorID(team.getPlayer1().getID(), players);
  let player2 = null;
  let player3 = null;
  var newTeam = null;

  if (team.getPlayer2() == null) { return null; }
  if (team.getPlayer2() != null) {
    cantEnTeam = 2;
    player2 = buscarPorID(team.getPlayer2().getID(), players);
  }
  if (team.getPlayer3() != null) {
    cantEnTeam = 3;
    player3 = buscarPorID(team.getPlayer3().getID(), players);
  }

  let r = Math.random();

  if (cantEnTeam == 2) {
    if (!(team.estaVivo1() && team.estaVivo2())) { return null }    //si alguno de los 2 está muerto, no se hace este evento
    if (r < 0.5) {
      let evento = `${player1.getNombre()} can't stand ${player2.getNombre()} and decides to leave the team on their own.`;
      let json = createObject(evento, [player1.getNombre(), player2.getNombre()], [player1.getID(), player2.getID()],
        [await cargarAvatar(player1.getFoto(), player1.getID(), player1.getTieneOtraFoto(), req.body.channel.guild_id, players),
        await cargarAvatar(player2.getFoto(), player2.getID(), player2.getTieneOtraFoto(), req.body.channel.guild_id, players)], [player1.getHP(), player2.getHP()], [0, 0], []);

      team.setPlayer1 = team.getPlayer2();
      team.player2 = null;

      newTeam = new Team(newTeamId);
      newTeam.setPlayer1 = player1;
      teams.push(newTeam);

      player1.setTeam(newTeam);
      funcionCrearImagen(json, "1x1", channel);
      await muerteJugador(req.body.channel.guild_id, channel, players);


    } else {
      let evento = `${player2.getNombre()} can't stand ${player1.getNombre()} and decides to leave the team on their own.`;
      let json = createObject(evento, [player2.getNombre(), player1.getNombre()], [player2.getID(), player1.getID()],
        [await cargarAvatar(player2.getFoto(), player2.getID(), player2.getTieneOtraFoto(), req.body.channel.guild_id, players),
        await cargarAvatar(player1.getFoto(), player1.getID(), player1.getTieneOtraFoto(), req.body.channel.guild_id, players)], [player2.getHP(), player1.getHP()], [0, 0], []);

      team.player2 = null;

      newTeam = new Team(newTeamId);
      newTeam.setPlayer1 = player2;
      teams.push(newTeam);

      player2.setTeam(newTeam);
      funcionCrearImagen(json, "1x1", channel);
      await muerteJugador(req.body.channel.guild_id, channel, players);

    }
  }

  if (cantEnTeam == 3) {

    if (r < 0.3) {
      if (!(team.estaVivo1() && team.estaVivo2())) { return null; }
      let evento = `${player1.getNombre()} can't stand ${player2.getNombre()} and decides to leave the team on their own.`;
      let json = createObject(evento, [player1.getNombre(), player2.getNombre()], [player1.getID(), player2.getID()],
        [await cargarAvatar(player1.getFoto(), player1.getID(), player1.getTieneOtraFoto(), req.body.channel.guild_id, players),
        await cargarAvatar(player2.getFoto(), player2.getID(), player2.getTieneOtraFoto(), req.body.channel.guild_id, players)], [player1.getHP(), player2.getHP()], [0, 0], []);
      //channel.send(json.evento)
      team.setPlayer1 = team.getPlayer2();
      team.setPlayer2 = team.getPlayer3();
      team.player3 = null;

      newTeam = new Team(newTeamId);
      newTeam.setPlayer1 = player1;
      teams.push(newTeam);

      player1.setTeam(newTeam);
      funcionCrearImagen(json, "1x1", channel);
      await muerteJugador(req.body.channel.guild_id, channel, players);


    } else if (r < 0.6) {
      if (!(team.estaVivo2() && team.estaVivo3())) { return null; }
      let evento = `${player2.getNombre()} can't stand ${player3.getNombre()} and decides to leave the team on their own.`;
      let json = createObject(evento, [player2.getNombre(), player3.getNombre()], [player2.getID(), player3.getID()],
        [await cargarAvatar(player2.getFoto(), player2.getID(), player2.getTieneOtraFoto(), req.body.channel.guild_id, players),
        await cargarAvatar(player3.getFoto(), player3.getID(), player3.getTieneOtraFoto(), req.body.channel.guild_id, players)], [player2.getHP(), player3.getHP()], [0, 0], [])

      team.setPlayer2 = team.getPlayer3();
      team.player3 = null;

      newTeam = new Team(newTeamId);
      newTeam.setPlayer1 = player2;
      teams.push(newTeam);

      player2.setTeam(newTeam);
      funcionCrearImagen(json, "1x1", channel);
      await muerteJugador(req.body.channel.guild_id, channel, players);


    } else {
      if (!(team.estaVivo3() && team.estaVivo1())) { return null; }
      let evento = `${player3.getNombre()} can't stand ${player1.getNombre()} and decides to leave the team on their own.`;
      let json = createObject(evento, [player3.getNombre(), player1.getNombre()], [player3.getID(), player1.getID()],
        [await cargarAvatar(player3.getFoto(), player3.getID(), player3.getTieneOtraFoto(), req.body.channel.guild_id, players),
        await cargarAvatar(player1.getFoto(), player1.getID(), player1.getTieneOtraFoto(), req.body.channel.guild_id, players)], [player3.getHP(), player1.getHP()], [0, 0], []);

      team.player3 = null;

      newTeam = new Team(newTeamId);
      newTeam.setPlayer1 = player3;
      teams.push(newTeam);

      player3.setTeam(newTeam);
      funcionCrearImagen(json, "1x1", channel);
      await muerteJugador(req.body.channel.guild_id, channel, players);

    }

  }

  imprimirTeams();
  return 1;
}

eventosAleatorios1[11] = async (jugador, players, maxHP, teams, req, channel) => {
  let team = jugador.getTeam();
  let json;
  let vivos = team.nombresVivos();
  let quienesVivos = team.quienesVivos();
  if (team.getPlayer2() != null && team.getPlayer3() != null) //team de 3
  {
    if (vivos.length == 3) {
      let evento = `${vivos[0]}, ${vivos[1]} and ${vivos[2]} held a talent show. The singing skills of ${jugador.getNombre()} surprised everyone.`;
      json = createObject(evento,
        [team.getPlayer1().getNombre(), team.getPlayer2().getNombre(), team.getPlayer3().getNombre()],
        [team.getPlayer1().getID(), team.getPlayer2().getID(), team.getPlayer3().getID()],
        [await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
        await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players),
        await cargarAvatar(team.getPlayer3().getFoto(), team.getPlayer3().getID(), team.getPlayer3().getTieneOtraFoto(), req.body.channel.guild_id, players)],
        [team.getPlayer1().getHP(), team.getPlayer2().getHP(), team.getPlayer3().getHP()],
        [0, 0, 0],
        []);

      funcionCrearImagen(json, "3", channel);
      return 1;
    }
    if (vivos.length == 2) {
      let evento = `${vivos[0]} and ${vivos[1]} held a talent show. The singing skills of ${jugador.getNombre()} surprised everyone.`;
      if (quienesVivos == "12") {
        json = createObject(evento,
          [team.getPlayer1().getNombre(), team.getPlayer2().getNombre()],
          [team.getPlayer1().getID(), team.getPlayer2().getID()],
          [await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
          await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players)],
          [team.getPlayer1().getHP(), team.getPlayer2().getHP()],
          [0, 0],
          []);
      } else if (quienesVivos == "23") {
        json = createObject(evento,
          [team.getPlayer2().getNombre(), team.getPlayer3().getNombre()],
          [team.getPlayer2().getID(), team.getPlayer3().getID()],
          [await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players),
          await cargarAvatar(team.getPlayer3().getFoto(), team.getPlayer3().getID(), team.getPlayer3().getTieneOtraFoto(), req.body.channel.guild_id, players)],
          [team.getPlayer2().getHP(), team.getPlayer3().getHP()],
          [0, 0],
          []);
      } else if (quienesVivos == "13") {
        json = createObject(evento,
          [team.getPlayer1().getNombre(), team.getPlayer3().getNombre()],
          [team.getPlayer1().getID(), team.getPlayer3().getID()],
          [await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
          await cargarAvatar(team.getPlayer3().getFoto(), team.getPlayer3().getID(), team.getPlayer3().getTieneOtraFoto(), req.body.channel.guild_id, players)],
          [team.getPlayer1().getHP(), team.getPlayer3().getHP()],
          [0, 0],
          []);
      }


      funcionCrearImagen(json, "2", channel);
      return 1;
    }
    if (vivos.length <= 1) { return null; }
  }
  if (team.getPlayer2() != null && team.getPlayer3() == null) //team de 2
  {
    if (vivos.length == 2) {
      let evento = `${vivos[0]} and ${vivos[1]} held a talent show. The singing skills of ${jugador.getNombre()} surprised everyone.`;
      if (quienesVivos == "12") {
        json = createObject(evento,
          [team.getPlayer1().getNombre(), team.getPlayer2().getNombre()],
          [team.getPlayer1().getID(), team.getPlayer2().getID()],
          [await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
          await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players)],
          [team.getPlayer1().getHP(), team.getPlayer2().getHP()],
          [0, 0],
          []);
      } else if (quienesVivos == "23") {
        json = createObject(evento,
          [team.getPlayer2().getNombre(), team.getPlayer3().getNombre()],
          [team.getPlayer2().getID(), team.getPlayer3().getID()],
          [await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players),
          await cargarAvatar(team.getPlayer3().getFoto(), team.getPlayer3().getID(), team.getPlayer3().getTieneOtraFoto(), req.body.channel.guild_id, players)],
          [team.getPlayer2().getHP(), team.getPlayer3().getHP()],
          [0, 0],
          []);
      } else if (quienesVivos == "13") {
        json = createObject(evento,
          [team.getPlayer1().getNombre(), team.getPlayer3().getNombre()],
          [team.getPlayer1().getID(), team.getPlayer3().getID()],
          [await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
          await cargarAvatar(team.getPlayer3().getFoto(), team.getPlayer3().getID(), team.getPlayer3().getTieneOtraFoto(), req.body.channel.guild_id, players)],
          [team.getPlayer1().getHP(), team.getPlayer3().getHP()],
          [0, 0],
          []);
      }

      funcionCrearImagen(json, "2", channel);
      return 1;
    }
    if (vivos.length <= 1) { return null; }
  }
  if (team.getPlayer2() == null && team.getPlayer3() == null) //team de 1
  {
    return null;
  }

}

eventosAleatorios1[12] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  let team = jugador.getTeam();
  let vivos = team.nombresVivos();
  let newTeamId = teams.length + 1;
  var newTeam = null;

  if (team.getPlayer2() != null && team.getPlayer3() != null) //team de 3
  {
    if (vivos.length == 3) {
      let id1 = team.getPlayer1().getID();
      let id2 = team.getPlayer2().getID();
      let id3 = team.getPlayer3().getID();

      let evento = `${vivos[0]}, ${vivos[1]} and ${vivos[2]} held a talent show. ${jugador.getNombre()} is so bad that they decide to kick them out of the team.`;
      let json = createObject(evento,
        [team.getPlayer1().getNombre(), team.getPlayer2().getNombre(), team.getPlayer3().getNombre()],
        [team.getPlayer1().getID(), team.getPlayer2().getID(), team.getPlayer3().getID()],
        [await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
        await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players),
        await cargarAvatar(team.getPlayer3().getFoto(), team.getPlayer3().getID(), team.getPlayer3().getTieneOtraFoto(), req.body.channel.guild_id, players)],
        [team.getPlayer1().getHP(), team.getPlayer2().getHP(), team.getPlayer3().getHP()],
        [0, 0, 0],
        []);

      if (jugador.getID() == id1) {
        team.setPlayer1 = team.getPlayer2();
        team.setPlayer2 = team.getPlayer3();
        team.player3 = null;

        newTeam = new Team(newTeamId);
        newTeam.setPlayer1 = jugador;
        teams.push(newTeam);

        jugador.setTeam(newTeam);
      }
      else if (jugador.getID() == id2) {
        team.setPlayer2 = team.getPlayer3();
        team.player3 = null;

        newTeam = new Team(newTeamId);
        newTeam.setPlayer1 = jugador;
        teams.push(newTeam);

        jugador.setTeam(newTeam);
      }
      else if (jugador.getID() == id3) {

        team.player3 = null;

        newTeam = new Team(newTeamId);
        newTeam.setPlayer1 = jugador;
        teams.push(newTeam);

        jugador.setTeam(newTeam);
      }
      else {
        console.log("ERROR ERROR ERROR");
      }

      funcionCrearImagen(json, "3", channel);
      await muerteJugador(req.body.channel.guild_id, channel, players);

      return 1;
    }

    if (vivos.length < 3) { return null; }
  }

  if (team.getPlayer2() != null && team.getPlayer3() == null) //team de 2
  {
    return null;

  }
  if (team.getPlayer2() == null && team.getPlayer3() == null) //team de 1
  {
    return null;
  }
  //este evento solo puede ocuurrir si son 3 miembros en el team
}

eventosAleatorios1[13] = async (jugador, players, maxHP, teams, req, channel) => {
  let team = jugador.getTeam();
  let json;
  let vivos = team.nombresVivos();
  let quienesVivos = team.quienesVivos();
  if (team.getPlayer2() != null && team.getPlayer3() != null) //team de 3
  {
    if (vivos.length == 3) {
      let evento = `${vivos[0]}, ${vivos[1]} and ${vivos[2]} are telling stories around a campfire.`;
      json = createObject(evento,
        [team.getPlayer1().getNombre(), team.getPlayer2().getNombre(), team.getPlayer3().getNombre()],
        [team.getPlayer1().getID(), team.getPlayer2().getID(), team.getPlayer3().getID()],
        [await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
        await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players),
        await cargarAvatar(team.getPlayer3().getFoto(), team.getPlayer3().getID(), team.getPlayer3().getTieneOtraFoto(), req.body.channel.guild_id, players)],
        [team.getPlayer1().getHP(), team.getPlayer2().getHP(), team.getPlayer3().getHP()],
        [0, 0, 0],
        []);

      funcionCrearImagen(json, "3", channel);
      return 1;
    }
    if (vivos.length == 2) {
      let evento = `${vivos[0]} and ${vivos[1]} are telling stories around a campfire.`;
      if (quienesVivos == "12") {
        json = createObject(evento,
          [team.getPlayer1().getNombre(), team.getPlayer2().getNombre()],
          [team.getPlayer1().getID(), team.getPlayer2().getID()],
          [await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
          await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players)],
          [team.getPlayer1().getHP(), team.getPlayer2().getHP()],
          [0, 0],
          []);
      } else if (quienesVivos == "23") {
        json = createObject(evento,
          [team.getPlayer2().getNombre(), team.getPlayer3().getNombre()],
          [team.getPlayer2().getID(), team.getPlayer3().getID()],
          [await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players),
          await cargarAvatar(team.getPlayer3().getFoto(), team.getPlayer3().getID(), team.getPlayer3().getTieneOtraFoto(), req.body.channel.guild_id, players)],
          [team.getPlayer2().getHP(), team.getPlayer3().getHP()],
          [0, 0],
          []);
      } else if (quienesVivos == "13") {
        json = createObject(evento,
          [team.getPlayer1().getNombre(), team.getPlayer3().getNombre()],
          [team.getPlayer1().getID(), team.getPlayer3().getID()],
          [await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
          await cargarAvatar(team.getPlayer3().getFoto(), team.getPlayer3().getID(), team.getPlayer3().getTieneOtraFoto(), req.body.channel.guild_id, players)],
          [team.getPlayer1().getHP(), team.getPlayer3().getHP()],
          [0, 0],
          []);
      }

      funcionCrearImagen(json, "2", channel);
      return 1;

    }
    if (vivos.length == 1) {
      let evento = `${vivos[0]} starts to lose their mind and talks to themself.`;
      json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);

      funcionCrearImagen(json, "1", channel)
      return 1;
    }
    if (vivos.length < 1) { return null; }
  }
  if (team.getPlayer2() != null && team.getPlayer3() == null) //team de 2
  {
    if (vivos.length == 2) {
      let evento = `${vivos[0]} and ${vivos[1]} are telling stories around a campfire.`;
      if (quienesVivos == "12") {
        json = createObject(evento,
          [team.getPlayer1().getNombre(), team.getPlayer2().getNombre()],
          [team.getPlayer1().getID(), team.getPlayer2().getID()],
          [await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
          await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players)],
          [team.getPlayer1().getHP(), team.getPlayer2().getHP()],
          [0, 0],
          []);
      } else if (quienesVivos == "23") {
        json = createObject(evento,
          [team.getPlayer2().getNombre(), team.getPlayer3().getNombre()],
          [team.getPlayer2().getID(), team.getPlayer3().getID()],
          [await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players),
          await cargarAvatar(team.getPlayer3().getFoto(), team.getPlayer3().getID(), team.getPlayer3().getTieneOtraFoto(), req.body.channel.guild_id, players)],
          [team.getPlayer2().getHP(), team.getPlayer3().getHP()],
          [0, 0],
          []);
      } else if (quienesVivos == "13") {
        json = createObject(evento,
          [team.getPlayer1().getNombre(), team.getPlayer3().getNombre()],
          [team.getPlayer1().getID(), team.getPlayer3().getID()],
          [await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
          await cargarAvatar(team.getPlayer3().getFoto(), team.getPlayer3().getID(), team.getPlayer3().getTieneOtraFoto(), req.body.channel.guild_id, players)],
          [team.getPlayer1().getHP(), team.getPlayer3().getHP()],
          [0, 0],
          []);
      }

      funcionCrearImagen(json, "2", channel);
      return 1;

    }

    if (vivos.length == 1) {
      let evento = `${vivos[0]} starts to lose their mind and talks to themself.`;
      json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);

      funcionCrearImagen(json, "1", channel);
      return 1;
    }
    if (vivos.length < 1) { return null; }
  }
  if (team.getPlayer2() == null && team.getPlayer3() == null) //team de 1
  {
    let evento = `${vivos[0]} starts to lose their mind and talks to themself.`;
    let json = createObject(evento, [team.getPlayer1().getNombre()], [team.getPlayer1().getID()], [await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players)], [team.getPlayer1().getHP()], [0], []);

    funcionCrearImagen(json, "1", channel);
    return 1;
  }

}

eventosAleatorios1[14] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  let idTeamDe2;
  let team;
  let teamActual;
  teamActual = jugador.getTeam();
  if ((teamActual.getPlayer2()) != null) { return null; } //que sea un team de 1 solo miembro
  idTeamDe2 = buscarTeamDe2();
  if (idTeamDe2 == null) { return null; }
  team = teams[idTeamDe2 - 1];
  let evento = `${jugador.getNombre()} met ${team.getPlayer1().getNombre()} and ${team.getPlayer2().getNombre()} and begs to team up. ${team.getPlayer1().getNombre()} and ${team.getPlayer2().getNombre()} agree and allow ${jugador.getNombre()} to join.`;
  let json = createObject(evento,
    [jugador.getNombre(), team.getPlayer1().getNombre(), team.getPlayer2().getNombre()],
    [jugador.getID(), team.getPlayer1().getID(), team.getPlayer2().getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players),
    await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
    await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players)],
    [jugador.getHP(), team.getPlayer1().getHP(), team.getPlayer2().getHP()],
    [0, 0, 0],
    []
  );

  eliminarTeam(teamActual.getID());

  jugador.setTeam(team);
  team.setPlayer3 = jugador;

  funcionCrearImagen(json, "1x2", channel)
  await muerteJugador(req.body.channel.guild_id, channel, players);

  return 1;
}

eventosAleatorios1[15] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let idTeamDe2;
  // let team;
  // let teamActual;

  // teamActual = jugador.getTeam();
  // if ((teamActual.getPlayer2()) != null) { return null; } //que sea un team de 1 solo miembro
  // idTeamDe2 = buscarTeamDe2();
  // if (idTeamDe2 == null) { return null; }
  // team = teams[idTeamDe2 - 1];

  // let evento = `${jugador.getNombre()} encuentra a ${team.getPlayer1().getNombre()} y ${team.getPlayer2().getNombre()} y les pregunta: "¿hacen alianzas?". ${team.getPlayer1().getNombre()} y ${team.getPlayer2().getNombre()} aceptan y forman equipo`

  // let json = createObject(evento,
  //   [jugador.getNombre(), team.getPlayer1().getNombre(), team.getPlayer2().getNombre()],
  //   [jugador.getID(), team.getPlayer1().getID(), team.getPlayer2().getID()],
  //   [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players),
  //   await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
  //   await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players)],
  //   [jugador.getHP(), team.getPlayer1().getHP(), team.getPlayer2().getHP()],
  //   [0, 0, 0],
  //   []
  // );

  // eliminarTeam(teamActual.getID());

  // jugador.setTeam(team);
  // team.setPlayer3 = jugador;

  // funcionCrearImagen(json, "1x2", channel)
  // await muerteJugador(req.body.channel.guild_id, channel, players);

  // return 1;
}

eventosAleatorios1[16] = async (jugador, players, maxHP, teams, req, channel) => {
  let otroJugador;
  let copiaJugadores = copiarJugadores(players);
  otroJugador = buscarJugador(jugador, copiaJugadores);
  let evento = ` ${jugador.getNombre()} and ${otroJugador.getNombre()} see the end approaching and decide to get married 🎊`;
  let json = createObject(evento,
    [jugador.getNombre(), otroJugador.getNombre()],
    [jugador.getID(), otroJugador.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players),
    await cargarAvatar(otroJugador.getFoto(), otroJugador.getID(), otroJugador.getTieneOtraFoto(), req.body.channel.guild_id, players)],
    [jugador.getHP(), otroJugador.getHP()],
    [0, 0],
    []
  );

  funcionCrearImagen(json, "2", channel)
  return 1;
}

eventosAleatorios1[17] = async (jugador, players, maxHP, teams, req, channel) => {
  let evento = ` ${jugador.getNombre()} decides to get drunk.`;
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);

  funcionCrearImagen(json, "1", channel)
  return 1;
}

eventosAleatorios1[18] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let evento = ` ${jugador.getNombre()} se queda dormido viendo zzzznother.`;

  // let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);

  // funcionCrearImagen(json, "1", channel)
  // return 1;
}

eventosAleatorios1[19] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let evento = ` ${jugador.getNombre()} se queda dormido jugando Dark Souls.`;

  // let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);

  // funcionCrearImagen(json, "1", channel)
  // return 1;
}

eventosAleatorios1[20] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let evento = ` ${jugador.getNombre()} come hongos alucinógenos`;

  // let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);

  // funcionCrearImagen(json, "1", channel)
  // return 1;
}

eventosAleatorios1[21] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let evento = ` ${jugador.getNombre()} grita "VIVA ESPAÑA"`;

  // let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);

  // funcionCrearImagen(json, "1", channel)
  // return 1;
}

eventosAleatorios1[22] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let jugador2;
  // let jugador3;
  // let copiaJugadores = copiarJugadores(players);

  // jugador2 = buscarJugador(jugador, copiaJugadores);
  // if (jugador2 == null) { return null; }

  // jugador3 = buscarJugadorDistintoA2(jugador, jugador2, copiaJugadores);
  // if (jugador3 == null) { return null; }

  // let evento = ` ${jugador.getNombre()} encuentra a ${jugador2.getNombre()} y ${jugador3.getNombre()} juntos en el suelo y... decide irse bien lejos por si acaso.`;

  // let json = createObject(evento,
  //   [jugador.getNombre(), jugador2.getNombre(), jugador3.getNombre()],
  //   [jugador.getID(), jugador2.getID(), jugador3.getID()],
  //   [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players),
  //   await cargarAvatar(jugador2.getFoto(), jugador2.getID(), jugador2.getTieneOtraFoto(), req.body.channel.guild_id, players),
  //   await cargarAvatar(jugador3.getFoto(), jugador3.getID(), jugador3.getTieneOtraFoto(), req.body.channel.guild_id, players)],
  //   [jugador.getHP(), jugador2.getHP(), jugador3.getHP()],
  //   [0, 0, 0],
  //   []
  // );

  // funcionCrearImagen(json, "1x2", channel)
  // return 1;
}

eventosAleatorios1[23] = async (jugador, players, maxHP, teams, req, channel) => {    //se crea un jugador RobertBot

  return null;
  // let probabilidad = Math.random();
  // if (probabilidad < 0.35) { return null; }         //menor probabilidad de que ocurra

  // const robertBot = new Jugador("RobertBot", "1067669524192702464", "c95b42553b798961ab7344d315b5e263");
  // let idEquipo = teams.length + 1;
  // var team = new Team(idEquipo);
  // team.setPlayer1 = robertBot;
  // teams.push(team);
  // robertBot.setTeam(team);
  // players.push(robertBot);

  // let evento = ` ${robertBot.getNombre()} se une a la batalla. "¿Qué hacen imbeciles?"`; //<:peekliz:977705940319096854>

  // eventosAleatorios1[23] = function () { return null; };        //se redefine para que solo suceda 1 vez por partida
  // let json = createObject(evento, [robertBot.getNombre()], [robertBot.getID()], [await cargarAvatar(robertBot.getFoto(), robertBot.getID(), robertBot.getTieneOtraFoto(), req.body.channel.guild_id, players)], [robertBot.getHP()], [0], ["<:peekliz:977705940319096854>"]);

  // funcionCrearImagen(json, "1", channel);

  // await muerteJugador(req.body.channel.guild_id, channel, players);

  // return 1;
}

eventosAleatorios1[24] = async (jugador, players, maxHP, teams, req, channel) => {
  if (jugador.hp == maxHP) { return null };

  jugador.hp = maxHP;
  let evento = ` ${jugador.getNombre()} activated hacks and maxed out their HP.`;
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);  //la vida la va a tener en 1000 asi que no importa cuanto se cura, la barra verde va a cubir todo

  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventosAleatorios1[25] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let idMuerto;
  // let jugadorOriginal;
  // let vidaConQueRevive;

  // let copiaJugadores = copiarJugadores(players);
  // shuffleJugadores(copiaJugadores);
  // let jugadorMuerto = buscarUnMuerto(copiaJugadores);

  // if (jugadorMuerto == null) { return null; }

  // let probabilidad = Math.random();
  // if (probabilidad > 0.25) { return null; }    //menor probabilidad de que ocurra

  // idMuerto = jugadorMuerto.getID();
  // jugadorOriginal = buscarPorID(idMuerto, players);

  // vidaConQueRevive = porcentajeDeVidaRandom(1, 500);
  // jugadorOriginal.hp = vidaConQueRevive;
  // jugadorOriginal.alive = 1;
  // let elArma = jugadorOriginal.getArma();
  // if (elArma != null) {
  //   elArma.danio = Math.max(10, (elArma.danio - 200));
  // }
  // let evento = ` Un ángel baja del cielo y con mucha compasión revive a ${jugadorOriginal.getNombre()}.`;

  // console.log(` HP luego: ${jugadorOriginal.getHP()}`);
  // let json = createObject(evento, [jugadorOriginal.getNombre()], [jugadorOriginal.getID()], [await cargarAvatar(jugadorOriginal.getFoto(), jugadorOriginal.getID(), jugadorOriginal.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugadorOriginal.getHP()], [0], []);

  // funcionCrearImagen(json, "1", channel);

  // await muerteJugador(req.body.channel.guild_id, channel, players);

  // return 1;
}


eventosAleatorios1[26] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let team = jugador.getTeam();
  // let adjetivo = "test";
  // let rowNumber = 0;

  // if (team.getName() != null) { return null; }  //si team ya tiene nombre, lo conserva

  // if (team.esTeamDe1()) { return null; }  //team de 1

  // if (team.esTeamDe2() && (team.nombresVivos()).length < 2) { return null; }  //team de 2, 1 vivo

  // //seleccionar adjetivo del archivo
  // let cantAdjetivos = 0;
  // await get_lineOfFile(0, function (err, line) {
  //   console.log('cant: ' + line);
  //   cantAdjetivos = parseInt(line);
  // }, fileAdjetivos);

  // rowNumber = randomSelector(1, cantAdjetivos);

  // await get_lineOfFile(rowNumber, function (err, line) {
  //   console.log('The line: ' + line);
  //   adjetivo = line;
  // }, fileAdjetivos);

  // if (team.esTeamDe2() && (team.nombresVivos()).length == 2) {  //team de 2, 2 vivos

  //   let evento = `${team.getPlayer1().getNombre()} y ${team.getPlayer2().getNombre()} decidieron que era hora de poner nombre a su equipo, ahora son “Los ${adjetivo}”`;
  //   team.name = "Los " + adjetivo;

  //   let json = createObject(evento,
  //     [team.getPlayer1().getNombre(), team.getPlayer2().getNombre()],
  //     [team.getPlayer1().getID(), team.getPlayer2().getID()],
  //     [await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
  //     await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players)],
  //     [team.getPlayer1().getHP(), team.getPlayer2().getHP()],
  //     [0, 0],
  //     []
  //   );

  //   funcionCrearImagen(json, "2", channel);

  //   return 1;
  // }

  // if (team.esTeamDe3() && (team.nombresVivos()).length < 2) { return null; }  //team de 3, 1 vivo

  // if (team.esTeamDe3() && (team.nombresVivos()).length == 3) {  //team de 3, 3 vivos

  //   let evento = `${team.getPlayer1().getNombre()}, ${team.getPlayer2().getNombre()} y ${team.getPlayer3().getNombre()} decidieron que era hora de poner nombre a su equipo, ahora son “Los ${adjetivo}”`;
  //   team.name = "Los " + adjetivo;

  //   let json = createObject(evento,
  //     [team.getPlayer1().getNombre(), team.getPlayer2().getNombre(), team.getPlayer3().getNombre()],
  //     [team.getPlayer1().getID(), team.getPlayer2().getID(), team.getPlayer3().getID()],
  //     [await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
  //     await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players),
  //     await cargarAvatar(team.getPlayer3().getFoto(), team.getPlayer3().getID(), team.getPlayer3().getTieneOtraFoto(), req.body.channel.guild_id, players)],
  //     [team.getPlayer1().getHP(), team.getPlayer2().getHP(), team.getPlayer3().getHP()],
  //     [0, 0, 0],
  //     []);

  //   funcionCrearImagen(json, "3", channel);

  //   return 1;
  // }


  // if (team.esTeamDe3() && (team.nombresVivos()).length == 2) {  //team de 3, 2 vivos
  //   let jugadorA;
  //   let jugadorB;
  //   if (team.estaVivo1() && team.estaVivo2()) {
  //     jugadorA = team.getPlayer1();
  //     jugadorB = team.getPlayer2();
  //   }
  //   if (team.estaVivo1() && team.estaVivo3()) {
  //     jugadorA = team.getPlayer1();
  //     jugadorB = team.getPlayer3();
  //   }
  //   if (team.estaVivo2() && team.estaVivo3()) {
  //     jugadorA = team.getPlayer2();
  //     jugadorB = team.getPlayer3();
  //   }

  //   let evento = `${jugadorA.getNombre()} y ${jugadorB.getNombre()} decidieron que era hora de poner nombre a su equipo, ahora son “Los ${adjetivo}”`;
  //   team.name = "Los " + adjetivo;

  //   let json = createObject(evento,
  //     [jugadorA.getNombre(), jugadorB.getNombre()],
  //     [jugadorA.getID(), jugadorB.getID()],
  //     [await cargarAvatar(jugadorA.getFoto(), jugadorA.getID(), jugadorA.getTieneOtraFoto(), req.body.channel.guild_id, players),
  //     await cargarAvatar(jugadorB.getFoto(), jugadorB.getID(), jugadorB.getTieneOtraFoto(), req.body.channel.guild_id, players)],
  //     [jugadorA.getHP(), jugadorB.getHP()],
  //     [0, 0],
  //     []);

  //   funcionCrearImagen(json, "2", channel);

  //   return 1;
  // }

  // return null;
}

eventosAleatorios1[27] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let team = jugador.getTeam();
  // let adjetivo = "test";
  // let rowNumber = 0;

  // if (team.getName() != null) { return null; }  //si team ya tiene nombre, lo conserva

  // if (team.esTeamDe1()) { return null; }  //team de 1

  // if (team.esTeamDe2() && (team.nombresVivos()).length < 2) { return null; }  //team de 2, 1 vivo

  // //seleccionar adjetivo del archivo
  // let cantAdjetivos = 0;
  // await get_lineOfFile(0, function (err, line) {
  //   console.log('cant: ' + line);
  //   cantAdjetivos = parseInt(line);
  // }, fileAdjetivos);

  // rowNumber = randomSelector(1, cantAdjetivos);

  // await get_lineOfFile(rowNumber, function (err, line) {
  //   console.log('The line: ' + line);
  //   adjetivo = line;
  // }, fileAdjetivos);

  // if (team.esTeamDe2() && (team.nombresVivos()).length == 2) {  //team de 2, 2 vivos

  //   let evento = `${team.getPlayer1().getNombre()} y ${team.getPlayer2().getNombre()} ahora son conocidos como “Los ${adjetivo}”`;
  //   team.name = "Los " + adjetivo;

  //   let json = createObject(evento,
  //     [team.getPlayer1().getNombre(), team.getPlayer2().getNombre()],
  //     [team.getPlayer1().getID(), team.getPlayer2().getID()],
  //     [await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
  //     await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players)],
  //     [team.getPlayer1().getHP(), team.getPlayer2().getHP()],
  //     [0, 0],
  //     []
  //   );

  //   funcionCrearImagen(json, "2", channel);

  //   return 1;
  // }

  // if (team.esTeamDe3() && (team.nombresVivos()).length < 2) { return null; }  //team de 3, 1 vivo

  // if (team.esTeamDe3() && (team.nombresVivos()).length == 3) {  //team de 3, 3 vivos

  //   let evento = `${team.getPlayer1().getNombre()}, ${team.getPlayer2().getNombre()} y ${team.getPlayer3().getNombre()} ahora son conocidos como “Los ${adjetivo}”`;
  //   team.name = "Los " + adjetivo;

  //   let json = createObject(evento,
  //     [team.getPlayer1().getNombre(), team.getPlayer2().getNombre(), team.getPlayer3().getNombre()],
  //     [team.getPlayer1().getID(), team.getPlayer2().getID(), team.getPlayer3().getID()],
  //     [await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
  //     await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players),
  //     await cargarAvatar(team.getPlayer3().getFoto(), team.getPlayer3().getID(), team.getPlayer3().getTieneOtraFoto(), req.body.channel.guild_id, players)],
  //     [team.getPlayer1().getHP(), team.getPlayer2().getHP(), team.getPlayer3().getHP()],
  //     [0, 0, 0],
  //     []);

  //   funcionCrearImagen(json, "3", channel);

  //   return 1;
  // }


  // if (team.esTeamDe3() && (team.nombresVivos()).length == 2) {  //team de 3, 2 vivos
  //   let jugadorA;
  //   let jugadorB;
  //   if (team.estaVivo1() && team.estaVivo2()) {
  //     jugadorA = team.getPlayer1();
  //     jugadorB = team.getPlayer2();
  //   }
  //   if (team.estaVivo1() && team.estaVivo3()) {
  //     jugadorA = team.getPlayer1();
  //     jugadorB = team.getPlayer3();
  //   }
  //   if (team.estaVivo2() && team.estaVivo3()) {
  //     jugadorA = team.getPlayer2();
  //     jugadorB = team.getPlayer3();
  //   }

  //   let evento = `${jugadorA.getNombre()} y ${jugadorB.getNombre()} ahora son conocidos como “Los ${adjetivo}”`;
  //   team.name = "Los " + adjetivo;

  //   let json = createObject(evento,
  //     [jugadorA.getNombre(), jugadorB.getNombre()],
  //     [jugadorA.getID(), jugadorB.getID()],
  //     [await cargarAvatar(jugadorA.getFoto(), jugadorA.getID(), jugadorA.getTieneOtraFoto(), req.body.channel.guild_id, players),
  //     await cargarAvatar(jugadorB.getFoto(), jugadorB.getID(), jugadorB.getTieneOtraFoto(), req.body.channel.guild_id, players)],
  //     [jugadorA.getHP(), jugadorB.getHP()],
  //     [0, 0],
  //     []);

  //   funcionCrearImagen(json, "2", channel);

  //   return 1;
  // }

  // return null;
}

eventosAleatorios1[28] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let team = jugador.getTeam();
  // let adjetivo = "test";
  // let rowNumber = 0;

  // if (team.getName() != null) { return null; }  //si team ya tiene nombre, lo conserva

  // if (team.esTeamDe1()) { return null; }  //team de 1

  // if (team.esTeamDe2() && (team.nombresVivos()).length < 2) { return null; }  //team de 2, 1 vivo

  // //seleccionar adjetivo del archivo
  // let cantAdjetivos = 0;
  // await get_lineOfFile(0, function (err, line) {
  //   console.log('cant: ' + line);
  //   cantAdjetivos = parseInt(line);
  // }, fileAdjetivos);

  // rowNumber = randomSelector(1, cantAdjetivos);

  // await get_lineOfFile(rowNumber, function (err, line) {
  //   console.log('The line: ' + line);
  //   adjetivo = line;
  // }, fileAdjetivos);

  // if (team.esTeamDe2() && (team.nombresVivos()).length == 2) {  //team de 2, 2 vivos

  //   let evento = `A ${team.getPlayer1().getNombre()} y ${team.getPlayer2().getNombre()} ahora se les llama “Los ${adjetivo}”`;
  //   team.name = "Los " + adjetivo;

  //   let json = createObject(evento,
  //     [team.getPlayer1().getNombre(), team.getPlayer2().getNombre()],
  //     [team.getPlayer1().getID(), team.getPlayer2().getID()],
  //     [await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
  //     await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players)],
  //     [team.getPlayer1().getHP(), team.getPlayer2().getHP()],
  //     [0, 0],
  //     []
  //   );

  //   funcionCrearImagen(json, "2", channel);

  //   return 1;
  // }

  // if (team.esTeamDe3() && (team.nombresVivos()).length < 2) { return null; }  //team de 3, 1 vivo

  // if (team.esTeamDe3() && (team.nombresVivos()).length == 3) {  //team de 3, 3 vivos

  //   let evento = `A ${team.getPlayer1().getNombre()}, ${team.getPlayer2().getNombre()} y ${team.getPlayer3().getNombre()} ahora se les llama “Los ${adjetivo}”`;
  //   team.name = "Los " + adjetivo;

  //   let json = createObject(evento,
  //     [team.getPlayer1().getNombre(), team.getPlayer2().getNombre(), team.getPlayer3().getNombre()],
  //     [team.getPlayer1().getID(), team.getPlayer2().getID(), team.getPlayer3().getID()],
  //     [await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
  //     await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players),
  //     await cargarAvatar(team.getPlayer3().getFoto(), team.getPlayer3().getID(), team.getPlayer3().getTieneOtraFoto(), req.body.channel.guild_id, players)],
  //     [team.getPlayer1().getHP(), team.getPlayer2().getHP(), team.getPlayer3().getHP()],
  //     [0, 0, 0],
  //     []);

  //   funcionCrearImagen(json, "3", channel);

  //   return 1;
  // }


  // if (team.esTeamDe3() && (team.nombresVivos()).length == 2) {  //team de 3, 2 vivos
  //   let jugadorA;
  //   let jugadorB;
  //   if (team.estaVivo1() && team.estaVivo2()) {
  //     jugadorA = team.getPlayer1();
  //     jugadorB = team.getPlayer2();
  //   }
  //   if (team.estaVivo1() && team.estaVivo3()) {
  //     jugadorA = team.getPlayer1();
  //     jugadorB = team.getPlayer3();
  //   }
  //   if (team.estaVivo2() && team.estaVivo3()) {
  //     jugadorA = team.getPlayer2();
  //     jugadorB = team.getPlayer3();
  //   }

  //   let evento = `A ${jugadorA.getNombre()} y ${jugadorB.getNombre()} ahora se les llama “Los ${adjetivo}”`;
  //   team.name = "Los " + adjetivo;

  //   let json = createObject(evento,
  //     [jugadorA.getNombre(), jugadorB.getNombre()],
  //     [jugadorA.getID(), jugadorB.getID()],
  //     [await cargarAvatar(jugadorA.getFoto(), jugadorA.getID(), jugadorA.getTieneOtraFoto(), req.body.channel.guild_id, players),
  //     await cargarAvatar(jugadorB.getFoto(), jugadorB.getID(), jugadorB.getTieneOtraFoto(), req.body.channel.guild_id, players)],
  //     [jugadorA.getHP(), jugadorB.getHP()],
  //     [0, 0],
  //     []);

  //   funcionCrearImagen(json, "2", channel);

  //   return 1;
  // }

  // return null;
}

eventosAleatorios1[29] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let team = jugador.getTeam();
  // let adjetivo = "test";
  // let rowNumber = 0;

  // if (team.getName() != null) { return null; }  //si team ya tiene nombre, lo conserva

  // if (team.esTeamDe1()) { return null; }  //team de 1

  // if (team.esTeamDe2() && (team.nombresVivos()).length < 2) { return null; }  //team de 2, 1 vivo

  // //seleccionar adjetivo del archivo
  // let cantAdjetivos = 0;
  // await get_lineOfFile(0, function (err, line) {
  //   console.log('cant: ' + line);
  //   cantAdjetivos = parseInt(line);
  // }, fileAdjetivos);

  // rowNumber = randomSelector(1, cantAdjetivos);

  // await get_lineOfFile(rowNumber, function (err, line) {
  //   console.log('The line: ' + line);
  //   adjetivo = line;
  // }, fileAdjetivos);

  // if (team.esTeamDe2() && (team.nombresVivos()).length == 2) {  //team de 2, 2 vivos

  //   let evento = `${team.getPlayer1().getNombre()} y ${team.getPlayer2().getNombre()} nombraron a su equipo “Los ${adjetivo}”`;
  //   team.name = "Los " + adjetivo;

  //   let json = createObject(evento,
  //     [team.getPlayer1().getNombre(), team.getPlayer2().getNombre()],
  //     [team.getPlayer1().getID(), team.getPlayer2().getID()],
  //     [await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
  //     await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players)],
  //     [team.getPlayer1().getHP(), team.getPlayer2().getHP()],
  //     [0, 0],
  //     []
  //   );

  //   funcionCrearImagen(json, "2", channel);

  //   return 1;
  // }

  // if (team.esTeamDe3() && (team.nombresVivos()).length < 2) { return null; }  //team de 3, 1 vivo

  // if (team.esTeamDe3() && (team.nombresVivos()).length == 3) {  //team de 3, 3 vivos

  //   let evento = `${team.getPlayer1().getNombre()}, ${team.getPlayer2().getNombre()} y ${team.getPlayer3().getNombre()} nombraron a su equipo “Los ${adjetivo}”`;
  //   team.name = "Los " + adjetivo;

  //   let json = createObject(evento,
  //     [team.getPlayer1().getNombre(), team.getPlayer2().getNombre(), team.getPlayer3().getNombre()],
  //     [team.getPlayer1().getID(), team.getPlayer2().getID(), team.getPlayer3().getID()],
  //     [await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
  //     await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players),
  //     await cargarAvatar(team.getPlayer3().getFoto(), team.getPlayer3().getID(), team.getPlayer3().getTieneOtraFoto(), req.body.channel.guild_id, players)],
  //     [team.getPlayer1().getHP(), team.getPlayer2().getHP(), team.getPlayer3().getHP()],
  //     [0, 0, 0],
  //     []);

  //   funcionCrearImagen(json, "3", channel);

  //   return 1;
  // }


  // if (team.esTeamDe3() && (team.nombresVivos()).length == 2) {  //team de 3, 2 vivos
  //   let jugadorA;
  //   let jugadorB;
  //   if (team.estaVivo1() && team.estaVivo2()) {
  //     jugadorA = team.getPlayer1();
  //     jugadorB = team.getPlayer2();
  //   }
  //   if (team.estaVivo1() && team.estaVivo3()) {
  //     jugadorA = team.getPlayer1();
  //     jugadorB = team.getPlayer3();
  //   }
  //   if (team.estaVivo2() && team.estaVivo3()) {
  //     jugadorA = team.getPlayer2();
  //     jugadorB = team.getPlayer3();
  //   }

  //   let evento = `${jugadorA.getNombre()} y ${jugadorB.getNombre()} nombraron a su equipo “Los ${adjetivo}”`;
  //   team.name = "Los " + adjetivo;

  //   let json = createObject(evento,
  //     [jugadorA.getNombre(), jugadorB.getNombre()],
  //     [jugadorA.getID(), jugadorB.getID()],
  //     [await cargarAvatar(jugadorA.getFoto(), jugadorA.getID(), jugadorA.getTieneOtraFoto(), req.body.channel.guild_id, players),
  //     await cargarAvatar(jugadorB.getFoto(), jugadorB.getID(), jugadorB.getTieneOtraFoto(), req.body.channel.guild_id, players)],
  //     [jugadorA.getHP(), jugadorB.getHP()],
  //     [0, 0],
  //     []);

  //   funcionCrearImagen(json, "2", channel);

  //   return 1;
  // }

  // return null;
}

eventosAleatorios1[30] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let team = jugador.getTeam();
  // let adjetivo = "test";
  // let rowNumber = 0;

  // if (team.getName() != null) { return null; }  //si team ya tiene nombre, lo conserva

  // if (team.esTeamDe1()) { return null; }  //team de 1

  // if (team.esTeamDe2() && (team.nombresVivos()).length < 2) { return null; }  //team de 2, 1 vivo

  // //seleccionar adjetivo del archivo
  // let cantAdjetivos = 0;
  // await get_lineOfFile(0, function (err, line) {
  //   console.log('cant: ' + line);
  //   cantAdjetivos = parseInt(line);
  // }, fileAdjetivos);

  // rowNumber = randomSelector(1, cantAdjetivos);

  // await get_lineOfFile(rowNumber, function (err, line) {
  //   console.log('The line: ' + line);
  //   adjetivo = line;
  // }, fileAdjetivos);

  // if (team.esTeamDe2() && (team.nombresVivos()).length == 2) {  //team de 2, 2 vivos

  //   let evento = `${team.getPlayer1().getNombre()} y ${team.getPlayer2().getNombre()} se convirtieron en “Los ${adjetivo}”`;
  //   team.name = "Los " + adjetivo;

  //   let json = createObject(evento,
  //     [team.getPlayer1().getNombre(), team.getPlayer2().getNombre()],
  //     [team.getPlayer1().getID(), team.getPlayer2().getID()],
  //     [await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
  //     await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players)],
  //     [team.getPlayer1().getHP(), team.getPlayer2().getHP()],
  //     [0, 0],
  //     []
  //   );

  //   funcionCrearImagen(json, "2", channel);

  //   return 1;
  // }

  // if (team.esTeamDe3() && (team.nombresVivos()).length < 2) { return null; }  //team de 3, 1 vivo

  // if (team.esTeamDe3() && (team.nombresVivos()).length == 3) {  //team de 3, 3 vivos

  //   let evento = `${team.getPlayer1().getNombre()}, ${team.getPlayer2().getNombre()} y ${team.getPlayer3().getNombre()} se convirtieron en “Los ${adjetivo}”`;
  //   team.name = "Los " + adjetivo;

  //   let json = createObject(evento,
  //     [team.getPlayer1().getNombre(), team.getPlayer2().getNombre(), team.getPlayer3().getNombre()],
  //     [team.getPlayer1().getID(), team.getPlayer2().getID(), team.getPlayer3().getID()],
  //     [await cargarAvatar(team.getPlayer1().getFoto(), team.getPlayer1().getID(), team.getPlayer1().getTieneOtraFoto(), req.body.channel.guild_id, players),
  //     await cargarAvatar(team.getPlayer2().getFoto(), team.getPlayer2().getID(), team.getPlayer2().getTieneOtraFoto(), req.body.channel.guild_id, players),
  //     await cargarAvatar(team.getPlayer3().getFoto(), team.getPlayer3().getID(), team.getPlayer3().getTieneOtraFoto(), req.body.channel.guild_id, players)],
  //     [team.getPlayer1().getHP(), team.getPlayer2().getHP(), team.getPlayer3().getHP()],
  //     [0, 0, 0],
  //     []);

  //   funcionCrearImagen(json, "3", channel);

  //   return 1;
  // }


  // if (team.esTeamDe3() && (team.nombresVivos()).length == 2) {  //team de 3, 2 vivos
  //   let jugadorA;
  //   let jugadorB;
  //   if (team.estaVivo1() && team.estaVivo2()) {
  //     jugadorA = team.getPlayer1();
  //     jugadorB = team.getPlayer2();
  //   }
  //   if (team.estaVivo1() && team.estaVivo3()) {
  //     jugadorA = team.getPlayer1();
  //     jugadorB = team.getPlayer3();
  //   }
  //   if (team.estaVivo2() && team.estaVivo3()) {
  //     jugadorA = team.getPlayer2();
  //     jugadorB = team.getPlayer3();
  //   }

  //   let evento = `${jugadorA.getNombre()} y ${jugadorB.getNombre()} se convirtieron en “Los ${adjetivo}”`;
  //   team.name = "Los " + adjetivo;

  //   let json = createObject(evento,
  //     [jugadorA.getNombre(), jugadorB.getNombre()],
  //     [jugadorA.getID(), jugadorB.getID()],
  //     [await cargarAvatar(jugadorA.getFoto(), jugadorA.getID(), jugadorA.getTieneOtraFoto(), req.body.channel.guild_id, players),
  //     await cargarAvatar(jugadorB.getFoto(), jugadorB.getID(), jugadorB.getTieneOtraFoto(), req.body.channel.guild_id, players)],
  //     [jugadorA.getHP(), jugadorB.getHP()],
  //     [0, 0],
  //     []);

  //   funcionCrearImagen(json, "2", channel);

  //   return 1;
  // }

  // return null;
}


eventosAleatorios1[31] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let evento = ` ${jugador.getNombre()} ve un pastel en una silla y se sienta encima`;

  // let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);

  // funcionCrearImagen(json, "1", channel);
  // return 1;
}

eventosAleatorios1[32] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let evento = ` ${jugador.getNombre()} ve un pastel en una silla pero no se sienta encima.....`;

  // let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);

  // funcionCrearImagen(json, "1", channel);
  // return 1;
}

eventosAleatorios1[33] = async (jugador, players, maxHP, teams, req, channel) => {
  let evento = ` ${jugador.getNombre()} starts cooking`;
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);

  return 1;
}

eventosAleatorios1[34] = async (jugador, players, maxHP, teams, req, channel) => {
  let evento = ` ${jugador.getNombre()} is hungry`;
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);

  return 1;
}

eventosAleatorios1[35] = async (jugador, players, maxHP, teams, req, channel) => {
  if (jugador.hp == maxHP) { return null };

  let curacion;
  if (maxHP - jugador.hp < 250) {
    curacion = -(maxHP - jugador.hp);
  } else {
    curacion = -250;
  }

  jugador.hp = Math.min(maxHP, jugador.hp += 250);
  let evento = ` A mysterious figure heals ${jugador.getNombre()}'s wounds `;
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [curacion], []);
  funcionCrearImagen(json, "1", channel);

  return 1;
}

eventosAleatorios1[36] = async (jugador, players, maxHP, teams, req, channel) => {
  return null
  // let comida = "test";
  // let rowNumber = 0;

  // if (jugador.hp == maxHP) { return null };

  // //seleccionar comida del archivo
  // let cantComidas = 0;
  // await get_lineOfFile(0, function (err, line) {
  //   console.log('cant: ' + line);
  //   cantComidas = parseInt(line);
  // }, fileComidas);

  // rowNumber = randomSelector(1, cantComidas);

  // await get_lineOfFile(rowNumber, function (err, line) {
  //   console.log('The line: ' + line);
  //   comida = line;
  // }, fileComidas);

  // let cantRandomCuracion = porcentajeDeVidaRandom(1, 700);

  // let curacion;
  // if (maxHP - jugador.hp < cantRandomCuracion) {
  //   curacion = -(maxHP - jugador.hp);
  // } else {
  //   curacion = -(cantRandomCuracion);
  // }


  // jugador.hp = Math.min(maxHP, jugador.hp += cantRandomCuracion);
  // let evento = ` ${jugador.getNombre()} come ${comida} y recupera ${-curacion} de vida.`;
  // let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [curacion], []);



  // funcionCrearImagen(json, "1", channel);
  // return 1;

}

eventosAleatorios1[37] = async (jugador, players, maxHP, teams, req, channel) => {    //se crea un jugador 
  return null;
  // let jugadorFake;
  // let probabilidad = Math.random();
  // if (probabilidad > 0.3) { return null; }              //menor probabilidad de que ocurra
  // for (let i = 0; i < 6; i++) {
  //   jugadorFake = generarJugadorFake();
  //   if (jugadorFake.getYaUnido() == 0) {
  //     break;
  //   }
  // }
  // if (jugadorFake.getYaUnido() == 1) {
  //   return null;
  // }

  // const jugadorNuevo = new Jugador(jugadorFake.getNombre(), idIncremental.toString(), jugadorFake.getFoto());
  // console.log(JSON.stringify(jugadorNuevo));
  // let idEquipo = teams.length + 1;
  // var team = new Team(idEquipo);
  // team.setPlayer1 = jugadorNuevo;
  // teams.push(team);
  // jugadorNuevo.setTeam(team);
  // players.push(jugadorNuevo);

  // let evento = ` ${jugadorNuevo.getNombre()} se unió a la batalla`;

  // let json = createObject(evento, [jugadorNuevo.getNombre()], [jugadorNuevo.getID()], [await cargarAvatar(jugadorNuevo.getFoto(), jugadorNuevo.getID(), jugadorNuevo.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugadorNuevo.getHP()], [0], []);

  // funcionCrearImagen(json, "1", channel);

  // idIncremental++;
  // jugadorFake.yaUnido = 1;


  // await muerteJugador(req.body.channel.guild_id, channel, players);


  // return 1;
}

eventosAleatorios1[38] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  let arraySolos = [];
  let pos1;
  let pos2;
  let pos3;
  let team1;
  let team2;
  let team3;
  let jugador1;
  let jugador2;
  let jugador3;

  arraySolos = buscarTresTeamsSolo(teams);
  if (arraySolos === null) { return null; }

  pos1 = arraySolos[0] - 1;
  pos2 = arraySolos[1] - 1;
  pos3 = arraySolos[2] - 1;

  team1 = teams[pos1];
  team2 = teams[pos2];
  team3 = teams[pos3];

  jugador1 = team1.getPlayer1();
  jugador2 = team2.getPlayer1();
  jugador3 = team3.getPlayer1();


  let evento = `${team1.getPlayer1().getNombre()}, ${jugador2.getNombre()} and ${jugador3.getNombre()} meet and agree that: “three heads are better than one”, so they team up.`;
  let json = createObject(evento,
    [jugador1.getNombre(), jugador2.getNombre(), jugador3.getNombre()],
    [jugador1.getID(), jugador2.getID(), jugador3.getID()],
    [await cargarAvatar(jugador1.getFoto(), jugador1.getID(), jugador1.getTieneOtraFoto(), req.body.channel.guild_id, players),
    await cargarAvatar(jugador2.getFoto(), jugador2.getID(), jugador2.getTieneOtraFoto(), req.body.channel.guild_id, players),
    await cargarAvatar(jugador3.getFoto(), jugador3.getID(), jugador3.getTieneOtraFoto(), req.body.channel.guild_id, players)],
    [jugador1.getHP(), jugador2.getHP(), jugador3.getHP()],
    [0, 0, 0],
    []
  );

  jugador2.setTeam(team1);
  jugador3.setTeam(team1);
  team1.setPlayer2 = jugador2;
  team1.setPlayer3 = jugador3;
  eliminarTeam(team2.getID());
  eliminarTeam(team3.getID());


  funcionCrearImagen(json, "3", channel)
  await muerteJugador(req.body.channel.guild_id, channel, players);

  return 1;
}

eventosAleatorios1[39] = async (jugador, players, maxHP, teams, req, channel) => {
  if (jugador.hp == maxHP) { return null };

  let curacion;
  if (maxHP - jugador.hp < 300) {
    curacion = -(maxHP - jugador.hp);
  } else {
    curacion = -300;
  }

  jugador.hp = Math.min(maxHP, jugador.hp += 300);
  let evento = `${jugador.getNombre()} finds a revitalizing spa. ${jugador.getNombre()} gets healed.`;
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [curacion], []);

  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventosAleatorios1[40] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let otroJugador;
  // let copiaJugadores = copiarJugadores(players);
  // otroJugador = buscarJugador(jugador, copiaJugadores);
  // let evento = `${jugador.getNombre()} salió del armario. ${otroJugador.getNombre()} ya lo suponía.`;

  // let json = createObject(evento,
  //   [jugador.getNombre(), otroJugador.getNombre()],
  //   [jugador.getID(), otroJugador.getID()],
  //   [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players),
  //   await cargarAvatar(otroJugador.getFoto(), otroJugador.getID(), otroJugador.getTieneOtraFoto(), req.body.channel.guild_id, players)],
  //   [jugador.getHP(), otroJugador.getHP()],
  //   [0, 0],
  //   []
  // );

  // funcionCrearImagen(json, "2", channel)
  // return 1;
};

eventosAleatorios1[41] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let evento = ` ${jugador.getNombre()} ha encontrado unas setas misteriosas y decide probarlas. El goblin azul le convence que quizás no era buena idea.`;

  // let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);

  // funcionCrearImagen(json, "1", channel);
  // return 1;
};

eventosAleatorios1[42] = async (jugador, players, maxHP, teams, req, channel) => {
  let evento = ` ${jugador.getNombre()} starts crying`;
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);

  return 1;
};

eventosAleatorios1[43] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let evento = `${jugador.getNombre()} se va al río a bañarse. Olía a otaku`;

  // let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);

  // funcionCrearImagen(json, "1", channel);
  // return 1;
};

eventosAleatorios1[44] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let evento = ` ${jugador.getNombre()} aplica su experiencia en FFXV para pescar... No consigue peces`;

  // let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);

  // funcionCrearImagen(json, "1", channel);
  // return 1;
};

eventosAleatorios1[45] = async (jugador, players, maxHP, teams, req, channel) => {
  let evento = `${jugador.getNombre()} plays the guitar to pass the night. They realize they don't know how to play the guitar, nor do they own one. They question their sanity`;
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);

  return 1;
};

eventosAleatorios1[46] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let otroJugador;
  // let copiaJugadores = copiarJugadores(players);
  // otroJugador = buscarJugador(jugador, copiaJugadores);
  // let evento = `${jugador.getNombre()} se le acerca a ${otroJugador.getNombre()} por detrás. ${otroJugador.getNombre()} se aleja con miedo.`;

  // let json = createObject(evento,
  //   [jugador.getNombre(), otroJugador.getNombre()],
  //   [jugador.getID(), otroJugador.getID()],
  //   [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players),
  //   await cargarAvatar(otroJugador.getFoto(), otroJugador.getID(), otroJugador.getTieneOtraFoto(), req.body.channel.guild_id, players)],
  //   [jugador.getHP(), otroJugador.getHP()],
  //   [0, 0],
  //   []
  // );

  // funcionCrearImagen(json, "1x1", channel)
  // return 1;
};

eventosAleatorios1[47] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // if (jugador.arma == null) { return null };
  // let armaQuitada = jugador.getArma();
  // let plural = pluralS(jugador.getArma());
  // let evento = `${jugador.getNombre()} se encuentra una súcubo. Ésta le seduce y le roba todas sus pertenencias.`;

  // jugador.arma = null;
  // let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], [])

  // let extra1 = `${jugador.getNombre()} perdió su ${armaQuitada["nombre"]}`;
  // console.log(extra1);
  // json.extra.push(extra1);
  // funcionCrearImagen(json, "1", channel);
  // return 1;
}

eventosAleatorios1[48] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // if (jugador.hp == maxHP) { return null };

  // let cantRandomCuracion = porcentajeDeVidaRandom(1, 200);

  // let curacion;
  // if (maxHP - jugador.hp < cantRandomCuracion) {
  //   curacion = -(maxHP - jugador.hp);
  // } else {
  //   curacion = -(cantRandomCuracion);
  // }


  // jugador.hp = Math.min(maxHP, jugador.hp += cantRandomCuracion);
  // let evento = ` ${jugador.getNombre()} encontró ${-curacion} Wabis y se curó ${-curacion} de vida.`;
  // let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [curacion], []);



  // funcionCrearImagen(json, "1", channel);
  // return 1;
}

eventosAleatorios1[49] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let evento = ` ${jugador.getNombre()} se pega una nota en el pecho que pone "puto el que me mate"`;

  // let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);

  // funcionCrearImagen(json, "1", channel);
  // return 1;
};

eventosAleatorios1[50] = async (jugador, players, maxHP, teams, req, channel) => {
  let evento = ` ${jugador.getNombre()} comes across a taco stand. They eat 24 tacos and lie down to sleep, too stuffed to move.`;
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);

  return 1;
};

eventosAleatorios1[51] = async (jugador, players, maxHP, teams, req, channel) => {
  let evento = ` ${jugador.getNombre()} creates an AI girlfriend for themself`;
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);

  return 1;
};

eventosAleatorios1[52] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let evento = ` En una plaza mística, ${jugador.getNombre()} encuentra una fuente decorada con monedas y objetos olvidados. Al arrojar un Wabi, una luz brillante ilumina la fuente y, cuando se despeja el agua... No hay nada. Gran manera de perder un Wabi.`;

  // let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);

  // funcionCrearImagen(json, "1", channel);
  // return 1;
};

eventosAleatorios1[53] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let otroJugador;
  // let copiaJugadores = copiarJugadores(players);
  // otroJugador = buscarJugador(jugador, copiaJugadores);
  // let rowNumber = 0;
  // let personaje = "test";

  // //seleccionar personaje del archivo
  // let cantPersonajes = 0;
  // await get_lineOfFile(0, function (err, line) {
  //   console.log('cant: ' + line);
  //   cantPersonajes = parseInt(line);
  // }, filePersonajes);

  // rowNumber = randomSelector(1, cantPersonajes);

  // await get_lineOfFile(rowNumber, function (err, line) {
  //   console.log('The line: ' + line);
  //   personaje = line;
  // }, filePersonajes);

  // let evento = `${jugador.getNombre()} dice que shippea a ${otroJugador.getNombre()} con  ${personaje}`;

  // let json = createObject(evento,
  //   [jugador.getNombre(), otroJugador.getNombre()],
  //   [jugador.getID(), otroJugador.getID()],
  //   [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players),
  //   await cargarAvatar(otroJugador.getFoto(), otroJugador.getID(), otroJugador.getTieneOtraFoto(), req.body.channel.guild_id, players)],
  //   [jugador.getHP(), otroJugador.getHP()],
  //   [0, 0],
  //   []
  // );

  // funcionCrearImagen(json, "1x1", channel)
  // return 1;
};

eventosAleatorios1[54] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;

  // let rowNumber = 0;
  // let personaje = "test";

  // //seleccionar personaje del archivo
  // let cantPersonajes = 0;
  // await get_lineOfFile(0, function (err, line) {
  //   console.log('cant: ' + line);
  //   cantPersonajes = parseInt(line);
  // }, filePersonajes);

  // rowNumber = randomSelector(1, cantPersonajes);

  // await get_lineOfFile(rowNumber, function (err, line) {
  //   console.log('The line: ' + line);
  //   personaje = line;
  // }, filePersonajes);

  // let evento = `${jugador.getNombre()} divisa una figura de ${personaje}, mira al rededor que no haya nadie cerca y se la guarda para su colección.`;

  // let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);

  // funcionCrearImagen(json, "1", channel);
  // return 1;
};

eventosAleatorios1[55] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;

  // let rowNumber = 0;
  // let personaje = "test";

  // //seleccionar personaje del archivo
  // let cantPersonajes = 0;
  // await get_lineOfFile(0, function (err, line) {
  //   console.log('cant: ' + line);
  //   cantPersonajes = parseInt(line);
  // }, filePersonajes);

  // rowNumber = randomSelector(1, cantPersonajes);

  // await get_lineOfFile(rowNumber, function (err, line) {
  //   console.log('The line: ' + line);
  //   personaje = line;
  // }, filePersonajes);

  // let evento = `${jugador.getNombre()} encuentra una figura de ${personaje}, dice "que mierda" y la tira al rio`;

  // let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);

  // funcionCrearImagen(json, "1", channel);
  // return 1;
};

eventosAleatorios1[56] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;

  // let rowNumber = 0;
  // let personaje = "test";

  // //seleccionar personaje del archivo
  // let cantPersonajes = 0;
  // await get_lineOfFile(0, function (err, line) {
  //   console.log('cant: ' + line);
  //   cantPersonajes = parseInt(line);
  // }, filePersonajes);

  // rowNumber = randomSelector(1, cantPersonajes);

  // await get_lineOfFile(rowNumber, function (err, line) {
  //   console.log('The line: ' + line);
  //   personaje = line;
  // }, filePersonajes);

  // let evento = `${jugador.getNombre()} se enamora de ${personaje} y se compra una figura a escala, gastándose todos sus ahorros.`;

  // let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);

  // funcionCrearImagen(json, "1", channel);
  // return 1;
};

eventosAleatorios1[57] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;

  // let rowNumber = 0;
  // let personaje = "test";

  // //seleccionar personaje del archivo
  // let cantPersonajes = 0;
  // await get_lineOfFile(0, function (err, line) {
  //   console.log('cant: ' + line);
  //   cantPersonajes = parseInt(line);
  // }, filePersonajes);

  // rowNumber = randomSelector(1, cantPersonajes);

  // await get_lineOfFile(rowNumber, function (err, line) {
  //   console.log('The line: ' + line);
  //   personaje = line;
  // }, filePersonajes);

  // let evento = `${jugador.getNombre()} encuentra una figura de ${personaje}. "Se parece a Sayu"`;

  // let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);

  // funcionCrearImagen(json, "1", channel);
  // return 1;
};

eventosAleatorios1[58] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;

  // let rowNumber = 0;
  // let personaje = "test";

  // //seleccionar personaje del archivo
  // let cantPersonajes = 0;
  // await get_lineOfFile(0, function (err, line) {
  //   console.log('cant: ' + line);
  //   cantPersonajes = parseInt(line);
  // }, filePersonajes);

  // rowNumber = randomSelector(1, cantPersonajes);

  // await get_lineOfFile(rowNumber, function (err, line) {
  //   console.log('The line: ' + line);
  //   personaje = line;
  // }, filePersonajes);

  // let evento = `${jugador.getNombre()} encuentra una figura de ${personaje} y se la lleva. Luego la guarda en un... ¿frasco?`;

  // let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);

  // funcionCrearImagen(json, "1", channel);
  // return 1;
};

eventosAleatorios1[59] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;

  // let rowNumber = 0;
  // let personaje = "test";

  // //seleccionar personaje del archivo
  // let cantPersonajes = 0;
  // await get_lineOfFile(0, function (err, line) {
  //   console.log('cant: ' + line);
  //   cantPersonajes = parseInt(line);
  // }, filePersonajes);

  // rowNumber = randomSelector(1, cantPersonajes);

  // await get_lineOfFile(rowNumber, function (err, line) {
  //   console.log('The line: ' + line);
  //   personaje = line;
  // }, filePersonajes);

  // let evento = `${jugador.getNombre()} decide ponerse un cosplay de ${personaje}`;

  // let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);

  // funcionCrearImagen(json, "1", channel);
  // return 1;
};


eventosAleatorios1[60] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let evento = ` ${jugador.getNombre()} se desnuda`;

  // let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);

  // funcionCrearImagen(json, "1", channel);
  // return 1;
};

eventosAleatorios1[61] = async (jugador, players, maxHP, teams, req, channel) => {
  let evento = ` ${jugador.getNombre()} didnt find any weapon. Where the hell is everyone finding so much loot?`;
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);

  return 1;
};

eventosAleatorios1[62] = async (jugador, players, maxHP, teams, req, channel) => {
  let otroJugador;
  let copiaJugadores = copiarJugadores(players);
  otroJugador = buscarJugador(jugador, copiaJugadores);
  let evento = `${jugador.getNombre()} and ${otroJugador.getNombre()} are cuddling while they sleep. According to them "it's just really cold"`;
  let json = createObject(evento,
    [jugador.getNombre(), otroJugador.getNombre()],
    [jugador.getID(), otroJugador.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players),
    await cargarAvatar(otroJugador.getFoto(), otroJugador.getID(), otroJugador.getTieneOtraFoto(), req.body.channel.guild_id, players)],
    [jugador.getHP(), otroJugador.getHP()],
    [0, 0],
    []
  );
  funcionCrearImagen(json, "2", channel)

  return 1;
};

eventosAleatorios1[63] = async (jugador, players, maxHP, teams, req, channel) => {
  return null;
  // let otroJugador;
  // let copiaJugadores = copiarJugadores(players);
  // otroJugador = buscarJugador(jugador, copiaJugadores);
  // if (otroJugador == null) { return null; }

  // let team = jugador.getTeam();
  // let otroTeam = otroJugador.getTeam();

  // if (team.getPlayer2() != null || otroTeam.getPlayer2() != null) { return null; }


  // let evento = `${jugador.getNombre()} quiere hacer equipo. ${otroJugador.getNombre()} le dice "prefiero ir solo a hacer equipo contigo"`;

  // let json = createObject(evento,
  //   [jugador.getNombre(), otroJugador.getNombre()],
  //   [jugador.getID(), otroJugador.getID()],
  //   [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players),
  //   await cargarAvatar(otroJugador.getFoto(), otroJugador.getID(), otroJugador.getTieneOtraFoto(), req.body.channel.guild_id, players)],
  //   [jugador.getHP(), otroJugador.getHP()],
  //   [0, 0],
  //   []
  // );

  // funcionCrearImagen(json, "2", channel)
  // return 1;
};






/*
eventosAleatorios1[39] =async (jugador, players, maxHP, teams, req, channel)=>{    //se crea un jugador 
    let arraySolos = [];
    let pos1;
    let pos2;
    let pos3;
    let team1;
    let team2;
    let team3;
    let jugador1;
    let jugador2;
    let jugador3;
  
    arraySolos = buscarTresTeamsSolo(teams);
    if(arraySolos===null){return null;}
    
    pos1 = arraySolos[0]-1;
    pos2 = arraySolos[1]-1;
    pos3 = arraySolos[2]-1;
  
    team1 = teams[pos1];
    team2 = teams[pos2];
    team3 = teams[pos3];
    
    jugador1 = team1.getPlayer1();
    jugador2 = team2.getPlayer1();
    jugador3 = team3.getPlayer1();
    
  
    let evento = `${team1.getPlayer1().getNombre()}, ${jugador2.getNombre()} y ${jugador3.getNombre()} se encuentran y coinciden: “3 cabezas piensan mas que una”, y forman equipo.`;
    let json = createObject(evento,
                            [jugador1.getNombre(), jugador2.getNombre(), jugador3.getNombre()], 
                            [jugador1.getID(),     jugador2.getID(),     jugador3.getID()],
                            [await cargarAvatar(jugador1.getFoto(),jugador1.getID(),jugador1.getTieneOtraFoto(),req.body.channel.guild_id),
                             await cargarAvatar(jugador2.getFoto(),jugador2.getID(),jugador2.getTieneOtraFoto(),req.body.channel.guild_id),
                             await cargarAvatar(jugador3.getFoto(),jugador3.getID(),jugador3.getTieneOtraFoto(),req.body.channel.guild_id)],
                            [jugador1.getHP(),     jugador2.getHP(),     jugador3.getHP()],
                            [0,0,0],
                            []
                            );
  
    jugador2.setTeam(team1);
    jugador3.setTeam(team1);
    team1.setPlayer2 = jugador2;
    team1.setPlayer3 = jugador3;
    eliminarTeam(team2.getID());
    eliminarTeam(team3.getID());

  
    funcionCrearImagen(json,"3",channel)
    await muerteJugador(req.body.channel.guild_id, channel, players);

    return 1;
}

eventosAleatorios1[40] =async (jugador, players, maxHP, teams, req, channel)=>{    //se crea un jugador 
    let arraySolos = [];
    let pos1;
    let pos2;
    let pos3;
    let team1;
    let team2;
    let team3;
    let jugador1;
    let jugador2;
    let jugador3;
  
    arraySolos = buscarTresTeamsSolo(teams);
    if(arraySolos===null){return null;}
    
    pos1 = arraySolos[0]-1;
    pos2 = arraySolos[1]-1;
    pos3 = arraySolos[2]-1;
  
    team1 = teams[pos1];
    team2 = teams[pos2];
    team3 = teams[pos3];
    
    jugador1 = team1.getPlayer1();
    jugador2 = team2.getPlayer1();
    jugador3 = team3.getPlayer1();
    
  
    let evento = `${team1.getPlayer1().getNombre()}, ${jugador2.getNombre()} y ${jugador3.getNombre()} se encuentran y coinciden: “3 cabezas piensan mas que una”, y forman equipo.`;
    let json = createObject(evento,
                            [jugador1.getNombre(), jugador2.getNombre(), jugador3.getNombre()], 
                            [jugador1.getID(),     jugador2.getID(),     jugador3.getID()],
                            [await cargarAvatar(jugador1.getFoto(),jugador1.getID(),jugador1.getTieneOtraFoto(),req.body.channel.guild_id),
                             await cargarAvatar(jugador2.getFoto(),jugador2.getID(),jugador2.getTieneOtraFoto(),req.body.channel.guild_id),
                             await cargarAvatar(jugador3.getFoto(),jugador3.getID(),jugador3.getTieneOtraFoto(),req.body.channel.guild_id)],
                            [jugador1.getHP(),     jugador2.getHP(),     jugador3.getHP()],
                            [0,0,0],
                            []
                            );
  
    jugador2.setTeam(team1);
    jugador3.setTeam(team1);
    team1.setPlayer2 = jugador2;
    team1.setPlayer3 = jugador3;
    eliminarTeam(team2.getID());
    eliminarTeam(team3.getID());

  
    funcionCrearImagen(json,"3",channel)
    await muerteJugador(req.body.channel.guild_id, channel, players);

    return 1;
}

eventosAleatorios1[41] =async (jugador, players, maxHP, teams, req, channel)=>{    //se crea un jugador 
    let arraySolos = [];
    let pos1;
    let pos2;
    let pos3;
    let team1;
    let team2;
    let team3;
    let jugador1;
    let jugador2;
    let jugador3;
  
    arraySolos = buscarTresTeamsSolo(teams);
    if(arraySolos===null){return null;}
    
    pos1 = arraySolos[0]-1;
    pos2 = arraySolos[1]-1;
    pos3 = arraySolos[2]-1;
  
    team1 = teams[pos1];
    team2 = teams[pos2];
    team3 = teams[pos3];
    
    jugador1 = team1.getPlayer1();
    jugador2 = team2.getPlayer1();
    jugador3 = team3.getPlayer1();
    
  
    let evento = `${team1.getPlayer1().getNombre()}, ${jugador2.getNombre()} y ${jugador3.getNombre()} se encuentran y coinciden: “3 cabezas piensan mas que una”, y forman equipo.`;
    let json = createObject(evento,
                            [jugador1.getNombre(), jugador2.getNombre(), jugador3.getNombre()], 
                            [jugador1.getID(),     jugador2.getID(),     jugador3.getID()],
                            [await cargarAvatar(jugador1.getFoto(),jugador1.getID(),jugador1.getTieneOtraFoto(),req.body.channel.guild_id),
                             await cargarAvatar(jugador2.getFoto(),jugador2.getID(),jugador2.getTieneOtraFoto(),req.body.channel.guild_id),
                             await cargarAvatar(jugador3.getFoto(),jugador3.getID(),jugador3.getTieneOtraFoto(),req.body.channel.guild_id)],
                            [jugador1.getHP(),     jugador2.getHP(),     jugador3.getHP()],
                            [0,0,0],
                            []
                            );
  
    jugador2.setTeam(team1);
    jugador3.setTeam(team1);
    team1.setPlayer2 = jugador2;
    team1.setPlayer3 = jugador3;
    eliminarTeam(team2.getID());
    eliminarTeam(team3.getID());

  
    funcionCrearImagen(json,"3",channel)
    await muerteJugador(req.body.channel.guild_id, channel, players);

    return 1;
}

*/


/*eventosAleatorios1[40] =async (jugador, players, maxHP, teams, req, channel)=>{    //se crea un jugador 
    //let probabilidad = Math.random();
    //if(probabilidad > 0.3){return null;}                        //menor probabilidad de que ocurra

    const jugadorNuevo = new Jugador("John Cena", idIncremental.toString(), "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/jc512.png");
    let idEquipo = teams.length + 1;
    var team = new Team(idEquipo);
    team.setPlayer1 = jugadorNuevo;
    teams.push(team);
    jugadorNuevo.setTeam(team);
    players.push(jugadorNuevo);
    
    let evento = ` ${jugadorNuevo.getNombre()} se unió a la batalla`;
    let json = createObject(evento, [jugadorNuevo.getNombre()], [jugadorNuevo.getID()], [await cargarAvatar(jugadorNuevo.getFoto(),jugadorNuevo.getID(),jugadorNuevo.getTieneOtraFoto(),req.body.channel.guild_id)], [jugadorNuevo.getHP()], [0], [""], []);
  
    funcionCrearImagen(json,"1",channel);
  
    idIncremental++;
  
  await muerteJugador(req.body.channel.guild_id, channel, players);
  
    return 1;
}*/

//descomentar el return null del 16

// si algun evento necesita una condicion extra, por ejemplo tener 3 jugadores
// con vida para imprimir sus nombres, el propio evento chequea la condicion.
// si no se cumple, devuelve null
// del otro lado, cuando llamamos a esta funcion para elegir un evento, hacemos un do while(not null)
// entonces si recibe null, genera otro evento distinto
// si se cumple, retorna 1
/*----------------------------------------------*/

export { eventosAleatorios1 };
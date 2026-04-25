/*------------ ataque generico con arma ------------*/
import {
  danioExtra,
  buscarJugadorDistintoA2,
  pronounIsAre,
} from "../utils.js"
import { createObject, funcionCrearImagen, cargarAvatar, muerteJugador } from "../../utils.js";

var ataquesGenericosConArma = [];

ataquesGenericosConArma[0] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} attacked ${victima.getNombre()} with their ${jugador.getArma()["name"]}`;
  console.log(evento);
  let danio = jugador.getArma()["danio"] + danioExtra(1, 500);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [0, cuantoquita], []);

  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    console.log(extra2);
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosConArma[1] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} tosses their ${jugador.getArma()["name"]} at ${victima.getNombre()}`;
  console.log(evento);
  let danio = danioExtra(100, 200);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio));

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [0, cuantoquita], []);

  let extra1 = `${jugador.getNombre()} lost their ${jugador.getArma()["name"]}.`;
  console.log(extra1);
  json.extra.push(extra1);
  jugador.setArma(null);

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    console.log(extra2);
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosConArma[2] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} takes advantage when ${victima.getNombre()} is sleeping and throws their ${jugador.getArma()["name"]} at them.`;
  console.log(evento);
  let danio = danioExtra(100, 200);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio));

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [0, cuantoquita], []);

  let extra1 = `${jugador.getNombre()} lost their ${jugador.getArma()["name"]}.`;
  console.log(extra1);
  json.extra.push(extra1);
  jugador.setArma(null);

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    console.log(extra2);
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosConArma[3] = async (jugador, players, victima, req, channel, playersReal) => {

  let evento = `${jugador.getNombre()} was gonna attack ${victima.getNombre()} but got smitten by their eyes. ${victima.getNombre()} escaped.`;
  console.log(evento);

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [0, 0], []);

  funcionCrearImagen(json, "1x1", channel);

  return 1;
}

ataquesGenericosConArma[4] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} is about to kill ${victima.getNombre()} with their ${jugador.getArma()["name"]} but feels a pang of guilt and lets them escape.`;
  console.log(evento);

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [0, 0], []);

  funcionCrearImagen(json, "1x1", channel);

  return 1;
}

ataquesGenericosConArma[5] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} sneaks up to kill ${victima.getNombre()}, but since they've never used their ${jugador.getArma()["name"]}, they end up hurting themselves.`;
  console.log(evento);
  let danio = jugador.getArma()["danio"] + danioExtra(1, 500);

  let cuantoquita;
  if (jugador.getHP() < danio) {
    cuantoquita = jugador.getHP();
  } else {
    cuantoquita = danio;
  }

  jugador.setHP(Math.max(0, jugador.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [cuantoquita, 0], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
  }

  funcionCrearImagen(json, "1x1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosConArma[6] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} takes ${victima.getNombre()} by surprise and attacks them with their ${jugador.getArma()["name"]}.`;
  console.log(evento);
  let danio = jugador.getArma()["danio"] + danioExtra(1, 500);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    console.log(extra2);
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosConArma[7] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} murders ${victima.getNombre()} with their ${jugador.getArma()["name"]}. Nerfed`;
  console.log(evento);

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), 0],
    [0, victima.getHP()], []);

  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  victima.setHP(0);

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);

  victima.alive = 0;
  jugador.kills++;
  let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
  console.log(extra2);
  json.extra.push(extra2);

  funcionCrearImagen(json, "1x1", channel);

  await muerteJugador(req.body.channel.guild_id, channel, playersReal);

  return 1;
}

ataquesGenericosConArma[8] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${victima.getNombre()} stole a waifu from ${jugador.getNombre()} in mudae. ${jugador.getNombre()} took revenge with their ${jugador.getArma()["name"]}.`;
  console.log(evento);
  let danio = jugador.getArma()["danio"] + danioExtra(1, 500);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    console.log(extra2);
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosConArma[9] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} hits ${victima.getNombre()} with the back part of their ${jugador.getArma()["name"]}. Who said you have to use the front part all the time?`;
  console.log(evento);
  let danio = jugador.getArma()["danio"] + danioExtra(1, 100);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    console.log(extra2);
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosConArma[10] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} attacks ${victima.getNombre()} but ${victima.getNombre()} manages to escape by building 36857 wooden panels per second around themselves`;
  console.log(evento);

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [0, 0], []);

  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  funcionCrearImagen(json, "1x1", channel);

  return 1;
}

ataquesGenericosConArma[11] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} convinces ${victima.getNombre()} to not kill them, but then ${jugador.getNombre()} betrays them and kills them from behind with their ${jugador.getArma()["name"]}.`;
  console.log(evento);

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), 0],
    [0, victima.getHP()], []);

  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  victima.setHP(0);

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);

  victima.alive = 0;
  jugador.kills++;
  let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
  console.log(extra2);
  json.extra.push(extra2);

  funcionCrearImagen(json, "1x1", channel);

  await muerteJugador(req.body.channel.guild_id, channel, playersReal);

  return 1;
}

ataquesGenericosConArma[12] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} attacks ${victima.getNombre()} with their ${jugador.getArma()["name"]} and, while delivering a monologue explaining their attack, ${victima.getNombre()} manages to escape alive.`;
  console.log(evento);
  let danio = jugador.getArma()["danio"] + danioExtra(1, 250);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP() - 1;
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(1, victima.getHP() - danio)); //le quita de vida el danio base de su arma. siempre queda con vida, al menos con 1

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);

  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

ataquesGenericosConArma[13] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let pronoun2;

  if (victima.getArma() != null) {
    pronoun2 = pronounIsAre(victima.getArma());
  }

  let evento = `${jugador.getNombre()} beats ${victima.getNombre()} fairly in a duel, and decides to spare their life.`;
  console.log(evento);
  let danio = jugador.getArma()["danio"] + danioExtra(1, 250);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP() - 1;
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(1, victima.getHP() - danio)); //le quita de vida el danio base de su arma. siempre queda con vida, al menos con 1

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [0, cuantoquita], []);

  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getArma() != null) {
    victima.getArma()["usos"] -= 1;
    if (victima.getArma()["usos"] <= 0) {
      let extra2 = `The ${victima.getArma()["name"]} of ${victima.getNombre()} ${pronoun2} out of uses`;
      console.log(extra2);
      json.extra.push(extra2);
      victima.setArma(null);
    } //si su arma se queda sin usos, la pierde
  }

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

ataquesGenericosConArma[14] = async (jugador, players, victima, req, channel, playersReal) => {
  if (victima.getArma() == null) { return null; }

  let pronoun = pronounIsAre(jugador.getArma());
  let pronoun2 = pronounIsAre(victima.getArma());

  let evento = `${jugador.getNombre()} faces ${victima.getNombre()} in a duel of ${jugador.getArma()["name"]} vs ${victima.getArma()["name"]}.`;
  console.log(evento);
  let danio = danioExtra(100, 300);
  let danio2 = danioExtra(100, 300);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  let cuantoquita2;
  if (jugador.getHP() < danio2) {
    cuantoquita2 = jugador.getHP();
  } else {
    cuantoquita2 = danio2;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio));
  jugador.setHP(Math.max(0, jugador.getHP() - danio2));

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [cuantoquita2, cuantoquita], []);



  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  victima.getArma()["usos"] -= 1;
  if (victima.getArma()["usos"] <= 0) {
    let extra2 = `The ${victima.getArma()["name"]} of ${victima.getNombre()} ${pronoun2} out of uses`;
    console.log(extra2);
    json.extra.push(extra2);
    victima.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra3 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    console.log(extra3);
    json.extra.push(extra3);
  }

  console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
    victima.kills++;
    let extra4 = `${victima.getNombre()}'s kills: ${victima.getKills()}.`;
    console.log(extra4);
    json.extra.push(extra4);
  }

  //!! este es el unico evento en el cual, si se da al final de la partida, puede que no haya ningun ganador

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0 || jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosConArma[15] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} finds ${victima.getNombre()} camping and attacks them from behind with their ${jugador.getArma()["name"]}.`;
  console.log(evento);
  let danio = jugador.getArma()["danio"] + danioExtra(1, 500);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [0, cuantoquita], []);

  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    console.log(extra2);
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}


ataquesGenericosConArma[16] = async (jugador, players, victima, req, channel, playersReal) => {
  let jugador3;
  let armaRobada;
  if (victima.getArma() == null) { return null; }
  jugador3 = buscarJugadorDistintoA2(jugador, victima, players);
  if (jugador3 == null) { return null; }

  let evento = `${jugador.getNombre()} and ${victima.getNombre()} put their weapons down and face off in a fistfight. ${jugador3.getNombre()} takes the opportunity to steal their weapons.`;
  console.log(evento);
  let danio = danioExtra(80, 200);
  let danio2 = danioExtra(80, 200);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  let cuantoquita2;
  if (jugador.getHP() < danio2) {
    cuantoquita2 = jugador.getHP();
  } else {
    cuantoquita2 = danio2;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio));
  jugador.setHP(Math.max(0, jugador.getHP() - danio2));

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre(), jugador3.getNombre()],
    [jugador.getID(), victima.getID(), jugador3.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(jugador3.getFoto(), jugador3.getID(), jugador3.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP(), jugador3.getHP()],
    [cuantoquita2, cuantoquita, 0], []);

  if (jugador.getArma()["danio"] > victima.getArma()["danio"]) {
    armaRobada = jugador.getArma();
  } else {
    armaRobada = victima.getArma();
  }

  jugador3.setArma(armaRobada);

  let extra2 = `${jugador3.getNombre()} decides to keep the ${armaRobada["name"]}`;
  console.log(extra2);
  json.extra.push(extra2);

  jugador.setArma(null);
  victima.setArma(null);

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra3 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    console.log(extra3);
    json.extra.push(extra3);
  }

  console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
    victima.kills++;
    let extra4 = `${victima.getNombre()}'s kills: ${victima.getKills()}.`;
    console.log(extra4);
    json.extra.push(extra4);
  }

  funcionCrearImagen(json, "2x1", channel);

  if (victima.getHP() <= 0 || jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}


ataquesGenericosConArma[17] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} gives ${victima.getNombre()} a good beating with their ${jugador.getArma()["name"]}`;
  console.log(evento);
  let danio = jugador.getArma()["danio"] + danioExtra(100, 450);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [0, cuantoquita], []);

  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    console.log(extra2);
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosConArma[18] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} attacks ${victima.getNombre()} by surprise with their ${jugador.getArma()["name"]}.`;
  console.log(evento);
  let danio = jugador.getArma()["danio"] + danioExtra(1, 500);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    console.log(extra2);
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}


ataquesGenericosConArma[19] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} surprises ${victima.getNombre()} with their ${jugador.getArma()["name"]}.`;
  console.log(evento);
  let danio = jugador.getArma()["danio"] + danioExtra(1, 500);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    console.log(extra2);
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosConArma[20] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${victima.getNombre()} can't do react to the attack of ${jugador.getNombre()} with their ${jugador.getArma()["name"]}.`;
  console.log(evento);
  let danio = jugador.getArma()["danio"] + danioExtra(1, 500);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    console.log(extra2);
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosConArma[21] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} gives ${victima.getNombre()} a slap with their ${jugador.getArma()["name"]}.`;
  console.log(evento);
  let danio = jugador.getArma()["danio"] + danioExtra(1, 200);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    console.log(extra2);
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosConArma[22] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} hits ${victima.getNombre()} with their ${jugador.getArma()["name"]}.`;
  console.log(evento);
  let danio = jugador.getArma()["danio"] + danioExtra(1, 400);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    console.log(extra2);
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosConArma[23] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} jumps on ${victima.getNombre()} and hits them with their ${jugador.getArma()["name"]}.`;
  console.log(evento);
  let danio = jugador.getArma()["danio"] + danioExtra(1, 600);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    console.log(extra2);
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}


ataquesGenericosConArma[24] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} tosses their ${jugador.getArma()["name"]} to ${victima.getNombre()}, but ${victima.getNombre()} takes it in the air and runs away`;
  console.log(evento);

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [0, 0], []);

  let extra1 = `${jugador.getNombre()} lost their ${jugador.getArma()["name"]}`;
  console.log(extra1);
  json.extra.push(extra1);
  victima.setArma(jugador.getArma());
  jugador.setArma(null);
  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);

  funcionCrearImagen(json, "1x1", channel);

  return 1;
}


export { ataquesGenericosConArma };
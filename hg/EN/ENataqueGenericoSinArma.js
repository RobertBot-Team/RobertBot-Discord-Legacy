/*------------ ataque generico sin arma ------------*/
import {
  danioExtra,
  buscarJugadorDistintoA2,
  pronounIsAre,
} from "../utils.js"
import { createObject, funcionCrearImagen, cargarAvatar, muerteJugador } from "../../utils.js";

var ataquesGenericosSinArma = [];

ataquesGenericosSinArma[0] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} attacked ${victima.getNombre()} with no weapon`;
  let danio = danioExtra(30, 90);

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

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosSinArma[1] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} attacked ${victima.getNombre()} with his fists`;
  let danio = danioExtra(30, 90);

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

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosSinArma[2] = async (jugador, players, victima, req, channel, playersReal) => {
  if (victima.getArma() == null) { return null; }
  let pronoun = pronounIsAre(victima.getArma());

  let evento = `${jugador.getNombre()} kills ${victima.getNombre()} with their own ${victima.getArma()["name"]}`;

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), 0],
    [0, victima.getHP()], []);


  victima.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (victima.getArma()["usos"] <= 0) {
    let extra1 = `The ${victima.getArma()["name"]} of ${victima.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  victima.setHP(0);
  victima.alive = 0;
  jugador.kills++;
  let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
  json.extra.push(extra2);

  funcionCrearImagen(json, "1x1", channel);

  await muerteJugador(req.body.channel.guild_id, channel, playersReal);

  return 1;
}

ataquesGenericosSinArma[3] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} finds ${victima.getNombre()} camping and attacks them from behind`;
  let danio = danioExtra(80, 150);

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

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosSinArma[4] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} chases ${victima.getNombre()} but ${victima.getNombre()} is faster`;

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

ataquesGenericosSinArma[5] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} chases ${victima.getNombre()} and catches up to attack them`;
  let danio = danioExtra(80, 150);

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

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosSinArma[6] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} falls off a cliff and lands right on top of ${victima.getNombre()}. ${jugador.getNombre()} is fine. ${victima.getNombre()} is not.`;
  let danio = danioExtra(100, 170);

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

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosSinArma[7] = async (jugador, players, victima, req, channel, playersReal) => {

  let jugador2;
  jugador2 = buscarJugadorDistintoA2(jugador, victima, players);
  if (jugador2 == null) { return null; }

  let evento = `${jugador2.getNombre()} helps ${jugador.getNombre()} drown ${victima.getNombre()}`;

  let json = createObject(evento,
    [jugador.getNombre(), jugador2.getNombre(), victima.getNombre()],
    [jugador.getID(), jugador2.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(jugador2.getFoto(), jugador2.getID(), jugador2.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), jugador2.getHP(), 0],
    [0, 0, victima.getHP()], []);

  victima.setHP(0);
  victima.alive = 0;
  jugador.kills++;
  let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
  json.extra.push(extra2);

  funcionCrearImagen(json, "2x1", channel);


  await muerteJugador(req.body.channel.guild_id, channel, playersReal);

  return 1;
}


ataquesGenericosSinArma[8] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${victima.getNombre()} insults ${jugador.getNombre()}'s waifu and they have a good fight`;

  let danio = danioExtra(100, 200);
  let danio2 = danioExtra(45, 95);

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

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }
  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
    victima.kills++;
    let extra = `${victima.getNombre()}'s kills: ${victima.getKills()}.`;
    json.extra.push(extra);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0 || jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosSinArma[9] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${victima.getNombre()} twists their ankle while escaping from ${jugador.getNombre()}`;
  let danio = danioExtra(40, 110);

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

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosSinArma[10] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} gives ${victima.getNombre()} a good punch with their fists. It's not very effective...`;
  let danio = danioExtra(1, 7);

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

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

export { ataquesGenericosSinArma };
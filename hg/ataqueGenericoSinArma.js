/*------------ ataque generico sin arma ------------*/
import {
  danioExtra,
  buscarJugadorDistintoA2,
  pronombreOAOsAs,
  pluralS,
  pluralQuedar,
} from "./utils.js"
import { createObject, funcionCrearImagen, cargarAvatar, muerteJugador } from "../utils.js";

var ataquesGenericosSinArma = [];

ataquesGenericosSinArma[0] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} atacó sin arma a ${victima.getNombre()}`;
  console.log(evento);
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

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
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

ataquesGenericosSinArma[1] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} atacó con sus puños a ${victima.getNombre()}`;
  console.log(evento);
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

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
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

ataquesGenericosSinArma[2] = async (jugador, players, victima, req, channel, playersReal) => {
  if (victima.getArma() == null) { return null; }
  let plural = pluralS(victima.getArma());
  let pronombre = pronombreOAOsAs(victima.getArma());
  let quedar = pluralQuedar(victima.getArma());

  let evento = `${jugador.getNombre()} mata a ${victima.getNombre()} con su${plural} propi${pronombre} ${victima.getArma()["nombre"]}`;
  console.log(evento);

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), 0],
    [0, victima.getHP()], []);


  victima.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (victima.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${victima.getArma()["nombre"]} de ${victima.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  victima.setHP(0);
  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  victima.alive = 0;
  jugador.kills++;
  let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
  console.log(extra2);
  json.extra.push(extra2);

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);


  await muerteJugador(req.body.channel.guild_id, channel, playersReal);

  return 1;
}

ataquesGenericosSinArma[3] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} encuentra a ${victima.getNombre()} campeando y le ataca por detrás`;
  console.log(evento);
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

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
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

ataquesGenericosSinArma[4] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} persigue a ${victima.getNombre()} pero ${victima.getNombre()} es más rapido`;
  console.log(evento);

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [0, 0], []);

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

ataquesGenericosSinArma[5] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} persigue a ${victima.getNombre()} y consigue atacarlo`;
  console.log(evento);
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

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
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

ataquesGenericosSinArma[6] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} cae de un acantilado y aterriza justo encima de ${victima.getNombre()}. ${jugador.getNombre()} está bien. ${victima.getNombre()} no tanto.`;
  console.log(evento);
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

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
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

ataquesGenericosSinArma[7] = async (jugador, players, victima, req, channel, playersReal) => {

  let jugador2;
  jugador2 = buscarJugadorDistintoA2(jugador, victima, players);
  if (jugador2 == null) { return null; }

  let evento = `${jugador2.getNombre()} ayuda a ${jugador.getNombre()} a ahogar a ${victima.getNombre()}`;
  console.log(evento);

  let json = createObject(evento,
    [jugador.getNombre(), jugador2.getNombre(), victima.getNombre()],
    [jugador.getID(), jugador2.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(jugador2.getFoto(), jugador2.getID(), jugador2.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), jugador2.getHP(), 0],
    [0, 0, victima.getHP()], []);

  victima.setHP(0);
  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  victima.alive = 0;
  jugador.kills++;
  let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
  console.log(extra2);
  json.extra.push(extra2);

  //channel.send(json.evento);
  funcionCrearImagen(json, "2x1", channel);


  await muerteJugador(req.body.channel.guild_id, channel, playersReal);

  return 1;
}


ataquesGenericosSinArma[8] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${victima.getNombre()} insulta la waifu de ${jugador.getNombre()} y se dan a putazos un buen rato`;
  console.log(evento);

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

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    console.log(extra2);
    json.extra.push(extra2);
  }
  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
    victima.kills++;
    let extra = `Kills de ${victima.getNombre()}: ${victima.getKills()}.`;
    console.log(extra);
    json.extra.push(extra);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0 || jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosSinArma[9] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${victima.getNombre()} se tuerce el tobillo escapando de ${jugador.getNombre()}`;
  console.log(evento);
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

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
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

ataquesGenericosSinArma[10] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} le da un putazo a ${victima.getNombre()} con sus puños. No es muy efectivo...`;
  console.log(evento);
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

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
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

export { ataquesGenericosSinArma };
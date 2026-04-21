/*------------ ataque generico con arma ------------*/
import {
  danioExtra,
  buscarJugadorDistintoA2,
  pronombreElLaLosLas,
  pronombreOAOsAs,
  pronombreUnUnaUnosUnas,
  pluralS,
  pluralQuedar,
} from "../utils.js"
import { createObject, funcionCrearImagen, cargarAvatar, muerteJugador } from "../../utils.js";

var ataquesGenericosConArma = [];

ataquesGenericosConArma[0] = async (jugador, players, victima, req, channel, playersReal) => {
  let plural = pluralS(jugador.getArma());
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let evento = `${jugador.getNombre()} atacó con su${plural} ${jugador.getArma()["nombre"]} a ${victima.getNombre()}`;
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
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

ataquesGenericosConArma[1] = async (jugador, players, victima, req, channel, playersReal) => {
  let plural = pluralS(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let evento = `${jugador.getNombre()} le arroja su${plural} ${jugador.getArma()["nombre"]} a ${victima.getNombre()}`;
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



  let extra1 = `${jugador.getNombre()} perdió su${plural} ${jugador.getArma()["nombre"]}`;
  console.log(extra1);
  json.extra.push(extra1);
  jugador.setArma(null);

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

ataquesGenericosConArma[2] = async (jugador, players, victima, req, channel, playersReal) => {
  let plural = pluralS(jugador.getArma());

  let evento = `${jugador.getNombre()} aprovecha cuando ${victima.getNombre()} está durmiendo y le lanza su${plural} ${jugador.getArma()["nombre"]}.`;
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


  let extra1 = `${jugador.getNombre()} perdió su${plural} ${jugador.getArma()["nombre"]}`;
  console.log(extra1);
  json.extra.push(extra1);
  jugador.setArma(null);

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

ataquesGenericosConArma[3] = async (jugador, players, victima, req, channel, playersReal) => {

  let evento = `${jugador.getNombre()} iba a atacar a ${victima.getNombre()} pero se enamora al ver sus ojos. ${victima.getNombre()} escapa.`;
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

ataquesGenericosConArma[4] = async (jugador, players, victima, req, channel, playersReal) => {
  let plural = pluralS(jugador.getArma());

  let evento = `${jugador.getNombre()} está a punto de matar a ${victima.getNombre()} con su${plural} ${jugador.getArma()["nombre"]} pero le da penita y lo deja escapar.`;
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

ataquesGenericosConArma[5] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreUnUnaUnosUnas(jugador.getArma());
  let pronombre2 = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let evento = `${jugador.getNombre()} se escabulle para matar a ${victima.getNombre()}, pero como nunca usó ${pronombre} ${jugador.getArma()["nombre"]}, termina lastimándose a si mismo.`;
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
    let extra1 = `${pronombre2} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosConArma[6] = async (jugador, players, victima, req, channel, playersReal) => {
  let plural = pluralS(jugador.getArma());
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let evento = `${jugador.getNombre()} toma a ${victima.getNombre()} desprevenido y lo ataca con su${plural} ${jugador.getArma()["nombre"]}.`;
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
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

ataquesGenericosConArma[7] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());
  let plural = pluralS(jugador.getArma());

  let evento = `${jugador.getNombre()} asesina a ${victima.getNombre()} con su${plural} ${jugador.getArma()["nombre"]}. Nerfeado`;
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
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
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

ataquesGenericosConArma[8] = async (jugador, players, victima, req, channel, playersReal) => {
  let plural = pluralS(jugador.getArma());
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let evento = `${victima.getNombre()} le robó una waifu a ${jugador.getNombre()} en mudae. ${jugador.getNombre()} cobró venganza con su${plural} ${jugador.getArma()["nombre"]}.`;
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
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

ataquesGenericosConArma[9] = async (jugador, players, victima, req, channel, playersReal) => {
  let plural = pluralS(jugador.getArma());
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let evento = `${jugador.getNombre()} le pega a ${victima.getNombre()} con la parte de atrás de su${plural} ${jugador.getArma()["nombre"]}. ¿Quién dijo que hay que usar siempre la parte de adelante?`;
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
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

ataquesGenericosConArma[10] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let evento = `${jugador.getNombre()} ataca a ${victima.getNombre()} pero ${victima.getNombre()} consigue escapar construyendo 36857 paneles de madera por segundo a su alrededor`;
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
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  return 1;
}

ataquesGenericosConArma[11] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let evento = `${jugador.getNombre()} convence a ${victima.getNombre()} de que no lo mate, pero luego ${jugador.getNombre()} le traiciona y lo mata por detrás con ${pronombre.toLowerCase()} ${jugador.getArma()["nombre"]}.`;
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
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
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

ataquesGenericosConArma[12] = async (jugador, players, victima, req, channel, playersReal) => {
  let plural = pluralS(jugador.getArma());
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let evento = `${jugador.getNombre()} ataca a ${victima.getNombre()} con su${plural} ${jugador.getArma()["nombre"]} y, mientras da un monólogo explicando su ataque, ${victima.getNombre()} se escapa con vida.`;
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
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

ataquesGenericosConArma[13] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronombre2;
  let quedar2;
  let quedar = pluralQuedar(jugador.getArma());

  if (victima.getArma() != null) {
    pronombre2 = pronombreElLaLosLas(victima.getArma());
    quedar2 = pluralQuedar(victima.getArma());
  }

  let evento = `${jugador.getNombre()} vence justamente a ${victima.getNombre()} en un duelo, y decide perdonarle la vida.`;
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
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getArma() != null) {
    victima.getArma()["usos"] -= 1;
    if (victima.getArma()["usos"] <= 0) {
      let extra2 = `${pronombre2} ${victima.getArma()["nombre"]} de ${victima.getNombre()} se ${quedar2} sin usos`;
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

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronombre2 = pronombreElLaLosLas(victima.getArma());

  let quedar = pluralQuedar(jugador.getArma());
  let quedar2 = pluralQuedar(victima.getArma());

  let evento = `${jugador.getNombre()} se enfrenta a ${victima.getNombre()} en un duelo de ${jugador.getArma()["nombre"]} vs ${victima.getArma()["nombre"]}.`;
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
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  victima.getArma()["usos"] -= 1;
  if (victima.getArma()["usos"] <= 0) {
    let extra2 = `${pronombre2} ${victima.getArma()["nombre"]} de ${victima.getNombre()} se ${quedar2} sin usos`;
    console.log(extra2);
    json.extra.push(extra2);
    victima.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra3 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    console.log(extra3);
    json.extra.push(extra3);
  }

  console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
    victima.kills++;
    let extra4 = `Kills de ${victima.getNombre()}: ${victima.getKills()}.`;
    console.log(extra4);
    json.extra.push(extra4);
  }
  //este es el unico evento en el cual, si se da al final de la partida, puede que no haya ningun ganador

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);


  if (victima.getHP() <= 0 || jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

ataquesGenericosConArma[15] = async (jugador, players, victima, req, channel, playersReal) => {
  let plural = pluralS(jugador.getArma());
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let evento = `${jugador.getNombre()} encuentra a ${victima.getNombre()} campeando y le ataca por detrás con su${plural} ${jugador.getArma()["nombre"]}.`;
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
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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


ataquesGenericosConArma[16] = async (jugador, players, victima, req, channel, playersReal) => {
  let jugador3;
  let armaRobada;
  if (victima.getArma() == null) { return null; }
  jugador3 = buscarJugadorDistintoA2(jugador, victima, players);
  if (jugador3 == null) { return null; }

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronombre2 = pronombreElLaLosLas(victima.getArma());

  let evento = `${jugador.getNombre()} y ${victima.getNombre()} dejan las armas a un lado y se enfrentan en un duelo a puños. ${jugador3.getNombre()} aprovecha para robar las armas`;
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

  let elLaLosLas = pronombreElLaLosLas(armaRobada);

  let extra2 = `${jugador3.getNombre()} decide quedarse con ${elLaLosLas.toLowerCase()} ${armaRobada["nombre"]}`;
  console.log(extra2);
  json.extra.push(extra2);

  jugador.setArma(null);
  victima.setArma(null);


  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra3 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    console.log(extra3);
    json.extra.push(extra3);
  }

  console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
    victima.kills++;
    let extra4 = `Kills de ${victima.getNombre()}: ${victima.getKills()}.`;
    console.log(extra4);
    json.extra.push(extra4);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "2x1", channel);

  if (victima.getHP() <= 0 || jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}


ataquesGenericosConArma[17] = async (jugador, players, victima, req, channel, playersReal) => {
  let plural = pluralS(jugador.getArma());
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let evento = `${jugador.getNombre()} le da un buen putazo a ${victima.getNombre()} con su${plural} ${jugador.getArma()["nombre"]}`;
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
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

ataquesGenericosConArma[18] = async (jugador, players, victima, req, channel, playersReal) => {
  let plural = pluralS(jugador.getArma());
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let evento = `${jugador.getNombre()} ataca por sorpresa a ${victima.getNombre()} con su${plural} ${jugador.getArma()["nombre"]}.`;
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
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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


ataquesGenericosConArma[19] = async (jugador, players, victima, req, channel, playersReal) => {
  let plural = pluralS(jugador.getArma());
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let evento = `${jugador.getNombre()} sorprende a ${victima.getNombre()} con su${plural} ${jugador.getArma()["nombre"]}.`;
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
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

ataquesGenericosConArma[20] = async (jugador, players, victima, req, channel, playersReal) => {
  let plural = pluralS(jugador.getArma());
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let evento = `${victima.getNombre()} no puede hacer nada ante el ataque de ${jugador.getNombre()} con su${plural} ${jugador.getArma()["nombre"]}.`;
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
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

ataquesGenericosConArma[21] = async (jugador, players, victima, req, channel, playersReal) => {
  let plural = pluralS(jugador.getArma());
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let evento = `${jugador.getNombre()} le da una cachetada a ${victima.getNombre()} con su${plural} ${jugador.getArma()["nombre"]}.`;
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
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

ataquesGenericosConArma[22] = async (jugador, players, victima, req, channel, playersReal) => {
  let plural = pluralS(jugador.getArma());
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let evento = `${jugador.getNombre()} golpea a ${victima.getNombre()} con su${plural} ${jugador.getArma()["nombre"]}.`;
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
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

ataquesGenericosConArma[23] = async (jugador, players, victima, req, channel, playersReal) => {
  let plural = pluralS(jugador.getArma());
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let evento = `${jugador.getNombre()} se abalanza sobre ${victima.getNombre()} y le da con su${plural} ${jugador.getArma()["nombre"]}.`;
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
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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


ataquesGenericosConArma[24] = async (jugador, players, victima, req, channel, playersReal) => {
  let plural = pluralS(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());
  let oaosas = pronombreOAOsAs(jugador.getArma());

  let evento = `${jugador.getNombre()} le arroja su${plural} ${jugador.getArma()["nombre"]} a ${victima.getNombre()}, pero ${victima.getNombre()} l${oaosas} toma en el aire y se l${oaosas} lleva`;
  console.log(evento);

  let json = createObject(evento,
    [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()],
    [0, 0], []);



  let extra1 = `${jugador.getNombre()} perdió su${plural} ${jugador.getArma()["nombre"]}`;
  console.log(extra1);
  json.extra.push(extra1);
  victima.setArma(jugador.getArma());
  jugador.setArma(null);
  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  return 1;
}




export { ataquesGenericosConArma };
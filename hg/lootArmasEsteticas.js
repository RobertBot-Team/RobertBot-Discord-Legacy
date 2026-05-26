/*------------ loot de armas estéticas ------------*/
import {
  buscarJugadorConArma,
  buscarPorID,
  calcularVivos,
  chequearSonMismoEquipo,
  copiarJugadores,
  danioExtra,
  esDelMismoTeam,
  generarArma,
  haySuficientes,
  shuffleJugadores,
  imprimirTeams,
  buscarJugadorDistintoA2,
  randomSelector,
  pluralS,
  pronombreUnUnaUnosUnas,
  pronombreOAOsAs,
  pronombreElLaLosLas
} from "./utils.js"
import { Arma, Team, Jugador } from "./clases.js";
import {
  createObject,
  funcionDePrueba,
  cargarAvatar,
  funcionCrearImagen,
  get_lineOfFile
} from "../utils.js";

var eventosLootArmaEstetica = [];
let posicion;
let seleccionado;
let arrayPosiciones = [];
let fileFumos = "fumos.txt";

eventosLootArmaEstetica[0] = async (jugador, players, arma, req, channel) => {
  let categoria = arma["categoria"];
  console.log(`%c${arma["nombre"]} > ${categoria}`, "color:orange");
  let seleccionado;

  let pronombreUno = pronombreUnUnaUnosUnas(arma);

  switch (arma["nombre"]) {

    case "bigote falso":
      seleccionado = randomSelector(1, 2);
      await eventosLootArmaEstetica[seleccionado](jugador, players, arma, req, channel);
      break;

    case "gorrito de lana":
      await eventosLootArmaEstetica[3](jugador, players, arma, req, channel);
      break;

    case "Rei chiquita":
      await eventosLootArmaEstetica[4](jugador, players, arma, req, channel);
      break;

    case "sombrero mexicano":
      arrayPosiciones = [5, 8, 9];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosLootArmaEstetica[seleccionado](jugador, players, arma, req, channel);
      break;

    case "traje de furro":
      await eventosLootArmaEstetica[6](jugador, players, arma, req, channel);
      break;

    case "corona":
      await eventosLootArmaEstetica[7](jugador, players, arma, req, channel);
      break;

    case "copia del pokemon platino":
      await eventosLootArmaEstetica[10](jugador, players, arma, req, channel);
      break;

    case "fumo":
      arrayPosiciones = [11, 12, 13, 14];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosLootArmaEstetica[seleccionado](jugador, players, arma, req, channel);
      break;

    default:
      let evento = ` ${jugador.getNombre()} looteó ${pronombreUno} ${arma["nombre"]}. Qué facha`
      let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
      console.log(json.evento);
      //channel.send(json.evento);
      funcionCrearImagen(json, "1", channel);
      break;
  }



  return 1;
}


// "bigote falso"
eventosLootArmaEstetica[1] = async (jugador, players, arma, req, channel) => {
  console.log(`estetico`);
  let evento = ` ${jugador.getNombre()} encuentra un bigote falso y se lo pone para que no lo reconozcan`
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventosLootArmaEstetica[2] = async (jugador, players, arma, req, channel) => {
  console.log(`estetico`);
  let evento = ` ${jugador.getNombre()} encuentra un bigote falso y al ponerselo empieza a hablar con un acento mexicano muy mal logrado`
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "gorrito de lana"
eventosLootArmaEstetica[3] = async (jugador, players, arma, req, channel) => {
  console.log(`estetico`);
  let evento = ` ${jugador.getNombre()} encontró un gorrito de lana. Ahora ${jugador.getNombre()} ta calentito`
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "rei chiquita"
eventosLootArmaEstetica[4] = async (jugador, players, arma, req, channel) => {
  console.log(`estetico`);
  let evento = ` ${jugador.getNombre()} encontró una Rei chiquita. Lejos de usarla como arma, decide guardarsela y protegerla con su vida.`
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "sombrero"
eventosLootArmaEstetica[5] = async (jugador, players, arma, req, channel) => {
  console.log(`estetico`);
  let evento = ` ${jugador.getNombre()} encuentra un sombrero mexicano y se lo pone. Orale!!`
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "traje de furro"
eventosLootArmaEstetica[6] = async (jugador, players, arma, req, channel) => {
  console.log(`estetico`);
  let evento = ` ${jugador.getNombre()} encontró un traje de furro en un armario y se lo puso. A todos le dieron todavía más ganas de matarlo.`
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "corona"
eventosLootArmaEstetica[7] = async (jugador, players, arma, req, channel) => {
  console.log(`estetico`);
  let evento = ` ${jugador.getNombre()} looteó una corona. Claro que sí reina`
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "sombrero"
eventosLootArmaEstetica[8] = async (jugador, players, arma, req, channel) => {
  console.log(`estetico`);
  let evento = ` ${jugador.getNombre()} llega a una plaza, donde un maniquí vestido con un sombrero mexicano yace cerca de un puesto de comida callejera. ${jugador.getNombre()} le quita el sombrero y se lo pone.`
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "sombrero"
eventosLootArmaEstetica[9] = async (jugador, players, arma, req, channel) => {
  console.log(`estetico`);
  let evento = ` ${jugador.getNombre()} se cruza con un puesto de taquitos. Se come media docena y se lleva un sombrero mexicano que estaba de decoración`
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "copia del pokemon platino"
eventosLootArmaEstetica[10] = async (jugador, players, arma, req, channel) => {
  console.log(`estetico`);
  let evento = ` ${jugador.getNombre()} encuentra una copia del pokemon platino en marketplace a 3$. Lejos de querer perderla usandola como arma, prefiere guardarsela y atesorarla por el resto de su vida.`
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "fumo"
eventosLootArmaEstetica[11] = async (jugador, players, arma, req, channel) => {
  let rowNumber = 0;
  let fumo = "test";
  //seleccionar fumo del archivo
  let cantFumos = 0;
  await get_lineOfFile(0, function (err, line) {
    console.log('cant: ' + line);
    cantFumos = parseInt(line);
  }, fileFumos);

  rowNumber = randomSelector(1, cantFumos);

  await get_lineOfFile(rowNumber, function (err, line) {
    console.log('The line: ' + line);
    fumo = line;
  }, fileFumos);

  console.log(`estetico`);
  let evento = ` ${jugador.getNombre()} encuentra un fumo de ${fumo} y felizmente se lo lleva. Que feliz se ve.`
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "fumo"
eventosLootArmaEstetica[12] = async (jugador, players, arma, req, channel) => {
  let rowNumber = 0;
  let fumo = "test";
  //seleccionar fumo del archivo
  let cantFumos = 0;
  await get_lineOfFile(0, function (err, line) {
    console.log('cant: ' + line);
    cantFumos = parseInt(line);
  }, fileFumos);

  rowNumber = randomSelector(1, cantFumos);

  await get_lineOfFile(rowNumber, function (err, line) {
    console.log('The line: ' + line);
    fumo = line;
  }, fileFumos);

  console.log(`estetico`);
  let evento = ` ${jugador.getNombre()} va caminando por el centro y ve un fumo de ${fumo} en la vitrina de una tienda. Momentos después sale feliz con su fumo dejando atrás la destruída tienda... Espera... ¿Qué? ¿Ya estaba así?`
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "fumo"
eventosLootArmaEstetica[13] = async (jugador, players, arma, req, channel) => {
  let rowNumber = 0;
  let fumo = "test";
  //seleccionar fumo del archivo
  let cantFumos = 0;
  await get_lineOfFile(0, function (err, line) {
    console.log('cant: ' + line);
    cantFumos = parseInt(line);
  }, fileFumos);

  rowNumber = randomSelector(1, cantFumos);

  await get_lineOfFile(rowNumber, function (err, line) {
    console.log('The line: ' + line);
    fumo = line;
  }, fileFumos);

  console.log(`estetico`);
  let evento = `Todos bloqueen a ${jugador.getNombre()}. Acaba de encontrar un fumo de ${fumo}. Bloqueenle antes que empiece a mandar videos extraños.`
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "fumo"
eventosLootArmaEstetica[14] = async (jugador, players, arma, req, channel) => {
  let rowNumber = 0;
  let fumo = "test";
  //seleccionar fumo del archivo
  let cantFumos = 0;
  await get_lineOfFile(0, function (err, line) {
    console.log('cant: ' + line);
    cantFumos = parseInt(line);
  }, fileFumos);

  rowNumber = randomSelector(1, cantFumos);

  await get_lineOfFile(rowNumber, function (err, line) {
    console.log('The line: ' + line);
    fumo = line;
  }, fileFumos);

  console.log(`estetico`);
  let evento = `${jugador.getNombre()} ahora tiene un nuevo fumo de ${fumo}. 5 minutos después todos lo ven grabando videos que cree que son divertidos.`
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

export { eventosLootArmaEstetica };

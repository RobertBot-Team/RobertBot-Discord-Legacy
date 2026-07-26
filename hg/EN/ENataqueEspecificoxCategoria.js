/* eslint-disable no-case-declarations */
/*------------ ataque especifico por categoría ------------*/
import {
  danioExtra,
  buscarJugadorDistintoA2,
  randomSelector,
  pronombreElLaLosLas,
  pluralQuedar,
  pronounIsAre,
  pronounItThem
} from "../utils.js"
import {
  createObject,
  funcionCrearImagen,
  cargarAvatar,
  muerteJugador
} from "../../utils.js";

var eventosAtaqueEspecificoxCategoria = [];
var maxHP = 1000;

eventosAtaqueEspecificoxCategoria[0] = async (jugador, players, victima, req, channel, playersReal) => {   //recibe una COPIA, luego buscar la victima original
  let arma = jugador.getArma();
  let categoria = arma["categoria"];
  // console.log(`%c${arma["nombre"]} > ${categoria}`, "color:orange");
  let posicion;
  let seleccionado;
  let arrayPosiciones = [];

  switch (categoria) {

    case "pistola":
      if (arma["nombre"] == "fusil de francotirador") {
        arrayPosiciones = [58, 59, 60, 1, 2, 4, 5, 6, 7, 8, 21];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
        break;
      }

      if (arma["nombre"] == "NERF") {
        arrayPosiciones = [64, 65, 1, 2, 4, 5, 6, 7, 8, 21];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
        break;
      }

      if (arma["nombre"] == "pistola pesada") {
        arrayPosiciones = [66, 1, 2, 4, 5, 6, 7, 8, 21];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
        break;
      }

      if (arma["nombre"] == "pistola de bengalas") {
        arrayPosiciones = [68, 69, 70, 1, 2, 4, 5, 6, 7, 8, 21];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
        break;
      }

      //"pistola"
      arrayPosiciones = [1, 2, 4, 5, 6, 7, 8, 21];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "taser":
      await eventosAtaqueEspecificoxCategoria[3](jugador, players, victima, req, channel, playersReal);
      break;

    case "explosivos":
      if (arma["nombre"] == "fuegos artificiales") {
        arrayPosiciones = [24, 9, 10, 51];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
        break;
      }

      if (arma["nombre"] == "TNT") {
        arrayPosiciones = [31, 9, 10, 51];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
        break;
      }
      if (arma["nombre"] == "bomba") {
        arrayPosiciones = [80, 9, 10, 51];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
        break;
      }
      if (arma["nombre"] == "Samsung Galaxy Note 7") {
        arrayPosiciones = [83, 84, 9, 10, 51];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
        break;
      }

      //"explosivos"
      arrayPosiciones = [9, 10, 51];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "huevo":
      arrayPosiciones = [11, 12];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "lanzacohetes":
      arrayPosiciones = [13, 14, 15];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "jeringuilla":
      arrayPosiciones = [16, 17];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "tridente":
      arrayPosiciones = [18, 19];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;


    case "espada":
      if (arma["nombre"] == "Espada Maestra") {
        arrayPosiciones = [20, 138, 140, 141];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
        break;
      }

      if (arma["nombre"] == "Llave Espada") {
        arrayPosiciones = [8, 138, 140, 141];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
        break;
      }

      if (arma["nombre"] == "espada de iron") {
        arrayPosiciones = [106, 138, 140, 141];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
        break;
      }

      if (arma["nombre"] == "espada cuádruple") {
        arrayPosiciones = [133, 136, 138, 140, 141];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
        break;
      }

      if (arma["nombre"] == "Espada del Tiempo") {
        arrayPosiciones = [148, 136, 138, 140, 141];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
        break;
      }

      //"espada"
      arrayPosiciones = [138, 140, 141];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "pan duro":
      await eventosAtaqueEspecificoxCategoria[22](jugador, players, victima, req, channel, playersReal);
      break;

    case "nokia":
      arrayPosiciones = [23, 28, 30];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "martillo":
      await eventosAtaqueEspecificoxCategoria[25](jugador, players, victima, req, channel, playersReal);
      break;

    case "colmena":
      arrayPosiciones = [26, 27];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "ladrillo":
      await eventosAtaqueEspecificoxCategoria[29](jugador, players, victima, req, channel, playersReal);
      break;

    case "crucifijo":
      arrayPosiciones = [32, 34];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "plumero":
      await eventosAtaqueEspecificoxCategoria[35](jugador, players, victima, req, channel, playersReal);
      break;

    case "arma blanca":
      if (arma["nombre"] == "machete") {
        arrayPosiciones = [72, 33];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
        break;
      }

      if (arma["nombre"] == "lápiz") {
        arrayPosiciones = [91, 92, 93, 33];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
        break;
      }

      if (arma["nombre"] == "estaca de madera") {
        arrayPosiciones = [103, 33];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
        break;
      }
      if (arma["nombre"] == "par de estiletes de color dorado") {
        arrayPosiciones = [112, 113, 33];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
        break;
      }

      //"arma blanca"
      await eventosAtaqueEspecificoxCategoria[33](jugador, players, victima, req, channel, playersReal);
      break;

    case "gas lacrimogeno":
      arrayPosiciones = [36, 37];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "canion":
      arrayPosiciones = [39, 40, 41];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "arco y flecha":
      arrayPosiciones = [38, 42];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "ramo de flores":
      arrayPosiciones = [43, 44];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "rompibles":
      if (arma["nombre"] == "skate") {
        arrayPosiciones = [45, 46];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
        break;
      }

      if (arma["nombre"] == "guitarra") {
        arrayPosiciones = [47, 48];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
        break;
      }

      if (arma["nombre"] == "bate de beisbol") {
        await eventosAtaqueEspecificoxCategoria[49](jugador, players, victima, req, channel, playersReal);
        break;
      }

      //"rompibles"
      await eventosAtaqueEspecificoxCategoria[155](jugador, players, victima, req, channel, playersReal);
      break;

    case "veneno":
      if (arma["nombre"] == "planta venenosa") {
        arrayPosiciones = [85, 50, 52, 53];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
        break;
      }

      //"veneno"
      arrayPosiciones = [50, 52, 53];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "death note":
      arrayPosiciones = [54, 55, 56, 57];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "microfono":
      await eventosAtaqueEspecificoxCategoria[61](jugador, players, victima, req, channel, playersReal);
      break;

    case "sable de luz":
      arrayPosiciones = [62, 63];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "globo":
      await eventosAtaqueEspecificoxCategoria[71](jugador, players, victima, req, channel, playersReal);
      break;

    case "tenedor":
      await eventosAtaqueEspecificoxCategoria[73](jugador, players, victima, req, channel, playersReal);
      break;

    case "palo de golf":
      arrayPosiciones = [76, 77];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "alfiler":
      arrayPosiciones = [67, 74, 75];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "martillo de Thor":
      arrayPosiciones = [78, 79];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "varita magica":
      arrayPosiciones = [81, 82];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "cuerda":
      arrayPosiciones = [86, 87, 88];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "cráneo humano":
      await eventosAtaqueEspecificoxCategoria[90](jugador, players, victima, req, channel, playersReal);
      break;

    case "teta de plástico":
      await eventosAtaqueEspecificoxCategoria[94](jugador, players, victima, req, channel, playersReal);
      break;

    case "lanza":
      await eventosAtaqueEspecificoxCategoria[95](jugador, players, victima, req, channel, playersReal);
      break;

    case "látigo":
      arrayPosiciones = [96, 97, 98];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "gas pimienta":
      arrayPosiciones = [99, 100];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "serrucho":
      arrayPosiciones = [101, 102];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "bumeran":
      arrayPosiciones = [104, 105];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "taco de pool":
      arrayPosiciones = [107, 108, 109];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "taco":
      arrayPosiciones = [110, 111];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "escoba":
      arrayPosiciones = [114, 116];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "mando":
      arrayPosiciones = [117, 118, 119];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "repelente":
      arrayPosiciones = [120, 122];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "libro de mates":
      await eventosAtaqueEspecificoxCategoria[124](jugador, players, victima, req, channel, playersReal);
      break;

    case "regla":
      arrayPosiciones = [125, 126, 128];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "manzana":
      arrayPosiciones = [129, 131];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "fazerblaster":
      await eventosAtaqueEspecificoxCategoria[132](jugador, players, victima, req, channel, playersReal);
      break;

    case "banana":
      arrayPosiciones = [115, 121, 123, 127, 130];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "botella":

      if (arma["nombre"] == "botella de Vodka") {
        await eventosAtaqueEspecificoxCategoria[139](jugador, players, victima, req, channel, playersReal);
        break;
      }

      //"botella"
      arrayPosiciones = [134, 135];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "motosierra":
      await eventosAtaqueEspecificoxCategoria[137](jugador, players, victima, req, channel, playersReal);
      break;

    case "oniball":
      await eventosAtaqueEspecificoxCategoria[142](jugador, players, victima, req, channel, playersReal);
      break;

    case "palillos chinos":
      await eventosAtaqueEspecificoxCategoria[143](jugador, players, victima, req, channel, playersReal);
      break;

    case "caniche":
      arrayPosiciones = [144, 145];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "pikachu":
      arrayPosiciones = [146, 147];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "pepino":
      arrayPosiciones = [149, 150];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "senketsu":
      arrayPosiciones = [151, 152, 153, 154];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventosAtaqueEspecificoxCategoria[seleccionado](jugador, players, victima, req, channel, playersReal);
      break;

    case "boina con cuchillas":
      await eventosAtaqueEspecificoxCategoria[156](jugador, players, victima, req, channel, playersReal);
      break;



    default:
      let evento = ` ${jugador.getNombre()} attacks ${victima.getNombre()} with their ${jugador.getArma()["name"]}.`;

      let pronoun = pronounIsAre(jugador.getArma());

      let danio = jugador.getArma()["danio"] + danioExtra(1, 300);

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
        [0, cuantoquita],
        []);

      jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso

      if (jugador.getArma()["usos"] <= 0) {
        let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
        json.extra.push(extra1);
        jugador.setArma(null);
      } //si su arma se queda sin usos, la pierde

      if (victima.getHP() <= 0) {
        victima.alive = 0;
        jugador.kills++;
        let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
        json.extra.push(extra2);
      }
      //channel.send(json.evento);
      funcionCrearImagen(json, "1x1", channel);

      if (victima.getHP() <= 0) {
        await muerteJugador(req.body.channel.guild_id, channel, playersReal);
      }
      break;

  }//fin del Switch

  return 1;
}


// "pistola"
eventosAtaqueEspecificoxCategoria[1] = async (jugador, players, victima, req, channel, playersReal) => {

  let evento = ` ${jugador.getNombre()} shoots ${victima.getNombre()} with their ${jugador.getArma()["name"]}, causing them severe injuries.`

  let pronoun = pronounIsAre(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(1, 300);

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
    [0, cuantoquita],
    []);

  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso

  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "pistola"
eventosAtaqueEspecificoxCategoria[2] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} shoots ${victima.getNombre()} in the foot with their ${jugador.getArma()["name"]}.`;

  let pronoun = pronounIsAre(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(1, 150);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "taser"
eventosAtaqueEspecificoxCategoria[3] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} shocks ${victima.getNombre()} with their ${jugador.getArma()["name"]}.`;

  let pronoun = pronounIsAre(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(1, 500);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "pistola"
eventosAtaqueEspecificoxCategoria[4] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} fires their ${jugador.getArma()["name"]} at ${victima.getNombre()} but the bullet barely grazes them.`;

  let pronoun = pronounIsAre(jugador.getArma());

  let danio = danioExtra(10, 50);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);

  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "pistola"
eventosAtaqueEspecificoxCategoria[5] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} fires their ${jugador.getArma()["name"]} at ${victima.getNombre()}, but ${victima.getNombre()} dodges the bullet Matrix-style`;

  let pronoun = pronounIsAre(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);
  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso
  if (jugador.getArma()["usos"] <= 0) {
    let extra = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

// "pistola"
eventosAtaqueEspecificoxCategoria[6] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} tries to kill ${victima.getNombre()} with their ${jugador.getArma()["name"]} but has terrible aim and wastes all their ammo.`

  let pronoun = pronounIsAre(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);

  jugador.getArma()["usos"] = 0
  let extra = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
  jugador.setArma(null);
  json.extra.push(extra);

  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

// "pistola"
eventosAtaqueEspecificoxCategoria[7] = async (jugador, players, victima, req, channel, playersReal) => {
  let jugador3 = buscarJugadorDistintoA2(jugador, victima, players);
  if (jugador3 == null) { return null; }

  let evento = ` ${jugador.getNombre()} fires at ${jugador3.getNombre()} with their ${jugador.getArma()["name"]}, but ${victima.getNombre()} dives in to heroically save ${jugador3.getNombre()}'s life.`;

  let pronoun = pronounIsAre(jugador.getArma());

  let json = createObject(evento,
    [jugador.getNombre(), jugador3.getNombre(), victima.getNombre()],
    [jugador.getID(), jugador3.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(jugador3.getFoto(), jugador3.getID(), jugador3.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), jugador3.getHP(), 0], [0, 0, victima.getHP()], []);

  victima.setHP(0);

  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde


  victima.alive = 0;
  jugador.kills++;
  let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
  json.extra.push(extra2);

  funcionCrearImagen(json, "1x2", channel);

  await muerteJugador(req.body.channel.guild_id, channel, playersReal);

  return 1;
}

// "pistola"
eventosAtaqueEspecificoxCategoria[8] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} tries to shoot ${victima.getNombre()} with their ${jugador.getArma()["name"]} but uses the weapon backwards and shoots themselves.`;

  let pronoun = pronounIsAre(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(1, 150);

  let cuantoquita;
  if (jugador.getHP() < danio) {
    cuantoquita = jugador.getHP();
  } else {
    cuantoquita = danio;
  }

  jugador.setHP(Math.max(0, jugador.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [cuantoquita, 0], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "explosivos"
eventosAtaqueEspecificoxCategoria[9] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = ` ${jugador.getNombre()} prepares and tosses their ${jugador.getArma()["name"]}. The explosion damages ${victima.getNombre()}.`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 500);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "explosivos"
eventosAtaqueEspecificoxCategoria[10] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = ` ${jugador.getNombre()} detonates their ${jugador.getArma()["name"]} and injures ${victima.getNombre()}.`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 500);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "huevo"
eventosAtaqueEspecificoxCategoria[11] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = ` ${jugador.getNombre()} cooks their egg, eats it, and throws the hot oil at ${victima.getNombre()}.`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 200);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "huevo"
eventosAtaqueEspecificoxCategoria[12] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = ` ${jugador.getNombre()} throws their egg at ${victima.getNombre()}, and a chick pops out upon impact`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 20);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "lanzacohetes"
eventosAtaqueEspecificoxCategoria[13] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = ` ${jugador.getNombre()} fires a rocket from their rocket launcher and blasts ${victima.getNombre()}.`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 430);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "lanzacohetes"
eventosAtaqueEspecificoxCategoria[14] = async (jugador, players, victima, req, channel, playersReal) => {

  let pronoun = pronounIsAre(jugador.getArma());

  let evento = ` ${jugador.getNombre()} fires a rocket at ${victima.getNombre()} and blows them to smithereens.`;

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), 0], [0, victima.getHP()], []);

  victima.setHP(0);
  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde


  victima.alive = 0;
  jugador.kills++;
  let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
  json.extra.push(extra2);

  funcionCrearImagen(json, "1x1", channel);

  await muerteJugador(req.body.channel.guild_id, channel, playersReal);

  return 1;
}

// "lanzacohetes"
eventosAtaqueEspecificoxCategoria[15] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} fires a rocket at ${victima.getNombre()}, but it veers off course and misses`;

  let pronoun = pronounIsAre(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);

  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso
  if (jugador.getArma()["usos"] <= 0) {
    let extra = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde

  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

// "jeringuilla"
eventosAtaqueEspecificoxCategoria[16] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} le clava la ${jugador.getArma()["nombre"]} a ${victima.getNombre()} y le transmite 5G.`;

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(1, 200);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "jeringuilla"
eventosAtaqueEspecificoxCategoria[17] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} le clava la ${jugador.getArma()["nombre"]} a ${victima.getNombre()}... O eso intenta, pero se da cuenta que no tiene punta. ${victima.getNombre()} escapa.`;

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);

  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

// "tridente"
eventosAtaqueEspecificoxCategoria[18] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} summons demons with their demonic trident and orders them to chase and attack ${victima.getNombre()}`;

  let pronoun = pronounIsAre(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(1, 300);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = ` ${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "tridente"
eventosAtaqueEspecificoxCategoria[19] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} summons demons with their demonic trident to attack ${victima.getNombre()}, but they are so useless that they end up attacking ${jugador.getNombre()} instead.`;

  let pronoun = pronounIsAre(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(1, 250);

  let cuantoquita;
  if (jugador.getHP() < danio) {
    cuantoquita = jugador.getHP();
  } else {
    cuantoquita = danio;
  }

  jugador.setHP(Math.max(0, jugador.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [cuantoquita, 0], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
  }

  funcionCrearImagen(json, "1x1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

//"Espada Maestra"
eventosAtaqueEspecificoxCategoria[20] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} lanza un rayo a ${victima.getNombre()} con su Espada Maestra`;

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(100, 300);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "pistola"
eventosAtaqueEspecificoxCategoria[21] = async (jugador, players, victima, req, channel, playersReal) => {
  if (victima.getArma() == null) { return null; }

  let evento = `${jugador.getNombre()} shoots with their ${jugador.getArma()["name"]} at ${victima.getNombre()}, but the bullet doesn't fire. ${victima.getNombre()} counterattacks with their ${victima.getArma()["name"]}.`;

  let pronoun = pronounIsAre(victima.getArma());

  let danio = victima.getArma()["danio"] + danioExtra(1, 150);

  let cuantoquita;
  if (jugador.getHP() < danio) {
    cuantoquita = jugador.getHP();
  } else {
    cuantoquita = danio;
  }

  jugador.setHP(Math.max(0, jugador.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [cuantoquita, 0], []);


  victima.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (victima.getArma()["usos"] <= 0) {
    let extra1 = `The ${victima.getArma()["name"]} of ${victima.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    victima.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
    victima.kills++;
    let extra2 = ` ${victima.getNombre()}'s Kills: ${victima.getKills()}.`;
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "pan duro"
eventosAtaqueEspecificoxCategoria[22] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} hits ${victima.getNombre()} with their stale bread. It's certainly hard...`;

  let pronoun = pronounIsAre(jugador.getArma());
  let danio = jugador.getArma()["danio"] + danioExtra(1, 80);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "nokia"
eventosAtaqueEspecificoxCategoria[23] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} drops their ${jugador.getArma()["name"]} and triggers an earthquake. ${jugador.getNombre()} was too close and got caught in the disaster, falling unconscious.`;

  let danio = danioExtra(1, 100);

  let cuantoquita;
  if (jugador.getHP() < danio) {
    cuantoquita = jugador.getHP();
  } else {
    cuantoquita = danio;
  }

  jugador.setHP(Math.max(0, jugador.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre()],
    [jugador.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP()], [cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
  }

  funcionCrearImagen(json, "1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }
  return 1;
};



// "fuegos artificiales"
eventosAtaqueEspecificoxCategoria[24] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = ` ${jugador.getNombre()} lights the fireworks and tells ${victima.getNombre()} "Happy Birthday!!". ${victima.getNombre()} celebrates... and then catches fire`;

  let danio = jugador.getArma()["danio"] + danioExtra(10, 225);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}


// "martillo"
eventosAtaqueEspecificoxCategoria[25] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = ` ${jugador.getNombre()} literally hammers ${victima.getNombre()}'s head.`;

  let danio = jugador.getArma()["danio"] + danioExtra(30, 75);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "colmena"
eventosAtaqueEspecificoxCategoria[26] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = ` ${jugador.getNombre()} leaves their beehive next to ${victima.getNombre()} while they sleep. The next day, ${victima.getNombre()} wakes up with their face so swollen that they touch it with their knees.`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 100);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "colmena"
eventosAtaqueEspecificoxCategoria[27] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = ` ${jugador.getNombre()} kicks their beehive to have the bees attack ${victima.getNombre()}. The bees swarm out and sting ${jugador.getNombre()} for being a dumbass.`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 225);

  let cuantoquita;
  if (jugador.getHP() < danio) {
    cuantoquita = jugador.getHP();
  } else {
    cuantoquita = danio;
  }

  jugador.setHP(Math.max(0, jugador.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [cuantoquita, 0], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
  }

  funcionCrearImagen(json, "1x1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "nokia"
eventosAtaqueEspecificoxCategoria[28] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} throws their Nokia at ${victima.getNombre()}, making a hole in their head.`;

  let danio = jugador.getArma()["danio"];

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
};


// "ladrillo"
eventosAtaqueEspecificoxCategoria[29] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = ` ${jugador.getNombre()} throws their brick at ${victima.getNombre()}'s feet. That must hurt.`;

  let danio = jugador.getArma()["danio"] + danioExtra(15, 85);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

//** "nokia"

eventosAtaqueEspecificoxCategoria[30] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} drops their Nokia on ${victima.getNombre()}'s foot.`;

  let danio = danioExtra(90, 250);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
};


// "TNT"
eventosAtaqueEspecificoxCategoria[31] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = ` ${jugador.getNombre()} lights their TNT in front of ${victima.getNombre()}, but ${victima.getNombre()} destroys the block before it detonates... Now what?`;

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  funcionCrearImagen(json, "1x1", channel);

  return 1;
}

// "crucifijo"
eventosAtaqueEspecificoxCategoria[32] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());

  let evento = ` ${victima.getNombre()} está por atacar a ${jugador.getNombre()}, pero ${jugador.getNombre()} saca su crucifijo y ${victima.getNombre()} se escapa siseando e insultando en latín. ok?`;

  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  return 1;
}

// "Arma blanca"

eventosAtaqueEspecificoxCategoria[33] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} sticks their ${jugador.getArma()["name"]} into ${victima.getNombre()}'s head`;

  let danio = jugador.getArma()["danio"] + danioExtra(15, 85);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "crucifijo"
eventosAtaqueEspecificoxCategoria[34] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} reza con su crucifijo que por favor pueda ganar la partida, y ${victima.getNombre()} que justo se acercaba, se tropieza y cae, lastimándose. ¿Casualidad, o poder divino?`;

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(1, 50);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "plumero"
eventosAtaqueEspecificoxCategoria[35] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} waves their duster at ${victima.getNombre()}, triggering a dust-induced allergic reaction.`;

  let pronoun = pronounIsAre(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(1, 30);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "gas lacrimogeno"
eventosAtaqueEspecificoxCategoria[36] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} sprays their tear gas out of curiosity to see what it smells like. Bad idea.`;

  let danio = danioExtra(75, 120);

  let cuantoquita;
  if (jugador.getHP() < danio) {
    cuantoquita = jugador.getHP();
  } else {
    cuantoquita = danio;
  }

  jugador.setHP(Math.max(0, jugador.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre()],
    [jugador.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP()], [cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
  }

  funcionCrearImagen(json, "1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
};

// "gas lacrimogeno"
eventosAtaqueEspecificoxCategoria[37] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} throws their tear gas at ${victima.getNombre()}. If they were half-blind before, they're completely blind now.`;

  let pronoun = pronounIsAre(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(90, 300);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "arco y flecha"
eventosAtaqueEspecificoxCategoria[38] = async (jugador, players, victima, req, channel, playersReal) => {
  let jugador3 = buscarJugadorDistintoA2(jugador, victima, players);
  if (jugador3 == null) { return null; }

  let evento = `${jugador.getNombre()} shoots an arrow at ${jugador3.getNombre()} but it goes astray and hits ${victima.getNombre()}`;

  let pronoun = pronounIsAre(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(1, 70);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento,
    [jugador.getNombre(), jugador3.getNombre(), victima.getNombre()],
    [jugador.getID(), jugador3.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(jugador3.getFoto(), jugador3.getID(), jugador3.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), jugador3.getHP(), victima.getHP()], [0, 0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `The ${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x2", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "canion"
eventosAtaqueEspecificoxCategoria[39] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} gets into their cannon, shoots and falls head first into the ground. Should have used the cannonballs instead..`;

  let danio = danioExtra(100, 170);

  let cuantoquita;
  if (jugador.getHP() < danio) {
    cuantoquita = jugador.getHP();
  } else {
    cuantoquita = danio;
  }

  jugador.setHP(Math.max(0, jugador.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre()],
    [jugador.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP()], [cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
  }

  funcionCrearImagen(json, "1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
};

// "canion"
eventosAtaqueEspecificoxCategoria[40] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} shoots ${victima.getNombre()} with their balls. Like, with the cannonballs.`;

  let pronoun = pronounIsAre(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(100, 340);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "canion"
eventosAtaqueEspecificoxCategoria[41] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} gets into his cannon and fires, drawing a perfect parabola and falling headfirst on ${victima.getNombre()}.`;

  let pronoun = pronounIsAre(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(100, 300);
  let danio2 = danioExtra(50, 100);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  let cuantoquitaJ;
  if (jugador.getHP() < danio) {
    cuantoquitaJ = jugador.getHP();
  } else {
    cuantoquitaJ = danio2;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [cuantoquitaJ, cuantoquita], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }
  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
  }

  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0 || jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "arco y flecha"
eventosAtaqueEspecificoxCategoria[42] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let distancia = randomSelector(100, 1000);

  let evento = `${jugador.getNombre()} reveals their archery skills, shooting an arrow at ${victima.getNombre()} from ${distancia} meters away.`;

  let danio = jugador.getArma()["danio"] + danioExtra(50, 100);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "ramo de flores"
eventosAtaqueEspecificoxCategoria[43] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} acts as if they're going to offer their bouquet of flowers to ${victima.getNombre()}, but then they start hitting them with it.`;

  let danio = jugador.getArma()["danio"] + danioExtra(50, 100);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "ramo de flores"
eventosAtaqueEspecificoxCategoria[44] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} throws their bouquet of flowers at ${victima.getNombre()}. ${victima.getNombre()} tries to catch it, believing they can get married this way, but they get hurt by the thorns.`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 50);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "rompibles > skate"
eventosAtaqueEspecificoxCategoria[45] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} on his skateboard says, "I call this trick The Woodcutter", and throws the skateboard at ${victima.getNombre()}'s legs.`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 100);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "rompibles > skate"
eventosAtaqueEspecificoxCategoria[46] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} says, "I call this trick The eh...", and just breaks the skateboard on ${victima.getNombre()}'s head.`;

  let danio = jugador.getArma()["danio"] + danioExtra(50, 150);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "rompibles > guitarra"
eventosAtaqueEspecificoxCategoria[47] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} begins to play their guitar so badly that ${victima.getNombre()} starts bleeding from the ears. Success?`;

  let danio = jugador.getArma()["danio"] + danioExtra(60, 100);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "rompibles > guitarra"
eventosAtaqueEspecificoxCategoria[48] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} breaks their guitar over ${victima.getNombre()}'s head. At least we won't have to listen to them play anymore.`;

  let danio = jugador.getArma()["danio"] + danioExtra(150, 250);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "rompibles > bate de beisbol"
eventosAtaqueEspecificoxCategoria[49] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} takes their baseball bat and hits ${victima.getNombre()}'s face. It's a home run!!`;

  let danio = jugador.getArma()["danio"] + danioExtra(150, 250);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "Veneno"
eventosAtaqueEspecificoxCategoria[50] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} poisons ${victima.getNombre()}'s drink with their ${jugador.getArma()["name"]}, but gets confused and drinks the poisoned beverage themself.`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 225);

  let cuantoquita;
  if (jugador.getHP() < danio) {
    cuantoquita = jugador.getHP();
  } else {
    cuantoquita = danio;
  }

  jugador.setHP(Math.max(0, jugador.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [cuantoquita, 0], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
  }

  funcionCrearImagen(json, "1x1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "explosivos"
eventosAtaqueEspecificoxCategoria[51] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} lights their ${jugador.getArma()["name"]} and makes ${victima.getNombre()} fly through the air.`;

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), 0], [0, victima.getHP()], []);

  victima.setHP(0);

  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "Veneno"
eventosAtaqueEspecificoxCategoria[52] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} poisons ${victima.getNombre()}'s drink with their ${jugador.getArma()["name"]} without them noticing. ${victima.getNombre()} drinks it innocently.`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 250);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "Veneno"
eventosAtaqueEspecificoxCategoria[53] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} poisons ${victima.getNombre()}'s drink with their ${jugador.getArma()["name"]} without them noticing. ${victima.getNombre()} drinks it and suffers from stomach ache.`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 250);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "Death Note > Death Note"
eventosAtaqueEspecificoxCategoria[54] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} escribe su nombre en la Death Note para saber que es suya. Y luego muere.`;

  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre()],
    [jugador.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [0], [jugador.getHP()], []);

  jugador.setHP(0);

  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde


  jugador.alive = 0;
  jugador.kills++;
  let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
  json.extra.push(extra2);

  //channel.send(json.evento);
  funcionCrearImagen(json, "1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "Death Note"
eventosAtaqueEspecificoxCategoria[55] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} escribe el nombre de ${victima.getNombre()} en la Death Note, efectivamente matándolo en el acto.`;

  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), 0], [0, victima.getHP()], []);

  victima.setHP(0);

  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "Death Note"
eventosAtaqueEspecificoxCategoria[56] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} escribe el nombre de ${victima.getNombre()} en la Death Note, y lo mata al instante.`;

  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), 0], [0, victima.getHP()], []);

  victima.setHP(0);

  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "Death Note"
eventosAtaqueEspecificoxCategoria[57] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} escribe el nombre de ${victima.getNombre()} en la Death Note, pero lo escribe mal, así que no produce ningún resultado.`;

  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);

  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}


// "fusil de francotirador"
eventosAtaqueEspecificoxCategoria[58] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let metros = randomSelector(100, 999);
  let evento = `${jugador.getNombre()} lays on the ground and gives ${victima.getNombre()} a massive headshot from ${metros} meters away with their sniper rifle.`;

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), 0], [0, victima.getHP()], []);

  victima.setHP(0);

  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "fusil de francotirador"
eventosAtaqueEspecificoxCategoria[59] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} tries to shoot ${victima.getNombre()} with their sniper rifle but there's too much wind. ${victima.getNombre()} escapes.`

  let pronoun = pronounIsAre(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);
  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso
  if (jugador.getArma()["usos"] <= 0) {
    let extra = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

// "fusil de francotirador"
eventosAtaqueEspecificoxCategoria[60] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} aims at ${victima.getNombre()} with their sniper rifle and fires, but the shot is not fatal.`;

  let danio = jugador.getArma()["danio"] + danioExtra(150, 500);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(10, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde


  funcionCrearImagen(json, "1x1", channel);


  return 1;
}

// "microfono"
eventosAtaqueEspecificoxCategoria[61] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} turns on their microphone and starts singing. ${victima.getNombre()}'s ears are bleeding.`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 70);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "sable de luz"
eventosAtaqueEspecificoxCategoria[62] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} cortó a ${victima.getNombre()} como un fiambre con su sable de luz. Fium fium`;

  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), 0], [0, victima.getHP()], []);

  victima.setHP(0);

  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "sable de luz"

eventosAtaqueEspecificoxCategoria[63] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} le dice a ${victima.getNombre()} "Yo soy tu padre", y le corta un brazo con su sable de luz`;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(250, 400);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}


// "NERF"
eventosAtaqueEspecificoxCategoria[64] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} mete balas reales a su NERF y le dispara a ${victima.getNombre()} que estaba desprevenido.`;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(150, 450);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "NERF"
eventosAtaqueEspecificoxCategoria[65] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} dispara a ${victima.getNombre()} con su NERF. Es mejor que nada.`;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(1, 80);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "pistola pesada"
eventosAtaqueEspecificoxCategoria[66] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} tries to shoot ${victima.getNombre()} with their heavy pistol but they can't. It's too heavy.`

  let pronoun = pronounIsAre(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);
  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso
  if (jugador.getArma()["usos"] <= 0) {
    let extra = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

// "alfiler"
eventosAtaqueEspecificoxCategoria[67] = async (jugador, players, victima, req, channel, playersReal) => {
  if (victima.hp == maxHP) { return null };
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} stitches the wounds of ${victima.getNombre()} with their needle. Hold on, wasn't the idea to attack each other?`;

  let danio = jugador.getArma()["danio"] + danioExtra(100, 200);
  let cuantoquita;
  if (maxHP - victima.getHP() < danio) {
    cuantoquita = maxHP - victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.min(maxHP, victima.getHP() + danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, -cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "pistola de bengalas"
eventosAtaqueEspecificoxCategoria[68] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} shoots a flare because they want to abandon the game. Everyone ignores it.`

  let pronoun = pronounIsAre(jugador.getArma());
  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);
  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso
  if (jugador.getArma()["usos"] <= 0) {
    let extra = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

// "pistola de bengalas"
eventosAtaqueEspecificoxCategoria[69] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} shoots a flare towards ${victima.getNombre()} and burns their clothes. ${victima.getNombre()} runs around naked now.`

  let pronoun = pronounIsAre(jugador.getArma());
  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);
  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso
  if (jugador.getArma()["usos"] <= 0) {
    let extra = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

// "pistola de bengalas"
eventosAtaqueEspecificoxCategoria[70] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} shoots a flare at ${victima.getNombre()} and produces them first-degree burns.`;

  let danio = jugador.getArma()["danio"] + danioExtra(150, 400);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "globo"
eventosAtaqueEspecificoxCategoria[71] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} bursts his balloon with confetti. Was that supposed to hurt anyone?`

  let pronoun = pronounIsAre(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);
  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

// "arma blanca > machete"
eventosAtaqueEspecificoxCategoria[72] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} went off… to the hills? They say they're going to fight the Devil with their machete.`

  let json = createObject(evento, [jugador.getNombre()],
    [jugador.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "tenedor"
eventosAtaqueEspecificoxCategoria[73] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} throws his fork at ${victima.getNombre()} but it doesn't even come close to dealing any damage. Who made this lunatic think they were Aquaman?`

  let pronoun = pronounIsAre(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);
  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

//"alfiler"
eventosAtaqueEspecificoxCategoria[74] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} gives ${victima.getNombre()} a piercing with their pin. What?`

  let pronoun = pronounIsAre(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);
  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso
  if (jugador.getArma()["usos"] <= 0) {
    let extra = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

//"alfiler"
eventosAtaqueEspecificoxCategoria[75] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} pinches ${victima.getNombre()} with their pin. Wow, isn't that too much damage?`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 150);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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



// "palo de golf"
eventosAtaqueEspecificoxCategoria[76] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} plays golf peacefully. No one expected that 2115 meters away, the ball would hit ${victima.getNombre()} right in the face.`;

  let danio = jugador.getArma()["danio"] + danioExtra(150, 250);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

// "palo de golf"
eventosAtaqueEspecificoxCategoria[77] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} was about to hit the golf ball but ${victima.getNombre()} crossed in front and took collateral damage.`;

  let danio = jugador.getArma()["danio"] + danioExtra(50, 100);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"martillo de Thor"
eventosAtaqueEspecificoxCategoria[78] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} throws the Thor's Hammer at ${victima.getNombre()}, but since they didn't aim for the head, ${victima.getNombre()} remains alive.`;

  let danio = jugador.getArma()["danio"] + danioExtra(250, 450);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(1, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"martillo de Thor"
eventosAtaqueEspecificoxCategoria[79] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} strikes ${victima.getNombre()} with lightning. According to ${jugador.getNombre()}, it's "Noob…69?"`;

  let danio = jugador.getArma()["danio"] + danioExtra(150, 300);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"explosivos > bomba"
eventosAtaqueEspecificoxCategoria[80] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} bombards ${victima.getNombre()} with their bomb. They're having a blast.`;

  let danio = jugador.getArma()["danio"] + danioExtra(100, 350);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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


// varita magica
eventosAtaqueEspecificoxCategoria[81] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} points their magic wand at ${victima.getNombre()} and starts reciting random words. ${victima.getNombre()} laughs, but suddenly starts to feel unwell.`;

  let danio = jugador.getArma()["danio"] + danioExtra(100, 250);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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


//"varita magica"
eventosAtaqueEspecificoxCategoria[82] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} apunta con su varita a ${victima.getNombre()} y comienza recitar palabras random. ${victima.getNombre()} se le rie en la cara`;

  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);

  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

//"explosivos > Samsung Galaxy Note 7"
eventosAtaqueEspecificoxCategoria[83] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} arroja su Samsung Galaxy Note 7 a ${victima.getNombre()} pero la explosión no le hace mucho daño`;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(1, 50);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

//"explosivos > Samsung Galaxy Note 7"
eventosAtaqueEspecificoxCategoria[84] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} abre Genshin en su Samsung Galaxy Note 7 y se lo arroja a ${victima.getNombre()}, a quien le explota muy cerca`;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(100, 250);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

//"veneno > planta venenosa"
eventosAtaqueEspecificoxCategoria[85] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} tells ${victima.getNombre()} to pet their poisonous plant. The plant bites ${victima.getNombre()}'s finger.`;

  let danio = jugador.getArma()["danio"] + danioExtra(50, 120);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"cuerda"
eventosAtaqueEspecificoxCategoria[86] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} ties ${victima.getNombre()} to a tree with their rope`;

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);

  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"cuerda"
eventosAtaqueEspecificoxCategoria[87] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} hangs ${victima.getNombre()} with their rope, killing them on the spot`;

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), 0], [0, victima.getHP()], []);

  victima.setHP(0);

  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"cuerda"
eventosAtaqueEspecificoxCategoria[88] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} hangs ${victima.getNombre()} with their rope, but doesn't realize they left them alive.`;

  let danio = jugador.getArma()["danio"] + danioExtra(250, 450);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(1, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"espada > Llave Espada"
eventosAtaqueEspecificoxCategoria[89] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} abre la barrera espacial que separa este mundo de otros con su Llave Espada, y empuja a ${victima.getNombre()} dentro. No se supo más de él.`;

  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), 0], [0, victima.getHP()], []);

  victima.setHP(0);

  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

//"cráneo humano"
eventosAtaqueEspecificoxCategoria[90] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} shows ${victima.getNombre()} the human skull they found. ${victima.getNombre()} gets scared and stumbles, hurting themselves.`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 100);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"arma blanca > lápiz"
eventosAtaqueEspecificoxCategoria[91] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} stabs ${victima.getNombre()}'s hand with the pencil. Ouch, that mark won't go away in a lifetime`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 200);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"arma blanca > lápiz"
eventosAtaqueEspecificoxCategoria[92] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} stabs ${victima.getNombre()} in the eye with their pencil.`;

  let danio = jugador.getArma()["danio"] + danioExtra(100, 300);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"arma blanca > lápiz"

eventosAtaqueEspecificoxCategoria[93] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} writes a note with their pencil to ${victima.getNombre()} that says "I don't love you anymore." ${victima.getNombre()} takes heart damage 💔`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 150);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses.`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"teta de plástico"
eventosAtaqueEspecificoxCategoria[94] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} se pone la teta de plástico y se la muestra a ${victima.getNombre()}, quien pierde vida por sangrado de nariz `;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(1, 150);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

//"lanza"
eventosAtaqueEspecificoxCategoria[95] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} throws their spear at ${victima.getNombre()}, who is, unfortunately, struck by it.`;

  let danio = jugador.getArma()["danio"] + danioExtra(150, 250);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"látigo"
eventosAtaqueEspecificoxCategoria[96] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} lashes ${victima.getNombre()} with their whip. It hurts, but ${victima.getNombre()} seems to enjoy it.`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 20);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"látigo"
eventosAtaqueEspecificoxCategoria[97] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} is going to lash ${victima.getNombre()} with their whip, and ${victima.getNombre()} says "oh yes, lash me". ${jugador.getNombre()} regrets it and goes to meditate on their life`;

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);

  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"látigo"
eventosAtaqueEspecificoxCategoria[98] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} lashes ${victima.getNombre()} with their whip. ${victima.getNombre()} lets out a loud groan. ${jugador.getNombre()} feels satisfied for causing harm. ${victima.getNombre()} hides their shame; they don't want ${jugador.getNombre()} to realize it was out of pleasure and not pain.`;

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);

  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"gas pimienta"
eventosAtaqueEspecificoxCategoria[99] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} sprays pepper spray at ${victima.getNombre()} in the eyes`;

  let danio = jugador.getArma()["danio"] + danioExtra(50, 120);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"gas pimienta"
eventosAtaqueEspecificoxCategoria[100] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = ` ${victima.getNombre()} insists on ${jugador.getNombre()} to taste their pepper spray. After being sprayed in the mouth, ${victima.getNombre()} is left coughing for hours`;

  let danio = jugador.getArma()["danio"] + danioExtra(90, 160);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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


// "serrucho"
eventosAtaqueEspecificoxCategoria[101] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} utilizes their handsaw to attempt to build... something? But they don't know how to use it and cut their fingers. Who came up with the idea of giving it to them in the first place?`;

  let pronoun = pronounIsAre(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(1, 80);

  let cuantoquita;
  if (jugador.getHP() < danio) {
    cuantoquita = jugador.getHP();
  } else {
    cuantoquita = danio;
  }

  jugador.setHP(Math.max(0, jugador.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre()],
    [jugador.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP()], [cuantoquita], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
  }

  funcionCrearImagen(json, "1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}


//"serrucho"
eventosAtaqueEspecificoxCategoria[102] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = ` ${jugador.getNombre()} demonstrates their carpentry skills by creating a trap with their handsaw. Everyone thinks it won't work until ${victima.getNombre()} falls into it and gets hurt. It seems they know how to handle lumber.`;

  let danio = jugador.getArma()["danio"] + danioExtra(50, 120);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"estaca de madera"
eventosAtaqueEspecificoxCategoria[103] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = ` ${jugador.getNombre()} is convinced that ${victima.getNombre()} is a vampire, and drives their wooden stake into their chest. To no one's surprise, ${victima.getNombre()} screams in pain, ultimately demonstrating that... having a stake driven into you, hurts.`;

  let danio = jugador.getArma()["danio"] + danioExtra(50, 200);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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


//"bumeran"
eventosAtaqueEspecificoxCategoria[104] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = ` ${jugador.getNombre()} tosses their boomerang and hits ${victima.getNombre()} in the head. Let's hope they don't get a bruise.`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 25);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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


//"bumeran"
eventosAtaqueEspecificoxCategoria[105] = async (jugador, players, victima, req, channel, playersReal) => {
  if (victima.getArma() == null) { return null; }

  let armaAux = victima.getArma();

  let evento = ` ${jugador.getNombre()} throws their boomerang at ${victima.getNombre()} and steals their ${victima.getArma()["name"]}. What the...? `;

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);

  jugador.setArma(armaAux);
  victima.setArma(null);

  let extra1 = ` ${victima.getNombre()} lost their ${armaAux["name"]}.`;
  json.extra.push(extra1);

  funcionCrearImagen(json, "1x1", channel);

  return 1;
}


//"espada > espada de iron"
eventosAtaqueEspecificoxCategoria[106] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = ` ${jugador.getNombre()} jumps before striking ${victima.getNombre()} with their iron sword, landing a critical hit and dealing more damage`;

  let danio = jugador.getArma()["danio"] + danioExtra(50, 120);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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


//"taco de pool"
eventosAtaqueEspecificoxCategoria[107] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = ` ${jugador.getNombre()} and ${victima.getNombre()} play a game of pool. ${victima.getNombre()} loses and receives a pool cue to the stomach.`;

  let danio = jugador.getArma()["danio"] + danioExtra(50, 120);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"taco de pool"
eventosAtaqueEspecificoxCategoria[108] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = ` ${jugador.getNombre()} and ${victima.getNombre()} play a game of pool. ${jugador.getNombre()} gets angry because they are losing and smashes their pool cue into ${victima.getNombre()}'s hand. Haha!! try to win now!`;

  let danio = jugador.getArma()["danio"] + danioExtra(100, 200);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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


//"taco de pool"
eventosAtaqueEspecificoxCategoria[109] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = ` ${jugador.getNombre()} and ${victima.getNombre()} play a game of pool. ${jugador.getNombre()} aims wrong and instead of hitting the white ball, they hit... another ball.`;

  let danio = jugador.getArma()["danio"] + danioExtra(100, 230);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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


// "taco"
eventosAtaqueEspecificoxCategoria[110] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} le tira su taco encima a ${victima.getNombre()}. Qué desperdicio..`

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);
  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}


//"taco"
eventosAtaqueEspecificoxCategoria[111] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} arroja su taco a los ojos de ${victima.getNombre()}. ¡Qué bien que era extra picante!`;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(60, 100);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}


//"par de estiletes de color dorado"
eventosAtaqueEspecificoxCategoria[112] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = ` ${jugador.getNombre()}'s eyes change when they attack ${victima.getNombre()} with their ${jugador.getArma()["name"]}.`;

  let danio = jugador.getArma()["danio"] + danioExtra(50, 135);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"par de estiletes de color dorado"
eventosAtaqueEspecificoxCategoria[113] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = ` ${jugador.getNombre()} activates the assassination mode and repeatedly rips the skin of ${victima.getNombre()} with their golden stilettos.`;

  let danio = jugador.getArma()["danio"] + danioExtra(100, 330);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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


// "escoba"
eventosAtaqueEspecificoxCategoria[114] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} sweeps ${victima.getNombre()}'s feet and takes their luck.`

  let pronoun = pronounIsAre(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);
  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

//"banana"

eventosAtaqueEspecificoxCategoria[115] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} peels the banana, throws the peel in the middle of the road, and hides to wait. No one ever passed by there.`;

  let json = createObject(evento, [jugador.getNombre()],
    [jugador.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP()], [0], []);

  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  funcionCrearImagen(json, "1", channel);

  return 1;
}


//"escoba"
eventosAtaqueEspecificoxCategoria[116] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = ` ${jugador.getNombre()} hits ${victima.getNombre()} with the broom, looking like a Latin mother.`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 50);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"mando"
eventosAtaqueEspecificoxCategoria[117] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} le arroja su ${jugador.getArma()["nombre"]} a ${victima.getNombre()}. Tampoco perdió mucho.`;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(1, 80);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}


//"mando"
eventosAtaqueEspecificoxCategoria[118] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} ataca a ${victima.getNombre()} con su ${jugador.getArma()["nombre"]}. Primera vez que no se duerme usándolo.`;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(50, 110);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}


//"mando"
eventosAtaqueEspecificoxCategoria[119] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} ahorca a ${victima.getNombre()} con el cable de su ${jugador.getArma()["nombre"]}. Resultó útil.`;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(100, 200);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

//"repelente"
eventosAtaqueEspecificoxCategoria[120] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = ` ${jugador.getNombre()} sprays ${victima.getNombre()} with their shark repellant, but it doesn't do much damage. Why did he use it if they're not even a shark?`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 10);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"banana"
eventosAtaqueEspecificoxCategoria[121] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} peals the banana, throws the peel on the ground, and hides to wait. After a few minutes, ${victima.getNombre()} passes and trips on the peel. Operation Banana was a success.`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 50);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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


//"repelente"
eventosAtaqueEspecificoxCategoria[122] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = ` ${jugador.getNombre()} sprays ${victima.getNombre()} with their shark repellent, and it was very effective. Why? And where in the world did he get that repellent?`;

  let danio = jugador.getArma()["danio"] + danioExtra(120, 180);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"banana"
eventosAtaqueEspecificoxCategoria[123] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `"Wanna peel it for me?" ${jugador.getNombre()} asks ${victima.getNombre()} to peel their banana. ${victima.getNombre()} decides to help and peels it, and as thanks, ${jugador.getNombre()} lets them have some of their banana.`;

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);

  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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


//"libro de mates"
eventosAtaqueEspecificoxCategoria[124] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = ` ${jugador.getNombre()} takes their math book and starts explaining limits by definition to ${victima.getNombre()}. ${victima.getNombre()} loses years of life.`;

  let danio = jugador.getArma()["danio"] + danioExtra(50, 120);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"regla"
eventosAtaqueEspecificoxCategoria[125] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} ataca a ${victima.getNombre()} con su regla de metal, pero ${victima.getNombre()} logra evitar el golpe con su brazo. Sin embargo ${victima.getNombre()} se hizo mucho daño.`;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(50, 120);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "regla"
eventosAtaqueEspecificoxCategoria[126] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());

  let evento = ` ${jugador.getNombre()} golpea con su regla de metal a ${victima.getNombre()} en la cabeza. Le causa traumatismos y se murió al instante. Y decían que no servía para nada.`;

  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), 0], [0, victima.getHP()], []);

  victima.setHP(0);

  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde


  victima.alive = 0;
  jugador.kills++;
  let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
  json.extra.push(extra2);


  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  await muerteJugador(req.body.channel.guild_id, channel, playersReal);

  return 1;
}

//"banana"
eventosAtaqueEspecificoxCategoria[127] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `"Wanna peel it for me?" ${jugador.getNombre()} asks ${victima.getNombre()} to peel their banana. ${victima.getNombre()} thinks they're being insulted and starts hitting them. Poor thing.. They just wanted their banana peeled.`;

  let danio = danioExtra(50, 100);

  let cuantoquita;
  if (jugador.getHP() < danio) {
    cuantoquita = jugador.getHP();
  } else {
    cuantoquita = danio;
  }

  jugador.setHP(Math.max(0, jugador.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [cuantoquita, 0], []);

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }
  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
    victima.kills++;
    let extra2 = `${victima.getNombre()}'s kills: ${victima.getKills()}.`;
    json.extra.push(extra2);
  }

  funcionCrearImagen(json, "1x1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}


// "regla"
eventosAtaqueEspecificoxCategoria[128] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} intenta golpear a ${victima.getNombre()} con su regla de metal, pero en el intento le cayó en el pie y se hizo mucho daño solo. Qué pendejo.`;

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(100, 150);

  let cuantoquita;
  if (jugador.getHP() < danio) {
    cuantoquita = jugador.getHP();
  } else {
    cuantoquita = danio;
  }

  jugador.setHP(Math.max(0, jugador.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [cuantoquita, 0], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

//"manzana"
eventosAtaqueEspecificoxCategoria[129] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = ` ${jugador.getNombre()} eats their apple, and spits the seeds at ${victima.getNombre()}. It causes more annoyance than damage. `;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 5);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"banana"
eventosAtaqueEspecificoxCategoria[130] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `"Wanna peel it for me?" ${jugador.getNombre()} asks ${victima.getNombre()} to peel their banana. ${victima.getNombre()} calls them out for harassment, and everyone runs off to chase them. Hours later, ${jugador.getNombre()} turns up in a black bag.`;

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [0, victima.getHP()], [jugador.getHP(), 0], []);

  jugador.setHP(0); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  jugador.alive = 0;

  funcionCrearImagen(json, "1x1", channel);

  await muerteJugador(req.body.channel.guild_id, channel, playersReal);

  return 1;
}


//"manzana"
eventosAtaqueEspecificoxCategoria[131] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} shouts "Learn the theory of gravity!!" and throws their apple at ${victima.getNombre()}'s head`;

  let danio = jugador.getArma()["danio"] + danioExtra(50, 100);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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


//"fazerblaster"
eventosAtaqueEspecificoxCategoria[132] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} va a disparar su Fazerblaster contra ${victima.getNombre()}. Pero el Fazerblaster se buguea y no hace nada.`

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);
  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso
  if (jugador.getArma()["usos"] <= 0) {
    let extra = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}


//"espada > espada cuádruple"
eventosAtaqueEspecificoxCategoria[133] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} utiliza su Espada cuadruple para crear 4 copias suyas y las copias… ¿golpean a puños a ${victima.getNombre()}? ¿No era mejor que utilizaran la espada? `;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = danioExtra(50, 100);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

//"botella"
eventosAtaqueEspecificoxCategoria[134] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `Después de beberse toda la ${jugador.getArma()["nombre"]}, ${jugador.getNombre()} le parte la botella en la cabeza a ${victima.getNombre()} `;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(150, 200);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

//"botella"
eventosAtaqueEspecificoxCategoria[135] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()}, completamente alcoholizado, arroja su ${jugador.getArma()["nombre"]} a ${victima.getNombre()} `;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(75, 120);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

//"espada > espada cuádruple"
eventosAtaqueEspecificoxCategoria[136] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} usa su espada cuádruple y pone en cuatro a ${victima.getNombre()}. `;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(100, 150);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "motosierra"
eventosAtaqueEspecificoxCategoria[137] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()}: "I want sex!!!" Messing around with the chainsaw, ${jugador.getNombre()} ended up hurting themselves.`;

  let danio = jugador.getArma()["danio"] + danioExtra(70, 120);

  let cuantoquita;
  if (jugador.getHP() < danio) {
    cuantoquita = jugador.getHP();
  } else {
    cuantoquita = danio;
  }

  jugador.setHP(Math.max(0, jugador.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre()],
    [jugador.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP()], [cuantoquita], []);


  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
  }

  funcionCrearImagen(json, "1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

//"espada"
eventosAtaqueEspecificoxCategoria[138] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} passes running by ${victima.getNombre()} with their ${jugador.getArma()["name"]}. It seems they didn't do anything, but suddenly a strand of their hair falls off.`;

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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


//"botella > botella de Vodka"
eventosAtaqueEspecificoxCategoria[139] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()}, le lanza su botella de vodka vacía a ${victima.getNombre()} mientras canta el himno de Rusia :flag_ru: :flag_ru: `;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(1, 50);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

//"espada"
eventosAtaqueEspecificoxCategoria[140] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} slashes ${victima.getNombre()} with their ${jugador.getArma()["name"]}.`;

  let danio = jugador.getArma()["danio"] + danioExtra(100, 150);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"espada"
eventosAtaqueEspecificoxCategoria[141] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} slashes ${victima.getNombre()} with their ${jugador.getArma()["name"]} and ${victima.getNombre()} loses a lot of blood.`;

  let danio = jugador.getArma()["danio"] + danioExtra(300, 450);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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


//"oniball"
eventosAtaqueEspecificoxCategoria[142] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} usa la oniball para sacar a un oni y hacer que ${victima.getNombre()} reciba daño por cringe. `;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(25, 125);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

//"palillos chinos"
eventosAtaqueEspecificoxCategoria[143] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} sticks their chinese chopsticks in both ${victima.getNombre()}'s eyes `;

  let danio = jugador.getArma()["danio"] + danioExtra(100, 150);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"caniche"
eventosAtaqueEspecificoxCategoria[144] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} entrenó a su caniche para que ataque a ${victima.getNombre()}. El caniche va y lo muerde para demostrarle lo aprendido.`;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(50, 100);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

//"caniche"
eventosAtaqueEspecificoxCategoria[145] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `El caniche de ${jugador.getNombre()} le muerde el qlo a ${victima.getNombre()}`;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(20, 70);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

//"pikachu"
eventosAtaqueEspecificoxCategoria[146] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} le ordenó a su Pikachu que ataque a ${victima.getNombre()}. Pero Pikachu falló y le quemó a ${victima.getNombre()} su bicicleta`

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);
  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso
  if (jugador.getArma()["usos"] <= 0) {
    let extra = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

//"pikachu"
eventosAtaqueEspecificoxCategoria[147] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `"Placaje eléctrico". Pikachu se rodeó de electricidad y embistió a ${victima.getNombre()} por órdenes de ${jugador.getNombre()}`;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(120, 200);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

//"espada" > "Espada del Tiempo"
eventosAtaqueEspecificoxCategoria[148] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} used his weather sword and... it got sunny.`

  let pronoun = pronounIsAre(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);
  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso
  if (jugador.getArma()["usos"] <= 0) {
    let extra = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

//"pepino"
eventosAtaqueEspecificoxCategoria[149] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());

  let evento = `${jugador.getNombre()} buried their cucumber in ${victima.getNombre()}'s throat, and ${victima.getNombre()} died slowly in agony (or pleasure)`;

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), 0], [0, victima.getHP()], []);

  victima.setHP(0);

  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde


  victima.alive = 0;
  jugador.kills++;
  let extra2 = `${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
  json.extra.push(extra2);


  funcionCrearImagen(json, "1x1", channel);

  await muerteJugador(req.body.channel.guild_id, channel, playersReal);

  return 1;
}

//"pepino"
eventosAtaqueEspecificoxCategoria[150] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `${jugador.getNombre()} grabs their cucumber and shoves it up ${victima.getNombre()}'s [REDACTED]`;

  let danio = jugador.getArma()["danio"] + danioExtra(120, 200);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"senketsu"
eventosAtaqueEspecificoxCategoria[151] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` "Senketsu Senjin!!!" Senketsu saca cuchillas del cuerpo de ${jugador.getNombre()}, quien las usa para atacar a ${victima.getNombre()}. `;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(100, 150);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

//"senketsu"
eventosAtaqueEspecificoxCategoria[152] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` "Senketsu Shippū!!" ${jugador.getNombre()} activa las alas de Senketsu y se va volando para evitar el ataque de ${victima.getNombre()} `

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [victima.getNombre(), jugador.getNombre()],
    [victima.getID(), jugador.getID()],
    [await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [victima.getHP(), jugador.getHP()], [0, 0], []);
  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso
  if (jugador.getArma()["usos"] <= 0) {
    let extra = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

//"senketsu"
eventosAtaqueEspecificoxCategoria[153] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` "Senjin Shippū!!" ${jugador.getNombre()} activa la forma híbrida de Senketsu para aumentar las capacidades ofensivas y atacar a ${victima.getNombre()}  `;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(200, 250);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}


//"senketsu"
eventosAtaqueEspecificoxCategoria[154] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` "Senketsu Kisaragi!!!" ${jugador.getNombre()} activa la forma definitiva de Senketsu. ${victima.getNombre()} valió `;

  let quedar = pluralQuedar(jugador.getArma());

  let danio = jugador.getArma()["danio"] + danioExtra(400, 450);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}


// "rompibles"
eventosAtaqueEspecificoxCategoria[155] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let pronounItThem = pronounItThem(jugador.getArma());

  let evento = ` ${jugador.getNombre()} grabs their ${jugador.getArma()["name"]} and smashes ${pronounItThem} on ${victima.getNombre()}'s head.`;

  let danio = jugador.getArma()["danio"] + danioExtra(1, 100);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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


//"boina con cuchillas"
eventosAtaqueEspecificoxCategoria[156] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronoun = pronounIsAre(jugador.getArma());
  let evento = `"${jugador.getNombre()} takes off their newsboy cap and attacks ${victima.getNombre()} with it, shouting "BY ORDER OF THE PEAKY BLINDERS!!!""`;

  let danio = jugador.getArma()["danio"] + danioExtra(400, 450);

  let cuantoquita;
  if (victima.getHP() < danio) {
    cuantoquita = victima.getHP();
  } else {
    cuantoquita = danio;
  }

  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 1

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, cuantoquita], []);


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} ${pronoun} out of uses`;
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

export { eventosAtaqueEspecificoxCategoria };
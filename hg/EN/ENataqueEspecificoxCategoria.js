/*------------ ataque especifico por categoría ------------*/
import {
  danioExtra,
  buscarJugadorDistintoA2,
  randomSelector,
  pluralS,
  pronombreUnUnaUnosUnas,
  pronombreOAOsAs,
  pronombreElLaLosLas,
  pluralQuedar
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
  console.log(`%c${arma["nombre"]} > ${categoria}`, "color:orange");
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
      let plural = pluralS(arma);
      let quedar = pluralQuedar(arma);
      let evento = ` ${jugador.getNombre()} ataca a ${victima.getNombre()} con su${plural} ${jugador.getArma()["nombre"]}.`;
      console.log(evento);
      let pronombre = pronombreElLaLosLas(jugador.getArma());

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
      break;

  }//fin del Switch

  return 1;
}


// "pistola"
eventosAtaqueEspecificoxCategoria[1] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronPlural = pluralS(jugador.getArma());
  let evento = ` ${jugador.getNombre()} shoots ${victima.getNombre()} with their ${jugador.getArma()["name"]}, causing them severe injuries.`
  console.log(evento);

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getNombre()}'s ${jugador.getArma()["name"]} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
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

// "pistola"
eventosAtaqueEspecificoxCategoria[2] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} shoots ${victima.getNombre()} in the foot with their ${jugador.getArma()["name"]}.`;
  console.log(evento);

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getNombre()}'s ${jugador.getArma()["name"]} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
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

// "taser"
eventosAtaqueEspecificoxCategoria[3] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} shocks ${victima.getNombre()} with their ${jugador.getArma()["name"]}.`;
  console.log(evento);

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getNombre()}'s ${jugador.getArma()["name"]} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
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

// "pistola"
eventosAtaqueEspecificoxCategoria[4] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} fires their ${jugador.getArma()["name"]} at ${victima.getNombre()} but the bullet barely grazes them.`;
  console.log(evento);

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getNombre()}'s ${jugador.getArma()["name"]} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
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

// "pistola"
eventosAtaqueEspecificoxCategoria[5] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} fires their ${jugador.getArma()["name"]} at ${victima.getNombre()}, but ${victima.getNombre()} dodges the bullet Matrix-style`;
  console.log(evento);

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);
  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso
  if (jugador.getArma()["usos"] <= 0) {
    let extra = `The ${jugador.getNombre()}'s ${jugador.getArma()["name"]} has run out of uses.`;
    console.log(extra);
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

// "pistola"
eventosAtaqueEspecificoxCategoria[6] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} tries to kill ${victima.getNombre()} with their ${jugador.getArma()["name"]} but has terrible aim and wastes all their ammo.`
  console.log(evento);

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);

  jugador.getArma()["usos"] = 0
  let extra = `The ${jugador.getNombre()}'s ${jugador.getArma()["name"]} has run out of uses.`;
  console.log(extra);
  jugador.setArma(null);
  json.extra.push(extra);

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

// "pistola"
eventosAtaqueEspecificoxCategoria[7] = async (jugador, players, victima, req, channel, playersReal) => {
  let jugador3 = buscarJugadorDistintoA2(jugador, victima, players);
  if (jugador3 == null) { return null; }

  let evento = ` ${jugador.getNombre()} fires at ${jugador3.getNombre()} with their ${jugador.getArma()["name"]}, but ${victima.getNombre()} dives in to heroically save ${jugador3.getNombre()}'s life.`;
  console.log(evento);

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());


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
    let extra1 = `The ${jugador.getNombre()}'s ${jugador.getArma()["name"]} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);

  victima.alive = 0;
  jugador.kills++;
  let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
  console.log(extra2);
  json.extra.push(extra2);

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x2", channel);

  await muerteJugador(req.body.channel.guild_id, channel, playersReal);

  return 1;
}

// "pistola"
eventosAtaqueEspecificoxCategoria[8] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} tries to shoot ${victima.getNombre()} with their ${jugador.getArma()["name"]} but uses the weapon backwards and shoots themselves.`;
  console.log(evento);

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getNombre()}'s ${jugador.getArma()["name"]} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
    console.log(extra2);
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "explosivos"
eventosAtaqueEspecificoxCategoria[9] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} primes and throws their ${jugador.getArma()["name"]}. The explosion damages ${victima.getNombre()}.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getNombre()}'s ${jugador.getArma()["name"]} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
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

// "explosivos"
eventosAtaqueEspecificoxCategoria[10] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());

  let evento = ` ${jugador.getNombre()} detonates their ${jugador.getArma()["name"]} and injures ${victima.getNombre()}.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getNombre()}'s ${jugador.getArma()["name"]} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
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

// "huevo"
eventosAtaqueEspecificoxCategoria[11] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());

  let evento = ` ${jugador.getNombre()} cooks their egg, eats it, and throws the hot oil at ${victima.getNombre()}.`;
  console.log(evento);

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


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getNombre()}'s ${jugador.getArma()["name"]} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
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

// "huevo"
eventosAtaqueEspecificoxCategoria[12] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());

  let evento = ` ${jugador.getNombre()} throws their egg at ${victima.getNombre()}, and a chick pops out upon impact`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getNombre()}'s ${jugador.getArma()["name"]} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
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

// "lanzacohetes"
eventosAtaqueEspecificoxCategoria[13] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());

  let evento = ` ${jugador.getNombre()} fires a rocket from their rocket launcher and blasts ${victima.getNombre()}.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getNombre()}'s ${jugador.getArma()["name"]} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
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

// "lanzacohetes"
eventosAtaqueEspecificoxCategoria[14] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());

  let evento = ` ${jugador.getNombre()} fires a rocket at ${victima.getNombre()} and blows them to smithereens.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), 0], [0, victima.getHP()], []);

  victima.setHP(0);
  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getNombre()}'s ${jugador.getArma()["name"]} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);

  victima.alive = 0;
  jugador.kills++;
  let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
  console.log(extra2);
  json.extra.push(extra2);


  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  await muerteJugador(req.body.channel.guild_id, channel, playersReal);

  return 1;
}

// "lanzacohetes"
eventosAtaqueEspecificoxCategoria[15] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} fires a rocket at ${victima.getNombre()}, but it veers off course and misses`;
  console.log(evento);

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);

  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso
  if (jugador.getArma()["usos"] <= 0) {
    let extra = `The ${jugador.getNombre()}'s ${jugador.getArma()["name"]} has run out of uses.`;
    console.log(extra);
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

// "jeringuilla"
eventosAtaqueEspecificoxCategoria[16] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} le clava la ${jugador.getArma()["nombre"]} a ${victima.getNombre()} y le transmite 5G.`;
  console.log(evento);

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

// "jeringuilla"
eventosAtaqueEspecificoxCategoria[17] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} le clava la ${jugador.getArma()["nombre"]} a ${victima.getNombre()}... O eso intenta, pero se da cuenta que no tiene punta. ${victima.getNombre()} escapa.`;
  console.log(evento);

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
    console.log(extra);
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

// "tridente"
eventosAtaqueEspecificoxCategoria[18] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} summons demons with their demonic trident and orders them to chase and attack ${victima.getNombre()}`;
  console.log(evento);

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getNombre()}'s ${jugador.getArma()["name"]} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = ` ${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
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

// "tridente"
eventosAtaqueEspecificoxCategoria[19] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} summons demons with their demonic trident to attack ${victima.getNombre()}, but they are so useless that they end up attacking ${jugador.getNombre()} instead.`;
  console.log(evento);

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getNombre()}'s ${jugador.getArma()["name"]} has run out of uses.`;
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

//"Espada Maestra"
eventosAtaqueEspecificoxCategoria[20] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} lanza un rayo a ${victima.getNombre()} con su Espada Maestra`;
  console.log(evento);

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

// "pistola"
eventosAtaqueEspecificoxCategoria[21] = async (jugador, players, victima, req, channel, playersReal) => {
  if (victima.getArma() == null) { return null; }
  let pronPluralJugador = pluralS(jugador.getArma());
  let pronPluralVictima = pluralS(victima.getArma());
  let evento = `${jugador.getNombre()} shoots with their ${jugador.getArma()["name"]} at ${victima.getNombre()}, but the bullet doesn't fire. ${victima.getNombre()} counterattacks with their ${victima.getArma()["name"]}.`;
  console.log(evento);

  let pronombre = pronombreElLaLosLas(victima.getArma());
  let quedar = pluralQuedar(victima.getArma());

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
    let extra1 = `The ${victima.getNombre()}'s ${victima.getArma()["name"]} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    victima.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
    victima.kills++;
    let extra2 = ` ${victima.getNombre()}'s Kills: ${victima.getKills()}.`;
    console.log(extra2);
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "pan duro"
eventosAtaqueEspecificoxCategoria[22] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());

  let evento = ` ${jugador.getNombre()} hits ${victima.getNombre()} with their stale bread. It's certainly hard...`;
  console.log(evento);

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


  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getNombre()}'s ${jugador.getArma()["name"]} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
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

//**    "nokia"
eventosAtaqueEspecificoxCategoria[23] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());

  let evento = `${jugador.getNombre()} drops their ${jugador.getArma()["name"]} and triggers an earthquake. ${jugador.getNombre()} was too close and caught in the disaster, falling unconscius.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
};



// "fuegos artificiales"
eventosAtaqueEspecificoxCategoria[24] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());

  let evento = ` ${jugador.getNombre()} lights the fireworks and tells ${victima.getNombre()} "Happy Birthday!!". ${victima.getNombre()} celebrates... and then catches fire`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
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


// "martillo"
eventosAtaqueEspecificoxCategoria[25] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());

  let evento = ` ${jugador.getNombre()} literally hammers ${victima.getNombre()}'s head.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
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

// "colmena"
eventosAtaqueEspecificoxCategoria[26] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());

  let evento = ` ${jugador.getNombre()} leaves their beehive next to ${victima.getNombre()} while they sleeps. The next day, ${victima.getNombre()} wakes up with their face so swollen that they touch it with their knees.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
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

// "colmena"
eventosAtaqueEspecificoxCategoria[27] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());

  let evento = ` ${jugador.getNombre()} kicks their beehive to have the bees attack ${victima.getNombre()}. The bees swarm out and sting ${jugador.getNombre()} for being a dumbass.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} has run out of uses.`;
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

// "nokia"
eventosAtaqueEspecificoxCategoria[28] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());

  let evento = `${jugador.getNombre()} throws their Nokia at ${victima.getNombre()}, making a hole in their head.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
    console.log(extra2);
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
};


// "ladrillo"
eventosAtaqueEspecificoxCategoria[29] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());

  let evento = ` ${jugador.getNombre()} throws their brick at ${victima.getNombre()}'s feet. That must hurt.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
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

//** "nokia"

eventosAtaqueEspecificoxCategoria[30] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());

  let evento = `${jugador.getNombre()} drops their Nokia on ${victima.getNombre()}'s foot.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `${jugador.getNombre()}'s Kills: ${jugador.getKills()}.`;
    console.log(extra2);
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
};


// "TNT"
eventosAtaqueEspecificoxCategoria[31] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());

  let evento = ` ${jugador.getNombre()} lights their TNT in front of ${victima.getNombre()}, but ${victima.getNombre()} destroys the block before it detonates... Now what?`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);


  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  return 1;
}

// "crucifijo"
eventosAtaqueEspecificoxCategoria[32] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());

  let evento = ` ${victima.getNombre()} está por atacar a ${jugador.getNombre()}, pero ${jugador.getNombre()} saca su crucifijo y ${victima.getNombre()} se escapa siseando e insultando en latín. ok?`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);


  jugador.getArma()["usos"] = 0;
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

// "Arma blanca"

eventosAtaqueEspecificoxCategoria[33] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());

  let evento = `${jugador.getNombre()} drives their ${jugador.getArma()["name"]} into ${victima.getNombre()}'s head`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} has run out of uses.`;
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

// "crucifijo"
eventosAtaqueEspecificoxCategoria[34] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} reza con su crucifijo que por favor pueda ganar la partida, y ${victima.getNombre()} que justo se acercaba, se tropieza y cae, lastimándose. ¿Casualidad, o poder divino?`;
  console.log(evento);

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


// "plumero"
eventosAtaqueEspecificoxCategoria[35] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} waves their duster at ${victima.getNombre()}, triggering a dust-induced allergic reaction.`;
  console.log(evento);

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} has run out of uses.`;
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

// "gas lacrimogeno"
eventosAtaqueEspecificoxCategoria[36] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());

  let evento = `${jugador.getNombre()} releases their tear gas out of curiosity to see what it smells like. Bad idea.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
};

// "gas lacrimogeno"
eventosAtaqueEspecificoxCategoria[37] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} throws their tear gas at ${victima.getNombre()}. If they were only half-blind before, they're completely blind now.`;
  console.log(evento);

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} has run out of uses.`;
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

// "arco y flecha"
eventosAtaqueEspecificoxCategoria[38] = async (jugador, players, victima, req, channel, playersReal) => {
  let jugador3 = buscarJugadorDistintoA2(jugador, victima, players);
  if (jugador3 == null) { return null; }

  let evento = `${jugador.getNombre()} shoots an arrow at ${jugador3.getNombre()} but it goes astray and hits ${victima.getNombre()}`;
  console.log(evento);

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `The ${jugador.getArma()["name"]} of ${jugador.getNombre()} has run out of uses.`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `The ${jugador.getNombre()}'s kills: ${jugador.getKills()}.`;
    console.log(extra2);
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x2", channel);

  if (victima.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "canion"
eventosAtaqueEspecificoxCategoria[39] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());

  let evento = `${jugador.getNombre()} se mete en su cañón, se dispara y cae de cabeza en medio de la nada. Hubiera usado las bolas del cañón mejor, no?`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
};

// "canion"
eventosAtaqueEspecificoxCategoria[40] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} dispara a ${victima.getNombre()} con sus bolas. O sea, con las bolas de su cañón`;
  console.log(evento);

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

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

// "canion"
eventosAtaqueEspecificoxCategoria[41] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} se mete en su cañón y se dispara dibujando una parábola perfecta y cayendo de cabeza sobre ${victima.getNombre()}.`;
  console.log(evento);

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

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
  console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (victima.getHP() <= 0 || jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

// "arco y flecha"
eventosAtaqueEspecificoxCategoria[42] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());
  let distancia = randomSelector(100, 1000);

  let evento = `${jugador.getNombre()} saca a relucir sus dotes de arquería, atinando una flecha a ${victima.getNombre()} desde ${distancia} metros de distancia.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

// "ramo de flores"
eventosAtaqueEspecificoxCategoria[43] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());
  let evento = `${jugador.getNombre()} hace que le va a ofrecer su ramo de flores a ${victima.getNombre()}, pero luego le empieza a pegar con él.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

// "ramo de flores"
eventosAtaqueEspecificoxCategoria[44] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());
  let evento = `${jugador.getNombre()} le arroja su ramo de flores a ${victima.getNombre()}. ${victima.getNombre()} lo intenta atrapar creyendo que así podrá casarse, pero se hace daño con las espinas.`;
  console.log(evento);

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

// "rompibles > skate"
eventosAtaqueEspecificoxCategoria[45] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} subido en su skate dice “A este truco lo llamo El Leñador“, y le lanza el skate a las piernas de ${victima.getNombre()}`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

// "rompibles > skate"
eventosAtaqueEspecificoxCategoria[46] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} dice, "A este truco lo llamo El eh..." y le parte el skate en la cabeza a ${victima.getNombre()}`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

// "rompibles > guitarra"
eventosAtaqueEspecificoxCategoria[47] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());
  let evento = `${jugador.getNombre()} comienza a tocar su guitarra tan horriblemente mal que a ${victima.getNombre()} le sangran los oidos. Success?`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

// "rompibles > guitarra"
eventosAtaqueEspecificoxCategoria[48] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} le parte su guitarra a ${victima.getNombre()} en la cabeza. Al menos ya no tendremos que escucharlo más tocar`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

// "rompibles > bate de beisbol"
eventosAtaqueEspecificoxCategoria[49] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} toma su bate de besibol y batea la cara de ${victima.getNombre()}. Es un homerun!!`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

// "Veneno"
eventosAtaqueEspecificoxCategoria[50] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());

  let evento = `${jugador.getNombre()} envenena la bebida de ${victima.getNombre()} con ${pronombre.toLowerCase()} ${jugador.getArma()["nombre"]}, pero se confunde y bebe la bebida envenenada.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
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


// "explosivos"
eventosAtaqueEspecificoxCategoria[51] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());
  let evento = `${jugador.getNombre()} enciende su${pronPlural} ${jugador.getArma()["nombre"]} y hace volar por los aires a ${victima.getNombre()} `;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), 0], [0, victima.getHP()], []);

  victima.setHP(0);

  jugador.getArma()["usos"] = 0;
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

// "Veneno"
eventosAtaqueEspecificoxCategoria[52] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} envenena la bebida de ${victima.getNombre()} con ${pronombre.toLowerCase()} ${jugador.getArma()["nombre"]} sin que se de cuenta. ${victima.getNombre()} la bebe inocentemente`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

// "Veneno"
eventosAtaqueEspecificoxCategoria[53] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} envenena la bebida de ${victima.getNombre()} con ${pronombre.toLowerCase()} ${jugador.getArma()["nombre"]} sin que se de cuenta. ${victima.getNombre()} la bebe y sufre dolor de estómago`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

// "Death Note > Death Note"
eventosAtaqueEspecificoxCategoria[54] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());
  let evento = `${jugador.getNombre()} escribe su nombre en la Death Note para saber que es suya. Y luego muere.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre()],
    [jugador.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [0], [jugador.getHP()], []);

  jugador.setHP(0);

  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

  jugador.alive = 0;
  jugador.kills++;
  let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
  console.log(extra2);
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
  let pronPlural = pluralS(jugador.getArma());
  let evento = `${jugador.getNombre()} escribe el nombre de ${victima.getNombre()} en la Death Note, efectivamente matándolo en el acto.`;
  console.log(evento);

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

// "Death Note"

eventosAtaqueEspecificoxCategoria[56] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());
  let evento = `${jugador.getNombre()} escribe el nombre de ${victima.getNombre()} en la Death Note, y lo mata al instante.`;
  console.log(evento);

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

// "Death Note"

eventosAtaqueEspecificoxCategoria[57] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());
  let evento = `${jugador.getNombre()} escribe el nombre de ${victima.getNombre()} en la Death Note, pero lo escribe mal, así que no produce ningún resultado.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);

  jugador.getArma()["usos"] -= 1;
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


// "fusil de francotirador"
eventosAtaqueEspecificoxCategoria[58] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let metros = randomSelector(100, 999);
  let evento = `${jugador.getNombre()} se acuesta en el suelo y le da tremendo headshot a ${victima.getNombre()} desde ${metros} mts de distancia con su fusil de francotirador.`;
  console.log(evento);

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

// "fusil de francotirador"
eventosAtaqueEspecificoxCategoria[59] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} intenta darle con su franco a ${victima.getNombre()} pero hay demasiado viento. ${victima.getNombre()} escapa.`
  console.log(evento);

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
    console.log(extra);
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

// "fusil de francotirador"
eventosAtaqueEspecificoxCategoria[60] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} apunta a ${victima.getNombre()} con su fusil de francotirador y le da, pero el disparo no fue fatal.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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


// "microfono"
eventosAtaqueEspecificoxCategoria[61] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} enciende su micrófono y empieza a cantar. A ${victima.getNombre()} le sangran los oídos.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

// "sable de luz"

eventosAtaqueEspecificoxCategoria[62] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());
  let evento = `${jugador.getNombre()} cortó a ${victima.getNombre()} como un fiambre con su sable de luz. Fium fium`;
  console.log(evento);

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

// "sable de luz"

eventosAtaqueEspecificoxCategoria[63] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} le dice a ${victima.getNombre()} "Yo soy tu padre", y le corta un brazo con su sable de luz`;
  console.log(evento);

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


// "NERF"
eventosAtaqueEspecificoxCategoria[64] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} mete balas reales a su NERF y le dispara a ${victima.getNombre()} que estaba desprevenido.`;
  console.log(evento);

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

// "NERF"
eventosAtaqueEspecificoxCategoria[65] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} dispara a ${victima.getNombre()} con su NERF. Es mejor que nada.`;
  console.log(evento);

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

// "pistola pesada"
eventosAtaqueEspecificoxCategoria[66] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} intenta disparar a ${victima.getNombre()} con su pistola pesada pero no puede. Es muy pesada.`
  console.log(evento);

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
    console.log(extra);
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

// "alfiler"

eventosAtaqueEspecificoxCategoria[67] = async (jugador, players, victima, req, channel, playersReal) => {
  if (victima.hp == maxHP) { return null };
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} le cose las heridas a ${victima.getNombre()} con su alfiler. Un segundo, la idea no era atacarse?`;
  console.log(evento);
  let quedar = pluralQuedar(jugador.getArma());

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

// "pistola de bengalas"
eventosAtaqueEspecificoxCategoria[68] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} lanza una bengala porque quiere abandonar el juego. Todos la ignoran.`
  console.log(evento);

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
    console.log(extra);
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

// "pistola de bengalas"
eventosAtaqueEspecificoxCategoria[69] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} lanza una bengala hacia ${victima.getNombre()} y le quema la ropa. ${victima.getNombre()} corre ahora desnudo.`
  console.log(evento);

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
    console.log(extra);
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

// "pistola de bengalas"
eventosAtaqueEspecificoxCategoria[70] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} lanza una bengala hacia ${victima.getNombre()} y le produce quemaduras de primer grado`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

// "globo"
eventosAtaqueEspecificoxCategoria[71] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} hace estallar su globo con confeti. ¿Se supone que eso debía hacer daño?`
  console.log(evento);

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
    console.log(extra);
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

// "arma blanca > machete"
eventosAtaqueEspecificoxCategoria[72] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} se fue... ¿al cerro? Dice que va a pelear con el Diablo con su machete.`
  console.log(evento);

  let json = createObject(evento, [jugador.getNombre()],
    [jugador.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP()], [0], []);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "tenedor"
eventosAtaqueEspecificoxCategoria[73] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} le lanza su tenedor a ${victima.getNombre()} pero ni siquiera está cerca de hacerle algún daño. ¿Quién hizo que este loco se creyera Aquaman?`
  console.log(evento);

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
    console.log(extra);
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

//"alfiler"

eventosAtaqueEspecificoxCategoria[74] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} le hace un piercing a ${victima.getNombre()} con su alfiler. ¿Qué?`
  console.log(evento);

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
    console.log(extra);
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

//"alfiler"

eventosAtaqueEspecificoxCategoria[75] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} pincha a ${victima.getNombre()} con su alfiler. Vaya, ¿no va a hacer mucho daño?`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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



// "palo de golf"
eventosAtaqueEspecificoxCategoria[76] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} se pone a jugar golf tranquilamente. Nadie esperaba que a 2315 metros de distancia, la bola le iba a pegar justo a ${victima.getNombre()}.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

// "palo de golf"
eventosAtaqueEspecificoxCategoria[77] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} estaba por golpear la bola de golf pero ${victima.getNombre()} justo se cruzó por delante y sufrió daño colateral.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

//"martillo de Thor"

eventosAtaqueEspecificoxCategoria[78] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} le lanza el Martillo de Thor a ${victima.getNombre()}, pero como no apuntó a la cabeza, ${victima.getNombre()} sigue con vida.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

//"martillo de Thor"

eventosAtaqueEspecificoxCategoria[79] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} le lanza un rayo a ${victima.getNombre()}. Según ${jugador.getNombre()}, es Noob…69?`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

//"explosivos > bomba"

eventosAtaqueEspecificoxCategoria[80] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} bombardea a los bombazos con su bomba a ${victima.getNombre()}. Lo están pasando bomba`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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



eventosAtaqueEspecificoxCategoria[81] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} apunta con su varita a ${victima.getNombre()} y comienza recitar palabras random. ${victima.getNombre()} se rie, pero de repente se empieza a sentir mal`;
  console.log(evento);

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


  jugador.getArma()["usos"] -= 1;
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


//"varita magica"

eventosAtaqueEspecificoxCategoria[82] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());
  let evento = `${jugador.getNombre()} apunta con su varita a ${victima.getNombre()} y comienza recitar palabras random. ${victima.getNombre()} se le rie en la cara`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);

  jugador.getArma()["usos"] -= 1;
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

//"explosivos > Samsung Galaxy Note 7"

eventosAtaqueEspecificoxCategoria[83] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} arroja su Samsung Galaxy Note 7 a ${victima.getNombre()} pero la explosión no le hace mucho daño`;
  console.log(evento);

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

//"explosivos > Samsung Galaxy Note 7"

eventosAtaqueEspecificoxCategoria[84] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} abre Genshin en su Samsung Galaxy Note 7 y se lo arroja a ${victima.getNombre()}, a quien le explota muy cerca`;
  console.log(evento);

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

//"veneno > planta venenosa"

eventosAtaqueEspecificoxCategoria[85] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} le dice a ${victima.getNombre()} que acaricie su planta venenosa. La planta le muerde un dedo`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

//"cuerda"

eventosAtaqueEspecificoxCategoria[86] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());
  let evento = `${jugador.getNombre()} ata a ${victima.getNombre()} a un arbol con su cuerda`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);

  jugador.getArma()["usos"] = 0;
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

//"cuerda"

eventosAtaqueEspecificoxCategoria[87] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());
  let evento = `${jugador.getNombre()} ahorca a ${victima.getNombre()} con su cuerda, matándolo en el acto`;
  console.log(evento);

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

//"cuerda"

eventosAtaqueEspecificoxCategoria[88] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} ahorca a ${victima.getNombre()} con su cuerda, pero no se da cuenta que lo dejó con vida.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

//"espada > Llave Espada"

eventosAtaqueEspecificoxCategoria[89] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());
  let evento = `${jugador.getNombre()} abre la barrera espacial que separa este mundo de otros con su Llave Espada, y empuja a ${victima.getNombre()} dentro. No se supo más de él.`;
  console.log(evento);

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

//"cráneo humano"

eventosAtaqueEspecificoxCategoria[90] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} le muestra a ${victima.getNombre()} el cráneo humano que encontró. ${victima.getNombre()} se asusta y se tropieza, haciéndose daño`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

//"arma blanca > lápiz"

eventosAtaqueEspecificoxCategoria[91] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} le clava la punta del lapiz a ${victima.getNombre()} en la mano. Hpta, esa marca no se va a quitar en la vida`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

//"arma blanca > lápiz"

eventosAtaqueEspecificoxCategoria[92] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} le clava su lapiz a ${victima.getNombre()} en el ojo`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

//"arma blanca > lápiz"

eventosAtaqueEspecificoxCategoria[93] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} le escribe una nota con su lapiz a ${victima.getNombre()} que dice "ya no te quiero". ${victima.getNombre()} recibe daño al corazón 💔`;
  console.log(evento);

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

//"teta de plástico"

eventosAtaqueEspecificoxCategoria[94] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} se pone la teta de plástico y se la muestra a ${victima.getNombre()}, quien pierde vida por sangrado de nariz `;
  console.log(evento);

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

//"lanza"

eventosAtaqueEspecificoxCategoria[95] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} lanza su lanza, lanzandola a ${victima.getNombre()}, quien lanzamentáblemente es alcanzado por la lanza`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

//"látigo"

eventosAtaqueEspecificoxCategoria[96] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} azota a ${victima.getNombre()} con su látigo. Si bien le hace daño, parece que ${victima.getNombre()} lo disfruta`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

//"látigo"

eventosAtaqueEspecificoxCategoria[97] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());
  let evento = `${jugador.getNombre()} va a azotar a ${victima.getNombre()} con su látigo, y ${victima.getNombre()} dice "oh si, azótame". ${jugador.getNombre()} se arrepiente y se va a meditar sobre su vida`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);

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

//"látigo"
eventosAtaqueEspecificoxCategoria[98] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());
  let evento = `${jugador.getNombre()} azota a ${victima.getNombre()} con su látigo. ${victima.getNombre()} deja salir un fuerte gemido. ${jugador.getNombre()} se siente satisfecho por hacerle daño. ${victima.getNombre()} oculta su vergüenza; no quiere que ${jugador.getNombre()} se de cuenta que era de placer y no de dolor.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);

  jugador.getArma()["usos"] -= 1;
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

//"gas pimienta"
eventosAtaqueEspecificoxCategoria[99] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} le rocía gas pimienta a ${victima.getNombre()} en los ojos`;
  console.log(evento);

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

//"gas pimienta"

eventosAtaqueEspecificoxCategoria[100] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${victima.getNombre()} le insiste a ${jugador.getNombre()} que quiere probar su gas pimienta. Luego de que se lo rocíe en la boca, ${victima.getNombre()} se queda tosiendo unas horas`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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


// "serrucho"
eventosAtaqueEspecificoxCategoria[101] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} utiliza su serrucho para intentar construir... ¿algo? Pero ni sabe usarlo y se corta los dedos. ¿A quién se le ocurrió darselo en primer lugar?`;
  console.log(evento);

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}


//"serrucho"
eventosAtaqueEspecificoxCategoria[102] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} demuestra su habilidad de carpintero creando una trampa con su serrucho. Todos creen que no servirá de nada hasta que ${victima.getNombre()} cae en ella y se hace daño. Se ve que sabe manejar tablas.`;
  console.log(evento);

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

//"estaca de madera"
eventosAtaqueEspecificoxCategoria[103] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} está convencido de que ${victima.getNombre()} es un vampiro, y le clava su estaca de madera en el pecho. Para sorpresa de nadie, ${victima.getNombre()} grita de dolor, finalmente demostrando que... tener una estaca clavada, duele.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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


//"bumeran"
eventosAtaqueEspecificoxCategoria[104] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} lanza su búmeran y golpea a ${victima.getNombre()} en la cabeza. Esperemos que no le salga un moretón.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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


//"bumeran"
eventosAtaqueEspecificoxCategoria[105] = async (jugador, players, victima, req, channel, playersReal) => {
  if (victima.getArma() == null) { return null; }

  let armaAux = victima.getArma();
  let pronPluralVictima = pluralS(victima.getArma());

  let evento = ` ${jugador.getNombre()} lanza su búmeran hacia ${victima.getNombre()} y le roba su${pronPluralVictima} ${victima.getArma()["nombre"]}. ¿Pero qué...? `;
  console.log(evento);

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);

  jugador.setArma(armaAux);
  victima.setArma(null);

  let extra1 = ` ${victima.getNombre()} se quedó sin su ${armaAux["nombre"]}.`;
  console.log(extra1);
  json.extra.push(extra1);

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  return 1;
}


//"espada > espada de iron"
eventosAtaqueEspecificoxCategoria[106] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} salta antes de golpear a ${victima.getNombre()} con su espada de iron, asi le da un crítico y le quita más vida`;
  console.log(evento);

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


//"taco de pool"
eventosAtaqueEspecificoxCategoria[107] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} y ${victima.getNombre()} juegan una partidita de pool. ${victima.getNombre()} pierde y recibe un tacazo en el estómago.`;
  console.log(evento);

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

//"taco de pool"
eventosAtaqueEspecificoxCategoria[108] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} y ${victima.getNombre()} juegan una partidita de pool. ${jugador.getNombre()} se enoja porque va perdiendo y le clava su taco de pool a ${victima.getNombre()} en la mano. Jaja, intenta ganar ahora!`;
  console.log(evento);

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


//"taco de pool"
eventosAtaqueEspecificoxCategoria[109] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} y ${victima.getNombre()} juegan una partidita de pool. ${jugador.getNombre()} apunta mal y en vez de darle a la bola blanca, le da a... otra bola.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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


// "taco"
eventosAtaqueEspecificoxCategoria[110] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} le tira su taco encima a ${victima.getNombre()}. Qué desperdicio..`
  console.log(evento);

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
    console.log(extra);
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
  console.log(evento);

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


//"par de estiletes de color dorado"
eventosAtaqueEspecificoxCategoria[112] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` Los ojos de ${jugador.getNombre()} cambian cuando ataca a ${victima.getNombre()} con su ${jugador.getArma()["nombre"]}.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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


//"par de estiletes de color dorado"
eventosAtaqueEspecificoxCategoria[113] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} activa el modo asesino y rasga repetidamente la piel de ${victima.getNombre()} con sus estiletes dorados.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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


// "escoba"
eventosAtaqueEspecificoxCategoria[114] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} le barre los pies a ${victima.getNombre()} y le quita la suerte.`
  console.log(evento);

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);
  jugador.getArma()["usos"] -= 1;
  if (jugador.getArma()["usos"] <= 0) {
    let extra = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`
    console.log(extra);
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

//"banana"

eventosAtaqueEspecificoxCategoria[115] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());
  let evento = `${jugador.getNombre()} pela la banana, arroja la cáscara en medio del camino, y se esconde a esperar. Nunca pasó nadie por ahí`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre()],
    [jugador.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP()], [0], []);

  jugador.getArma()["usos"] = 0;
  if (jugador.getArma()["usos"] <= 0) {
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  //channel.send(json.evento);
  funcionCrearImagen(json, "1", channel);

  return 1;
}


//"escoba"
eventosAtaqueEspecificoxCategoria[116] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} agarra a ${victima.getNombre()} a escobazos, parece madre latina.`;
  console.log(evento);

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


  jugador.getArma()["usos"] -= 1;
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

//"mando"
eventosAtaqueEspecificoxCategoria[117] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} le arroja su ${jugador.getArma()["nombre"]} a ${victima.getNombre()}. Tampoco perdió mucho.`;
  console.log(evento);

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


//"mando"
eventosAtaqueEspecificoxCategoria[118] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} ataca a ${victima.getNombre()} con su ${jugador.getArma()["nombre"]}. Primera vez que no se duerme usándolo.`;
  console.log(evento);

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


//"mando"
eventosAtaqueEspecificoxCategoria[119] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} ahorca a ${victima.getNombre()} con el cable de su ${jugador.getArma()["nombre"]}. Resultó útil.`;
  console.log(evento);

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

//"repelente"
eventosAtaqueEspecificoxCategoria[120] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} rocía a ${victima.getNombre()} con su repelente de tiburones, pero no le hace mucho daño. ¿Para que lo usó si ni siquiera es un tiburón?`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

//"banana"

eventosAtaqueEspecificoxCategoria[121] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} pela la banana, arroja la cáscara en medio del camino, y se esconde a esperar. Luego de unos minutos, ${victima.getNombre()} pasó y se tropezó con la cáscara. La operación banana fue todo un éxito.`;
  console.log(evento);

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


  jugador.getArma()["usos"] -= 1;
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


//"repelente"
eventosAtaqueEspecificoxCategoria[122] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} rocía a ${victima.getNombre()} con su repelente de tiburones, y fue muy efectivo. ¿Por qué? ¿Y de dónde rayos sacó ese repelente?`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

//"banana"

eventosAtaqueEspecificoxCategoria[123] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());
  let evento = `"Me la pelas?" ${jugador.getNombre()} le pide a ${victima.getNombre()} que le pele su banana. ${victima.getNombre()} decide ayudarlo y se la pela, como agradecimiento ${jugador.getNombre()} le deja comer de su banana`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);

  jugador.getArma()["usos"] = 0;
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


//"libro de mates"
eventosAtaqueEspecificoxCategoria[124] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} toma su libro de matemáticas y le empieza a explicar límites por definición a ${victima.getNombre()}. ${victima.getNombre()} pierde años de vida.`;
  console.log(evento);

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

//"regla"
eventosAtaqueEspecificoxCategoria[125] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} ataca a ${victima.getNombre()} con su regla de metal, pero ${victima.getNombre()} logra evitar el golpe con su brazo. Sin embargo ${victima.getNombre()} se hizo mucho daño.`;
  console.log(evento);

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

// "regla"
eventosAtaqueEspecificoxCategoria[126] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());

  let evento = ` ${jugador.getNombre()} golpea con su regla de metal a ${victima.getNombre()} en la cabeza. Le causa traumatismos y se murió al instante. Y decían que no servía para nada.`;
  console.log(evento);

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
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"banana"

eventosAtaqueEspecificoxCategoria[127] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `"Me la pelas?" ${jugador.getNombre()} le pide a ${victima.getNombre()} que le pele su banana. ${victima.getNombre()} cree que le estaba ofendiendo y comienza a golpearle. Pobre, solo quería que se la pelaran`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

  console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    console.log(extra2);
    json.extra.push(extra2);
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}


// "regla"
eventosAtaqueEspecificoxCategoria[128] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} intenta golpear a ${victima.getNombre()} con su regla de metal, pero en el intento le cayó en el pie y se hizo mucho daño solo. Qué pendejo.`;
  console.log(evento);

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
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
    jugador.kills++;
    let extra2 = `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`;
    console.log(extra2);
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
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} come su manzana, y escupe las semillas de a una a ${victima.getNombre()}. Mas que daño le provoca enojo. `;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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

//"banana"

eventosAtaqueEspecificoxCategoria[130] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());

  let evento = `"Me la pelas?" ${jugador.getNombre()} le pide a ${victima.getNombre()} que le pele su banana. ${victima.getNombre()} lo funa por acoso y todos salen corriendo a perseguirlo. ${jugador.getNombre()} apareció en una bolsa negra a las horas`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

  jugador.setHP(0); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), 0], [0, victima.getHP()], []);


  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);

  jugador.alive = 0;

  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);

  await muerteJugador(req.body.channel.guild_id, channel, playersReal);

  return 1;
}


//"manzana"
eventosAtaqueEspecificoxCategoria[131] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()}: grita "Aprende la teoría de la gravedad!!", y le arroja su manzana a la cabeza de ${victima.getNombre()} `;
  console.log(evento);

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


  jugador.getArma()["usos"] = 0;
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


//"fazerblaster"
eventosAtaqueEspecificoxCategoria[132] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()} va a disparar su Fazerblaster contra ${victima.getNombre()}. Pero el Fazerblaster se buguea y no hace nada.`
  console.log(evento);

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
    console.log(extra);
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
  console.log(evento);

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

//"botella"

eventosAtaqueEspecificoxCategoria[134] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `Después de beberse toda la ${jugador.getArma()["nombre"]}, ${jugador.getNombre()} le parte la botella en la cabeza a ${victima.getNombre()} `;
  console.log(evento);

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

//"botella"

eventosAtaqueEspecificoxCategoria[135] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()}, completamente alcoholizado, arroja su ${jugador.getArma()["nombre"]} a ${victima.getNombre()} `;
  console.log(evento);

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

//"espada > espada cuádruple"
eventosAtaqueEspecificoxCategoria[136] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} usa su espada cuádruple y pone en cuatro a ${victima.getNombre()}. `;
  console.log(evento);

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

// "motosierra"
eventosAtaqueEspecificoxCategoria[137] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` ${jugador.getNombre()}: “Quiero sexo!!!” Por andar haciendo tonterías con la motosierra, ${jugador.getNombre()} se hizo daño a sí mismo.`;
  console.log(evento);

  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let quedar = pluralQuedar(jugador.getArma());

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
    let extra1 = `${pronombre} ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se ${quedar} sin usos`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  if (jugador.getHP() <= 0) {
    jugador.alive = 0;
  }

  //channel.send(json.evento);
  funcionCrearImagen(json, "1", channel);

  if (jugador.getHP() <= 0) {
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }

  return 1;
}

//"espada"
eventosAtaqueEspecificoxCategoria[138] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} pasa corriendo al lado de ${victima.getNombre()} con su ${jugador.getArma()["nombre"]}. Parece que no le hizo nada, pero de repente se le cae un mechón de cabello.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

  let json = createObject(evento, [jugador.getNombre(), victima.getNombre()],
    [jugador.getID(), victima.getID()],
    [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, playersReal),
    await cargarAvatar(victima.getFoto(), victima.getID(), victima.getTieneOtraFoto(), req.body.channel.guild_id, playersReal)],
    [jugador.getHP(), victima.getHP()], [0, 0], []);


  jugador.getArma()["usos"] -= 1;
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


//"botella > botella de Vodka"
eventosAtaqueEspecificoxCategoria[139] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()}, le lanza su botella de vodka vacía a ${victima.getNombre()} mientras canta el himno de Rusia :flag_ru: :flag_ru: `;
  console.log(evento);

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

//"espada"

eventosAtaqueEspecificoxCategoria[140] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} le hace un tajo a ${victima.getNombre()} con su ${jugador.getArma()["nombre"]}.`;
  console.log(evento);

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

//"espada"

eventosAtaqueEspecificoxCategoria[141] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} le hace un corte a ${victima.getNombre()} con su ${jugador.getArma()["nombre"]} y ${victima.getNombre()} pierde mucha sangre.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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


//"oniball"
eventosAtaqueEspecificoxCategoria[142] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` ${jugador.getNombre()} usa la oniball para sacar a un oni y hacer que ${victima.getNombre()} reciba daño por cringe. `;
  console.log(evento);

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

//"palillos chinos"

eventosAtaqueEspecificoxCategoria[143] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} le clava sus 2 palillos chinos en los ojos a ${victima.getNombre()} `;
  console.log(evento);

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

//"caniche"

eventosAtaqueEspecificoxCategoria[144] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} entrenó a su caniche para que ataque a ${victima.getNombre()}. El caniche va y lo muerde para demostrarle lo aprendido.`;
  console.log(evento);

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

//"caniche"

eventosAtaqueEspecificoxCategoria[145] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `El caniche de ${jugador.getNombre()} le muerde el qlo a ${victima.getNombre()}`;
  console.log(evento);

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

//"pikachu"

eventosAtaqueEspecificoxCategoria[146] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} le ordenó a su Pikachu que ataque a ${victima.getNombre()}. Pero Pikachu falló y le quemó a ${victima.getNombre()} su bicicleta`
  console.log(evento);

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
    console.log(extra);
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
  console.log(evento);

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

//"espada" > "Espada del Tiempo"

eventosAtaqueEspecificoxCategoria[148] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = `${jugador.getNombre()} usó su espada del tiempo y..., el día se puso soleado`
  console.log(evento);

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
    console.log(extra);
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

//"pepino"

eventosAtaqueEspecificoxCategoria[149] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());

  let evento = `${jugador.getNombre()} le enterró un pepino en la garganta a ${victima.getNombre()}, ${victima.getNombre()} murió lentamente en agonía (o placer)`;
  console.log(evento);

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
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

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

//"pepino"

eventosAtaqueEspecificoxCategoria[150] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = `${jugador.getNombre()} agarra su pepino y se lo mete a ${victima.getNombre()} po[CENSURADO]`;
  console.log(evento);

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

//"senketsu"
eventosAtaqueEspecificoxCategoria[151] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` "Senketsu Senjin!!!" Senketsu saca cuchillas del cuerpo de ${jugador.getNombre()}, quien las usa para atacar a ${victima.getNombre()}. `;
  console.log(evento);

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

//"senketsu"
eventosAtaqueEspecificoxCategoria[152] = async (jugador, players, victima, req, channel, playersReal) => {
  let evento = ` "Senketsu Shippū!!" ${jugador.getNombre()} activa las alas de Senketsu y se va volando para evitar el ataque de ${victima.getNombre()} `
  console.log(evento);

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
    console.log(extra);
    jugador.setArma(null);
    json.extra.push(extra);
  } //si su arma se queda sin usos, la pierde
  console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  //channel.send(json.evento);
  funcionCrearImagen(json, "1x1", channel);
  return 1;
}

//"senketsu"
eventosAtaqueEspecificoxCategoria[153] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` "Senjin Shippū!!" ${jugador.getNombre()} activa la forma híbrida de Senketsu para aumentar las capacidades ofensivas y atacar a ${victima.getNombre()}  `;
  console.log(evento);

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


//"senketsu"
eventosAtaqueEspecificoxCategoria[154] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` "Senketsu Kisaragi!!!" ${jugador.getNombre()} activa la forma definitiva de Senketsu. ${victima.getNombre()} valió `;
  console.log(evento);

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


// "rompibles"
eventosAtaqueEspecificoxCategoria[155] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let pronPlural = pluralS(jugador.getArma());
  let pronOaosas = pronombreOAOsAs(jugador.getArma());

  let evento = ` ${jugador.getNombre()} toma su${pronPlural} ${jugador.getArma()["nombre"]} y se l${pronOaosas} destroza en la cabeza a ${victima.getNombre()}.`;
  console.log(evento);

  let quedar = pluralQuedar(jugador.getArma());

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


//"boina con cuchillas"
eventosAtaqueEspecificoxCategoria[156] = async (jugador, players, victima, req, channel, playersReal) => {
  let pronombre = pronombreElLaLosLas(jugador.getArma());
  let evento = ` " ${jugador.getNombre()} se saca la boina con cuchillas y ataca con ella a ${victima.getNombre()} al grito de "POR ORDEN DE LOS PEAKY BLINDERS!!!" `;
  console.log(evento);

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



export { eventosAtaqueEspecificoxCategoria };
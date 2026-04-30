/*------------ loot especifico por categoría ------------*/
import {
  randomSelector,
  englishPronoun,
  pronounItThem
} from "../utils.js"
import {
  createObject,
  cargarAvatar,
  funcionCrearImagen
} from "../../utils.js";

var eventoslootEspecificoxCategoria = [];

/*
  let resultado;
  do{
      var rand = parseInt(Math.random()*lootEspecificoxCategoria.length);  
      console.log("\x1b[33m%s\x1b[0m",` ${rand}`);
      resultado = lootEspecificoxCategoria[rand](jugador, players, arma, req, channel); //le paso el array original
  }   
   while(resultado!=1)
*/

eventoslootEspecificoxCategoria[0] = async (jugador, players, arma, req, channel) => {
  let categoria = arma["categoria"];
  console.log(`%c${arma["nombre"]} > ${categoria}`, "color:orange");
  let posicion;
  let seleccionado;
  let arrayPosiciones = [];

  let pronombreUno = englishPronoun(arma);

  switch (categoria) {

    case "martillo de Thor":
      seleccionado = randomSelector(1, 2);
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "ramo de flores":
      seleccionado = randomSelector(3, 4);
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "death note":
      seleccionado = randomSelector(5, 6);
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "espada":
      if (arma["nombre"] == "Espada Maestra") {
        arrayPosiciones = [7, 8, 20, 21, 22];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "espada de madera") {
        arrayPosiciones = [9, 10, 20, 21, 22];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "Llave Espada") {
        arrayPosiciones = [11, 12, 20, 21, 22];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "espada de iron") {
        arrayPosiciones = [13, 14, 20, 21, 22];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "espada de oro") {
        arrayPosiciones = [15, 20, 21, 22];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "espada cuádruple") {
        arrayPosiciones = [16, 20, 21, 22];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "pescado congelado") {
        arrayPosiciones = [17, 18, 19, 20, 21, 22];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "Excalibur") {
        arrayPosiciones = [77, 78, 20, 21, 22];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "espada tijera color rojo") {
        arrayPosiciones = [113, 20, 21, 22];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "espada de fuego") {
        arrayPosiciones = [157, 158, 20, 21, 22];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "Masamune") {
        arrayPosiciones = [159, 20, 21, 22];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "azada") {
        arrayPosiciones = [194, 195, 196, 20, 21, 22];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "espada de esgrima") {
        arrayPosiciones = [255, 20, 21, 22];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "guadaña") {
        arrayPosiciones = [257, 20, 21, 22];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      //"espada"
      arrayPosiciones = [20, 21, 22];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "alfiler":
      await eventoslootEspecificoxCategoria[23](jugador, players, arma, req, channel);
      break;

    case "nokia":
      await eventoslootEspecificoxCategoria[24](jugador, players, arma, req, channel);
      break;

    case "pikachu":
      seleccionado = randomSelector(25, 26);
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "jeringuilla":
      await eventoslootEspecificoxCategoria[27](jugador, players, arma, req, channel);
      break;

    case "caparazon":
      await eventoslootEspecificoxCategoria[28](jugador, players, arma, req, channel);
      break;

    case "arco y flecha":
      if (arma["nombre"] == "arco y flechas") {
        seleccionado = randomSelector(29, 30);
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      //"ballesta"
      await eventoslootEspecificoxCategoria[31](jugador, players, arma, req, channel);
      break;

    case "mando":
      await eventoslootEspecificoxCategoria[32](jugador, players, arma, req, channel);
      break;

    case "libro de mates":
      seleccionado = randomSelector(33, 34);
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "manzana":
      seleccionado = randomSelector(35, 38);
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "motosierra":
      seleccionado = randomSelector(39, 41);
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "pan duro":
      await eventoslootEspecificoxCategoria[42](jugador, players, arma, req, channel);
      break;

    case "nunchaku":
      await eventoslootEspecificoxCategoria[43](jugador, players, arma, req, channel);
      break;

    case "estrellas":
      await eventoslootEspecificoxCategoria[44](jugador, players, arma, req, channel);
      break;

    case "grimorio":
      await eventoslootEspecificoxCategoria[45](jugador, players, arma, req, channel);
      break;

    case "varita magica":
      seleccionado = randomSelector(46, 47);
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "roca":
      await eventoslootEspecificoxCategoria[48](jugador, players, arma, req, channel);
      break;

    case "sable de luz":
      await eventoslootEspecificoxCategoria[49](jugador, players, arma, req, channel);
      break;

    case "regla":
      seleccionado = randomSelector(50, 51);
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "granada fruta":
      await eventoslootEspecificoxCategoria[52](jugador, players, arma, req, channel);
      break;

    case "arma blanca":
      if (arma["nombre"] == "lapiz") {
        arrayPosiciones = [53, 61, 62];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "navaja") {
        arrayPosiciones = [54, 61, 62];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "Navaja Suiza Multiusos Victorinox Climber 5000 ++") {
        arrayPosiciones = [55, 61, 62];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "cuchillo") {
        arrayPosiciones = [56, 61, 62];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "cuchillo de carnicero") {
        arrayPosiciones = [57, 61, 62];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "trozo de cristal") {
        arrayPosiciones = [58, 59, 61, 62];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "kunai") {
        arrayPosiciones = [60, 95, 61, 62];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "machete") {
        arrayPosiciones = [94, 61, 62];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "par de estiletes de color dorado") {
        arrayPosiciones = [103, 61, 62];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "estaca de madera") {
        arrayPosiciones = [219, 220, 221, 61, 62];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "puñal") {
        arrayPosiciones = [228, 61, 62];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "agujas") {
        arrayPosiciones = [265, 61, 62];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      //"arma blanca"
      seleccionado = randomSelector(61, 62);
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "cubo rubik":
      await eventoslootEspecificoxCategoria[63](jugador, players, arma, req, channel);
      break;

    case "botella":
      if (arma["nombre"] == "botella de Vodka") {
        arrayPosiciones = [64, 105];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "botella de Fernet") {
        arrayPosiciones = [65, 105];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "botella de vino") {
        arrayPosiciones = [66, 105];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      //"botella"
      await eventoslootEspecificoxCategoria[105](jugador, players, arma, req, channel);
      break;

    case "explosivos":
      if (arma["nombre"] == "granada") {
        arrayPosiciones = [67, 106, 107];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "molotov") {
        arrayPosiciones = [68, 106, 107];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "Samsung Galaxy Note 7") {
        arrayPosiciones = [69, 106, 107];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "fuegos artificiales") {
        arrayPosiciones = [70, 106, 107];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "bomba") {
        arrayPosiciones = [97, 106, 107];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "mina de proximidad") {
        arrayPosiciones = [131, 106, 107];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "TNT") {
        arrayPosiciones = [218, 106, 107];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }


      //"explosivos"
      arrayPosiciones = [106, 107];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "rompibles":
      if (arma["nombre"] == "skate") {
        arrayPosiciones = [71, 72];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "bate de beisbol") {
        arrayPosiciones = [73, 72];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "guitarra") {
        arrayPosiciones = [74, 72];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "bongos") {
        arrayPosiciones = [146, 72];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "banjo") {
        arrayPosiciones = [216, 72];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      //"rompibles"
      await eventoslootEspecificoxCategoria[72](jugador, players, arma, req, channel);
      break;

    case "taser":
      await eventoslootEspecificoxCategoria[75](jugador, players, arma, req, channel);
      break;

    case "lanzacohetes":
      await eventoslootEspecificoxCategoria[76](jugador, players, arma, req, channel);
      break;

    case "pizza con piña":
      await eventoslootEspecificoxCategoria[79](jugador, players, arma, req, channel);
      break;

    case "gas pimienta":
      seleccionado = randomSelector(80, 81);
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "pistola":
      if (arma["nombre"] == "Jericho 941-R") {
        arrayPosiciones = [82, 92, 147, 148];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "fusil de francotirador") {
        arrayPosiciones = [156, 92, 147, 148];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "lancer de gears of war") {
        arrayPosiciones = [172, 92, 147, 148];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "pistola de bengalas") {
        arrayPosiciones = [226, 92, 147, 148];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "mosquete") {
        arrayPosiciones = [246, 247, 92, 147, 148];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "escopeta") {
        arrayPosiciones = [252, 253, 254, 92, 147, 148];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }


      //"pistola"
      arrayPosiciones = [92, 147, 148];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "da rules":
      await eventoslootEspecificoxCategoria[83](jugador, players, arma, req, channel);
      break;

    case "caniche":
      seleccionado = randomSelector(84, 86);
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "encendedor":
      seleccionado = randomSelector(87, 89);
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "roca pequeña":
      await eventoslootEspecificoxCategoria[90](jugador, players, arma, req, channel);
      break;

    case "veneno":
      if (arma["nombre"] == "dardos venenosos") {
        arrayPosiciones = [91, 99, 100];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "planta venenosa") {
        arrayPosiciones = [126, 129, 99, 100];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      if (arma["nombre"] == "lanza venenosa") {
        arrayPosiciones = [149, 99, 100];
        posicion = randomSelector(0, arrayPosiciones.length - 1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
      }

      //"veneno"
      arrayPosiciones = [99, 100];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "ring blade":
      await eventoslootEspecificoxCategoria[93](jugador, players, arma, req, channel);
      break;

    case "kusarigama":
      await eventoslootEspecificoxCategoria[96](jugador, players, arma, req, channel);
      break;

    case "tirachinas":
      await eventoslootEspecificoxCategoria[98](jugador, players, arma, req, channel);
      break;

    case "escoba":
      await eventoslootEspecificoxCategoria[101](jugador, players, arma, req, channel);
      break;

    case "plumaDeAve":
      await eventoslootEspecificoxCategoria[102](jugador, players, arma, req, channel);
      break;

    case "cucco":
      arrayPosiciones = [108, 109, 110];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "megumin":
      await eventoslootEspecificoxCategoria[104](jugador, players, arma, req, channel);
      break;

    case "vieja":
      arrayPosiciones = [111, 112];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "banana":
      arrayPosiciones = [114, 115, 116, 117];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "senketsu":
      await eventoslootEspecificoxCategoria[118](jugador, players, arma, req, channel);
      break;

    case "taco de pool":
      await eventoslootEspecificoxCategoria[119](jugador, players, arma, req, channel);
      break;

    case "oniball":
      await eventoslootEspecificoxCategoria[121](jugador, players, arma, req, channel);
      break;

    case "globo con confeti":
      await eventoslootEspecificoxCategoria[120](jugador, players, arma, req, channel);
      break;

    case "test de embarazo":
      await eventoslootEspecificoxCategoria[122](jugador, players, arma, req, channel);
      break;

    case "lanzagranadas":
      await eventoslootEspecificoxCategoria[123](jugador, players, arma, req, channel);
      break;

    case "lanzallamas":
      await eventoslootEspecificoxCategoria[125](jugador, players, arma, req, channel);
      break;

    case "cinturón":
      await eventoslootEspecificoxCategoria[124](jugador, players, arma, req, channel);
      break;

    case "chitauri":
      await eventoslootEspecificoxCategoria[127](jugador, players, arma, req, channel);
      break;

    case "pierna":
      await eventoslootEspecificoxCategoria[128](jugador, players, arma, req, channel);
      break;

    case "fotocopiadora":
      await eventoslootEspecificoxCategoria[130](jugador, players, arma, req, channel);
      break;

    case "rollo de papel higiénico":
      await eventoslootEspecificoxCategoria[132](jugador, players, arma, req, channel);
      break;

    case "boina con cuchillas":
      await eventoslootEspecificoxCategoria[133](jugador, players, arma, req, channel);
      break;

    case "manifesto":
      arrayPosiciones = [134, 135];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "cráneo humano":
      arrayPosiciones = [136, 137, 138];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;


    case "manipulador":
      arrayPosiciones = [140, 141, 142];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "funda de celular":
      await eventoslootEspecificoxCategoria[139](jugador, players, arma, req, channel);
      break;


    case "bola de boliche":
      await eventoslootEspecificoxCategoria[143](jugador, players, arma, req, channel);
      break;

    case "tijeras":
      await eventoslootEspecificoxCategoria[144](jugador, players, arma, req, channel);
      break;

    case "aspa de ventilador":
      await eventoslootEspecificoxCategoria[145](jugador, players, arma, req, channel);
      break;

    case "gemelas":
      await eventoslootEspecificoxCategoria[150](jugador, players, arma, req, channel);
      break;

    case "prensa":
      await eventoslootEspecificoxCategoria[151](jugador, players, arma, req, channel);
      break;

    case "fazerblaster":
      arrayPosiciones = [152, 153];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "figura de anime":
      arrayPosiciones = [154, 155];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "lanza":
      arrayPosiciones = [160, 161, 162, 163];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "banhammer":
      arrayPosiciones = [165, 166];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "esposas":
      await eventoslootEspecificoxCategoria[164](jugador, players, arma, req, channel);
      break;

    case "poderosa pimienta peruana":
      await eventoslootEspecificoxCategoria[167](jugador, players, arma, req, channel);
      break;

    case "ladrillo":
      arrayPosiciones = [168, 169];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "látigo":
      arrayPosiciones = [170, 171];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "ps5":
      arrayPosiciones = [174, 175, 176, 177, 178];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "carnet de conducir":
      await eventoslootEspecificoxCategoria[173](jugador, players, arma, req, channel);
      break;

    case "colmena":
      arrayPosiciones = [180, 181, 182];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "iPhone 13":
      await eventoslootEspecificoxCategoria[179](jugador, players, arma, req, channel);
      break;

    case "plumero":
      await eventoslootEspecificoxCategoria[183](jugador, players, arma, req, channel);
      break;

    case "tableta":
      arrayPosiciones = [185, 186, 187];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "gaymer":
      if (arma["nombre"] == "teclado gaymer") {
        await eventoslootEspecificoxCategoria[184](jugador, players, arma, req, channel);
        break;
      }
      break;

    case "aspiradora":
      await eventoslootEspecificoxCategoria[188](jugador, players, arma, req, channel);
      break;

    case "palillos chinos":
      await eventoslootEspecificoxCategoria[191](jugador, players, arma, req, channel);
      break;

    case "gas lacrimogeno":
      await eventoslootEspecificoxCategoria[192](jugador, players, arma, req, channel);
      break;

    case "tridente demoníaco":
      arrayPosiciones = [189, 190, 199, 200];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "nambre":
      await eventoslootEspecificoxCategoria[193](jugador, players, arma, req, channel);
      break;

    case "chancla":
      await eventoslootEspecificoxCategoria[198](jugador, players, arma, req, channel);
      break;

    case "tenedor":
      await eventoslootEspecificoxCategoria[197](jugador, players, arma, req, channel);
      break;

    case "pepino":
      arrayPosiciones = [201, 202, 203];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "dentadura":
      await eventoslootEspecificoxCategoria[207](jugador, players, arma, req, channel);
      break;

    case "telescopio":
      await eventoslootEspecificoxCategoria[208](jugador, players, arma, req, channel);
      break;

    case "martillo":
      arrayPosiciones = [204, 205, 206];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "tentaculo":
      await eventoslootEspecificoxCategoria[209](jugador, players, arma, req, channel);
      break;

    case "terranator":
      arrayPosiciones = [212, 213];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "misil":
      arrayPosiciones = [210, 211];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "linterna":
      arrayPosiciones = [214, 215];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "taco":
      await eventoslootEspecificoxCategoria[217](jugador, players, arma, req, channel);
      break;

    case "crucifijo":
      arrayPosiciones = [222, 223];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "resorte":
      await eventoslootEspecificoxCategoria[224](jugador, players, arma, req, channel);
      break;

    case "huevo":
      await eventoslootEspecificoxCategoria[225](jugador, players, arma, req, channel);
      break;

    case "teta de plástico":
      await eventoslootEspecificoxCategoria[227](jugador, players, arma, req, channel);
      break;

    case "porra de policía":
      await eventoslootEspecificoxCategoria[229](jugador, players, arma, req, channel);
      break;

    case "serrucho":
      await eventoslootEspecificoxCategoria[230](jugador, players, arma, req, channel);
      break;

    case "bumeran":
      arrayPosiciones = [232, 233];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "abanico":
      await eventoslootEspecificoxCategoria[231](jugador, players, arma, req, channel);
      break;

    case "cania":
      arrayPosiciones = [235, 237];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "micrófono":
      await eventoslootEspecificoxCategoria[234](jugador, players, arma, req, channel);
      break;

    case "canion":
      await eventoslootEspecificoxCategoria[245](jugador, players, arma, req, channel);
      break;

    case "empanada":
      arrayPosiciones = [238, 239, 240, 241, 242, 243, 244];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "ganzúas":
      arrayPosiciones = [248, 249];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "lupa":
      arrayPosiciones = [250, 251];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "tarjeta":
      await eventoslootEspecificoxCategoria[256](jugador, players, arma, req, channel);
      break;

    case "cuerda":
      arrayPosiciones = [258, 259];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "tijeras de jardineria":
      await eventoslootEspecificoxCategoria[262](jugador, players, arma, req, channel);
      break;

    case "cadenas":
      arrayPosiciones = [263, 264];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "palo de golf":
      arrayPosiciones = [260, 261];
      posicion = randomSelector(0, arrayPosiciones.length - 1);
      seleccionado = arrayPosiciones[posicion];
      await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
      break;

    case "rama":
      await eventoslootEspecificoxCategoria[236](jugador, players, arma, req, channel);
      break;

    case "pelota de fulbo":
      await eventoslootEspecificoxCategoria[266](jugador, players, arma, req, channel);
      break;

    case "mancuerna":
      await eventoslootEspecificoxCategoria[267](jugador, players, arma, req, channel);
      break;


    default:
      jugador.setArma(arma);
      let evento = ` ${jugador.getNombre()} looted ${pronombreUno}${arma["name"]}.`
      let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
      console.log(json.evento);
      funcionCrearImagen(json, "1", channel);
      break;
  }

  return 1;
}

// "martillo de Thor"
eventoslootEspecificoxCategoria[1] = async (jugador, players, arma, req, channel) => {
  let evento = ` ${jugador.getNombre()} found Thor's hammer 🔨. Unfortunately they couldn't lift it because they are not worthy.`;
  //jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[2] = async (jugador, players, arma, req, channel) => {
  let evento = ` ${jugador.getNombre()} found Thor's hammer 🔨. As ${jugador.getNombre()} is "someone worthy", they can lift it and take it.`;
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "ramo de flores"
eventoslootEspecificoxCategoria[3] = async (jugador, players, arma, req, channel) => {
  let evento = ` ${jugador.getNombre()} collects flowers with thorns from their surroundings, and creates a bouquet of flowers. 🌼`;
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[4] = async (jugador, players, arma, req, channel) => {
  let evento = ` A bouquet of flowers?! Is ${jugador.getNombre()} going on a date? Who would be so crazy as to accept that? `;
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "death note"
eventoslootEspecificoxCategoria[5] = async (jugador, players, arma, req, channel) => {
  let evento = ` ${jugador.getNombre()} encontró una Death Note y está listo para ponerse a escribir nombres.`
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[6] = async (jugador, players, arma, req, channel) => {
  let evento = ` ${jugador.getNombre()} encontró una Death Note. Espero que haya leido bien las reglas`;
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "espada maestra"
eventoslootEspecificoxCategoria[7] = async (jugador, players, arma, req, channel) => {
  let evento = ` ${jugador.getNombre()} acaba de encontrar LA ESPADA MAESTRA. El arma mas mamadísima del juego. Cuidadito.`;
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], [])
  console.log(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[8] = async (jugador, players, arma, req, channel) => {
  let evento = ` ${jugador.getNombre()} se perdió en un bosque y encontró una Espada Maestra en un pedestal. ¿Tendrá la edad suficiente?`;
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "espada de madera"
eventoslootEspecificoxCategoria[9] = async (jugador, players, arma, req, channel) => {
  let evento = ` ${jugador.getNombre()} crafts a wooden sword with branches from the trees.`
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[10] = async (jugador, players, arma, req, channel) => {
  let evento = ` ${jugador.getNombre()} finds a wooden sword. Isn't that useless?`;
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "llave espada"
eventoslootEspecificoxCategoria[11] = async (jugador, players, arma, req, channel) => {
  let evento = ` Mickey le da una Llave Espada a ${jugador.getNombre()}. ¿A quién se la habrá comprado?`
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[12] = async (jugador, players, arma, req, channel) => {
  let evento = ` Un ratón le da una espada con forma de llave a ${jugador.getNombre()}. ¿De dónde me suena esta escena?`
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "espada de iron"
eventoslootEspecificoxCategoria[13] = async (jugador, players, arma, req, channel) => {
  let evento = ` ${jugador.getNombre()} went to mine, got 2 iron ores, and then crafted an iron sword. Isn't that too little iron to make a sword?`
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[14] = async (jugador, players, arma, req, channel) => {
  let evento = ` ${jugador.getNombre()} went to mine, got 2 iron ores, and then crafted an iron sword. Now they're on the hunt for diamonds... Wait, what game was this?`;
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "espada de oro"
eventoslootEspecificoxCategoria[15] = async (jugador, players, arma, req, channel) => {
  let evento = ` ${jugador.getNombre()} crafted a golden sword. It doesn't sound as bad as the wooden one.`;
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "espada cuadruple"
eventoslootEspecificoxCategoria[16] = async (jugador, players, arma, req, channel) => {
  let evento = ` ${jugador.getNombre()} consiguió una Espada Cuádruple. Que raro que no se multiplicó`
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "pescado congelado"
eventoslootEspecificoxCategoria[17] = async (jugador, players, arma, req, channel) => {
  let evento = ` ${jugador.getNombre()} found a fish. Great, they're going to kill everyone with the bad smell`;
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[18] = async (jugador, players, arma, req, channel) => {
  let evento = ` ${jugador.getNombre()} found a frozen fish. At least it's frozen, so it will serve as a sword.`;
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[19] = async (jugador, players, arma, req, channel) => {
  let evento = ` ${jugador.getNombre()} found a frozen fish. 🥶`
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "espada"
eventoslootEspecificoxCategoria[20] = async (jugador, players, arma, req, channel) => {
  let pronombre = englishPronoun(arma);

  jugador.setArma(arma); let evento = ` ${jugador.getNombre()} looted ${pronombre}${arma["name"]}.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[21] = async (jugador, players, arma, req, channel) => {
  let pronombre = englishPronoun(arma);

  jugador.setArma(arma); let evento = ` ${jugador.getNombre()} looted ${pronombre} ${arma["name"]}. Let's see who they thrust it into.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[22] = async (jugador, players, arma, req, channel) => {
  let pronombre = englishPronoun(arma)

  jugador.setArma(arma); let evento = ` ${jugador.getNombre()} looted ${pronombre}${arma["name"]} and thought "I wish I had taken fencing lessons"`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "alfiler"
eventoslootEspecificoxCategoria[23] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = ` ${jugador.getNombre()} opened a butter cookies can... But there were only sewing materials. At least they got a pin.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "nokia"
eventoslootEspecificoxCategoria[24] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `Something falls from the sky in front of ${jugador.getNombre()}. It's a Nokia 1100. Fortunately it didn't hit them on the head.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "pikachu"
eventoslootEspecificoxCategoria[25] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} se fue a cazar Pokemon. Todos creen que enloqueció, hasta que encuentra un Pikachu y lo captura`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[26] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} encontró un pikachu salvaje.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "jeringuilla"
eventoslootEspecificoxCategoria[27] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} fue a una clínica abandonada y se llevó una jeringuilla usada. ¿No era mejor llevarse algo más letal?`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "caparazon"
eventoslootEspecificoxCategoria[28] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} toma una caja misteriosa y le sale un Caparazón Azul. Pobre el que va de primero.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "arco y flecha"
eventoslootEspecificoxCategoria[29] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} gets a bow and arrows. They look like that girl... What was her name? Catnip?`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[30] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} finds a bow and arrows. Legolas mode`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "ballesta"
eventoslootEspecificoxCategoria[31] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} took a crossbow away from some big-nosed guys. Hmmmmmmm 👃`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "mando"
eventoslootEspecificoxCategoria[32] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} consiguió un ${arma["nombre"]}. Obviamente se le acabaron las baterias.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "libro de mates"
eventoslootEspecificoxCategoria[33] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} takes a math book out from somewhere. Let's hope they have it all calculated`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[34] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} sits down with their math book. Is this the time to be solving equations?`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "manzana"
eventoslootEspecificoxCategoria[35] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} got an apple. Too bad it's not a golden one`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[36] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} got hit on the head by an apple, and instead of thinking about the theory of gravity, they think about who they can throw it at.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[37] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `An apple falls on ${jugador.getNombre()}'s head. It's a matter of "gravity" 🤡`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[38] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} takes an apple from a tree, but instead of eating it to recover health, they keep it to use as a weapon.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "motosierra"
eventoslootEspecificoxCategoria[39] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `¿Pochita? Ow, no... It's just a chainsaw that ${jugador.getNombre()} got`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[40] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `¿Pochita? Ow, no... It's just a chainsaw that ${jugador.getNombre()} got`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[41] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} found a chainsaw and now thinks they're Leatherface`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "pan duro"
eventoslootEspecificoxCategoria[42] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} got hungry and went to check their fridge. But they only found a stale piece of bread. At least it can be used as a weapon, I guess.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "nunchaku"
eventoslootEspecificoxCategoria[43] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} stole nunchucks from a... Turtle?`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "estrellas"
eventoslootEspecificoxCategoria[44] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()}: "Now you will know the power of ${jugador.getNombre()}, the Devastating Storm". The shurikens they found turned them into a chuunibyou`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "grimorio"
eventoslootEspecificoxCategoria[45] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} encontró un Grimorio Antiguo. ¿A quién hechizará?`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "varita magica"
eventoslootEspecificoxCategoria[46] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `Expelliarmus!!... Parece que ${jugador.getNombre()} aún no sabe usar la varita mágica que encontró`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[47] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} saca una varita mágica del bolsillo. Al fin ser fan de Harry Potter le va a servir de algo.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "roca"
eventoslootEspecificoxCategoria[48] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} sees something that looks like a rock so they approach to investigate... It's a rock.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "sable de luz"
eventoslootEspecificoxCategoria[49] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `La fuerza está con ${jugador.getNombre()} y su nuevo sable de Luz.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "regla"
eventoslootEspecificoxCategoria[50] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} encuentra una regla de metal y se la guarda. ¿Qué clase de loco usaría eso como un arma?`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[51] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} encuentra una regla de metal. ¿Medirá sus consecuencias?`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "granada fruta"
eventoslootEspecificoxCategoria[52] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} found a pomegranate!!!`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "lapiz"
eventoslootEspecificoxCategoria[53] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} finds a pencil. It looks like they're ready for the exam.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "navaja"
eventoslootEspecificoxCategoria[54] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `You can take ${jugador.getNombre()} out of the streets but you can't take the streets out of ${jugador.getNombre()}. Everyone gets scared when they see the pocket knife they found`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "Navaja Suiza Multiusos Victorinox Climber 5000 ++"
eventoslootEspecificoxCategoria[55] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} compra una Navaja Suiza Multiusos Victorinox Climber ++. Mucha marca, pero realmente hace el mismo daño que una navaja común y corriente.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "cuchillo"
eventoslootEspecificoxCategoria[56] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} found a knife. Time to cut some friendship ties.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "cuchillo de carnicero"
eventoslootEspecificoxCategoria[57] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} encontró un cuchillo de carnicero. Hora de filetear algunos weyes.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "trozo de cristal"
eventoslootEspecificoxCategoria[58] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} breaks a window and takes a crystal shard.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[59] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} jumps through a window and miraculously doesn't get stabbed by any crystal shards. Well, just one, but they can use it as a weapon.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "kunai"
eventoslootEspecificoxCategoria[60] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} finds a kunai. Finally, all those 720 episodes of Naruto will come in handy!`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "arma blanca"
eventoslootEspecificoxCategoria[61] = async (jugador, players, arma, req, channel) => {
  let pronombre = englishPronoun(arma);

  jugador.setArma(arma); let evento = `${jugador.getNombre()} finds ${pronombre}${arma["name"]} and keeps it to thrust someone. (With the ${arma["name"]}).`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[62] = async (jugador, players, arma, req, channel) => {
  let pronombre = englishPronoun(arma);

  jugador.setArma(arma); let evento = `${jugador.getNombre()} finds ${pronombre}${arma["name"]} and keeps it, imagining themself attacking others with ninja jumps and unnecessary somersaults and backflips.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "cubo rubik"
eventoslootEspecificoxCategoria[63] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} takes out a Rubik's Cube from their bag. What a nerd!`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "botella de Vodka"
eventoslootEspecificoxCategoria[64] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} sacó una botella de Vodka de alguna licorería. Listo para enorgullecer a la Madre Patria`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "botella de Fernet"
eventoslootEspecificoxCategoria[65] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} encontró una botella de Fernet. ¿Alguien tiene una Coca Cola?`
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "botella de vino"
eventoslootEspecificoxCategoria[66] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} encontró una botella de vino. El que al mundo vino y no toma vino, ¿para qué vino?`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "granada"
eventoslootEspecificoxCategoria[67] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} found a grenade. Caution with the pull ring 👀`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "molotov"
eventoslootEspecificoxCategoria[68] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} makes a molotov cocktail with an empty bottle.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "Samsung Galaxy Note 7"
eventoslootEspecificoxCategoria[69] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} encuentra un Samsung Galaxy Note 7 y abre Genshin para usar el teléfono como explosivo.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "fuegos artificiales"
eventoslootEspecificoxCategoria[70] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `Happy new year? Where did ${jugador.getNombre()} get those fireworks?`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "skate"
eventoslootEspecificoxCategoria[71] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} wanted to feel young again and bought a skate`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "rompibles"
eventoslootEspecificoxCategoria[72] = async (jugador, players, arma, req, channel) => {
  let pronombre = englishPronoun(arma);

  jugador.setArma(arma);
  let evento = `${jugador.getNombre()} finds ${pronombre}${arma["name"]} and plans to break it on somebody's head.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "bate de beisbol"
eventoslootEspecificoxCategoria[73] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} finds a baseball bat, and far from wanting to do sports, they keeps it to break it on somebody's head.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "guitarra"
eventoslootEspecificoxCategoria[74] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} found a guitar and started to play songs during 1 hour and a half. Nobody dared to approach.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "taser"
eventoslootEspecificoxCategoria[75] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} robbed a police station and took a taser`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "lanzacohetes"
eventoslootEspecificoxCategoria[76] = async (jugador, players, arma, req, channel) => {

  jugador.setArma(arma); let evento = `${jugador.getNombre()} finds a rocket launcher and takes it to... well, launch rockets`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "Excalibur"
eventoslootEspecificoxCategoria[77] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} tried to pull Excalibur out of the stone. They could not`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[78] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} tried to pull Excalibur out of the stone... and they did! Should we start calling them Arthur?`;
  console.log(evento);
  jugador.setArma(arma);
  jugador.setNombre("Arthur");
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "pizza con piña"
eventoslootEspecificoxCategoria[79] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} encontró una pizza con piña y por más que se está muriendo de hambre, la enrrolla y planea usarla de arma. Sí, eso da menos asco`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "gas pimienta"
eventoslootEspecificoxCategoria[80] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds a pepper spray in a police station`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[81] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} made a can of pepper spray using pepper... and a can.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "Jericho 941-R"
eventoslootEspecificoxCategoria[82] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} encontró una Jericho 941-R. ¿Qué tal vaqueros del espacio?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "da rules"
eventoslootEspecificoxCategoria[83] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} encontró un libro "Da rules". Hora de imponer reglas en el juego`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "caniche"
eventoslootEspecificoxCategoria[84] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} bought a poodle. ¡Awww, what a beauty! Surely they're not going to train it for killing, right?... Right?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[85] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds an abandoned poodle and adopts it`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[86] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} bought a poodle and named it "Luna". Originality above all`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "encendedor"
eventoslootEspecificoxCategoria[87] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds a ZIPPO lighter in a corpse. They are disgusted, but a ZIPPO lighter is a ZIPPO lighter, so they make the effort to take it`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[88] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds a lighter. It can be used for smoking, or setting someone on fire, not too bad!`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

eventoslootEspecificoxCategoria[89] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds a lighter, they decide to use it for smoking random herbs of the forest and, gets lost in a psychedelic astral trip`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "roca pequeña"
eventoslootEspecificoxCategoria[90] = async (jugador, players, arma, req, channel) => {
  let evento = `Todo lo que encontró ${jugador.getNombre()} es una roca pequeña. Es peor que una roca grande, pero es mejor que nada`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "dardos venenosos"
eventoslootEspecificoxCategoria[91] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds some darts and coats them with a poisonous substance they found in the forest.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "pistola"
eventoslootEspecificoxCategoria[92] = async (jugador, players, arma, req, channel) => {
  let pronombre = englishPronoun(arma); let evento = `${jugador.getNombre()} looted ${pronombre}${arma["name"]}. I hope they've practiced enough in Counter Strike.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "ring blade"
eventoslootEspecificoxCategoria[93] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} found a ring blade. Suddenly this looks like a RPG.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "arma blanca" > "machete"
eventoslootEspecificoxCategoria[94] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} was walking when they found a machete. They're already ready to go fight the devil on the hill.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "arma blanca > kunai"
eventoslootEspecificoxCategoria[95] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} is ready with their kunai. "Believe it!"`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "kusarigama"
eventoslootEspecificoxCategoria[96] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} encuentra una kusarigama y ya se siente todo un ninja.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "explosivos" > "bomba"
eventoslootEspecificoxCategoria[97] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds a bomb. Get ready for some EXPLOSION!!`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "tirachinas"  
eventoslootEspecificoxCategoria[98] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} is armed with a slingshot. Despite of its name, it shoots rocks, not slings.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "veneno"
eventoslootEspecificoxCategoria[99] = async (jugador, players, arma, req, channel) => {
  let pronombre = englishPronoun(arma);
  let pronombre2 = pronounItThem(arma);
  let evento = `${jugador.getNombre()} sees ${pronombre}${arma["name"]} and keeps ${pronombre2}. They start planning to poison someone.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "veneno"
eventoslootEspecificoxCategoria[100] = async (jugador, players, arma, req, channel) => {
  let pronombre = englishPronoun(arma);
  let pronombre2 = pronounItThem(arma);
  let evento = `${jugador.getNombre()} almost got poisoned by stepping on ${pronombre}${arma["name"]}. They carefully pick ${pronombre2} up and take ${pronombre2} to use as a weapon.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "escoba"
eventoslootEspecificoxCategoria[101] = async (jugador, players, arma, req, channel) => {
  let evento = `Is it a bird? Is it a plane? No, it's ${jugador.getNombre()} sprinting by on the broom they just found.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "plumaDeAve"
eventoslootEspecificoxCategoria[102] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} is desperate wantiong the fight to end. They're looking at the sky searching for peace, when a bird flies overhead and drops a feather. ${jugador.getNombre()} takes it.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "arma blanca" > "par de estiletes de color dorado"
eventoslootEspecificoxCategoria[103] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds a pair of golden stilettos. This feels familiar...`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "megumin"
eventoslootEspecificoxCategoria[104] = async (jugador, players, arma, req, channel) => {
  let evento = `¡¡EXPLOSION!! ${jugador.getNombre()} ya se emocionó con el cetro de Megumin que encontró.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "botella"
eventoslootEspecificoxCategoria[105] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} es un pto borracho. Se emociona por encontrar una ${arma["nombre"]} y ya está planeando tomar hasta el amanecer.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "explosivos"
eventoslootEspecificoxCategoria[106] = async (jugador, players, arma, req, channel) => {
  let pronombre = englishPronoun(arma);
  let pronombre2 = pronounItThem(arma);
  let evento = `${jugador.getNombre()} picks up ${pronombre}${arma["name"]} from the ground. They run off to think of an explosive trap with ${pronombre2}.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

// "explosivos"
eventoslootEspecificoxCategoria[107] = async (jugador, players, arma, req, channel) => {
  let pronombre = englishPronoun(arma);
  let pronombre2 = pronounItThem(arma);
  let evento = `${jugador.getNombre()} finds ${pronombre}${arma["name"]} and starts thinking about who they can blow up with ${pronombre2}.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"cucco"
eventoslootEspecificoxCategoria[108] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} va caminando tranquilamente por el campo y ve un cucco. Se le ocurre la idea de tenerlo de mascota así que se lo lleva.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"cucco"
eventoslootEspecificoxCategoria[109] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} ve un cucco a lo lejos y se acerca a golpearlo. El cucco llama toda una bandada y afortunamente logra escapar sin haber recibido daño.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"cucco"
eventoslootEspecificoxCategoria[110] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} quiere sentirse speedrunner, así que se pone a buscar un cucco para arrojarlo a sus enemigos. Después de un rato encuentra uno y se lo lleva.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"vieja"
eventoslootEspecificoxCategoria[111] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} encuentra una vieja confiable. ¿Qué significa eso exactamente? Lo dejo a interpretación.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"vieja"
eventoslootEspecificoxCategoria[112] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} encuentra una vieja confiable.¿Pero una vieja y confiable... qué?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"espada" > "espada tijera color rojo"
eventoslootEspecificoxCategoria[113] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} halló una espada tijera color rojo. Bueno, media. ¿Dónde estará la otra mitad?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"banana"
eventoslootEspecificoxCategoria[114] = async (jugador, players, arma, req, channel) => {
  let evento = `I think ${jugador.getNombre()} is hungry. They climbed a palm tree and picked up a banana.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"banana"
eventoslootEspecificoxCategoria[115] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds a banana and puts it away for later.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"banana"
eventoslootEspecificoxCategoria[116] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} picks up a banana from a tree. Let's hope they don't do anything weird with it.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"banana"
eventoslootEspecificoxCategoria[117] = async (jugador, players, arma, req, channel) => {
  let evento = `¿${jugador.getNombre()} is happy to see me? They reach into their pants and pulls out a banana. Oh...`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"senketsu"  
eventoslootEspecificoxCategoria[118] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} encuentra a Senketsu y se lo pone. Oh.. oh Dios no, se le ve todo, quitenselo, quitenselo`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"taco de pool"  
eventoslootEspecificoxCategoria[119] = async (jugador, players, arma, req, channel) => {
  let evento = `After playing 16 matches of pool against themself, ${jugador.getNombre()} decides it's time to go out and fight. But they take their pool cue with them.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"globo con confeti"  
eventoslootEspecificoxCategoria[120] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} steals a balloon with confetti from a birthday party. Why?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}


//"oniballl"  
eventoslootEspecificoxCategoria[121] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} se compra una oniball con wabis. Ahora puede invocar onis siempre que quiera!! Qué... qué tortura.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"test de embarazo"  
eventoslootEspecificoxCategoria[122] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} lleva un test de embarazo. Nunca se sabe!!`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"lanzagranadas"  
eventoslootEspecificoxCategoria[123] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} bought a grenade launcher to a random guy. "Is that all, stranger?"`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"cinturón" 
eventoslootEspecificoxCategoria[124] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} removes the belt they were wearing and decides to use it as their weapon. Their pants fall down constantly now`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"lanzallamas"  
eventoslootEspecificoxCategoria[125] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} looted a flamethrower, and their eyes light up with a red glow. Oh no...`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"veneno" > "planta venenosa"  
eventoslootEspecificoxCategoria[126] = async (jugador, players, arma, req, channel) => {
  let evento = `Among many plants, ${jugador.getNombre()} spots one in partícular: it was a poisonous plant. ${jugador.getNombre()} picks it up carefully and puts it in their bag.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"chitauri"  
eventoslootEspecificoxCategoria[127] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} ve a un random con cuernos tocando con un bastón a la gente. Heróicamente se lanza y se lo quita. Parece que ${jugador.getNombre()} tiene ahora un Cetro Chitauri. Y no hizo falta un equipo de 6 randoms.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"pierna"  
eventoslootEspecificoxCategoria[128] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} sees a prosthetic leg leaning against a bathroom entrance and takes it. Surely nobody was going to need it... right?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"veneno" > "planta venenosa"  
eventoslootEspecificoxCategoria[129] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} is picking flowers when they notice a Toxicodendron Radicans among them. Fancy name and all, but it's still just a poisonous plant.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"fotocopiadora"
eventoslootEspecificoxCategoria[130] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} goes to a cyber cafe and steals a photocopier.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"explosivos > mina de proximidad"  
eventoslootEspecificoxCategoria[131] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} se acerca inconscientemente a una mina de proximidad. Por suerte estaba desactivada. ${jugador.getNombre()} la levanta y se la lleva`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"rollo de papel higiénico"  
eventoslootEspecificoxCategoria[132] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} walks into a supermarket and the only thing they take is a roll of toilet paper. Did anybody tell them this is the Hunger Games and not a pandemic?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"boina con cuchillas"  
eventoslootEspecificoxCategoria[133] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} puts on a newsboy cap with razor blades and starts speaking with a British accent`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"manifesto"  
eventoslootEspecificoxCategoria[134] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} encuentra un Manifesto Comunista. Al fin algo bueno para leer!!`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"manifesto"  
eventoslootEspecificoxCategoria[135] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} se está muriendo de hambre. Pero a pesar de todo, piensa defender las enseñanzas del Manifiesto Comunista que encontró. ¡Viva la revolución!`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"cráneo humano"  
eventoslootEspecificoxCategoria[136] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} sees a human skull at their feet. They think: "AAAAAAAAAAAAAAAAAAAAAAAAAAA!!!!"`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"cráneo humano"  
eventoslootEspecificoxCategoria[137] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} sees a human skull at their feet. It creeps them out, but they're sure they can use it to get rid of an enemy. They decide to take it with them.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"cráneo humano"      
eventoslootEspecificoxCategoria[138] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds a spear stuck in the ground, through a skeleton. ${jugador.getNombre()} takes the skeleton's skull and leaves. Why not the spear...?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"funda de celular"  
eventoslootEspecificoxCategoria[139] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} take out a phone case and shouts "I have a phone case and i'm not afraid of using it!!!"`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"manipulador"  
eventoslootEspecificoxCategoria[140] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} hace un doctorado de física en teoría cuántica de campos para poder construirse un Manipulador de Campos de Energía Oscura. Un momento... ¿Eso no habría tomado años?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"manipulador"  
eventoslootEspecificoxCategoria[141] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} encuentra un Manipulador de Campos de Energía Oscura en medio del camino, se alegra y se lo guarda. ¿Cómo supo que era un Manipulador de Campos de Energía Oscura?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"manipulador"  
eventoslootEspecificoxCategoria[142] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} encuentra una cosa rara en medio de la nada. Según dice es un Manipulador de Campos de Energía Oscura, ¿pero eso qué carajo es?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"bola de boliche"  
eventoslootEspecificoxCategoria[143] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds a bowling ball and sticks their fingers in it.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"tijeras"  
eventoslootEspecificoxCategoria[144] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} goes to a gas station and buys a pair of scissors. Hopefully they won't run with them`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"aspa de ventilador"  
eventoslootEspecificoxCategoria[145] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} breaks a fan and takes one of the blades. Improvise. Adapt. Overcome`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"rompibles" > "bongos"  
eventoslootEspecificoxCategoria[146] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} found some bongos. Either they're for playing some beats and having fun, or for smashing over the head of anyone who pisses them off.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"pistola"  
eventoslootEspecificoxCategoria[147] = async (jugador, players, arma, req, channel) => {
  let pronombre = englishPronoun(arma);
  let evento = `${jugador.getNombre()} finds an AmmuNation and buys ${pronombre}${arma["name"]}.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"pistola"  
eventoslootEspecificoxCategoria[148] = async (jugador, players, arma, req, channel) => {
  let evento = `Someone is about to rob ${jugador.getNombre()} with their ${arma["name"]}. But they remember they didn't know that ${jugador.getNombre()} is Latin American, so they just steals it back to use it as a weapon.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}


//"veneno > lanza venenosa"  
eventoslootEspecificoxCategoria[149] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds a spear, but they aren't satisfied. So they dip the spear into a pool of poison, turning it into a poisonous spear. Everyone looks at them like they're a genius.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"gemelas"  
eventoslootEspecificoxCategoria[150] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} se consigue unas gemelas. O sea, unas hojas gemelas, como las de Azzinoth`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"prensa"  
eventoslootEspecificoxCategoria[151] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds an hydraulic press. It's perfect for starting to record videos for their YouTube channel.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}


//"fazerblaster"  
eventoslootEspecificoxCategoria[152] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} gana una partida de laser tag y obtiene como premio un Fazerblaster. ¡Ojito, superestrella!`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"fazerblaster"  
eventoslootEspecificoxCategoria[153] = async (jugador, players, arma, req, channel) => {
  let evento = `Un oso le da un regalo a ${jugador.getNombre()}. Lo abre y dentro había un Fazerblaster. Ahora sí tiene con que defenderse de esos horribles staffbots... ¿Hay algún staffbot cerca?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"figura de anime" 
eventoslootEspecificoxCategoria[154] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} derrama una lágrima mientras recoge y se lleva una figura de anime de su estantería. Hora de ir a la pelea...`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"figura de anime" 
eventoslootEspecificoxCategoria[155] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} saca una figura de anime de un frasco de vidrio. Qué curioso jaja`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"pistola" > "fusil de francotirador"  
eventoslootEspecificoxCategoria[156] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} looted a sniper rifle. Excellent!! They always liked lying down and not moving for hours.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}


//"espada > espada de fuego"
eventoslootEspecificoxCategoria[157] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} sees a forest fire. They run to the forest to see what's happening. When they arrive, they see that the fire was caused by a fire sword. ${jugador.getNombre()} takes it to use as a weapon.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"espada > espada de fuego"
eventoslootEspecificoxCategoria[158] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} takes a normal sword and sets it on fire. Suddenly it turns into a fire sword... It's not supposed to work like this...`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"espada > Masamune"
eventoslootEspecificoxCategoria[159] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds an authentic Masamune. Happily, they keep it.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"lanza"  
eventoslootEspecificoxCategoria[160] = async (jugador, players, arma, req, channel) => {
  let evento = `"¡For Sparta!" ${jugador.getNombre()} suddenly lets out a menacing shout after finding a spear. But... where did they leave the shield?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"lanza"  
eventoslootEspecificoxCategoria[161] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} takes a branch from the ground and ties a carved stone to it to make a spear. How have they become so skilled?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"lanza"  
eventoslootEspecificoxCategoria[162] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds a spear piercing through a skeleton. They take the spear and leaves.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"lanza"  
eventoslootEspecificoxCategoria[163] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds a spear piercing through a skeleton, next to a skeleton that holds a broken shield. ${jugador.getNombre} takes the spear and leaves.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"esposas"  
eventoslootEspecificoxCategoria[164] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds some handcuffs and tucks them away, smirking mischievously... Wait... What are they planning to do with that?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"banhammer"
eventoslootEspecificoxCategoria[165] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} encuentra un banhammer y está buscando a quien darle ban.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"banhammer"
eventoslootEspecificoxCategoria[166] = async (jugador, players, arma, req, channel) => {
  let evento = `Cuidadito con ${jugador.getNombre()}. Tiene un banhammer y no va a dudar en banear.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"poderosa pimienta peruana"  
eventoslootEspecificoxCategoria[167] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} estaba preparando una salsa, y para que tenga el toque, saca de su bolso un jarro de la Poderosa Pimienta Peruana. De paso piensa, también podría servir de arma, no?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"ladrillo"
eventoslootEspecificoxCategoria[168] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} goes to an abandoned construction site and grabs a brick to defend themself.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"ladrillo"
eventoslootEspecificoxCategoria[169] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} knocks down a house wall with a sledgehammer. Then, they carefully take a brick and keep it. I think it would've been better to just use the sledgehammer as a weapon..`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"látigo"  
eventoslootEspecificoxCategoria[170] = async (jugador, players, arma, req, channel) => {
  let evento = `...Wait... What? ${jugador.getNombre()} shows up wearing some kind of leotard and a mask, and pulls out a whip. What on earth are they thinking?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"látigo"  
eventoslootEspecificoxCategoria[171] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} escapes from a circus and takes a whip that was lying around.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"pistola > lancer de gears of war"
eventoslootEspecificoxCategoria[172] = async (jugador, players, arma, req, channel) => {
  let evento = `Un random deja caer su pistola y ${jugador.getNombre()} la recoge. Al parecer el random se llama Marcus, y la pistola era el lancer de gears of war.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"carnet de conducir"  
eventoslootEspecificoxCategoria[173] = async (jugador, players, arma, req, channel) => {
  let evento = `Alguien perdió su carnet de conducir. ${jugador.getNombre()} lo encuentra y se lo lleva. ¿Le servirá de algo, o buscará al dueño?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"ps5"
eventoslootEspecificoxCategoria[174] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} decide comprarse una PS5. Según dice que era una buena inversión. Ahora solo le falta comprar los juegos a 80$ y los dlcs al mismo precio.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"ps5"
eventoslootEspecificoxCategoria[175] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} consigue una PS5 y se emociona. Según dice, era noche de película.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"ps5"
eventoslootEspecificoxCategoria[176] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} entra a una tienda abandonada y se roba una PS5. No la va a usar, pero siempre quiso robarse una PS5.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"ps5"
eventoslootEspecificoxCategoria[177] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} consigue una PS5, decepcionado. Era mejor un xbox o una pc. Al menos podría usarlo de arma, pero quizás ni para eso sirva.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"ps5"
eventoslootEspecificoxCategoria[178] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} ve un router a lo lejos... Espera... No, era una PS5. Lastima, quería WiFi gratis. Se la lleva, quizás la pueda vender a gente sin gusto.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"iPhone 13"  
eventoslootEspecificoxCategoria[179] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} encuentra un iPhone 13 tirado. Qué pena que la única vez que pudo tocar algo tan caro, es probablemente minutos antes de morir.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"colmena"
eventoslootEspecificoxCategoria[180] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} se trepa a un árbol para tomar una colmena como arma. Según dice, lo vió en una película.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"colmena"
eventoslootEspecificoxCategoria[181] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} was walking around when they nearly step on a beehive. Gotta walk more carefully next time! They pick it up and decide to use it as a weapon.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"colmena"
eventoslootEspecificoxCategoria[182] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} is hungry and grabs a beehive to get some honey. Too bad it's empty. At least they can use it as a weapon.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"plumero"
eventoslootEspecificoxCategoria[183] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} sees everything dirty around them so they look for a duster.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"gaymer" > "teclado gaymer"  
eventoslootEspecificoxCategoria[184] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} gets up from their gamer chair, unplugs their gamer keyboard from their gamer pc, and takes it with them to beat the crap out of someone. Typical gamer move`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"tableta"
eventoslootEspecificoxCategoria[185] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} looted a drawing tablet. Is this time to start drawing? Now??`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"tableta"
eventoslootEspecificoxCategoria[186] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} pulls out their drawing tablet. "Hold on, I need to finish this drawing..."`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"tableta"
eventoslootEspecificoxCategoria[187] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} decided to buy a drawing tablet to do furry commissions. It's an investment. It's not that they like it or anything. Or that they're furry. (Or so they say)`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"aspiradora"
eventoslootEspecificoxCategoria[188] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds an abandoned vacuum cleaner. It sucks... Well, not really, and that's the problem. But at least it can be used to beat people up.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"tridente demoníaco"  
eventoslootEspecificoxCategoria[189] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds a demonic trident, they take it and horns suddenly grow on their head while they laugh diabolically`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"tridente demoníaco"  
eventoslootEspecificoxCategoria[190] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds a demonic trident and takes it, feeling incredibly powerful (in reality, it's just a tacky plastic trident from a cheap halloween devil costume)`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}


//"palillos chinos"
eventoslootEspecificoxCategoria[191] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} enters a Chinese restaurant and takes a pair of chopsticks. Too bad they never learnt how to use them correctly.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"gas lacrimogeno"
eventoslootEspecificoxCategoria[192] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} got ready to protest and managed to get some tear gas`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"nambre"  
eventoslootEspecificoxCategoria[193] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} encontró un nambre. Nambre <:NambreMexicano:977699179059105792> `;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"espada > azada"
eventoslootEspecificoxCategoria[194] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} wants to demonstrate their farming skills and acquires a hoe.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"espada > azada"
eventoslootEspecificoxCategoria[195] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} is equipped with a hoe and ready for action. They say it's for "farming"... Yeah, of course it is`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"espada > azada"
eventoslootEspecificoxCategoria[196] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} messed up the crafting recipe and made a diamond hoe. Nooooooooooo!`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"tenedor"  
eventoslootEspecificoxCategoria[197] = async (jugador, players, arma, req, channel) => {
  let evento = `For some reason ${jugador.getNombre()} feels like Aquaman and pulls out a fork from somewhere. It's clear they've lost their mind, but at least they're still willing to defend themself.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}


//"chancla"
eventoslootEspecificoxCategoria[198] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds a stray flip-flop. Is it a trap? Maybe a lost item? Either way, time to channel their inner Latina Mom.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"repelente de tiburones"  
eventoslootEspecificoxCategoria[199] = async (jugador, players, arma, req, channel) => {
  let evento = `"Robin, hand me the..." Wait a minute... that didn't actually happen. And where did ${jugador.getNombre()} even get that shark repellent? Is that even a real thing?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"repelente de tiburones"    
eventoslootEspecificoxCategoria[200] = async (jugador, players, arma, req, channel) => {
  let evento = `"Holy sardines". ${jugador.getNombre()} managed to get a shark repellent.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"pepino"
eventoslootEspecificoxCategoria[201] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds a cucumber on the ground of an abandoned garden, its peculiar shape standing out among the weeds.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"pepino"
eventoslootEspecificoxCategoria[202] = async (jugador, players, arma, req, channel) => {
  let evento = `In a dark alley, ${jugador.getNombre()} discovers a cucumber lying next to a puddle... As if it had been discarded by someone in a hurry.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"pepino"
eventoslootEspecificoxCategoria[203] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} takes a cucumber from someone's fridge... I wonder what they need it for`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"martillo"  
eventoslootEspecificoxCategoria[204] = async (jugador, players, arma, req, channel) => {
  let evento = `Hide your boards, because ${jugador.getNombre()} just got a hammer... And they're looking to nail something`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"martillo"  
eventoslootEspecificoxCategoria[205] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} looks for a toolbox to get a hammer.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"martillo"  
eventoslootEspecificoxCategoria[206] = async (jugador, players, arma, req, channel) => {
  let evento = `It's a hammer..., it's real! Quick, take a picture of ${jugador.getNombre()} with it!`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"dentadura"
eventoslootEspecificoxCategoria[207] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds fake dentures in a sink. Without a second thought, they put them on. Gross... But hey, they finally have pearly whites!`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"telescopio"
eventoslootEspecificoxCategoria[208] = async (jugador, players, arma, req, channel) => {
  let evento = `At the top of an observation tower, ${jugador.getNombre()} finds a telescope. They take it to look at the stars... Or rather, to make everyone else "see stars" when they use it to beat them up.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"tentaculo"
eventoslootEspecificoxCategoria[209] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds an octopus tentacle at a fish market. For some reason, they think it'll make a great weapon`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"misil"  
eventoslootEspecificoxCategoria[210] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds a missile. Now they have to guess the code to activate it...`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"misil"  
eventoslootEspecificoxCategoria[211] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} walks by casually carrying a missile. WTF?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"terranator"
eventoslootEspecificoxCategoria[212] = async (jugador, players, arma, req, channel) => {
  let evento = `Finalmente se cumplió el sueño de ${jugador.getNombre()}. Acaba de comprarse un terranator.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"terranator"
eventoslootEspecificoxCategoria[213] = async (jugador, players, arma, req, channel) => {
  let evento = `Un control remoto le cae del cielo a ${jugador.getNombre()}. ${jugador.getNombre()} lo prueba un rato para ver que pasa. De pronto escucha un sonido y se acerca. ¡Estuvo controlando un terranator! Felizmente se lo lleva.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"linterna"  
eventoslootEspecificoxCategoria[214] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} was walking through a dark forest when they find a flashlight. That's never a good sign.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"linterna"  
eventoslootEspecificoxCategoria[215] = async (jugador, players, arma, req, channel) => {
  let evento = `The power went out and ${jugador.getNombre()} fumbled around in the dark to find a flashlight.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"rompìbles > banjo"
eventoslootEspecificoxCategoria[216] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds a busker playing the banjo. ${jugador.getNombre()} drops a coin and... Takes the banjo. That not how it works, is it?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"taco"  
eventoslootEspecificoxCategoria[217] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} va a un taco bell porque tenía hambre. Pero lejos de ser comestible, prefiere usar el taco como arma.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"explosivos > TNT"
eventoslootEspecificoxCategoria[218] = async (jugador, players, arma, req, channel) => {
  let evento = `While exploring an abandoned mine, ${jugador.getNombre()} discovers a hidden TNT crate, making it clear that someone had explosive plans in mind. Now, ${jugador.getNombre()} is the one with the explosive ideas.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"arma blanca" > "estaca de madera"  
eventoslootEspecificoxCategoria[219] = async (jugador, players, arma, req, channel) => {
  let evento = `Everyone watch out for Van Hel... Oh, wait. It's just ${jugador.getNombre()} who found a wooden stake.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"arma blanca" > "estaca de madera"  
eventoslootEspecificoxCategoria[220] = async (jugador, players, arma, req, channel) => {
  let evento = `In their paranoia, ${jugador.getNombre()} is looking for a wooden stake. Now they'll think twice before trying to suck it... (their blood, I mean).`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"arma blanca" > "estaca de madera"  
eventoslootEspecificoxCategoria[221] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} discovers a wooden stake driven into the ground, surrounded by a pile of garlic, as if someone had been preparing to ward off creatures of the night. ${jugador.getNombre()} grabs the stake and walks away.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"crucifijo"
eventoslootEspecificoxCategoria[222] = async (jugador, players, arma, req, channel) => {
  let evento = `"En el nombre del Padre...". ${jugador.getNombre()} se encontró un crucifijo. Lo cuelga en su cuello y sigue adelante.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"crucifijo"
eventoslootEspecificoxCategoria[223] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} encuentra una iglesia abandonada y entra a rezar para sobrevivir. Junto a la silla que se sentó había un crucifijo. ${jugador.getNombre()} lo ve como una señal y se lo guarda.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"resorte"
eventoslootEspecificoxCategoria[224] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} rips a spring off a bed to use it for self-defense`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"huevo"  
eventoslootEspecificoxCategoria[225] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} found an egg and took it. They've always been one to egg people on...`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"pistola > pistola de bengalas"
eventoslootEspecificoxCategoria[226] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds an abandoned flare gun in an observation tower, ready to light up the night sky.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"teta de plástico"  
eventoslootEspecificoxCategoria[227] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} sale de un sex shop con una teta de plástico. Mejor no preguntar.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"arma blanca > puñal"
eventoslootEspecificoxCategoria[228] = async (jugador, players, arma, req, channel) => {
  let evento = `While exploring an ancient crypt, ${jugador.getNombre()} discovers a dagger on a stone altar, surrounded by flickering candles. They hesitate... But then: "Well, whatever. I'm going to die anyway..."`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"porra de policía"  
eventoslootEspecificoxCategoria[229] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} takes a police baton from a police station`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"serrucho"
eventoslootEspecificoxCategoria[230] = async (jugador, players, arma, req, channel) => {
  let evento = `While exploring an abandoned carpentry workshop, ${jugador.getNombre()} finds a hand saw resting on a workbench. Hooray for manual labor!`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"abanico"  
eventoslootEspecificoxCategoria[231] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} pulls out a hand fan because they just can't take this damn heat anymore`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"bumeran"
eventoslootEspecificoxCategoria[232] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds a boomerang stuck in a tree, clearly lost by someone else. ${jugador.getNombre()} climbs up and grabs it. Great! Now getting back down is the problem`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"bumeran"
eventoslootEspecificoxCategoria[233] = async (jugador, players, arma, req, channel) => {
  let evento = `Da-da-da-daaa!. ${jugador.getNombre()} opened a chest and found a boomerang. Now they can take down the dungeon boss... Wait, what game is this again?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"micrófono"  
eventoslootEspecificoxCategoria[234] = async (jugador, players, arma, req, channel) => {
  let evento = `"asdfdghjkl". ${jugador.getNombre()} grabbed a microphone and tried to sing for everyone. At this point, everyone wishes they were deaf.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"cania"
eventoslootEspecificoxCategoria[235] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} uses 3 sticks and 2 pieces of string. They place the sticks diagonally and the string underneath on a table. Suddenly, they vanish, and a fishing rod magically appears... Wait, what?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"rama"
eventoslootEspecificoxCategoria[236] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} climbs a tree and cuts a branch to use as a weapon. Isn't it easier to just pick up some branch that's already on the ground?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"cania"
eventoslootEspecificoxCategoria[237] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} got hungry and went to a cabin next to a lake to look for food. The only thing they found was a fishing rod. At least they can try to catch a big one.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"empanada"  
eventoslootEspecificoxCategoria[238] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} got hungry, so they decided to go for an empanada. That's what I call a solid choice.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"empanada"  
eventoslootEspecificoxCategoria[239] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} has such exquisite taste that they went and bought an empanada.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"empanada"  
eventoslootEspecificoxCategoria[240] = async (jugador, players, arma, req, channel) => {
  let evento = `Watch out! ${jugador.getNombre()} just got their hands on an empanada.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"empanada"  
eventoslootEspecificoxCategoria[241] = async (jugador, players, arma, req, channel) => {
  let evento = `Thanos who? Everyone agrees that ${jugador.getNombre()} is way more powerful now that they have an empanada.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"empanada"  
eventoslootEspecificoxCategoria[242] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} was terrified of dying. That is, until they had a breakthrough and grabbed the ultimate weapon: an empanada`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"empanada"  
eventoslootEspecificoxCategoria[243] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} was walking through the neighborhood and grabbed an empanada from a local vendor. That's someone who really knows their food.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"empanada"  
eventoslootEspecificoxCategoria[244] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} sees a sign: 5 empanadas for $1. They rush over, but there's only one left. Well, at least they got one`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"canion"
eventoslootEspecificoxCategoria[245] = async (jugador, players, arma, req, channel) => {
  let evento = `While exploring a coastal fortress, ${jugador.getNombre()} discovers a cannon pointing at the sea, loaded and ready to be fired.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"pistola" > "mosquete"  
eventoslootEspecificoxCategoria[246] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} grabs a musket from 1716. Will it still work?`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"pistola" > "mosquete"  
eventoslootEspecificoxCategoria[247] = async (jugador, players, arma, req, channel) => {
  let evento = `While exploring a history museum, ${jugador.getNombre()} finds a corner with ancient armor and weapons, where a mannequin is holding a musket. They take it and walk away, muttering: "I'm sure I'll put this to better use than you"`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"ganzúas"  
eventoslootEspecificoxCategoria[248] = async (jugador, players, arma, req, channel) => {
  let evento = `While exploring a dark corner, ${jugador.getNombre()}'s foot hits something small and metallic. Looking closer, they discover a set of lockpicks with a note attached: "For the curious adventurer. Use them wisely... or at least with style."`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"ganzúas"  
eventoslootEspecificoxCategoria[249] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} leans down to pick up some lockpicks lying next to a broken door. But the lock itself is in perfect condition. They don't seem very effective... but they take them anyway.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"lupa"
eventoslootEspecificoxCategoria[250] = async (jugador, players, arma, req, channel) => {
  let evento = `"I need 3 crazy dudes and a dog to help me solve mysteries". ${jugador.getNombre()} grabs their magnifying glass and hops into a green van they just found.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"lupa"
eventoslootEspecificoxCategoria[251] = async (jugador, players, arma, req, channel) => {
  let evento = `Could that be Sherlock? Oh, no. It's just ${jugador.getNombre()} with a magnifying glass.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"pistola" > "escopeta"  
eventoslootEspecificoxCategoria[252] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} heard a noise coming from a near bush. As they approached, two squirrels bolted out. After inspecting the bush, ${jugador.getNombre()} finds a shotgun. They decide to keep it, hoping the squirrels won't come back to claim it.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"pistola" > "escopeta"  
eventoslootEspecificoxCategoria[253] = async (jugador, players, arma, req, channel) => {
  let evento = `While ${jugador.getNombre()} was exploring a dark and dusty basement, a metallic glint catches their attention. Among the cobwebs, they find a shotgun with a label that reads "In case of alien invasion". ${jugador.getNombre()} takes the shotgun and jokes about preparing for the arrival of extraterrestrials.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"pistola" > "escopeta"  
eventoslootEspecificoxCategoria[254] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} pulled a shotgun out of nowhere. In their own words, they're hunting "wabbits".`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"espada > espada de esgrima"
eventoslootEspecificoxCategoria[255] = async (jugador, players, arma, req, channel) => {
  let evento = `Exploring an abandoned theater stage, ${jugador.getNombre()} finds a fencing sword leaning against a podium, as if waiting for its next duel.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"tarjeta"
eventoslootEspecificoxCategoria[256] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()}'s application was finally approved, and they've been issued a credit card. Time to get into debt!`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"espada" > "guadaña"  
eventoslootEspecificoxCategoria[257] = async (jugador, players, arma, req, channel) => {
  let evento = `A mysterious figure in a black robe approaches ${jugador.getNombre()} and says, "Now, You shall be my successor," handing them a scythe. ${jugador.getNombre()} has no clue what's going on, but they take it anyway, it might come in handy.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"cuerda"
eventoslootEspecificoxCategoria[258] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds a sunken barge containing a net covering something. Upon clearing the net, they discover a sturdy, well-preserved rope once used for mooring boats, and they decide to take it.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"cuerda"
eventoslootEspecificoxCategoria[259] = async (jugador, players, arma, req, channel) => {
  let evento = `On the roof of a ruined building, ${jugador.getNombre()} finds a rope tied to a chimney, swaying in the breeze.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"palo de golf"
eventoslootEspecificoxCategoria[260] = async (jugador, players, arma, req, channel) => {
  let evento = `"Give me the 3-iron." ${jugador.getNombre()} starts talking to nobody, but they grab a golf club to use as a weapon`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"palo de golf"
eventoslootEspecificoxCategoria[261] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} finds a golf bag on the ground with a few clubs inside. They grab the sturdiest-looking one and decide to use it as a weapon.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"tijeras de jardineria"
eventoslootEspecificoxCategoria[262] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} stumbles upon a forgotten corner where the plants seem to have a life of their own. Amidst the vines, they find a pair of gardening shears that look as if the plants themselves had been using for a self-trim.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"cadenas"
eventoslootEspecificoxCategoria[263] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} takes some chains from a chest they spotted. A slight smirk grows on their face as they start wondering who they'd like to tie with them... Oh, no...`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"cadenas"
eventoslootEspecificoxCategoria[264] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} enters a dungeon and spots a skeleton chained to the wall. Far from being worried, they just strip the chains off and walk away with them. Honestly, I think they need a therapist.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"arma blanca" > "agujas"
eventoslootEspecificoxCategoria[265] = async (jugador, players, arma, req, channel) => {
  let evento = `While exploring a market, a merchant offers ${jugador.getNombre()} a small needle case. "These needles," the old man says with a cryptic smile, "will help you sew more than just fabric..." Intrigued, ${jugador.getNombre()} buys them, wondering what special powers they might hold. (SPOILER: They were just ordinary needles).`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"pelota de fulbo"
eventoslootEspecificoxCategoria[266] = async (jugador, players, arma, req, channel) => {
  let evento = `Encara ${jugador.getNombre()}. ${jugador.getNombre()} found a soccer ball and is going to use it as a weapon.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

//"mancuerna"
eventoslootEspecificoxCategoria[267] = async (jugador, players, arma, req, channel) => {
  let evento = `${jugador.getNombre()} wants to get absolutely shredded, so they get a dumbbell to start getting swole.`;
  console.log(evento);
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(), req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
  funcionCrearImagen(json, "1", channel);
  return 1;
}

export { eventoslootEspecificoxCategoria };
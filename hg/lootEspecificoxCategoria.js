/*------------ loot especifico por categoría ------------*/
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
  import {Arma, Team, Jugador} from "./clases.js";
  import {
    createObject, 
    funcionDePrueba, 
    cargarAvatar,
    funcionCrearImagen
  } from "../utils.js";
  
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
  
  eventoslootEspecificoxCategoria[0] = async (jugador, players, arma, req, channel)=>{
    let categoria = arma["categoria"];
    console.log(`%c${arma["nombre"]} > ${categoria}`,"color:orange");
    let posicion;
    let seleccionado;
    let arrayPosiciones = [];
  
    let pronombreUno = pronombreUnUnaUnosUnas(arma);
  
    switch(categoria){
  
        case "martillo de Thor":
            seleccionado = randomSelector(1,2);
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
  
        case "ramo de flores":
            seleccionado = randomSelector(3,4);
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
  
        case "death note":
            seleccionado = randomSelector(5,6);
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
  
        case "espada":
            if(arma["nombre"] == "Espada Maestra"){
              arrayPosiciones = [7,8,20,21,22];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }
  
            if(arma["nombre"] == "espada de madera"){
              arrayPosiciones = [9,10,20,21,22];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }
  
            if(arma["nombre"] == "Llave Espada"){
              arrayPosiciones = [11,12,20,21,22];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }
  
            if(arma["nombre"] == "espada de iron"){
              arrayPosiciones = [13,14,20,21,22];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }
  
            if(arma["nombre"] == "espada de oro"){
              arrayPosiciones = [15,20,21,22];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }
            
            if(arma["nombre"] == "espada cuádruple"){
              arrayPosiciones = [16,20,21,22];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }
  
            if(arma["nombre"] == "pescado congelado"){
              arrayPosiciones = [17,18,19,20,21,22];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }
        
            if(arma["nombre"] == "Excalibur"){
              arrayPosiciones = [77,78,20,21,22];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }
        
            if(arma["nombre"] == "espada tijera color rojo"){
              arrayPosiciones = [113,20,21,22];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }
        
            if(arma["nombre"] == "espada de fuego"){
              arrayPosiciones = [157,158,20,21,22];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }
        
            if(arma["nombre"] == "Masamune"){
              arrayPosiciones = [159,20,21,22];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }       
        
            if(arma["nombre"] == "azada"){
              arrayPosiciones = [194,195,196,20,21,22];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }   
        
            if(arma["nombre"] == "espada de esgrima"){
              arrayPosiciones = [255,20,21,22];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }  
        
            if(arma["nombre"] == "guadaña"){
              arrayPosiciones = [257,20,21,22];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }
        
        
        //"espada"
        arrayPosiciones = [20,21,22];
        posicion = randomSelector(0,arrayPosiciones.length-1);
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
            seleccionado = randomSelector(25,26);
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
  
        case "jeringuilla":
            await eventoslootEspecificoxCategoria[27](jugador, players, arma, req, channel);
            break;
  
        case "caparazon":
            await eventoslootEspecificoxCategoria[28](jugador, players, arma, req, channel);
            break;
  
        case "arco y flecha":
            if(arma["nombre"] == "arco y flechas"){
                seleccionado = randomSelector(29,30);
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
            seleccionado = randomSelector(33,34);
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
  
        case "manzana":
            seleccionado = randomSelector(35,38);
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
  
        case "motosierra":
            seleccionado = randomSelector(39,41);
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
            seleccionado = randomSelector(46,47);
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
  
        case "roca":
            await eventoslootEspecificoxCategoria[48](jugador, players, arma, req, channel);
            break;    
  
        case "sable de luz":
            await eventoslootEspecificoxCategoria[49](jugador, players, arma, req, channel);
            break;  
  
        case "regla":
            seleccionado = randomSelector(50,51);
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
  
        case "granada fruta":
            await eventoslootEspecificoxCategoria[52](jugador, players, arma, req, channel);
            break;  
  
        case "arma blanca":
          if(arma["nombre"] == "lapiz"){
              arrayPosiciones = [53,61,62];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
          }

          if(arma["nombre"] == "navaja"){
              arrayPosiciones = [54,61,62];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
          }

          if(arma["nombre"] == "Navaja Suiza Multiusos Victorinox Climber 5000 ++"){
              arrayPosiciones = [55,61,62];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
          }

          if(arma["nombre"] == "cuchillo"){
              arrayPosiciones = [56,61,62];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
          }

          if(arma["nombre"] == "cuchillo de carnicero"){
              arrayPosiciones = [57,61,62];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
          }

          if(arma["nombre"] == "trozo de cristal"){
              arrayPosiciones = [58,59,61,62];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
          }

          if(arma["nombre"] == "kunai"){
              arrayPosiciones = [60,95,61,62];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
          }
          
          if(arma["nombre"] == "machete"){
              arrayPosiciones = [94,61,62];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
          }
        
          if(arma["nombre"] == "par de estiletes de color dorado"){
              arrayPosiciones = [103,61,62];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
          }
        
          if(arma["nombre"] == "estaca de madera"){
              arrayPosiciones = [219,220,221,61,62];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
          }
        
          if(arma["nombre"] == "puñal"){
              arrayPosiciones = [228,61,62];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
          }
        
          if(arma["nombre"] == "agujas"){
              arrayPosiciones = [265,61,62];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
          }
        
        //"arma blanca"
        seleccionado = randomSelector(61,62);
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;  
  
        case "cubo rubik":
            await eventoslootEspecificoxCategoria[63](jugador, players, arma, req, channel);
            break;  
  
        case "botella":
            if(arma["nombre"] == "botella de Vodka"){
              arrayPosiciones = [64,105];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }
  
            if(arma["nombre"] == "botella de Fernet"){
              arrayPosiciones = [65,105];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }
  
            if(arma["nombre"] == "botella de vino"){
              arrayPosiciones = [66,105];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }
        
        //"botella"
        await eventoslootEspecificoxCategoria[105](jugador, players, arma, req, channel);    
        break;
        
        case "explosivos":
            if(arma["nombre"] == "granada"){
                arrayPosiciones = [67,106,107];
                posicion = randomSelector(0,arrayPosiciones.length-1);
                seleccionado = arrayPosiciones[posicion];
                await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
                break;
            }
  
            if(arma["nombre"] == "molotov"){
                arrayPosiciones = [68,106,107];
                posicion = randomSelector(0,arrayPosiciones.length-1);
                seleccionado = arrayPosiciones[posicion];
                await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
                break;
            }
  
            if(arma["nombre"] == "Samsung Galaxy Note 7"){
                arrayPosiciones = [69,106,107];
                posicion = randomSelector(0,arrayPosiciones.length-1);
                seleccionado = arrayPosiciones[posicion];
                await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
                break;
            }
  
            if(arma["nombre"] == "fuegos artificiales"){
                arrayPosiciones = [70,106,107];
                posicion = randomSelector(0,arrayPosiciones.length-1);
                seleccionado = arrayPosiciones[posicion];
                await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
                break;
            }
            
            if(arma["nombre"] == "bomba"){
                arrayPosiciones = [97,106,107];
                posicion = randomSelector(0,arrayPosiciones.length-1);
                seleccionado = arrayPosiciones[posicion];
                await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
                break;
            }
        
            if(arma["nombre"] == "mina de proximidad"){
                arrayPosiciones = [131,106,107];
                posicion = randomSelector(0,arrayPosiciones.length-1);
                seleccionado = arrayPosiciones[posicion];
                await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
                break;
            }
        
            if(arma["nombre"] == "TNT"){
                arrayPosiciones = [218,106,107];
                posicion = randomSelector(0,arrayPosiciones.length-1);
                seleccionado = arrayPosiciones[posicion];
                await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
                break;
            }
        
        
        //"explosivos"
        arrayPosiciones = [106,107];
        posicion = randomSelector(0,arrayPosiciones.length-1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;
  
        case "rompibles":
            if(arma["nombre"] == "skate"){
              arrayPosiciones = [71,72];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }
        
            if(arma["nombre"] == "bate de beisbol"){
              arrayPosiciones = [73,72];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }
        
            if(arma["nombre"] == "guitarra"){
              arrayPosiciones = [74,72];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }
        
            if(arma["nombre"] == "bongos"){
              arrayPosiciones = [146,72];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }
        
            if(arma["nombre"] == "banjo"){
              arrayPosiciones = [216,72];
              posicion = randomSelector(0,arrayPosiciones.length-1);
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
            seleccionado = randomSelector(80,81);
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;        
        
        case "pistola":
            if(arma["nombre"] == "Jericho 941-R"){
                arrayPosiciones = [82,92,147,148];
                posicion = randomSelector(0,arrayPosiciones.length-1);
                seleccionado = arrayPosiciones[posicion];
                await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
                break;
            }
        
            if(arma["nombre"] == "fusil de francotirador"){
                arrayPosiciones = [156,92,147,148];
                posicion = randomSelector(0,arrayPosiciones.length-1);
                seleccionado = arrayPosiciones[posicion];
                await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
                break;
            }
        
            if(arma["nombre"] == "lancer de gears of war"){
                arrayPosiciones = [172,92,147,148];
                posicion = randomSelector(0,arrayPosiciones.length-1);
                seleccionado = arrayPosiciones[posicion];
                await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
                break;
            }
        
            if(arma["nombre"] == "pistola de bengalas"){
                arrayPosiciones = [226,92,147,148];
                posicion = randomSelector(0,arrayPosiciones.length-1);
                seleccionado = arrayPosiciones[posicion];
                await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
                break;
            }
        
            if(arma["nombre"] == "mosquete"){
                arrayPosiciones = [246,247,92,147,148];
                posicion = randomSelector(0,arrayPosiciones.length-1);
                seleccionado = arrayPosiciones[posicion];
                await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
                break;
            }
        
            if(arma["nombre"] == "escopeta"){
                arrayPosiciones = [252,253,254,92,147,148];
                posicion = randomSelector(0,arrayPosiciones.length-1);
                seleccionado = arrayPosiciones[posicion];
                await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
                break;
            }
        
        
        //"pistola"
        arrayPosiciones = [92,147,148];
        posicion = randomSelector(0,arrayPosiciones.length-1);
        seleccionado = arrayPosiciones[posicion];
        await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
        break;

        case "da rules":
            await eventoslootEspecificoxCategoria[83](jugador, players, arma, req, channel);
            break;  
 
        case "caniche":
            seleccionado = randomSelector(84,86);
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;   
        
        case "encendedor":
            seleccionado = randomSelector(87,89);
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;   

        case "roca pequeña":
            await eventoslootEspecificoxCategoria[90](jugador, players, arma, req, channel);
            break;           

        case "veneno":
            if(arma["nombre"] == "dardos venenosos"){
              arrayPosiciones = [91,99,100];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }
        
            if(arma["nombre"] == "planta venenosa"){
              arrayPosiciones = [126,129,99,100];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }     
        
            if(arma["nombre"] == "lanza venenosa"){
              arrayPosiciones = [149,99,100];
              posicion = randomSelector(0,arrayPosiciones.length-1);
              seleccionado = arrayPosiciones[posicion];
              await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
              break;
            }   
        
        //"veneno"
        arrayPosiciones = [99,100];
        posicion = randomSelector(0,arrayPosiciones.length-1);
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
            arrayPosiciones = [108,109,110];
            posicion = randomSelector(0,arrayPosiciones.length-1);
            seleccionado = arrayPosiciones[posicion];
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);            
            break;
        
        case "megumin":
            await eventoslootEspecificoxCategoria[104](jugador, players, arma, req, channel);
            break;
        
        case "vieja":
            arrayPosiciones = [111,112];
            posicion = randomSelector(0,arrayPosiciones.length-1);
            seleccionado = arrayPosiciones[posicion];
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
        
        case "banana":
            arrayPosiciones = [114,115,116,117];
            posicion = randomSelector(0,arrayPosiciones.length-1);
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
            arrayPosiciones = [134,135];
            posicion = randomSelector(0,arrayPosiciones.length-1);
            seleccionado = arrayPosiciones[posicion];
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
        
        case "cráneo humano":
            arrayPosiciones = [136,137,138];
            posicion = randomSelector(0,arrayPosiciones.length-1);
            seleccionado = arrayPosiciones[posicion];
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;        
        
        
        case "manipulador":
            arrayPosiciones = [140,141,142];
            posicion = randomSelector(0,arrayPosiciones.length-1);
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
            arrayPosiciones = [152,153];
            posicion = randomSelector(0,arrayPosiciones.length-1);
            seleccionado = arrayPosiciones[posicion];
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
        
        case "figura de anime":
            arrayPosiciones = [154,155];
            posicion = randomSelector(0,arrayPosiciones.length-1);
            seleccionado = arrayPosiciones[posicion];
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break; 
        
        case "lanza":
            arrayPosiciones = [160,161,162,163];
            posicion = randomSelector(0,arrayPosiciones.length-1);
            seleccionado = arrayPosiciones[posicion];
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;         
        
        case "banhammer":
            arrayPosiciones = [165,166];
            posicion = randomSelector(0,arrayPosiciones.length-1);
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
            arrayPosiciones = [168,169];
            posicion = randomSelector(0,arrayPosiciones.length-1);
            seleccionado = arrayPosiciones[posicion];
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
        
        case "látigo":
            arrayPosiciones = [170,171];
            posicion = randomSelector(0,arrayPosiciones.length-1);
            seleccionado = arrayPosiciones[posicion];
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
        
        case "ps5":
            arrayPosiciones = [174,175,176,177,178];
            posicion = randomSelector(0,arrayPosiciones.length-1);
            seleccionado = arrayPosiciones[posicion];
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
        
        case "carnet de conducir":
            await eventoslootEspecificoxCategoria[173](jugador, players, arma, req, channel);
            break;
        
        case "colmena":
            arrayPosiciones = [180,181,182];
            posicion = randomSelector(0,arrayPosiciones.length-1);
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
            arrayPosiciones = [185,186,187];
            posicion = randomSelector(0,arrayPosiciones.length-1);
            seleccionado = arrayPosiciones[posicion];
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
        
        case "gaymer":
            if(arma["nombre"] == "teclado gaymer"){
              await eventoslootEspecificoxCategoria[184](jugador, players, arma, req, channel);
              break;
            }
        
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
            arrayPosiciones = [189,190,199,200];
            posicion = randomSelector(0,arrayPosiciones.length-1);
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
            arrayPosiciones = [201,202,203];
            posicion = randomSelector(0,arrayPosiciones.length-1);
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
            arrayPosiciones = [204,205,206];
            posicion = randomSelector(0,arrayPosiciones.length-1);
            seleccionado = arrayPosiciones[posicion];
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
        
        case "tentaculo":
            await eventoslootEspecificoxCategoria[209](jugador, players, arma, req, channel);
            break;
        
        case "terranator":
            arrayPosiciones = [212,213];
            posicion = randomSelector(0,arrayPosiciones.length-1);
            seleccionado = arrayPosiciones[posicion];
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
        
        case "misil":
            arrayPosiciones = [210,211];
            posicion = randomSelector(0,arrayPosiciones.length-1);
            seleccionado = arrayPosiciones[posicion];
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;

        case "linterna":
            arrayPosiciones = [214,215];
            posicion = randomSelector(0,arrayPosiciones.length-1);
            seleccionado = arrayPosiciones[posicion];
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
        
        case "nambre":
            await eventoslootEspecificoxCategoria[217](jugador, players, arma, req, channel);
            break;
        
        case "crucifijo":
            arrayPosiciones = [222,223];
            posicion = randomSelector(0,arrayPosiciones.length-1);
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
            arrayPosiciones = [232,233];
            posicion = randomSelector(0,arrayPosiciones.length-1);
            seleccionado = arrayPosiciones[posicion];
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
        
        case "abanico":
            await eventoslootEspecificoxCategoria[231](jugador, players, arma, req, channel);
            break;
        
        case "cania":
            arrayPosiciones = [235,237];
            posicion = randomSelector(0,arrayPosiciones.length-1);
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
            posicion = randomSelector(0,arrayPosiciones.length-1);
            seleccionado = arrayPosiciones[posicion];
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
        
        case "ganzúas":
            arrayPosiciones = [248,249];
            posicion = randomSelector(0,arrayPosiciones.length-1);
            seleccionado = arrayPosiciones[posicion];
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
        
        case "lupa":
            arrayPosiciones = [250,251];
            posicion = randomSelector(0,arrayPosiciones.length-1);
            seleccionado = arrayPosiciones[posicion];
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
        
        case "tarjeta":
            await eventoslootEspecificoxCategoria[256](jugador, players, arma, req, channel);
            break;

        case "cuerda":
            arrayPosiciones = [258,259];
            posicion = randomSelector(0,arrayPosiciones.length-1);
            seleccionado = arrayPosiciones[posicion];
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
        
        case "tijeras de jardineria":
            await eventoslootEspecificoxCategoria[262](jugador, players, arma, req, channel);
            break;

        case "cadenas":
            arrayPosiciones = [263,264];
            posicion = randomSelector(0,arrayPosiciones.length-1);
            seleccionado = arrayPosiciones[posicion];
            await eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma, req, channel);
            break;
        
        case "palo de golf":
            arrayPosiciones = [260,261];
            posicion = randomSelector(0,arrayPosiciones.length-1);
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
            let evento = ` ${jugador.getNombre()} looteó ${pronombreUno} ${arma["nombre"]}.`
            let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
            console.log(json.evento);
            //channel.send(json.evento);
            funcionCrearImagen(json,"1",channel);
        break;
    }
  
    
    
    return 1;
  }
  
  // "martillo de Thor"
    eventoslootEspecificoxCategoria[1] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    let evento = ` ${jugador.getNombre()} encontró el Martillo de Thor 🔨. Lamentablemente no lo pudo levantar porque no es digno.`;
    //jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    console.log(json.evento);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[2] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    let evento = ` ${jugador.getNombre()} encontró el Martillo de Thor 🔨. Como ${jugador.getNombre()} es “alguien digno”, lo puede levantar y se lo lleva.`;
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    console.log(json.evento);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "ramo de flores"
  eventoslootEspecificoxCategoria[3] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    let evento = ` ${jugador.getNombre()} recolecta flores con espinas de sus alrededores, y arma un ramo de flores. 🌼`;
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    console.log(json.evento);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[4] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    let evento = ` ¡¿Un Ramo de flores?! ¿${jugador.getNombre()} va a tener una cita? ¿Quién estaría tan demente como para aceptar eso? `;
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    console.log(json.evento);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "death note"
  eventoslootEspecificoxCategoria[5] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    let evento = ` ${jugador.getNombre()} encontró una Death Note y está listo para ponerse a escribir nombres.`
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    console.log(json.evento);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[6] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    let evento = ` ${jugador.getNombre()} encontró una Death Note. Espero que haya leido bien las reglas`;
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    console.log(json.evento);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "espada maestra"
  eventoslootEspecificoxCategoria[7] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    let evento = ` ${jugador.getNombre()} acaba de encontrar LA ESPADA MAESTRA. El arma mas mamadísima del juego. Cuidadito.`;
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], [])
    console.log(json.evento);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[8] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    let evento = ` ${jugador.getNombre()} se perdió en un bosque y encontró una Espada Maestra en un pedestal. ¿Tendrá la edad suficiente?`;
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    console.log(json.evento);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "espada de madera"
  eventoslootEspecificoxCategoria[9] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    let evento = ` ${jugador.getNombre()} construye una espada de madera con ramas de los árboles.`
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    console.log(json.evento);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[10] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    let evento = ` ${jugador.getNombre()} encuentra una Espada de Madera. ¿Algo así no es inútil?`;
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    console.log(json.evento);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "llave espada"
  eventoslootEspecificoxCategoria[11] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    let evento = ` Mickey le da una Llave Espada a ${jugador.getNombre()}. ¿A quién se la habrá comprado?`
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    console.log(json.evento);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[12] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    let evento = ` Un ratón le da una espada con forma de llave a ${jugador.getNombre()}. ¿De dónde me suena esta escena?`
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    console.log(json.evento);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "espada de iron"
  eventoslootEspecificoxCategoria[13] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    let evento = ` ${jugador.getNombre()} se fue a minar un rato y consiguió 2 trozos de hierro, así que crafteó una espada de iron. ¿No es muy poco hierro para hacer una espada?`
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    console.log(json.evento);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[14] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    let evento = ` ${jugador.getNombre()} se fue a minar y consiguió 2 trozos de hierro, se crafteó una espada de iron y ahora va en búsqueda de diamante... Espera ¿qué juego era este?`;
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    console.log(json.evento);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "espada de oro"
  eventoslootEspecificoxCategoria[15] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    let evento = ` ${jugador.getNombre()} crafteó una espada de oro. Ya no suena tan mal la de madera.`;
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    console.log(json.evento);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "espada cuadruple"
  eventoslootEspecificoxCategoria[16] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    let evento = ` ${jugador.getNombre()} consiguió una Espada Cuádruple. Que raro que no se multiplicó`
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    console.log(json.evento);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "pescado congelado"
  eventoslootEspecificoxCategoria[17] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    let evento = ` ${jugador.getNombre()} encontró un pescado. Genial, va a matar a todos con el mal olor`;
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    console.log(json.evento);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[18] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    let evento = ` ${jugador.getNombre()} encontró un pescado. Al menos está congelado, así que servirá para usarlo de espada.`;
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    console.log(json.evento);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[19] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    let evento = ` ${jugador.getNombre()} encontró un pescado congelado. 🥶`
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    console.log(json.evento);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "espada"
  eventoslootEspecificoxCategoria[20] = async (jugador, players, arma, req, channel)=>{
    let pronombre = pronombreUnUnaUnosUnas(arma);
  
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento=` ${jugador.getNombre()} looteó ${pronombre} ${arma["nombre"]}.`;   
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[21] = async (jugador, players, arma, req, channel)=>{
    let pronombre = pronombreUnUnaUnosUnas(arma);
    let pronombre2 = pronombreOAOsAs(arma);
  
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento=` ${jugador.getNombre()} looteó ${pronombre} ${arma["nombre"]}. A ver a quién se l${pronombre2.toLowerCase()} clava.`;   
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[22] = async (jugador, players, arma, req, channel)=>{
    let pronombre = pronombreUnUnaUnosUnas(arma);
    
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento=` ${jugador.getNombre()} looteó ${pronombre} ${arma["nombre"]} y piensa "ojala hubiera tomado clases de esgrima"`;   
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "alfiler"
  eventoslootEspecificoxCategoria[23] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento=` ${jugador.getNombre()} abrió una lata de galletas... Pero solo habían materiales de costura. Al menos consiguió un alfiler.`; 
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "nokia"
  eventoslootEspecificoxCategoria[24] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento=`Algo cae del cielo frente a ${jugador.getNombre()}. Es un Nokia 1100. Que suerte que no le cayó en la cabeza`;   
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "pikachu"
  eventoslootEspecificoxCategoria[25] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento=`${jugador.getNombre()} se fue a cazar Pokemon. Todos creen que enloqueció, hasta que encuentra un Pikachu y lo captura`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[26] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento=`${jugador.getNombre()} encontró un pikachu salvaje.`;   
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "jeringuilla"
  eventoslootEspecificoxCategoria[27] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento=`${jugador.getNombre()} fue a una clínica abandonada y se llevó una jeringuilla usada. ¿No era mejor llevarse algo más letal?`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "caparazon"
  eventoslootEspecificoxCategoria[28] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento=`${jugador.getNombre()} toma una caja misteriosa y le sale un Caparazón Azul. Pobre el que va de primero.`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "arco y flecha"
  eventoslootEspecificoxCategoria[29] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento=`${jugador.getNombre()} consigue un Arco y Flechas. Se parece a esa chica.. ¿Cómo se llamaba? ¿Catnip?`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[30] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento=`${jugador.getNombre()} encuentra un Arco y Flechas. Modo Legolas`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "ballesta"
  eventoslootEspecificoxCategoria[31] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento=`${jugador.getNombre()} le quita una ballesta a unos señores muy narigones. ¿Serán Argentinos? 👃`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "mando"
  eventoslootEspecificoxCategoria[32] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento =`${jugador.getNombre()} consiguió un ${arma["nombre"]}. Obviamente se le acabaron las baterias.`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "libro de mates"
  eventoslootEspecificoxCategoria[33] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento=`${jugador.getNombre()} sacó un Libro de Matemáticas de algún sitio. Esperemos que lo tenga todo calculado`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[34] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento=`${jugador.getNombre()} se sienta con su Libro de Matemáticas. ¿Estas son horas de resolver ecuaciones?`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "manzana"
  eventoslootEspecificoxCategoria[35] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento =`${jugador.getNombre()} consiguió una Manzana. Lastima que no es de oro`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[36] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `A ${jugador.getNombre()} le cae una manzana en la cabeza, y en vez de pensar en la teoría de la gravitación, piensa a quien se la puede arrojar en la cabeza.`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[37] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento=`A ${jugador.getNombre()} le cae una manzana en la cabeza. El asunto tiene "gravedad" 🤡`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[38] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento=`${jugador.getNombre()} saca una manzana de un árbol, pero en vez de comerla para recuperar vida, se la guarda para usarla de arma.`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "motosierra"
  eventoslootEspecificoxCategoria[39] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento =`¿Pochita? Ah, no... Solo es una motosierra que consiguió ${jugador.getNombre()}`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[40] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento =`¿Pochita? Ah, no... Solo es una motosierra que consiguió ${jugador.getNombre()}`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[41] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `${jugador.getNombre()} encontró una motosierra y ya se cree Leatherface`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "pan duro"
  eventoslootEspecificoxCategoria[42] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `A ${jugador.getNombre()} le dio hambre y fue a revisar su nevera. Pero solo consiguió un pan duro. Al menos sirve de arma, supongo.`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "nunchaku"
  eventoslootEspecificoxCategoria[43] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `${jugador.getNombre()} le robó un nunchaku a una..., ¿Tortuga?`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "estrellas"
  eventoslootEspecificoxCategoria[44] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `${jugador.getNombre()}: "Ahora sí conocerán el poder de ${jugador.getNombre()}, la Tormenta devastadora". Las Estrellas Ninja que encontró le convirtieron en chuunibyou`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "grimorio"
  eventoslootEspecificoxCategoria[45] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento =`${jugador.getNombre()} encontró un Grimorio Antiguo. ¿A quién hechizará?`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "varita magica"
  eventoslootEspecificoxCategoria[46] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento =`Expelliarmus!!... Parece que ${jugador.getNombre()} aún no sabe usar la varita mágica que encontró`; 
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[47] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento =`${jugador.getNombre()} saca una varita mágica del bolsillo. Al fin ser fan de Harry Potter le va a servir de algo.`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "roca"
  eventoslootEspecificoxCategoria[48] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento =`${jugador.getNombre()} ve algo que se parece a una roca así que se acerca a investigar... Es una roca.`; 
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "sable de luz"
  eventoslootEspecificoxCategoria[49] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento =`La fuerza está con ${jugador.getNombre()} y su nuevo sable de Luz.`; 
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "regla"
  eventoslootEspecificoxCategoria[50] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento =`${jugador.getNombre()} encuentra una regla de metal y se la guarda. ¿Qué clase de loco usaría eso como un arma?`; 
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[51] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento =`${jugador.getNombre()} encuentra una regla de metal. ¿Medirá sus consecuencias?`; 
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "granada fruta"
  eventoslootEspecificoxCategoria[52] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `${jugador.getNombre()} encontró una granada!!!! (ah, pero la fruta)`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "lapiz"
  eventoslootEspecificoxCategoria[53] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento =`${jugador.getNombre()} encuentra un lápiz. Parece que ya está listo para el examen.`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "navaja"
  eventoslootEspecificoxCategoria[54] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `Pueden sacar a ${jugador.getNombre()} del barrio pero no el barrio de ${jugador.getNombre()}. Todos se asustan al ver la navaja que encontró`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "Navaja Suiza Multiusos Victorinox Climber 5000 ++"
  eventoslootEspecificoxCategoria[55] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `${jugador.getNombre()} compra una Navaja Suiza Multiusos Victorinox Climber ++. Mucha marca, pero realmente hace el mismo daño que una navaja común y corriente.`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "cuchillo"
  eventoslootEspecificoxCategoria[56] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `${jugador.getNombre()} encontró un cuchillo. A cortar lazos de amistad.`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "cuchillo de carnicero"
  eventoslootEspecificoxCategoria[57] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento =`${jugador.getNombre()} encontró un cuchillo de carnicero. Hora de filetear algunos weyes.`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "trozo de cristal"
  eventoslootEspecificoxCategoria[58] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `${jugador.getNombre()} rompe una ventana y se guarda un trozo de cristal.`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[59] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento =`${jugador.getNombre()} salta por una ventana y milagrosamente no se clava ningún trozo de cristal. Bueno, solo uno, pero luego podrá usarlo como arma.`; 
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "kunai"
  eventoslootEspecificoxCategoria[60] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `${jugador.getNombre()} encuentra un kunai. Al fin haber visto 720 capítulos de Naruto va a servir de algo!`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "arma blanca"
  eventoslootEspecificoxCategoria[61] = async (jugador, players, arma, req, channel)=>{
    let pronombre = pronombreUnUnaUnosUnas(arma);
    let oAosas = pronombreOAOsAs(arma);
    let elLaLosLas = pronombreElLaLosLas(arma);
  
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `${jugador.getNombre()} encuentra ${pronombre} ${arma["nombre"]} y se l${oAosas} guarda para clavársel${oAosas} a alguien. (${elLaLosLas} ${arma["nombre"]}).`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[62] = async (jugador, players, arma, req, channel)=>{
    let pronombre = pronombreUnUnaUnosUnas(arma);
    let oAosas = pronombreOAOsAs(arma);
  
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `${jugador.getNombre()} encuentra ${pronombre} ${arma["nombre"]} y se l${oAosas} guarda, imaginandose ya en su mente atacando a otros con saltos ninja y volteretas innecesarias.`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "cubo rubik"
  eventoslootEspecificoxCategoria[63] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `${jugador.getNombre()} saca del bolso un cubo Rubik. Maldito nerd`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "botella de Vodka"
  eventoslootEspecificoxCategoria[64] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `${jugador.getNombre()} sacó una botella de Vodka de alguna licorería. Listo para enorgullecer a la Madre Patria`;
    console.log(evento);    
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "botella de Fernet"
  eventoslootEspecificoxCategoria[65] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `${jugador.getNombre()} encontró una botella de Fernet. ¿Alguien tiene una Coca Cola?`
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "botella de vino"
  eventoslootEspecificoxCategoria[66] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `${jugador.getNombre()} encontró una botella de vino. El que al mundo vino y no toma vino, ¿para qué vino?`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "granada"
  eventoslootEspecificoxCategoria[67] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento =`${jugador.getNombre()} encontró una granada. Cuidado con la argolla 👀`; 
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "molotov"
  eventoslootEspecificoxCategoria[68] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `${jugador.getNombre()} fabrica una molotov con una botella vacía.`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "Samsung Galaxy Note 7"
  eventoslootEspecificoxCategoria[69] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `${jugador.getNombre()} encuentra un Samsung Galaxy Note 7 y abre Genshin para usar el teléfono como explosivo.`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "fuegos artificiales"
  eventoslootEspecificoxCategoria[70] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento =`¿Feliz año? ¿De donde sacó ${jugador.getNombre()} esos fuegos artificiales?`; 
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "skate"
  eventoslootEspecificoxCategoria[71] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `${jugador.getNombre()} quiso aprenderle a la chaviza y se compró un skate`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "rompibles"
  eventoslootEspecificoxCategoria[72] = async (jugador, players, arma, req, channel)=>{
    let pronombre = pronombreUnUnaUnosUnas(arma);
    let oAosas = pronombreOAOsAs(arma);
  
    //console.log(`no way it works`);
    jugador.setArma(arma);
  
    let evento = `${jugador.getNombre()} encuentra ${pronombre} ${arma["nombre"]} y planea a quién partirsel${oAosas} en la cabeza.`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "bate de beisbol"
  eventoslootEspecificoxCategoria[73] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `${jugador.getNombre()} encuentra un bate de beisbol, y lejos de querer hacer deporte, se lo guarda para partirle la cabeza a alguien.`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "guitarra"
  eventoslootEspecificoxCategoria[74] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `${jugador.getNombre()} encontró una guitarra y se puso a tocar temas durante 1 hora y media. Nadie se atrevió a acercarse.`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  
  // "taser"
  eventoslootEspecificoxCategoria[75] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `${jugador.getNombre()} asalta una central de policía y se lleva un taser`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "lanzacohetes"
  eventoslootEspecificoxCategoria[76] = async (jugador, players, arma, req, channel)=>{
    //console.log(`no way it works`);
    jugador.setArma(arma);
    let evento = `${jugador.getNombre()} encuentra un lanzacohetes y se lo lleva consigo para... pues, lanzar cohetes`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }  
    
  // "Excalibur"
  eventoslootEspecificoxCategoria[77] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} intentó sacar a Excalibur de la piedra. No pudo`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }

  eventoslootEspecificoxCategoria[78] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} intentó sacar a Excalibur de la piedra... y lo logró! ¿Deberíamos comenzar a llamarle Arturo?`;
    console.log(evento);
    jugador.setArma(arma);
    jugador.setNombre("Arturo");
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(), jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  } 
  
  // "pizza con piña"
  eventoslootEspecificoxCategoria[79] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encontró una pizza con piña y por más que se está muriendo de hambre, la enrrolla y planea usarla de arma. Sí, eso da menos asco`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }

  // "gas pimienta"
  eventoslootEspecificoxCategoria[80] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra un gas pimienta en una central de policía`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[81] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} se armó una lata de gas pimienta con pimienta y gases`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "Jericho 941-R"
  eventoslootEspecificoxCategoria[82] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encontró una Jericho 941-R. ¿Qué tal vaqueros del espacio?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "da rules"
  eventoslootEspecificoxCategoria[83] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encontró un libro "Da rules". Hora de imponer reglas en el juego`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "caniche"
  eventoslootEspecificoxCategoria[84] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} se compró un caniche. ¡Ay, pero que cosa más bonita! Seguro no lo va a entrenar para matar, ¿no?... ¿No?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[85] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} se encuentra un caniche abandonado y lo adopta`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[86] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} se compra un caniche y le pone de nombre "Luna". La originalidad ante todo`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(), jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "encendedor"
  eventoslootEspecificoxCategoria[87] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra un encendedor ZIPPO en un cadáver. Le da asco, pero un encendedor ZIPPO es un encendedor ZIPPO, así que hace el esfuerzo por llevarselo`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }

  eventoslootEspecificoxCategoria[88] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra un encendedor. O le sirve para fumar o para prender fuego a alguien, ni tan mal`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  eventoslootEspecificoxCategoria[89] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra un encendedor, decide usarlo para fumar hierbas random del bosque y se pierde en un viaje astral psicodélico`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "roca pequeña"
  eventoslootEspecificoxCategoria[90] = async (jugador, players, arma, req, channel)=>{
    let evento = `Todo lo que encontró ${jugador.getNombre()} es una roca pequeña. Es peor que una roca grande, pero es mejor que nada`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "dardos venenosos"
  eventoslootEspecificoxCategoria[91] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra unos cuantos dardos y los impregna con una planta venenosa`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    // "pistola"
  eventoslootEspecificoxCategoria[92] = async (jugador, players, arma, req, channel)=>{
    let pronombre = pronombreUnUnaUnosUnas(arma);
    let evento = `${jugador.getNombre()} looteó ${pronombre} ${arma["nombre"]}. Espero que haya practicado suficiente con el counter.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    // "ring blade"
  eventoslootEspecificoxCategoria[93] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encontró una ring blade. De repente esto parece un RPG`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "arma blanca" > "machete"
  eventoslootEspecificoxCategoria[94] = async (jugador, players, arma, req, channel)=>{
    let pronombre = pronombreUnUnaUnosUnas(arma);
    let evento = `${jugador.getNombre()} va caminando y encuentra un machete. Ahora sí está listo para ir a pelear con el diablo al cerro.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    // "arma blanca > kunai"
  eventoslootEspecificoxCategoria[95] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} está listo con su kunai. "Yo soy el más perrón aqui"`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    // "kusarigama"
  eventoslootEspecificoxCategoria[96] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra una kusarigama y ya se siente todo un ninja.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "explosivos" > "bomba"
  eventoslootEspecificoxCategoria[97] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra una bomba. Prepárense para unas EXPLOSION!!`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "tirachinas"  
  eventoslootEspecificoxCategoria[98] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} lleva unas tirachinas. Contrario a lo que su nombre indica, sirven para tirar piedras, no chinas.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    // "veneno"
  eventoslootEspecificoxCategoria[99] = async (jugador, players, arma, req, channel)=>{
    let pronombre = pronombreUnUnaUnosUnas(arma);
    let pronombre2 = pronombreOAOsAs(arma);
    let evento = `${jugador.getNombre()} ve ${pronombre} ${arma["nombre"]} y se l${pronombre2} lleva. Planeando como envenenar a alguien.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    // "veneno"
  eventoslootEspecificoxCategoria[100] = async (jugador, players, arma, req, channel)=>{
    let pronombre = pronombreUnUnaUnosUnas(arma);
    let pronombre2 = pronombreOAOsAs(arma);
    let evento = `${jugador.getNombre()} casi se envenena por pisar ${pronombre} ${arma["nombre"]}. L${pronombre2} recoge con cuidado y se l${pronombre2} lleva para usar de arma.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "escoba"
  eventoslootEspecificoxCategoria[101] = async (jugador, players, arma, req, channel)=>{
    let evento = `¿Es un pájaro? ¿Es un avión? No, es ${jugador.getNombre()} que pasó corriendo montando la escoba que acaba de encontrar.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "plumaDeAve"
  eventoslootEspecificoxCategoria[102] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} está desesperado de la pelea. Y luego ve al cielo buscando paz, cuando un ave pasa volando sobre él y deja caer una pluma. ${jugador.getNombre()} se la guarda.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  // "arma blanca" > "par de estiletes de color dorado"
  eventoslootEspecificoxCategoria[103] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra un par de estiletes de color dorado. Esto me suena de algo...`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    // "megumin"
  eventoslootEspecificoxCategoria[104] = async (jugador, players, arma, req, channel)=>{
    let evento = `¡¡EXPLOSION!! ${jugador.getNombre()} ya se emocionó con el cetro de Megumin que encontró.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    // "botella"
  eventoslootEspecificoxCategoria[105] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} es un pto borracho. Se emociona por encontrar una ${arma["nombre"]} y ya está planeando tomar hasta el amanecer.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    // "explosivos"
  eventoslootEspecificoxCategoria[106] = async (jugador, players, arma, req, channel)=>{
    let pronombre = pronombreUnUnaUnosUnas(arma);
    let pronombre2 = pronombreOAOsAs(arma);
    let evento = `${jugador.getNombre()} recoge ${pronombre} ${arma["nombre"]} del suelo. Sale corriendo para pensar una trampa explosiva con est${pronombre2}.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    // "explosivos"
  eventoslootEspecificoxCategoria[107] = async (jugador, players, arma, req, channel)=>{
    let pronombre = pronombreUnUnaUnosUnas(arma);
    let pronombre2 = pronombreOAOsAs(arma);
    let evento = `${jugador.getNombre()} encuentra ${pronombre} ${arma["nombre"]} y se pone a pensar a quien explotarsel${pronombre2}.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"cucco"
  eventoslootEspecificoxCategoria[108] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} va caminando tranquilamente por el campo y ve un cucco. Se le ocurre la idea de tenerlo de mascota así que se lo lleva.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"cucco"
  eventoslootEspecificoxCategoria[109] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} ve un cucco a lo lejos y se acerca a golpearlo. El cucco llama toda una bandada y afortunamente logra escapar sin haber recibido daño.`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"cucco"
  eventoslootEspecificoxCategoria[110] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} quiere sentirse speedrunner, así que se pone a buscar un cucco para arrojarlo a sus enemigos. Después de un rato encuentra uno y se lo lleva.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"vieja"
  eventoslootEspecificoxCategoria[111] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra una vieja confiable. ¿Qué significa eso exactamente? Lo dejo a interpretación.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"vieja"
  eventoslootEspecificoxCategoria[112] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra una vieja confiable.¿Pero una vieja y confiable... qué?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"espada" > "espada tijera color rojo"
  eventoslootEspecificoxCategoria[113] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} halló una espada tijera color rojo. Bueno, media. ¿Dónde estará la otra mitad?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"banana"
  eventoslootEspecificoxCategoria[114] = async (jugador, players, arma, req, channel)=>{
    let evento = `Creo que ${jugador.getNombre()} tiene hambre. Se subió a una palmera y recogió una banana.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"banana"
  eventoslootEspecificoxCategoria[115] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra una banana y se la guarda para mas tarde.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"banana"
  eventoslootEspecificoxCategoria[116] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} toma una banana de un árbol. Esperemos que no haga nada raro con ella.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"banana"
  eventoslootEspecificoxCategoria[117] = async (jugador, players, arma, req, channel)=>{
    let evento = `¿${jugador.getNombre()} está feliz de verme? Se mete la mano en el pantalón y saca una banana. Ah...`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }

  //"senketsu"  
  eventoslootEspecificoxCategoria[118] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra a Senketsu y se lo pone. Oh.. oh Dios no, se le ve todo, quitenselo, quitenselo`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"taco de pool"  
  eventoslootEspecificoxCategoria[119] = async (jugador, players, arma, req, channel)=>{
    let evento = `Después de jugar 16 partidas de pool contra si mismo, ${jugador.getNombre()} decide que ya es hora de salir a pelear. Pero el taco de pool se lo lleva consigo`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"globo con confeti"  
  eventoslootEspecificoxCategoria[120] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} se roba un globo con confeti del cumpleaños de alguna pobre niña. ¿Para qué?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    
  //"oniballl"  
  eventoslootEspecificoxCategoria[121] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} se compra una oniball con wabis. Ahora puede invocar onis siempre que quiera!! Qué... qué tortura.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"test de embarazo"  
  eventoslootEspecificoxCategoria[122] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} lleva un test de embarazo. Nunca se sabe!!`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"lanzagranadas"  
  eventoslootEspecificoxCategoria[123] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} le compra a un random misterioso un lanzagranadas. "¿Eso es todo, extraño?"`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"cinturón"  
  eventoslootEspecificoxCategoria[124] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} se saca el cinturón que llevaba puesto y le trae recuerdos de su padre... Bueno, algo aprendió, ¿no?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"lanzallamas"  
  eventoslootEspecificoxCategoria[125] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} lootea un lanzallamas, y se le iluminan los ojos con un brillo rojizo. Oh no...`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"veneno" > "planta venenosa"  
    eventoslootEspecificoxCategoria[126] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} ve entre muchas plantas una en partícular: era una planta venenosa. ${jugador.getNombre()} la recoge con cuidado y la guarda.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"chitauri"  
  eventoslootEspecificoxCategoria[127] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} ve a un random con cuernos tocando con un bastón a la gente. Heróicamente se lanza y se lo quita. Parece que ${jugador.getNombre()} tiene ahora un Cetro Chitauri. Y no hizo falta un equipo de 6 randoms.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
     //"pierna"  
  eventoslootEspecificoxCategoria[128] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} ve una pierna protésica apoyada en la entrada a un baño y se la lleva. ¿No la iba a necesitar nadie...?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"veneno" > "planta venenosa"  
  eventoslootEspecificoxCategoria[129] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} está recogiendo flores y se da cuenta que había entre ellas una toxicodendron radicans. Mucho nombre y todo, pero sigue siendo una planta venenosa.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
    
     //"fotocopiadora"  
  eventoslootEspecificoxCategoria[130] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} va a un cyber y se roba una fotocopiadora. Latinos.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
     //"explosivos > mina de proximidad"  
  eventoslootEspecificoxCategoria[131] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} se acerca inconscientemente a una mina de proximidad. Por suerte estaba desactivada. ${jugador.getNombre()} la levanta y se la lleva`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"rollo de papel higiénico"  
  eventoslootEspecificoxCategoria[132] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} entra a un supermercado y lo unico que se lleva es un rollo de papel higiénico. ¿Alguien le avisó que esto es los juegos del hambre y no una pandemia?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"boina con cuchillas"  
  eventoslootEspecificoxCategoria[133] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} se pone una boina con cuchillas y empieza a hablar con acento británico`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
     //"manifesto"  
  eventoslootEspecificoxCategoria[134] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra un Manifesto Comunista. Al fin algo bueno para leer!!`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }  
  
     //"manifesto"  
  eventoslootEspecificoxCategoria[135] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} se está muriendo de hambre. Pero a pesar de todo, piensa defender las enseñanzas del Manifiesto Comunista que encontró. ¡Viva la revolución!`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }  
  
  //"cráneo humano"  
  eventoslootEspecificoxCategoria[136] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} ve un cráneo humano a sus pies. Piensa: "AAAAAAAAAAAAAAAAAAAAAAAAAAA!!!!"`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"cráneo humano"  
  eventoslootEspecificoxCategoria[137] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} ve un cráneo humano a sus pies. Le da cosa, pero seguro puede usarlo para librarse de algún enemigo. Decide llevárselo`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"cráneo humano"      
  eventoslootEspecificoxCategoria[138] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra una lanza clavada en el suelo, a traves de un esqueleto. ${jugador.getNombre()} toma el cráneo del esqueleto y se va. ¿Y la lanza...?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"funda de celular"  
  eventoslootEspecificoxCategoria[139] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} saca la funda a su celular y grita "Tengo una funda de celular y no tengo miedo de usarla!!!"`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
     //"manipulador"  
  eventoslootEspecificoxCategoria[140] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} hace un doctorado de física en teoría cuántica de campos para poder construirse un Manipulador de Campos de Energía Oscura. Un momento... ¿Eso no habría tomado años?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  } 
  
     //"manipulador"  
  eventoslootEspecificoxCategoria[141] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra un Manipulador de Campos de Energía Oscura en medio del camino, se alegra y se lo guarda. ¿Cómo supo que era un Manipulador de Campos de Energía Oscura?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  } 
  
     //"manipulador"  
  eventoslootEspecificoxCategoria[142] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra una cosa rara en medio de la nada. Según dice es un Manipulador de Campos de Energía Oscura, ¿pero eso qué carajo es?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  } 
  
     //"bola de boliche"  
  eventoslootEspecificoxCategoria[143] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra una bola de boliche y le mete los dedos.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  } 
  
  //"tijeras"  
  eventoslootEspecificoxCategoria[144] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} va a una librería y se compra unas tijeras. Esperemos que no corra con ellas`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"aspa de ventilador"  
  eventoslootEspecificoxCategoria[145] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} rompe un ventilador y se lleva una de las aspas. Improvise. Adapt. Overcome`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  } 
  
  //"rompibles" > "bongos"  
  eventoslootEspecificoxCategoria[146] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra unos bongos. O le sirven para hacer unos ritmos y entretenerse, o para rompérselos en la cabeza a quien le joda.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"pistola"  
  eventoslootEspecificoxCategoria[147] = async (jugador, players, arma, req, channel)=>{
    let pronombre = pronombreUnUnaUnosUnas(arma);
    let pronombre2 = pronombreOAOsAs(arma);
    let evento = `${jugador.getNombre()} va a un Walmart y se compra ${pronombre} ${arma["nombre"]}. ¿Desde cuando estaba en Estados Unidos?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"pistola"  
  eventoslootEspecificoxCategoria[148] = async (jugador, players, arma, req, channel)=>{
    let pronombre = pronombreUnUnaUnosUnas(arma);
    let pronombre2 = pronombreOAOsAs(arma);
    let evento = `Están a punto de robar a ${jugador.getNombre()} con ${pronombre} ${arma["nombre"]}. Pero recuerda que es latinoamericano y se l${pronombre2.toLowerCase()} roba para utilizarl${pronombre2.toLowerCase()} de arma.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  
     //"veneno > lanza venenosa"  
  eventoslootEspecificoxCategoria[149] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra una lanza, pero no está conforme. Así que hunde la lanza en un charco de veneno y la convierte en una lanza venenosa. Todos le miran como si fuera un genio.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  } 
  
     //"gemelas"  
  eventoslootEspecificoxCategoria[150] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} se consigue unas gemelas. O sea, unas hojas gemelas, como las de Azzinoth`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  } 
  
     //"prensa"  
  eventoslootEspecificoxCategoria[151] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra una prensa hidráulica. Le viene perfecto para un video en yutu de: "Prensa hidráulica vs onis"`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  } 
  
  
     //"fazerblaster"  
  eventoslootEspecificoxCategoria[152] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} gana una partida de laser tag y obtiene como premio un Fazerblaster. ¡Ojito, superestrella!`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  } 
  
     //"fazerblaster"  
  eventoslootEspecificoxCategoria[153] = async (jugador, players, arma, req, channel)=>{
    let evento = `Un oso le da un regalo a ${jugador.getNombre()}. Lo abre y dentro había un Fazerblaster. Ahora sí tiene con que defenderse de esos horribles staffbots... ¿Hay algún staffbot cerca?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"figura de anime" 
  eventoslootEspecificoxCategoria[154] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} derrama una lágrima mientras recoge y se lleva una figura de anime de su estantería. Hora de ir a la pelea...`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"figura de anime" 
  eventoslootEspecificoxCategoria[155] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} saca una figura de anime de un frasco de vidrio. Qué curioso jaja`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"pistola" > "fusil de francotirador"  
  eventoslootEspecificoxCategoria[156] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} lootea un fusil de francotirador. Excelente!! Siempre le gustó acostarse y no moverse durante horas.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    
  //"espada > espada de fuego"
  eventoslootEspecificoxCategoria[157] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} ve un bosque incendiándose. Va corriendo al bosque a ver que sucede, está demente. Al llegar ve que el incendio lo originó una espada de fuego. ${jugador.getNombre()} se la lleva para usarla de arma.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"espada > espada de fuego"
  eventoslootEspecificoxCategoria[158] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} toma una espada normal y la prende fuego. De repente se convierte en una espada de fuego... No se supone que funcione así...`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"espada > Masamune"
  eventoslootEspecificoxCategoria[159] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra una auténtica espada masamune. Felizmente la guarda.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"lanza"  
  eventoslootEspecificoxCategoria[160] = async (jugador, players, arma, req, channel)=>{
    let evento = `"¡Por Esparta!" ${jugador.getNombre()} grita amenazante de pronto al haber encontrado una lanza. ¿Pero dónde dejó el escudo?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"lanza"  
  eventoslootEspecificoxCategoria[161] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} toma una rama del suelo y le amarra una piedra tallada para hacer una lanza. ¿Desde cuándo es tan hábil?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"lanza"  
  eventoslootEspecificoxCategoria[162] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra una lanza clavada en el suelo, a traves de un esqueleto. ${jugador.getNombre()} toma la lanza y se va`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"lanza"  
  eventoslootEspecificoxCategoria[163] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra una lanza clavada en el suelo, junto a un esqueleto que sostiene un escudo roto.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"esposas"  
  eventoslootEspecificoxCategoria[164] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra unas esposas y se las guarda, sonriendo pícaramente... Qué... Qué planea hacer con ellas?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"banhammer"
  eventoslootEspecificoxCategoria[165] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra un banhammer y está buscando a quien darle ban.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"banhammer"
  eventoslootEspecificoxCategoria[166] = async (jugador, players, arma, req, channel)=>{
    let evento = `Cuidadito con ${jugador.getNombre()}. Tiene un banhammer y no va a dudar en banear.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }  
  
  //"poderosa pimienta peruana"  
  eventoslootEspecificoxCategoria[167] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} estaba preparando una salsa, y para que tenga el toque, saca de su bolso un jarro de la Poderosa Pimienta Peruana. De paso piensa, también podría servir de arma, no?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"ladrillo"
  eventoslootEspecificoxCategoria[168] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} va a una construcción abandonada y toma un ladrillo para defenderse.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }  
  
    //"ladrillo"
  eventoslootEspecificoxCategoria[169] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} derrumba la pared de una casa con una maza. Luego toma un ladrillo cuidadosamente y se lo guarda. Creo que era mejor si directamente usaba la maza como arma.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }  
  
  //"látigo"  
  eventoslootEspecificoxCategoria[170] = async (jugador, players, arma, req, channel)=>{
    let evento = `...¿Pero... qué? ${jugador.getNombre()} llega con alguna clase de leotardo y una mascara puestos y saca un látigo. ¿Qué está pensando?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"látigo"  
  eventoslootEspecificoxCategoria[171] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} se escapa de un circo y se lleva un látigo que tenía a mano.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"pistola > lancer de gears of war"
  eventoslootEspecificoxCategoria[172] = async (jugador, players, arma, req, channel)=>{
    let evento = `Un random deja caer su pistola y ${jugador.getNombre()} la recoge. Al parecer el random se llama Marcus, y la pistola era el lancer de gears of war.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"carnet de conducir"  
  eventoslootEspecificoxCategoria[173] = async (jugador, players, arma, req, channel)=>{
    let evento = `Alguien perdió su carnet de conducir. ${jugador.getNombre()} lo encuentra y se lo lleva. ¿Le servirá de algo, o buscará al dueño?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"ps5"
  eventoslootEspecificoxCategoria[174] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} decide comprarse una PS5. Según dice que era una buena inversión. Ahora solo le falta comprar los juegos a 80$ y los dlcs al mismo precio.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"ps5"
  eventoslootEspecificoxCategoria[175] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} consigue una PS5 y se emociona. Según dice, era noche de película.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"ps5"
  eventoslootEspecificoxCategoria[176] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} entra a una tienda abandonada y se roba una PS5. No la va a usar, pero siempre quiso robarse una PS5.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"ps5"
  eventoslootEspecificoxCategoria[177] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} consigue una PS5, decepcionado. Era mejor un xbox o una pc. Al menos podría usarlo de arma, pero quizás ni para eso sirva.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"ps5"
  eventoslootEspecificoxCategoria[178] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} ve un router a lo lejos... Espera... No, era una PS5. Lastima, quería WiFi gratis. Se la lleva, quizás la pueda vender a gente sin gusto.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"iPhone 13"  
  eventoslootEspecificoxCategoria[179] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra un iPhone 13 tirado. Qué pena que la única vez que pudo tocar algo tan caro, es probablemente minutos antes de morir.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }  
  
    //"colmena"
  eventoslootEspecificoxCategoria[180] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} se trepa a un árbol para tomar una colmena como arma. Según dice, lo vió en una película.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"colmena"
  eventoslootEspecificoxCategoria[181] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} va caminando y por poco pisa una colmena. Más cuidado para la próxima. La recoge y decide utilizarla como arma.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"colmena"
  eventoslootEspecificoxCategoria[182] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} tenía hambre y toma una colmena para sacar miel. Lastima que estaba vacía. Al menos puede usarla de arma.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"plumero"
  eventoslootEspecificoxCategoria[183] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} ve todo sucio a su alrededor así que busca un plumero.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"gaymer" > "teclado gaymer"  
  eventoslootEspecificoxCategoria[184] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} se levanta de su silla gaymer, desenchufa su teclado gaymer de su pc gaymer y se lo lleva para partirle la madre a alguien. Típico de gaymer`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"tableta"
  eventoslootEspecificoxCategoria[185] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} lootea una tableta de dibujo. Es hora de ponerse a dibujar? Ahora??`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"tableta"
  eventoslootEspecificoxCategoria[186] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} saca su tableta de dibujo. "Aguanten, tengo que terminar un dibujito.."`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"tableta"
  eventoslootEspecificoxCategoria[187] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} decidió comprar una tableta de dibujo para hacer comisiones de furros. Es una inversión. No es que le guste. Ni que sea furro. (Eso dice)`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"aspiradora"
  eventoslootEspecificoxCategoria[188] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra una aspiradora abandonada. Probablemente no sea suficientemente potente como para aspirar a nadie, pero aún sirve para golpear.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"tridente demoníaco"  
  eventoslootEspecificoxCategoria[189] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra un Tridente Demoníaco, lo toma y le salen cuernos mientras rie diabólicamente`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"tridente demoníaco"  
  eventoslootEspecificoxCategoria[190] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra un Tridente Demoníaco y se lo lleva, creyendose increiblemente poderoso (en realidad es un tridente de plástico de un disfraz hortera de diablilla)`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  
    //"palillos chinos"
  eventoslootEspecificoxCategoria[191] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} entra a un restaurante chino y se lleva un par de palillos chinos. Lástima que nunca aprendió a sostenerlos correctamente.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"gas lacrimogeno"
  eventoslootEspecificoxCategoria[192] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} se preparó para protestar y consiguió un gas lacrimógeno.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"nambre"  
  eventoslootEspecificoxCategoria[193] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encontró un nambre. Nambre <:NambreMexicano:977699179059105792> `;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"espada > azada"
  eventoslootEspecificoxCategoria[194] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} quiere demostrar sus habilidades de granjero y se hace con una hoz.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"espada > azada"
  eventoslootEspecificoxCategoria[195] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} está listo para hacer sus cultivos, equipado con una hoz y todo.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"espada > azada"
  eventoslootEspecificoxCategoria[196] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} se equivocó en el crafteo e hizo una azada de diamante. Nooooooooooo`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"tenedor"  
  eventoslootEspecificoxCategoria[197] = async (jugador, players, arma, req, channel)=>{
    let evento = `Por alguna razón ${jugador.getNombre()} se siente Aquaman y sacó un tenedor de algún lado. Está claro que enloqueció, pero al menos aun está dispuesto a defenderse.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  
    //"chancla"
  eventoslootEspecificoxCategoria[198] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} ve una chancla olvidada en medio del camino. Será una trampa? O se le salió a alguien? Oh bueno, hora de volverse madre latina.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"repelente de tiburones"  
  eventoslootEspecificoxCategoria[199] = async (jugador, players, arma, req, channel)=>{
    let evento = `"Robin, pasame el..." Un momento... esto no pasó realmente. ¿Y de donde sacó ${jugador.getNombre()} ese repelente de tiburones? ¿Algo así existe?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"repelente de tiburones"    
  eventoslootEspecificoxCategoria[200] = async (jugador, players, arma, req, channel)=>{
    let evento = `"Santas sardinas". ${jugador.getNombre()} consiguió un repelente de tiburones.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"pepino"
  eventoslootEspecificoxCategoria[201] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra un pepino en el suelo de un huerto abandonado, su forma curiosa resalta entre la maleza.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"pepino"
  eventoslootEspecificoxCategoria[202] = async (jugador, players, arma, req, channel)=>{
    let evento = `En un callejón sombrío, ${jugador.getNombre()} descubre un pepino junto a un charco de agua, como si hubiera sido abandonado por alguien con prisa.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"pepino"
  eventoslootEspecificoxCategoria[203] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} entra a una casa abandonada y va al baño. En la ducha encuentra un pepino y se lo lleva. ¿Qué estaba haciendo eso ahí..?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"martillo"  
  eventoslootEspecificoxCategoria[204] = async (jugador, players, arma, req, channel)=>{
    let evento = `Escondan sus tablas, porque ${jugador.getNombre()} acaba de conseguir un martillo.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"martillo"  
  eventoslootEspecificoxCategoria[205] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} busca una caja de herramientas para sacar un martillo.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"martillo"  
  eventoslootEspecificoxCategoria[206] = async (jugador, players, arma, req, channel)=>{
    let evento = `Es un martillo..., es real. Tomenle una foto a ${jugador.getNombre()} con él.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"dentadura"
  eventoslootEspecificoxCategoria[207] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra una dentadura falsa en un lavabo. Sin pensarlo dos veces, se la pone. Que asco.. Pero al fin tiene dientes blancos!`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"telescopio"
  eventoslootEspecificoxCategoria[208] = async (jugador, players, arma, req, channel)=>{
    let evento = `En lo alto de una torre de observación, ${jugador.getNombre()} descubre un telescopio. Se lo lleva para mirar las estrellas... O mejor dicho, para hacer a los demás ver las estrellas cuando lo use para partirles la madre.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"tentaculo"
  eventoslootEspecificoxCategoria[209] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra un tentáculo de pulpo en uno de los escritorios mientras exploraba una escuela. Sin hacerse preguntas se lo lleva`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"misil"  
  eventoslootEspecificoxCategoria[210] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra un misil. Ahora toca adivinar el código para activarlo...`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"misil"  
  eventoslootEspecificoxCategoria[211] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} pasa caminando con un misil. WTF?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"terranator"
  eventoslootEspecificoxCategoria[212] = async (jugador, players, arma, req, channel)=>{
    let evento = `Finalmente se cumplió el sueño de ${jugador.getNombre()}. Acaba de comprarse un terranator.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }

    //"terranator"
  eventoslootEspecificoxCategoria[213] = async (jugador, players, arma, req, channel)=>{
    let evento = `Un control remoto le cae del cielo a ${jugador.getNombre()}. ${jugador.getNombre()} lo prueba un rato para ver que pasa. De pronto escucha un sonido y se acerca. ¡Estuvo controlando un terranator! Felizmente se lo lleva.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"linterna"  
  eventoslootEspecificoxCategoria[214] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} va caminando por un bosque oscuro, cuando encuentra una linterna. Eso no es buena señal.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"linterna"  
  eventoslootEspecificoxCategoria[215] = async (jugador, players, arma, req, channel)=>{
    let evento = `Latinoamérica momento. Se fue la luz y ${jugador.getNombre()} a tientas toma una linterna.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"rompìbles > banjo"
  eventoslootEspecificoxCategoria[216] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} se encuentra a un padre con su hijo, quien sostenía un banjo. ${jugador.getNombre()} piensa en voz alta: "ufff, qué ganas de tocarlo..." El padre le lanza el banjo a ${jugador.getNombre()} y se va corriendo con su hijo. ${jugador.getNombre()} se pregunta confundido por qué se habrá enojado de repente? Al menos consiguió lo que quería.... No?... No?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"taco"  
  eventoslootEspecificoxCategoria[217] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} va a un taco bell porque tenía hambre. Pero lejos de ser comestible, prefiere usar el taco como arma.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"explosivos > TNT"
  eventoslootEspecificoxCategoria[218] = async (jugador, players, arma, req, channel)=>{
    let evento = `Mientras explora una mina abandonada, ${jugador.getNombre()} descubre una caja de TNT escondida en una esquina, dejando en claro que alguien tenía planes explosivos en mente. Ahora el de los planes explosivos es ${jugador.getNombre()}.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"arma blanca" > "estaca de madera"  
  eventoslootEspecificoxCategoria[219] = async (jugador, players, arma, req, channel)=>{
    let evento = `Cuidado todos con Van Hel... Ah, no. Es ${jugador.getNombre()} que encontró una estaca de madera.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"arma blanca" > "estaca de madera"  
  eventoslootEspecificoxCategoria[220] = async (jugador, players, arma, req, channel)=>{
    let evento = `En su paranoia, ${jugador.getNombre()} busca una estaca de madera. Ahora sí se lo pensarán 2 veces antes de querer chuparsela (la sangre).`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"arma blanca" > "estaca de madera"  
  eventoslootEspecificoxCategoria[221] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} descubre una estaca de madera clavada en el suelo, con un montón de ajos cerca, como si alguien se hubiera estado preparando contra criaturas de la noche. ${jugador.getNombre()} toma la estaca y se la lleva.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"crucifijo"
  eventoslootEspecificoxCategoria[222] = async (jugador, players, arma, req, channel)=>{
    let evento = `"En el nombre del Padre...". ${jugador.getNombre()} se encontró un crucifijo. Lo cuelga en su cuello y sigue adelante.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"crucifijo"
  eventoslootEspecificoxCategoria[223] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra una iglesia abandonada y entra a rezar para sobrevivir. Junto a la silla que se sentó había un crucifijo. ${jugador.getNombre()} lo ve como una señal y se lo guarda.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"resorte"
  eventoslootEspecificoxCategoria[224] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} destroza una cama para llevarse uno de los resortes para defenderse`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"huevo"  
  eventoslootEspecificoxCategoria[225] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encontró un huevo y se lo lleva. Como le gusta romper los huevos...`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"pistola > pistola de bengalas"
  eventoslootEspecificoxCategoria[226] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra una pistola de bengalas abandonada en una torre de observación, lista para iluminar el cielo nocturno.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"teta de plástico"  
  eventoslootEspecificoxCategoria[227] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} sale de un sex shop con una teta de plástico. Mejor no preguntar.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"arma blanca > puñal"
  eventoslootEspecificoxCategoria[228] = async (jugador, players, arma, req, channel)=>{
    let evento = `Al explorar una cripta antigua, ${jugador.getNombre()} descubre un puñal en un altar de piedra, rodeado de velas encendidas. Debate si es buena idea llevárselo o no. "Bueno, ya que, al fin y al cabo igual voy a morir"`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"porra de policía"  
  eventoslootEspecificoxCategoria[229] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} se lleva una porra de policía de una comisaría`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"serrucho"
  eventoslootEspecificoxCategoria[230] = async (jugador, players, arma, req, channel)=>{
    let evento = `Mientras explora un taller de carpintería abandonado, ${jugador.getNombre()} encuentra un serrucho descansando en un banco de trabajo. ¡Viva la labor manual!`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"abanico"  
  eventoslootEspecificoxCategoria[231] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} saca un abanico porque no se aguanta mas el maldito calor`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"bumeran"
  eventoslootEspecificoxCategoria[232] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra un bumerán atrapado en lo alto de un árbol, aparentemente lanzado por alguien que no logró alcanzarlo. ${jugador.getNombre()} trepa el árbol y consigue el bumeran. El problema ahora es bajar del árbol`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"bumeran"
  eventoslootEspecificoxCategoria[233] = async (jugador, players, arma, req, channel)=>{
    let evento = `Tan tan taran. ${jugador.getNombre()} abrió un cofre y encontró un búmeran. Ahora puede matar al jefe de la mazmorra, ¿o qué juego era este?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"micrófono"  
  eventoslootEspecificoxCategoria[234] = async (jugador, players, arma, req, channel)=>{
    let evento = `"asfaksfak". ${jugador.getNombre()} tomó un microfono e intentó cantar para todos. Todos los presentes desearían no tener oídos en este momento.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"cania"
  eventoslootEspecificoxCategoria[235] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} toma 3 palos de madera y 2 hilos. Se acerca a una mesa y pone los palos en diagonal y los hilos debajo de los palos. De repente desaparecen y mágicamente aparece una caña de pescar... ¿Pero qué?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"rama"
  eventoslootEspecificoxCategoria[236] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} escaló un arbol y arranca una rama para usarla de arma. ¿No era más sencillo tomar alguna que estuviera en el suelo?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }  
  
    //"cania"
  eventoslootEspecificoxCategoria[237] = async (jugador, players, arma, req, channel)=>{
    let evento = `A ${jugador.getNombre()} le dio hambre y va a una cabaña junto a un lago a buscar comida. Lo único que encontró fue una caña de pescar. Al menos puede tratar de pescar uno grande.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"empanada"  
  eventoslootEspecificoxCategoria[238] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} le dio hambre. Así que decidió ir por una empanada. Que gran elección.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"empanada"  
  eventoslootEspecificoxCategoria[239] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} tiene tan buen gusto que se compró una empanada.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"empanada"  
  eventoslootEspecificoxCategoria[240] = async (jugador, players, arma, req, channel)=>{
    let evento = `¡Cuidado! ${jugador.getNombre()} acaba de conseguir una empanada.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"empanada"  
  eventoslootEspecificoxCategoria[241] = async (jugador, players, arma, req, channel)=>{
    let evento = `¿Quién conoce a Thanos? Todos están de acuerdo que ${jugador.getNombre()} es más poderoso por tener una empanada.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"empanada"  
  eventoslootEspecificoxCategoria[242] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} estaba asustado de morir. Hasta que se le ocurrió conseguir el mejor arma que existe: una empanada`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"empanada"  
  eventoslootEspecificoxCategoria[243] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} pasó caminando por el barrio y compró una de las empanadas de la esquina. Sí sabe de gastronomía`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"empanada"  
  eventoslootEspecificoxCategoria[244] = async (jugador, players, arma, req, channel)=>{
    let evento = `Cerca de ${jugador.getNombre()} hay un anuncio de 5 empanadas por 1$. Se acerca pero ya solo queda una. Al menos consiguió una`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"canion"
  eventoslootEspecificoxCategoria[245] = async (jugador, players, arma, req, channel)=>{
    let evento = `Mientras explora una fortaleza costera, ${jugador.getNombre()} descubre un cañón apuntando al mar, cargado y listo para ser disparado.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"pistola" > "mosquete"  
  eventoslootEspecificoxCategoria[246] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} se lleva un mosquete de 1716. ¿Seguirá funcionando?`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"pistola" > "mosquete"  
  eventoslootEspecificoxCategoria[247] = async (jugador, players, arma, req, channel)=>{
    let evento = `Mientras explora un museo de historia, ${jugador.getNombre()} encuentra un rincón con trajes y armas antiguas, donde un maniquí sostiene un mosquete en su mano. ${jugador.getNombre()} se lo quita y se lo lleva. "Seguramente yo le voy a dar un mejor uso que tu"`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"ganzúas"  
  eventoslootEspecificoxCategoria[248] = async (jugador, players, arma, req, channel)=>{
    let evento = `Mientras exploraba un rincón oscuro, el pie de ${jugador.getNombre()} chocó con algo pequeño y metálico. Al mirar más de cerca, descubrió un juego de ganzúas con un mensaje adjunto: "Para el aventurero curioso. Úsalas sabiamente... o al menos con estilo".`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"ganzúas"  
  eventoslootEspecificoxCategoria[249] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} se agacha para recoger unas ganzúas que yacen al lado de una puerta rota, pero con la cerradura en perfecto estado. Parece que no son muy efectivas... De todos modos se las lleva.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"lupa"
  eventoslootEspecificoxCategoria[250] = async (jugador, players, arma, req, channel)=>{
    let evento = `"Ocupo 3 weyes bien locos y 1 perro que me acompañen a resolver misterios". ${jugador.getNombre()} toma su lupa y entra en una camioneta verde que se encontró.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"lupa"
  eventoslootEspecificoxCategoria[251] = async (jugador, players, arma, req, channel)=>{
    let evento = `¿Será ese Sherlock? Ah, no. Solo es ${jugador.getNombre()} con una lupa.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"pistola" > "escopeta"  
  eventoslootEspecificoxCategoria[252] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} escuchó un ruido proveniente de un arbusto cercano. Al acercarse, salen corriendo dos ardillas. ${jugador.getNombre()} inspecciona el arbusto y encuentra una escopeta. Parece que las ardillas habían estado "cazando" en su propio estilo único. ${jugador.getNombre()} se queda con la escopeta y espera que las ardillas no vengan a reclamarla.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"pistola" > "escopeta"  
  eventoslootEspecificoxCategoria[253] = async (jugador, players, arma, req, channel)=>{
    let evento = `Mientras ${jugador.getNombre()} exploraba un sótano oscuro y polvoriento, un destello metálico atrajo su mirada. Entre las telarañas y los trastos olvidados, encontró una escopeta con un rótulo que decía "En caso de invasión alienígena". ${jugador.getNombre()} tomó la escopeta y bromeó sobre prepararse para la llegada de los extraterrestres.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"pistola" > "escopeta"  
  eventoslootEspecificoxCategoria[254] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} sacó una escopeta de algún sitio. Según sus palabras, está cazando "wonejos".`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"espada > espada de esgrima"
  eventoslootEspecificoxCategoria[255] = async (jugador, players, arma, req, channel)=>{
    let evento = `Explorando un escenario teatral abandonado, ${jugador.getNombre()} halla una espada de esgrima apoyada en un atril, como si esperara a su próximo duelo.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"tarjeta"
  eventoslootEspecificoxCategoria[256] = async (jugador, players, arma, req, channel)=>{
    let evento = `Finalmente le aprobaron la solicitud a ${jugador.getNombre()} y le dan una tarjeta de crédito. ¡A endeudarse!`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"espada" > "guadaña"  
  eventoslootEspecificoxCategoria[257] = async (jugador, players, arma, req, channel)=>{
    let evento = `Una misteriosa figura vestida con una túnica negra se acerca a ${jugador.getNombre()} y le dice "ahora tú serás mi sucesor" y le entrega una guadaña. ${jugador.getNombre()} no entiende nada, pero se la lleva, le podría ser de utilidad.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"cuerda"
  eventoslootEspecificoxCategoria[258] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra una barcaza hundida que contiene una red que cubre algo. Al quitar la red, descubre una cuerda resistente y bien conservada que alguna vez fue utilizada para amarrar botes, y decide llevársela.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
    //"cuerda"
  eventoslootEspecificoxCategoria[259] = async (jugador, players, arma, req, channel)=>{
    let evento = `En el tejado de un edificio en ruinas, ${jugador.getNombre()} encuentra una cuerda atada a una chimenea, balanceándose con la brisa.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"palo de golf"
  eventoslootEspecificoxCategoria[260] = async (jugador, players, arma, req, channel)=>{
    let evento = `"Dame el acero 3". ${jugador.getNombre()} empieza a hablarle a nadie, pero toma un palo de golf como arma.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"palo de golf"
  eventoslootEspecificoxCategoria[261] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} encuentra una bolsa de golf en el suelo con unos cuantos palos. Toma el que se ve más fuerte y decide usarlo de arma.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
    
  //"tijeras de jardineria"
  eventoslootEspecificoxCategoria[262] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} tropieza con un rincón olvidado donde las plantas parecen haber tomado vida propia. En medio de las enredaderas y flores mágicas, encuentra un juego de tijeras de jardinería que parecen haber sido utilizadas por las plantas para recortarse a sí mismas.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"cadenas"
  eventoslootEspecificoxCategoria[263] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} toma unas cadenas de un cofre que vio. Sonríe levemente y empieza a pensar a quien quiere atar con ellas... Oh, no..`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"cadenas"
  eventoslootEspecificoxCategoria[264] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} entra en una mazmorra y de repente ve un esqueleto atado a la pared con cadenas. Lejos de preocuparle, le quita las cadenas y se las lleva. Creo que necesita un psicólogo.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"arma blanca" > "agujas"
  eventoslootEspecificoxCategoria[265] = async (jugador, players, arma, req, channel)=>{
    let evento = `Mientras ${jugador.getNombre()} exploraba un mercado de pulgas, un vendedor le ofreció un pequeño estuche de agujas. "Estas agujas", dijo el anciano con una sonrisa misteriosa, "te ayudarán a coser más que solo tela...". Intrigado, ${jugador.getNombre()} compró las agujas y se preguntó qué tipo de poderes especiales tendrían. (SPOILER: eran agujas comunes)`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"pelota de fulbo"
  eventoslootEspecificoxCategoria[266] = async (jugador, players, arma, req, channel)=>{
    let evento = `Encara ${jugador.getNombre()}. ${jugador.getNombre()} encontró una pelota de fulbo y la va a usar de arma`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }
  
  //"mancuerna"
  eventoslootEspecificoxCategoria[267] = async (jugador, players, arma, req, channel)=>{
    let evento = `${jugador.getNombre()} quiere ponerse mamadisimo, así que se consigue una mancuerna para mamarse.`;
    console.log(evento);
    jugador.setArma(arma);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, players)], [jugador.getHP()], [0], []);
    funcionCrearImagen(json,"1",channel);
    return 1;
  }

  
  export { eventoslootEspecificoxCategoria };
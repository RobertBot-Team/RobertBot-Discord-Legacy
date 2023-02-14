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

var eventoslootEspecificoxCategoria = [];

/*
    let resultado;
    do{
        var rand = parseInt(Math.random()*lootEspecificoxCategoria.length);  
        console.log("\x1b[33m%s\x1b[0m",` ${rand}`);
        resultado = lootEspecificoxCategoria[rand](jugador, players, arma); //le paso el array original
    }   
     while(resultado!=1)
*/

eventoslootEspecificoxCategoria[0] = (jugador, players, arma)=>{
    let categoria = arma["categoria"];
    console.log(`%c${arma["nombre"]} > ${categoria}`,"color:orange");
    let seleccionado;

    let pronombreUno = pronombreUnUnaUnosUnas(arma);

    switch(categoria){

        case "martillo de Thor":
            seleccionado = randomSelector(1,2);
            eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma);
            break;

        case "ramo de flores":
            seleccionado = randomSelector(3,4);
            eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma);
            break;

        case "death note":
            seleccionado = randomSelector(5,6);
            eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma);
            break;

        case "espada":
            if(arma["nombre"] == "Espada Maestra"){
                seleccionado = randomSelector(7,8);
                eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma);
                break;
            }

            if(arma["nombre"] == "espada de madera"){
                seleccionado = randomSelector(9,10);
                eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma);
                break;
            }

            if(arma["nombre"] == "Llave Espada"){
                seleccionado = randomSelector(11,12);
                eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma);
                break;
            }

            if(arma["nombre"] == "espada de iron"){
                seleccionado = randomSelector(13,14);
                eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma);
                break;
            }

            if(arma["nombre"] == "espada de oro"){
                eventoslootEspecificoxCategoria[15](jugador, players, arma);
                break;
            }
            
            if(arma["nombre"] == "espada cuádruple"){
                eventoslootEspecificoxCategoria[16](jugador, players, arma);
                break;
            }

            if(arma["nombre"] == "pescado congelado"){
                seleccionado = randomSelector(17,19);
                eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma);
                break;
            }

            //"espada"
            seleccionado = randomSelector(20,22);
            eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma);
            break;  
            
        case "alfiler":
            eventoslootEspecificoxCategoria[23](jugador, players, arma);
            break;

        case "nokia":
            eventoslootEspecificoxCategoria[24](jugador, players, arma);
            break;

        case "pikachu":
            seleccionado = randomSelector(25,26);
            eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma);
            break;

        case "jeringuilla":
            eventoslootEspecificoxCategoria[27](jugador, players, arma);
            break;

        case "caparazon":
            eventoslootEspecificoxCategoria[28](jugador, players, arma);
            break;

        case "arco y flecha":
            if(arma["nombre"] == "arco y flechas"){
                seleccionado = randomSelector(29,30);
                eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma);
                break;
            }

            //"ballesta"
            eventoslootEspecificoxCategoria[31](jugador, players, arma);
            break;

        case "mando":
            eventoslootEspecificoxCategoria[32](jugador, players, arma);
            break;

        case "libro de mates":
            seleccionado = randomSelector(33,34);
            eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma);
            break;

        case "manzana":
            seleccionado = randomSelector(35,38);
            eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma);
            break;

        case "motosierra":
            seleccionado = randomSelector(39,41);
            eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma);
            break;

        case "pan duro":
            eventoslootEspecificoxCategoria[42](jugador, players, arma);
            break;

        case "nunchaku":
            eventoslootEspecificoxCategoria[43](jugador, players, arma);
            break;

        case "estrellas":
            eventoslootEspecificoxCategoria[44](jugador, players, arma);
            break;

        case "grimorio":
            eventoslootEspecificoxCategoria[45](jugador, players, arma);
            break;

        case "varita magica":
            seleccionado = randomSelector(46,47);
            eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma);
            break;

        case "roca":
            eventoslootEspecificoxCategoria[48](jugador, players, arma);
            break;    

        case "sable de luz":
            eventoslootEspecificoxCategoria[49](jugador, players, arma);
            break;  

        case "regla":
            seleccionado = randomSelector(50,51);
            eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma);
            break;

        case "granada fruta":
            eventoslootEspecificoxCategoria[52](jugador, players, arma);
            break;  

        case "arma blanca":
        if(arma["nombre"] == "lapiz"){
            eventoslootEspecificoxCategoria[53](jugador, players, arma);
            break;
        }

        if(arma["nombre"] == "navaja"){
            eventoslootEspecificoxCategoria[54](jugador, players, arma);
            break;
        }

        if(arma["nombre"] == "Navaja Suiza Multiusos Victorinox Climber 5000 ++"){
            eventoslootEspecificoxCategoria[55](jugador, players, arma);
            break;
        }

        if(arma["nombre"] == "cuchillo"){
            eventoslootEspecificoxCategoria[56](jugador, players, arma);
            break;
        }

        if(arma["nombre"] == "cuchillo de carnicero"){
            eventoslootEspecificoxCategoria[57](jugador, players, arma);
            break;
        }

        if(arma["nombre"] == "trozo de cristal"){
            seleccionado = randomSelector(58,59);
            eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma);
            break;
        }

        if(arma["nombre"] == "kunai"){
            eventoslootEspecificoxCategoria[60](jugador, players, arma);
            break;
        }

        //"arma blanca"
        seleccionado = randomSelector(61,62);
        eventoslootEspecificoxCategoria[seleccionado](jugador, players, arma);
        break;  

        case "cubo rubik":
            eventoslootEspecificoxCategoria[63](jugador, players, arma);
            break;  


        case "botella":
            if(arma["nombre"] == "botella de Vodka"){
                eventoslootEspecificoxCategoria[64](jugador, players, arma);
                break;
            }

            if(arma["nombre"] == "botella de Fernet"){
                eventoslootEspecificoxCategoria[65](jugador, players, arma);
                break;
            }

            if(arma["nombre"] == "botella de vino"){
                eventoslootEspecificoxCategoria[66](jugador, players, arma);
                break;
            }
            break;
        
        case "explosivos":
            if(arma["nombre"] == "granada"){
                eventoslootEspecificoxCategoria[67](jugador, players, arma);
                break;
            }

            if(arma["nombre"] == "molotov"){
                eventoslootEspecificoxCategoria[68](jugador, players, arma);
                break;
            }

            if(arma["nombre"] == "Samsung Galaxy Note 7"){
                eventoslootEspecificoxCategoria[69](jugador, players, arma);
                break;
            }

            if(arma["nombre"] == "fuegos artificiales"){
                eventoslootEspecificoxCategoria[70](jugador, players, arma);
                break;
            }

        case "rompibles":
            if(arma["nombre"] == "skate"){
                eventoslootEspecificoxCategoria[71](jugador, players, arma);
                break;
            }

        //"rompibles"
        eventoslootEspecificoxCategoria[72](jugador, players, arma);
        break;  

        default:
            jugador.setArma(arma);
            console.log(` ${jugador.getNombre()} looteó ${pronombreUno} ${arma["nombre"]}.`);

    }

    
    
    return 1;
}

// "martillo de Thor"
eventoslootEspecificoxCategoria[1] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    //jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} encontró el Martillo de Thor 🔨. Lamentablemente no lo pudo levantar porque no es digno.`);
    return 1;
}

eventoslootEspecificoxCategoria[2] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} encontró el Martillo de Thor 🔨. Como ${jugador.getNombre()} es “alguien digno”, lo puede levantar y se lo lleva.`);
    return 1;
}

// "ramo de flores"
eventoslootEspecificoxCategoria[3] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} recolecta flores con espinas de sus alrededores, y arma un ramo de flores. 🌼`);
    return 1;
}

eventoslootEspecificoxCategoria[4] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ¡¿Un Ramo de flores?! ¿${jugador.getNombre()} va a tener una cita? ¿Quién estaría tan demente como para aceptar eso? `);
    return 1;
}

// "death note"
eventoslootEspecificoxCategoria[5] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} encontró una Death Note y está listo para ponerse a escribir nombres.`);
    return 1;
}

eventoslootEspecificoxCategoria[6] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} encontró una Death Note. Espero que haya leido bien las reglas`);
    return 1;
}

// "espada maestra"
eventoslootEspecificoxCategoria[7] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} acaba de encontrar LA ESPADA MAESTRA. El arma mas mamadísima del juego. Cuidadito.`);
    return 1;
}

eventoslootEspecificoxCategoria[8] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} se perdió en un bosque y encontró una Espada Maestra en un pedestal. ¿Tendrá la edad suficiente?`);
    return 1;
}

// "espada de madera"
eventoslootEspecificoxCategoria[9] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} construye una espada de madera con ramas de los árboles.`);
    return 1;
}

eventoslootEspecificoxCategoria[10] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} encuentra una Espada de Madera. ¿Algo así no es inútil?`);
    return 1;
}

// "llave espada"
eventoslootEspecificoxCategoria[11] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` Mickey le da una Llave Espada a ${jugador.getNombre()}. ¿A quién se la habrá comprado?`);   
    return 1;
}

eventoslootEspecificoxCategoria[12] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` Un ratón le da una espada con forma de llave a ${jugador.getNombre()}. ¿De dónde me suena esta escena?`);   
    return 1;
}

// "espada de iron"
eventoslootEspecificoxCategoria[13] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} se fue a minar un rato y consiguió 2 trozos de hierro, así que crafteó una espada de iron. ¿No es muy poco hierro para hacer una espada?`);   
    return 1;
}

eventoslootEspecificoxCategoria[14] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} se fue a minar y consiguió 2 trozos de hierro, se crafteó una espada de iron y ahora va en búsqueda de diamante... Espera ¿qué juego era este?`);   
    return 1;
}

// "espada de oro"
eventoslootEspecificoxCategoria[15] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} crafteó una espada de oro. Ya no suena tan mal la de madera.`);   
    return 1;
}

// "espada cuadruple"
eventoslootEspecificoxCategoria[16] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} consiguió una Espada Cuádruple. Que raro que no se multiplicó`);   
    return 1;
}

// "pescado congelado"
eventoslootEspecificoxCategoria[17] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} encontró un pescado. Genial, va a matar a todos con el mal olor`);   
    return 1;
}

eventoslootEspecificoxCategoria[18] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} encontró un pescado. Al menos está congelado, así que servirá para usarlo de espada.`);   
    return 1;
}

eventoslootEspecificoxCategoria[19] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} encontró un pescado congelado. 🥶`);   
    return 1;
}

// "espada"
eventoslootEspecificoxCategoria[20] = (jugador, players, arma)=>{
    let pronombre = pronombreUnUnaUnosUnas(arma);

    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} looteó ${pronombre} ${arma["nombre"]}.`);   
    return 1;
}

eventoslootEspecificoxCategoria[21] = (jugador, players, arma)=>{
    let pronombre = pronombreUnUnaUnosUnas(arma);
    let pronombre2 = pronombreElLaLosLas(arma);

    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} looteó ${pronombre} ${arma["nombre"]}. A ver a quién se ${pronombre2.toLowerCase()} clava.`);   
    return 1;
}

eventoslootEspecificoxCategoria[22] = (jugador, players, arma)=>{
    let pronombre = pronombreUnUnaUnosUnas(arma);
    
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} looteó ${pronombre} ${arma["nombre"]} y piensa "ojala hubiera tomado clases de esgrima"`);   
    return 1;
}

// "alfiler"
eventoslootEspecificoxCategoria[23] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(` ${jugador.getNombre()} abrió una lata de galletas... Pero solo habían materiales de costura. Al menos consiguió un alfiler.`);   
    return 1;
}

// "nokia"
eventoslootEspecificoxCategoria[24] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`Algo cae del cielo frente a ${jugador.getNombre()}. Es un Nokia 1100. Que suerte que no le cayó en la cabeza`);   
    return 1;
}

// "pikachu"
eventoslootEspecificoxCategoria[25] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} se fue a cazar Pokemon. Todos creen que enloqueció, hasta que encuentra un Pikachu y lo captura`);   
    return 1;
}

eventoslootEspecificoxCategoria[26] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} encontró un pikachu salvaje.`);   
    return 1;
}

// "jeringuilla"
eventoslootEspecificoxCategoria[27] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} fue a una clínica abandonada y se llevó una jeringuilla usada. ¿No era mejor llevarse algo más letal?`);   
    return 1;
}

// "caparazon"
eventoslootEspecificoxCategoria[28] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} toma una caja misteriosa y le sale un Caparazón Azul. Pobre el que va de primero.`);
    return 1;
}

// "arco y flecha"
eventoslootEspecificoxCategoria[29] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} consigue un Arco y Flechas. Se parece a esa chica.. ¿Cómo se llamaba? ¿Catnip?`);
    return 1;
}

eventoslootEspecificoxCategoria[30] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} encuentra un Arco y Flechas. Modo Legolas`);
    return 1;
}

// "ballesta"
eventoslootEspecificoxCategoria[31] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} le quita una ballesta a unos señores muy narigones. ¿Serán Argentinos? 👃`);
    return 1;
}

// "mando"
eventoslootEspecificoxCategoria[32] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} consiguió un ${arma["nombre"]}. Obviamente se le acabaron las baterias.`);
    return 1;
}

// "libro de mates"
eventoslootEspecificoxCategoria[33] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} sacó un Libro de Matemáticas de algún sitio. Esperemos que lo tenga todo calculado`);
    return 1;
}

eventoslootEspecificoxCategoria[34] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} se sienta con su Libro de Matemáticas. ¿Estas son horas de resolver ecuaciones?`);
    return 1;
}

// "manzana"
eventoslootEspecificoxCategoria[35] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} consiguió una Manzana. Lastima que no es de oro`);
    return 1;
}

eventoslootEspecificoxCategoria[36] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`A ${jugador.getNombre()} le cae una manzana en la cabeza, y en vez de pensar en la teoría de la gravitación, piensa a quien se la puede arrojar en la cabeza.`);
    return 1;
}

eventoslootEspecificoxCategoria[37] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`A ${jugador.getNombre()} le cae una manzana en la cabeza. El asunto tiene "gravedad" 🤡`);
    return 1;
}

eventoslootEspecificoxCategoria[38] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} saca una manzana de un árbol, pero en vez de comerla para recuperar vida, se la guarda para usarla de arma.`);
    return 1;
}

// "motosierra"
eventoslootEspecificoxCategoria[39] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`¿Pochita? Ah, no... Solo es una motosierra que consiguió ${jugador.getNombre()}`);
    return 1;
}

eventoslootEspecificoxCategoria[40] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`¿Pochita? Ah, no... Solo es una motosierra que consiguió ${jugador.getNombre()}`);
    return 1;
}

eventoslootEspecificoxCategoria[41] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} encontró una motosierra y ya se cree Leatherface`);
    return 1;
}

// "pan duro"
eventoslootEspecificoxCategoria[42] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} le dio hambre y fue a revisar su nevera. Pero solo consiguió un pan duro. Al menos sirve de arma, supongo.`);
    return 1;
}

// "nunchaku"
eventoslootEspecificoxCategoria[43] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} le robó un nunchaku a una..., ¿Tortuga?`);
    return 1;
}

// "estrellas"
eventoslootEspecificoxCategoria[44] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()}: "Ahora sí conocerán el poder de ${jugador.getNombre()}, la Tormenta devastadora". Las Estrellas Ninja que encontró le convirtieron en chuunibyou`);
    return 1;
}

// "grimorio"
eventoslootEspecificoxCategoria[45] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} encontró un Grimorio Antiguo. ¿A quién hechizará?`);
    return 1;
}

// "varita magica"
eventoslootEspecificoxCategoria[46] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`Expelliarmus!!... Parece que ${jugador.getNombre()} aún no sabe usar la varita mágica que encontró`);
    return 1;
}

eventoslootEspecificoxCategoria[47] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} saca una varita mágica del bolsillo. Al fin ser fan de Harry Potter le va a servir de algo.`);
    return 1;
}

// "roca"
eventoslootEspecificoxCategoria[48] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} ve algo que se parece a una roca así que se acerca a investigar... Es una roca.`);
    return 1;
}

// "sable de luz"
eventoslootEspecificoxCategoria[49] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`La fuerza está con ${jugador.getNombre()} y su nuevo sable de Luz.`);
    return 1;
}

// "regla"
eventoslootEspecificoxCategoria[50] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} encuentra una regla de metal y se la guarda. ¿Qué clase de loco usaría eso como un arma?`);
    return 1;
}

eventoslootEspecificoxCategoria[51] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} encuentra una regla de metal. ¿Medirá sus consecuencias?`);
    return 1;
}

// "granada fruta"
eventoslootEspecificoxCategoria[52] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} encontró una granada!!!! (ah, pero la fruta)`);
    return 1;
}

// "lapiz"
eventoslootEspecificoxCategoria[53] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} encuentra un lápiz. Parece que ya está listo para el examen.`);
    return 1;
}

// "navaja"
eventoslootEspecificoxCategoria[54] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`Pueden sacar a ${jugador.getNombre()} del barrio pero no el barrio de ${jugador.getNombre()}. Todos se asustan al ver la navaja que encontró`);
    return 1;
}

// "Navaja Suiza Multiusos Victorinox Climber 5000 ++"
eventoslootEspecificoxCategoria[55] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} compra una Navaja Suiza Multiusos Victorinox Climber ++. Mucha marca, pero realmente hace el mismo daño que una navaja común y corriente.`);
    return 1;
}

// "cuchillo"
eventoslootEspecificoxCategoria[56] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} encontró un cuchillo. A cortar lazos de amistad.`);
    return 1;
}

// "cuchillo de carnicero"
eventoslootEspecificoxCategoria[57] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} encontró un cuchillo de carnicero. Hora de filetear algunos weyes.`);
    return 1;
}

// "trozo de cristal"
eventoslootEspecificoxCategoria[58] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} rompe una ventana y se guarda un trozo de cristal.`);
    return 1;
}

eventoslootEspecificoxCategoria[59] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} salta por una ventana y milagrosamente no se clava ningún trozo de cristal. Bueno, solo uno, pero luego podrá usarlo como arma.`);
    return 1;
}

// "kunai"
eventoslootEspecificoxCategoria[60] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} encuentra un kunai. Al fin haber visto 720 capítulos de Naruto va a servir de algo!`);
    return 1;
}

// "arma blanca"
eventoslootEspecificoxCategoria[61] = (jugador, players, arma)=>{
    let pronombre = pronombreUnUnaUnosUnas(arma);
    let oAosas = pronombreOAOsAs(arma);
    let elLaLosLas = pronombreElLaLosLas(arma);

    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} encuentra ${pronombre} ${arma["nombre"]} y se l${oAosas} guarda para clavársel${oAosas} a alguien. (${elLaLosLas} ${arma["nombre"]}).`);
    return 1;
}

eventoslootEspecificoxCategoria[62] = (jugador, players, arma)=>{
    let pronombre = pronombreUnUnaUnosUnas(arma);
    let oAosas = pronombreOAOsAs(arma);

    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} encuentra ${pronombre} ${arma["nombre"]} y se l${oAosas} guarda, imaginandose ya en su mente atacando a otros con saltos ninja y volteretas innecesarias.`);
    return 1;
}

// "cubo rubik"
eventoslootEspecificoxCategoria[63] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} saca del bolso un cubo Rubik. Maldito nerd`);
    return 1;
}

// "botella de Vodka"
eventoslootEspecificoxCategoria[64] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} sacó una botella de Vodka de alguna licorería. Listo para enorgullecer a la Madre Patria`);
    return 1;
}

// "botella de Fernet"
eventoslootEspecificoxCategoria[65] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} encontró una botella de Fernet. ¿Alguien tiene una Coca Cola?`);
    return 1;
}

// "botella de vino"
eventoslootEspecificoxCategoria[66] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} encontró una botella de vino. El que al mundo vino y no toma vino, ¿para qué vino?`);
    return 1;
}

// "granada"
eventoslootEspecificoxCategoria[67] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} encontró una granada. Cuidado con la argolla 👀`);
    return 1;
}

// "molotov"
eventoslootEspecificoxCategoria[68] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} fabrica una molotov con una botella vacía.`);
    return 1;
}

// "Samsung Galaxy Note 7"
eventoslootEspecificoxCategoria[69] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} encuentra un Samsung Galaxy Note 7 y abre Genshin para usar el teléfono como explosivo.`);
    return 1;
}

// "fuegos artificiales"
eventoslootEspecificoxCategoria[70] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`¿Feliz año? ¿De donde sacó ${jugador.getNombre()} esos fuegos artificiales?`);
    return 1;
}

// "skate"
eventoslootEspecificoxCategoria[71] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} quiso aprenderle a la chaviza y se compró un Skate`);
    return 1;
}

// "rompibles"
eventoslootEspecificoxCategoria[72] = (jugador, players, arma)=>{
    let pronombre = pronombreUnUnaUnosUnas(arma);
    let oAosas = pronombreOAOsAs(arma);

    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`${jugador.getNombre()} encuentra ${pronombre} ${arma["nombre"]} y planea a quién partirsel${oAosas} en la cabeza.`);
    return 1;
}










/*
// "fuegos artificiales"
eventoslootEspecificoxCategoria[32] = (jugador, players, arma)=>{
    console.log(`no way it works`);
    jugador.setArma(arma);
    console.log(`¿Feliz año? ¿De donde sacó ${jugador.getNombre()} esos fuegos artificiales?`);
    return 1;
}
*/





export { eventoslootEspecificoxCategoria };
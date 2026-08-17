import 'dotenv/config';
import fetch from 'node-fetch';
import { verifyKey } from 'discord-interactions';
import {
  Arma,
  Jugador,
  Team,
  JugadorFake
} from "./hg/clases.js";
import {
  createCanvas,
  loadImage,
  GlobalFonts,
} from "@napi-rs/canvas";
import { AttachmentBuilder } from "discord.js";
import { eventosLootGenerico } from "./hg/lootGenerico.js";
import { eventosLootGenerico as eventosLootGenericoEn } from "./hg/EN/ENlootGenerico.js";
import { eventosAleatorios1 } from "./hg/eventosAleatorios1.js";
import { eventosAleatorios1 as eventosAleatorios1En } from './hg/EN/ENeventosAleatorios1.js';
import { eventosAleatorios2 } from "./hg/eventosAleatorios2.js";
import { eventosAleatorios2 as eventosAleatorios2En } from "./hg/EN/ENeventosAleatorios2.js";
import { eventoslootEspecificoxCategoria } from "./hg/lootEspecificoxCategoria.js"
import { eventoslootEspecificoxCategoria as eventoslootEspecificoxCategoriaEn } from "./hg/EN/ENlootEspecificoxCategoria.js"
import { eventosLootArmaEstetica } from "./hg/lootArmasEsteticas.js"
import { eventosAtaqueEspecificoxCategoria } from "./hg/ataqueEspecificoxCategoria.js"
import { eventosAtaqueEspecificoxCategoria as eventosAtaqueEspecificoxCategoriaEn } from "./hg/EN/ENataqueEspecificoxCategoria.js"
import { ataquesGenericosConArma } from "./hg/ataqueGenericoConArma.js"
import { ataquesGenericosConArma as ataquesGenericosConArmaEn } from "./hg/EN/ENataqueGenericoConArma.js"
import { ataquesGenericosSinArma } from "./hg/ataqueGenericoSinArma.js"
import { ataquesGenericosSinArma as ataquesGenericosSinArmaEn } from "./hg/EN/ENataqueGenericoSinArma.js"
import { EmbedBuilder } from "discord.js";
import fs from 'fs';
import nthline from 'nthline';
import { returnClient, getGuildPlayLanguage } from './app.js';
import { buscarPorID } from './hg/utils.js';
import { getGuildGameState } from './controllers/message_component/play.js';

var maxHP = 1000;

//                     (nombre, categoria, daño base, usos, pronombre, pluralidad, english name, english plurality)
const pistola = new Arma("pistola", "pistola", 190, 3, "f", "", "gun", "");
const granada = new Arma("granada", "explosivos", 480, 1, "f", "", "grenade", "");
const guitarra = new Arma("guitarra", "rompibles", 100, 1, "f", "", "guitar", "");
const alfiler = new Arma("alfiler", "alfiler", 10, 1, "m", "", "pin", "");
const martilloThor = new Arma("martillo de Thor", "martillo de Thor", 500, 2, "m", "", "Thor's Hammer", "p");
const bomba = new Arma("bomba", "explosivos", 250, 1, "f", "", "bomb", "");
// const jeringuilla = new Arma("jeringuilla usada", "jeringuilla", 50, 6, "f", "", "used syringe", "");
const bate = new Arma("bate de beisbol", "rompibles", 85, 6, "m", "", "baseball bat", "");
// const jericho = new Arma("Jericho 941-R", "pistola", 380, 4, "f", "");
const estrellasNinja = new Arma("estrellas ninja", "estrellas", 100, 3, "f", "p", "shurikens", "p");
// const espadaCuadruple = new Arma("espada cuádruple", "espada", 300, 2, "f", "");
// const grimorio = new Arma("grimorio antiguo", "grimorio", 300, 1, "m", "");
// const daRules = new Arma("da rules", "da rules", 100, 1, "m", "");
const cuchillo = new Arma("cuchillo", "arma blanca", 50, 4, "m", "", "knife", "");
const navaja = new Arma("navaja", "arma blanca", 66, 5, "f", "", "pocket knife", "");
// const navajaVictorinox = new Arma("Navaja Suiza Multiusos Victorinox Climber 5000 ++", "arma blanca", 66, 5, "f", "");
const tirachinas = new Arma("tirachinas", "tirachinas", 75, 15, "f", "", "slingshot", "");
const molotov = new Arma("molotov", "explosivos", 275, 1, "f", "", "molotov cocktail", "");
const roca = new Arma("roca", "roca", 100, 1, "f", "", "rock", "");
// const cuchilloCarnicero = new Arma("cuchillo de carnicero", "arma blanca", 159, 4, "m", "");
const trozoCristal = new Arma("trozo de cristal", "arma blanca", 70, 2, "m", "", "crystal shard", "");
const granadaFruta = new Arma("granada (pero la fruta)", "granada fruta", 10, 1, "f", "", "pomegranate", "");
const lanza = new Arma("lanza", "lanza", 110, 2, "f", "", "spear", "");
const punioAmericano = new Arma("puño americano", "arma blanca", 100, 9, "m", "", "brass knuckle", "");
const latigo = new Arma("látigo", "látigo", 50, 6, "m", "", "whip", "");
// const sableDeLuz = new Arma("sable de luz", "sable de luz", 250, 4, "m", "");
const revolver = new Arma("revolver", "pistola", 310, 4, "m", "", "revolver", "");
const gasPimienta = new Arma("gas pimienta", "gas pimienta", 30, 8, "m", "", "pepper spray", "");
const banana = new Arma("banana", "banana", 5, 1, "f", "", "banana", "");
const plantaVenenosa = new Arma("planta venenosa", "veneno", 90, 1, "f", "", "poisonous plant", "");
const espadaMadera = new Arma("espada de madera", "espada", 80, 2, "f", "", "wooden sword", "");
const guadania = new Arma("guadaña", "espada", 250, 3, "f", "", "scythe", "");
const azada = new Arma("azada", "espada", 165, 2, "f", "", "hoe", "");
const tridente = new Arma("tridente demoníaco", "tridente demoníaco", 300, 3, "m", "", "demonic trident", "");
const lapiz = new Arma("lápiz", "arma blanca", 10, 1, "m", "", "pencil", "");
const ballesta = new Arma("ballesta", "arco y flecha", 100, 4, "f", "", "crossbow", "");
const dardosVenenosos = new Arma("dardos venenosos", "veneno", 175, 3, "m", "p", "poison darts", "p");
// const reglaMetal = new Arma("regla de metal", "regla", 130, 2, "f", "");
// const rocaPequenia = new Arma("roca pequeña", "roca pequeña", 30, 1, "f", "");
// const samsungGalaxy = new Arma("Samsung Galaxy Note 7", "explosivos", 320, 1, "m", "");
const encendedor = new Arma("encendedor", "encendedor", 15, 3, "m", "", "lighter", "");
// const caniche = new Arma("caniche", "caniche", 80, 2, "m", "");
// const varitaMagica = new Arma("varita mágica", "varita magica", 20, 3, "f", "");
const pescado = new Arma("pescado congelado", "espada", 70, 1, "m", "", "frozen fish", "");
const lanzacohetes = new Arma("lanzacohetes", "lanzacohetes", 150, 3, "m", "", "rocket launcher", "");
// const llaveEspada = new Arma("Llave Espada", "espada", 190, 3, "f", "");
// const espadaMaestra = new Arma("Espada Maestra", "espada", 999, 5, "f", "");
const nokia1100 = new Arma("nokia 1100", "nokia", 999, 1, "m", "", "nokia 1100", "");
const espadaIron = new Arma("espada de iron", "espada", 100, 3, "f", "", "iron sword", "");
const espadaOro = new Arma("espada de oro", "espada", 80, 1, "f", "", "gold sword", "");
// const pikachu = new Arma("pikachu", "pikachu", 150, 3, "m", "");
// const caparazonAzul = new Arma("caparazón azul", "caparazon", 35, 1, "m", "");
const ramoDeFlores = new Arma("ramo de flores", "ramo de flores", 35, 2, "m", "", "bouquet of flowers", "");
const arcoYFlechas = new Arma("arco y flechas", "arco y flecha", 80, 7, "m", "", "bow and arrows", "");
// const mandoPlei = new Arma("mando de plei", "mando", 50, 1, "m", "");
// const mandoXbox = new Arma("mando de xbox", "mando", 50, 1, "m", "");
const libroMatematicas = new Arma("libro de matemáticas", "libro de mates", 40, 1, "m", "", "math book", "");
const manzana = new Arma("manzana", "manzana", 20, 1, "f", "", "apple", "");
// const deathNote = new Arma("Death Note", "death note", 30, 6, "f", "");
// const botellaDeVodka = new Arma("botella de Vodka", "botella", 100, 1, "f", "");
// const botellaDeFernet = new Arma("botella de Fernet", "botella", 100, 1, "f", "");
// const botellaDeVino = new Arma("botella de vino", "botella", 100, 1, "f", "");
const fuegosArtificiales = new Arma("fuegos artificiales", "explosivos", 170, 1, "m", "p", "fireworks", "p");
const skate = new Arma("skate", "rompibles", 120, 1, "m", "", "skate", "");
const motosierra = new Arma("motosierra", "motosierra", 250, 3, "f", "", "chainsaw", "");
const panDuro = new Arma("pan duro", "pan duro", 105, 3, "m", "", "stale bread", "");
const nunchaku = new Arma("nunchaku", "nunchaku", 50, 8, "m", "", "nunchucks", "p");
const cuboRubik = new Arma("cubo Rubik", "cubo rubik", 50, 5, "m", "", "rubik's cube", "");
const kunai = new Arma("kunai", "arma blanca", 99, 5, "m", "", "kunai", "");
const estiletes = new Arma("par de estiletes de color dorado", "arma blanca", 127, 5, "m", "", "pair of golden stilettos", "");
const espadaEsgrima = new Arma("espada de esgrima", "espada", 90, 2, "f", "", "fencing sword", "");
const escopeta = new Arma("escopeta", "pistola", 487, 2, "f", "", "shotgun", "");
const agujas = new Arma("agujas", "arma blanca", 50, 10, "f", "p", "needles", "p");
// const soulEdge = new Arma("Soul Edge", "espada", 200, 4, "f", "");
const serrucho = new Arma("serrucho", "serrucho", 90, 3, "m", "", "handsaw", "");
const porra = new Arma("porra de policía", "porra de policía", 90, 6, "f", "", "police baton", "");
// const kusarigama = new Arma("kusarigama", "kusarigama", 112, 7, "f", "");
// const alabarda = new Arma("alabarda", "espada", 109, 4, "f", "");
const tijeras = new Arma("tijeras", "tijeras", 25, 2, "f", "p", "scissors", "p");
// const espadaTijera = new Arma("espada tijera color rojo", "espada", 350, 4, "f", "");
const globoConfeti = new Arma("globo con confeti", "globo con confeti", 3, 1, "m", "", "balloon with confetti", "");
// const senketsu = new Arma("Senketsu", "senketsu", 500, 3, "m", "");
const escoba = new Arma("escoba", "escoba", 75, 4, "f", "", "broom", "");
const plumaDeAve = new Arma("pluma de ave", "plumaDeAve", 1, 1, "f", "", "bird feather", "");
const taser = new Arma("taser", "taser", 90, 5, "m", "", "taser", "");
// const tetaDePlastico = new Arma("teta de plástico", "teta de plástico", 10, 2, "f", "");
// const jeringuillaConVirus = new Arma("jeringuilla con un virus", "jeringuilla", 199, 1, "f", "");
// const testEmbarazo = new Arma("test de embarazo", "test de embarazo", 30, 1, "m", "");
// const carnetConducir = new Arma("carnet de conducir", "carnet de conducir", 2, 1, "m", "");
const misil = new Arma("misil", "misil", 777, 1, "m", "", "missile", "");
const abanico = new Arma("abanico", "abanico", 19, 3, "m", "", "hand fan", "");
const ganzuas = new Arma("ganzúas", "ganzúas", 62, 5, "f", "p", "lockpicks", "p");
const tijerasJardineria = new Arma("tijeras de jardinería", "tijeras de jardineria", 89, 6, "f", "p", "gardening shears", "p");
const craneo = new Arma("cráneo humano", "cráneo humano", 72, 2, "m", "", "human skull", "");
const tenedor = new Arma("tenedor", "tenedor", 20, 4, "m", "", "fork", "");
const repelenteTiburones = new Arma("repelente de tiburones", "repelente de tiburones", 90, 2, "m", "", "shark repellent", "");
const bumeran = new Arma("bumeran", "bumeran", 62, 6, "m", "", "boomerang", "");
const huevo = new Arma("huevo", "huevo", 27, 1, "m", "", "egg", "");
// const taco = new Arma("taco", "taco", 11, 1, "m", "");
const tacoPool = new Arma("taco de pool", "taco de pool", 72, 3, "m", "", "pool cue", "");
const estaca = new Arma("estaca de madera", "arma blanca", 70, 2, "f", "", "wooden stake", "");
const cuerda = new Arma("cuerda", "cuerda", 30, 3, "f", "", "rope", "");
const martillo = new Arma("martillo", "martillo", 100, 5, "m", "", "hammer", "");
const machete = new Arma("machete", "arma blanca", 225, 4, "m", "", "machete", "");
const paloGolf = new Arma("palo de golf", "palo de golf", 72, 3, "m", "", "golf club", "");
const punial = new Arma("puñal", "arma blanca", 125, 5, "m", "", "dagger", "");
const linterna = new Arma("linterna", "linterna", 12, 2, "f", "", "flashlight", "");
const palillos = new Arma("palillos chinos", "palillos chinos", 51, 1, "m", "p", "chopsticks", "p");
const excalibur = new Arma("Excalibur", "espada", 415, 2, "f", "", "Excalibur", "p");
// const pizzaconpina = new Arma("pizza con piña", "pizza con piña", 4, 1, "f", "");
const pistolaBengalas = new Arma("pistola de bengalas", "pistola", 230, 3, "f", "", "flare gun", "");
const pistolaPesada = new Arma("pistola pesada", "pistola", 400, 2, "f", "", "heavy gun", "");
const subfusil = new Arma("subfusil", "pistola", 275, 5, "m", "", "submachine gun", "");
const fusilAsalto = new Arma("fusil de asalto", "pistola", 290, 5, "m", "", "assault rifle", "");
const ametralladora = new Arma("ametralladora", "pistola", 190, 8, "f", "", "machine gun", "");
const rifle = new Arma("rifle", "pistola", 510, 2, "m", "", "rifle", "");
const francotirador = new Arma("fusil de francotirador", "pistola", 750, 2, "m", "", "sniper", "");
const mosquete = new Arma("mosquete", "pistola", 80, 2, "m", "", "musket", "");
const lanzagranadas = new Arma("lanzagranadas", "lanzagranadas", 700, 2, "m", "", "grenade launcher", "");
const minigun = new Arma("minigun", "pistola", 475, 3, "f", "", "minigun", "");
const canion = new Arma("cañón", "canion", 623, 1, "m", "", "cannon", "");
const gasLacrimogeno = new Arma("gas lacrimógeno", "gas lacrimogeno", 80, 4, "m", "", "tear gas", "");
// const nerf = new Arma("NERF", "pistola", 55, 4, "f", "", "NERF");
// const cucco = new Arma("cucco", "cucco", 40, 2, "m", "");
// const redQueen = new Arma("espada Red Queen", "espada", 345, 3, "f", "");
const aspaVentilador = new Arma("aspa de ventilador", "aspa de ventilador", 100, 2, "m", "", "fan blade", "p");
const rama = new Arma("rama", "rama", 30, 3, "f", "", "branch", "");
const cadenas = new Arma("cadenas", "cadenas", 120, 2, "f", "p", "chains", "p");
const esposas = new Arma("esposas", "esposas", 20, 3, "f", "p", "handcuffs", "p");
const ringBlade = new Arma("ring blade", "ring blade", 195, 5, "f", "", "ring blade", "");
// const espadaOndulada = new Arma("espada ondulada", "espada", 223, 5, "f", "");
const plumero = new Arma("plumero", "plumero", 40, 3, "m", "", "duster", "");
const aspiradora = new Arma("aspiradora", "aspiradora", 170, 2, "f", "", "vacuum cleaner", "");
// const iPhone13 = new Arma("iPhone 13", "iPhone 13", 16, 1, "m", "");
// const crucifijo = new Arma("crucifijo", "crucifijo", 5, 10, "m", "");
const bolaBoliche = new Arma("bola de boliche", "bola de boliche", 70, 2, "f", "", "bowling ball", "");
// const terranator = new Arma("Terranator", "terranator", 183, 2, "m", "");
const microfono = new Arma("micrófono", "micrófono", 60, 3, "m", "", "microphone", "");
// const ps5 = new Arma("PS5", "ps5", 71, 1, "f", "");
const chancla = new Arma("chancla", "chancla", 640, 2, "f", "", "flip-flop", "");
const cinturon = new Arma("cinturón", "cinturón", 99, 5, "m", "", "belt", "");
const caniaPescar = new Arma("caña de pescar", "cania", 50, 2, "f", "", "fishing rod", "");
const rolloPapel = new Arma("rollo de papel higiénico", "rollo de papel higiénico", 2, 1, "m", "", "roll of toilet paper", "");
// const fazerblaster = new Arma("fazerblaster", "fazerblaster", 30, 3, "m", "");
const boina = new Arma("boina con cuchillas", "boina con cuchillas", 88, 7, "f", "", "newsboy cap with razor blades", "");
const resorte = new Arma("resorte", "resorte", 20, 5, "m", "", "spring", "");
const dentadura = new Arma("dentadura", "dentadura", 8, 2, "f", "", "dentures", "p");
const piernaProtesica = new Arma("pierna protésica", "pierna", 100, 2, "f", "", "prosthetic leg", "");
const teclado = new Arma("teclado gamer", "gaymer", 52, 2, "m", "", "gamer keyboard", "");
const fundaCelular = new Arma("funda de celular", "funda de celular", 10, 5, "f", "", "phone case", "");
const lupa = new Arma("lupa", "lupa", 12, 1, "f", "", "magnifying glass", "");
const banjo = new Arma("banjo", "rompibles", 130, 3, "m", "", "banjo", "");
const telescopio = new Arma("telescopio", "telescopio", 121, 1, "m", "", "telescope", "");
const bongos = new Arma("bongos", "rompibles", 100, 4, "m", "p", "bongos", "p");
const ak47 = new Arma("AK-47", "pistola", 190, 7, "f", "", "AK-47", "");
const tarjetaCredito = new Arma("tarjeta de crédito", "tarjeta", 3, 1, "f", "", "credit card", "");
// const minaProximidad = new Arma("mina de proximidad", "explosivos", 250, 1, "f", "");
const tentaculo = new Arma("tentáculo de pulpo", "tentaculo", 18, 1, "m", "", "octopus tentacle", "");
const tnt = new Arma("TNT", "explosivos", 300, 1, "m", "", "TNT", "p");
const lanzaVenenosa = new Arma("lanza venenosa", "veneno", 189, 2, "f", "", "poisonous spear", "");
const ladrillo = new Arma("ladrillo", "ladrillo", 150, 2, "m", "", "brick", "");
const nokia3300 = new Arma("nokia 3300", "nokia", 999, 1, "m", "", "nokia 3300", "");
const colmena = new Arma("colmena", "colmena", 60, 2, "f", "", "beehive", "");
// const ppp = new Arma("poderosa pimienta peruana", "poderosa pimienta peruana", 100, 3, "f", "");
// const manifesto = new Arma("Manifiesto comunista", "manifesto", 27, 3, "m", "");
// const frf2 = new Arma("sniper FR F2", "pistola", 360, 2, "m", "");
// const oniball = new Arma("oniball", "oniball", 89, 6, "f", "");
// const banhammer = new Arma("banhammer", "banhammer", 150, 6, "m", "");
// const lancer = new Arma("lancer de gears of war", "pistola", 120, 2, "m", "");
// const purh2 = new Arma("PGM Ultima Ratio Hecate II", "pistola", 520, 1, "m", "");
// const nambre = new Arma("nambre", "nambre", 45, 2, "m", "");
// const zweihander = new Arma("Zweihander", "espada", 235, 4, "f", "");
const lanzallamas = new Arma("lanzallamas", "lanzallamas", 150, 2, "m", "", "flamethrower", "");
// const viejaConfiable = new Arma("vieja confiable", "vieja", 470, 1, "f", "");
const pepino = new Arma("pepino", "pepino", 35, 3, "m", "", "cucumber", "");
const empanada = new Arma("empanada", "empanada", 100, 5, "f", "", "empanada", "");
const prensa = new Arma("prensa hidráulica", "prensa", 325, 5, "f", "", "hydraulic press", "");
const fotocopiadora = new Arma("fotocopiadora", "fotocopiadora", 112, 1, "f", "", "photocopier", "");
const uchigatana = new Arma("uchigatana", "espada", 140, 3, "f", "", "uchigatana", "");
const tableta = new Arma("tableta de dibujo", "tableta", 31, 8, "f", "", "drawing tablet", "");
// const contrato = new Arma("Contrato Virtuoso", "espada", 140, 3, "f", "");
// const zanpakuto = new Arma("Zanpakuto", "espada", 250, 3, "f", "");
// const claymore = new Arma("claymore", "espada", 200, 2, "m", "");
const masamune = new Arma("Masamune", "espada", 363, 1, "f", "", "Masamune", "");
const espadaTiempo = new Arma("Espada del Tiempo", "espada", 150, 3, "f", "", "Weather Sword", "");
// const figuraAnime = new Arma("figura de anime", "figura de anime", 40, 3, "f", "");
// const hojasAzzinoth = new Arma("hojas gemelas de Azzinoth", "gemelas", 182, 6, "f", "p");
// const frostmourne = new Arma("Frostmourne", "espada", 165, 3, "f", "");
const espadaFuego = new Arma("espada de fuego", "espada", 150, 3, "f", "", "fire sword", "");
// const riosDeSangre = new Arma("espada Ríos de Sangre", "espada", 200, 3, "f", "");
// const chun = new Arma("chunchunmaru", "espada", 200, 2, "f", "");
// const m4a1 = new Arma("M4A1", "pistola", 245, 6, "f", "");
const escopetaDoble = new Arma("escopeta de doble cañón", "pistola", 535, 4, "f", "", "double-barreled shotgun", "");
// const dragonSlayer = new Arma("dragon slayer", "espada", 300, 2, "f", "");
// const cetroMegumin = new Arma("cetro de Megumin", "megumin", 100, 5, "m", "");
// const manipuladorCampos = new Arma("manipulador de campos de energía oscura", "manipulador", 275, 2, "m", "");
// const makoKatana = new Arma("Mako Katana", "espada", 150, 3, "f", "");
// const kokoroWatari = new Arma("Kokoro Watari", "espada", 245, 2, "f", "");
const hanJian = new Arma("espada Han Jian", "espada", 132, 4, "f", "", "Han Jian sword", "");
// const dominator = new Arma("Dominator", "pistola", 200, 2, "f", "");
// const emperor = new Arma("Emperor", "pistola", 279, 4, "f", "");
// const cetroChitauri = new Arma("cetro chitauri", "chitauri", 165, 2, "m", "");
const pelota = new Arma("pelota de fulbo", "pelota de fulbo", 85, 3, "f", "", "soccer ball", "");
const mancuerna = new Arma("mancuerna", "mancuerna", 120, 2, "f", "", "dumbbell", "");
const caneria = new Arma("cañería", "", 72, 3, "f", "", "pipe", "");
const tuboPVC = new Arma("tubo de PVC", "", 35, 2, "m", "", "PVC pipe", "");

//armas esteticas (no se guardan en el player)
// const bigote = new Arma("bigote falso", "", 0, 1, "m", "");
// const gorrito = new Arma("gorrito de lana", "", 0, 1, "m", "");
// const rei = new Arma("Rei chiquita", "", 0, 1, "f", "");
// const sombrero = new Arma("sombrero mexicano", "", 0, 1, "m", "");
// const corona = new Arma("corona", "", 0, 1, "f", "");
// const trajeFurro = new Arma("traje de furro", "", 0, 1, "m", "");
// const pokeplatino = new Arma("copia del pokemon platino", "", 0, 1, "f", "");
// const fumo = new Arma("fumo", "", 0, 1, "m", "");

var armas = [pistola, granada, guitarra, alfiler, martilloThor, bomba, bate, estrellasNinja, cuchillo, navaja,
  tirachinas, molotov, roca, trozoCristal, granadaFruta, lanza, punioAmericano, latigo, revolver, gasPimienta, banana, plantaVenenosa,
  espadaMadera, guadania, azada, tridente, lapiz, ballesta, dardosVenenosos, encendedor, pescado, lanzacohetes,
  nokia1100, espadaIron, espadaOro, ramoDeFlores, arcoYFlechas, libroMatematicas, manzana,
  fuegosArtificiales, skate, motosierra, panDuro, nunchaku, cuboRubik, kunai, estiletes, espadaEsgrima, escopeta,
  agujas, serrucho, porra, tijeras, globoConfeti, escoba, plumaDeAve, taser,
  misil, abanico, ganzuas, tijerasJardineria, craneo, tenedor, repelenteTiburones, bumeran, huevo, tacoPool, estaca, cuerda, martillo, machete, paloGolf, punial,
  linterna, palillos, excalibur, pistolaBengalas, pistolaPesada, subfusil, fusilAsalto, ametralladora, rifle, francotirador, mosquete, lanzagranadas, minigun, canion,
  gasLacrimogeno, aspaVentilador, rama, cadenas, esposas, ringBlade, plumero, aspiradora, bolaBoliche, microfono,
  chancla, cinturon, caniaPescar, rolloPapel, boina, resorte, dentadura, piernaProtesica, teclado, fundaCelular, lupa, banjo, telescopio, bongos, ak47, tarjetaCredito,
  tentaculo, tnt, lanzaVenenosa, ladrillo, nokia3300, colmena, lanzallamas, pepino,
  empanada, prensa, fotocopiadora, uchigatana, tableta, masamune, espadaTiempo, espadaFuego,
  escopetaDoble, hanJian, pelota, mancuerna, caneria, tuboPVC];


//                               (nombre, url foto)
const johnCena = new JugadorFake("John Cena", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/jc512.png");
const laRoca = new JugadorFake("La Roca", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/thrck.png");
const ibai = new JugadorFake("ibai", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/ibai.png");
const messi = new JugadorFake("Lio Messi", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/messi.png");
const freddy = new JugadorFake("Freddy Fazbear", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/freddy.png");
const bts = new JugadorFake("BTS", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/bts.png");
const bowser = new JugadorFake("Bowser", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/bowser.png");
const kim = new JugadorFake("Kim Jong-Un", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/kim.png");
const unRandom = new JugadorFake("un random", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/unRandom.png");
const spiderman = new JugadorFake("Spiderman", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/spiderman.png");
const chayanne = new JugadorFake("Chayanne", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/chayanne.png");
const shrek = new JugadorFake("Shrek", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/shrek.png");
const nicage = new JugadorFake("Nicolas Cage", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/nicage.png");
const keanu = new JugadorFake("Keanu Reeves", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/keanu.png");
const knuckles = new JugadorFake("Ugandan Knuckles", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/ugandanknuckles.png");
const terminator = new JugadorFake("Terminator", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/terminator.png");
const dios = new JugadorFake("Dios", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/dios.png");
const unCarpincho = new JugadorFake("un carpincho", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/unCarpincho.png");
const elmo = new JugadorFake("Elmo", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/elmo.png");
const batman = new JugadorFake("Batman", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/batman.png");
const yoda = new JugadorFake("Yoda", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/yoda.png");
const babyYoda = new JugadorFake("Baby Yoda", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/babyyoda.png");
const tonyStark = new JugadorFake("Tony Stark", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/tonystark.png");
const unMinion = new JugadorFake("un Minion", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/unminion.png");
const groot = new JugadorFake("Groot", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/groot.png");
const darthVader = new JugadorFake("Darth Vader", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/darthvader.png");
const elBromas = new JugadorFake("El Bromas", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/elbromas.png");
const saitama = new JugadorFake("Saitama", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/saitama.png");
const winniepooh = new JugadorFake("Winnie Pooh", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/winnietheppoh.png");
const gollum = new JugadorFake("Gollum", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/gollum.png");
const powerRangers = new JugadorFake("Los Power Rangers", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/powerrangers.png");
const bobEsponja = new JugadorFake("Bob Esponja", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/bobesponja.png");
const elvis = new JugadorFake("Elvis Presley", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/elvis.png");
const jackSparrow = new JugadorFake("Jack Sparrow", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/sparrow.png");
const gandalf = new JugadorFake("Gandalf", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/gandalf.png");
const walterWhite = new JugadorFake("Walter White", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/walterwhite.png");
const matt = new JugadorFake("Matt", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/matt.png");
const unOni = new JugadorFake("un oni", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/unoni.png");
const masamuneJug = new JugadorFake("Masamune", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/masamune.png");
const frozono = new JugadorFake("Frozono", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/frozono.png");
const mesi = new JugadorFake("mesi", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/mesi.png");
const dehecho = new JugadorFake("De hecho,", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/dehecho.png");
const maurisio = new JugadorFake("maurisio", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/maurisio.png");
const johnLemon = new JugadorFake("John Lemon", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/johnlemon.png");
const njug = new JugadorFake("n", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/npic.png");
const serval = new JugadorFake("Serval", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/serval.png");
const floppa = new JugadorFake("Floppa", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/floppa.png");
const julioprofe = new JugadorFake("Julioprofe", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/julioprofe.png");
const patron = new JugadorFake("patron", "https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/patron.png")

var jugadoresFake = [johnCena, laRoca, ibai, messi, freddy, bts, bowser, kim, unRandom, spiderman, chayanne, shrek, nicage,
  keanu, knuckles, terminator, dios, unCarpincho, elmo, batman, yoda, babyYoda, tonyStark, unMinion,
  groot, darthVader, elBromas, saitama, winniepooh, gollum, powerRangers, bobEsponja, elvis, jackSparrow,
  gandalf, walterWhite, matt, unOni, masamuneJug, frozono, mesi, dehecho, maurisio, johnLemon, njug,
  serval, floppa, julioprofe, patron];



export function VerifyDiscordRequest(clientKey) {
  return function (req, res, buf, encoding) {
    const signature = req.get('X-Signature-Ed25519');
    const timestamp = req.get('X-Signature-Timestamp');

    const isValidRequest = verifyKey(buf, signature, timestamp, clientKey);
    if (!isValidRequest) {
      res.status(401).send('Bad request signature');
      throw new Error('Bad request signature');
    }
  };
}

export async function DiscordRequest(endpoint, options) {
  // append endpoint to root API URL
  const url = 'https://discord.com/api/v10/' + endpoint;
  // Stringify payloads
  if (options.body) options.body = JSON.stringify(options.body);
  // Use node-fetch to make requests
  const res = await fetch(url, {
    headers: {
      Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
      'Content-Type': 'application/json; charset=UTF-8',
      'User-Agent': 'DiscordBot (https://github.com/discord/discord-example-app, 1.0.0)',
    },
    ...options
  });
  // throw API errors
  if (!res.ok) {
    const data = await res.json();
    //console.log(res.status);
    throw new Error(JSON.stringify(data));
  }
  // return original response
  return res;
}

// Simple method that returns a random emoji from list
export function getRandomEmoji() {
  const emojiList = ['😭', '😄', '😌', '🤓', '😎', '😤', '🤖', '😶‍🌫️', '🌏', '📸', '💿', '👋', '🌊', '✨', 'hdp'];
  return emojiList[Math.floor(Math.random() * emojiList.length)];
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}



// funciones del juego //

/*export function limpiarPlayers(players){
  players = [];
}*/

export function calcularVivos(jugadores) {
  let cantConVida = 0;
  let player;
  for (let m = 0; m < jugadores.length; m++) {
    player = jugadores[m];
    if (player.alive == 1) {
      cantConVida++;
    }
  }
  return cantConVida;
}

export function agregarJugador(res, jugador, players) {
  if (!(players.some(j => j.id == jugador.id))) {
    //    if (1){
    players.push(jugador);
    return 1;
  } else {
    return 0;
  }
};

export function funcionEventos(gameState) {
  let arrayEventos = [1, 2, 3, -1];
  let resultado = arrayEventos[gameState.contador];
  gameState.contador++;
  return resultado;
}

export function createObject(evento, names, id, foto, hp, danio, extra) {
  const json = {
    evento: evento,
    names: names,
    id: id,
    foto: foto,
    hp: hp,
    danioRecibido: danio,
    extra: extra
  }
  return json
}

export function exampleEmbed(channel) {
  //0x0099FF
  const exampleEmbed = new EmbedBuilder()
    .setColor(randomHexColor())
    .setTitle('Some title')
    .setURL('https://discord.js.org/')
    .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
    .setDescription('Some description here')
    .setThumbnail('https://i.imgur.com/AfFp7pu.png')
    .addFields(
      { name: 'Regular field title', value: "<:peekliz:977705940319096854>" },
      { name: '\u200B', value: '\u200B' },
      { name: 'Inline field title', value: 'Some value here', inline: true },
      { name: 'Inline field title', value: 'Some value here', inline: true },
    )
    .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
    .setImage('https://i.imgur.com/AfFp7pu.png')
    .setTimestamp()
    .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

  channel.send({ embeds: [exampleEmbed] });
}

export function funcionRetornaJson(gameState) {
  const json = {
    evento: "Prueba desde JSON", //string principal
    names: ["john", "willy", "rex"],  //lista de nombres que están en el evento, array
    id: [1234, 4321, 666],      //ids correspondientes en el orden, array
    foto: ["link1", "link2", "link3"],    //foto en el orden, array
    hp: ["90", "10", "40"],               //hp en orden, array
    danio: ["10", "0", "0"],              //daño que van a hacer en el evento (o healing si es menors a 0), array               //SI NO ES UN EVENTO DE COMBATE; ENTONCES DANIO ES VACIO ["","",""]
    extra: "ninguno",
    danioRecibido: ["0", "0", "280"],
  };

  if (gameState.contador === 0) {
    gameState.contador++;
    return json;
  }
  else {
    return -1;
  }
}

export function reiniciarContador(gameState) {
  gameState.contador = 0;
}

export function limpiarTeams(teams) {
  teams.length = 0;
  //console.log("Limpiando teams...");
}

export function reiniciarJugadoresFake() {
  let jugador;
  for (let i = 0; i < jugadoresFake.length; i++) {
    jugador = jugadoresFake[i];
    jugador.yaUnido = 0;
  }
  //console.log('Reiniciando jugadores fake...')
}


export function randomHexColor() {
  var letters = "0123456789ABCDEF";

  // html color code starts with #
  var color = '#';

  // generating 6 times as HTML color code consist
  // of 6 letter or digits
  for (var i = 0; i < 6; i++)
    color += letters[(Math.floor(Math.random() * 16))];
  var hex = parseInt(color.replace(/^#/, ''), 16);

  return hex;
}

export function mostrarEvento1(resultado) {

  if (resultado != -1) { return `Soy el evento ${resultado}`; }
  else { return `Terminó la partida.` }
  //esta funcion mostraria el(los) console log que detallan qué sucede en el evento
  //cosa que probablemente despues la reciba por parametro como un json
  //y con eso haría un res.send ... para mostrarlo en un mensaje en discord
}

export function get_line(line_no, callback) {
  var data = fs.readFileSync('./hg/archivos/adjetivos.txt', 'utf8');
  var lines = data.split("\n");

  if (+line_no > lines.length) {
    throw new Error('File end reached without finding line');
  }

  callback(null, lines[+line_no]);
}

export function get_food(line_no, callback) {
  var data = fs.readFileSync('./hg/archivos/comidas.txt', 'utf8');
  var lines = data.split("\n");

  if (+line_no > lines.length) {
    throw new Error('File end reached without finding line');
  }

  callback(null, lines[+line_no]);
}

export async function get_lineOfFile(line_no, callback, fileName) {
  var data = fs.readFileSync(`./hg/archivos/${fileName}`, 'utf8');
  var lines = data.split("\n");

  if (+line_no > lines.length) {
    throw new Error('File end reached without finding line');
  }

  callback(null, lines[+line_no]);
}

export function leerArchivoDevolverLinea(linea) {
  var adjetivosFile = './hg/adjetivos.txt';
  var leido = "";

  /*   var r = readline.createInterface({
       input : fs.createReadStream(adjetivosFile)
   });
   r.on('line', function (text) {
   //console.log(text);
   return text;
   });*/

  nthline(linea, adjetivosFile)
    .then(line => leido = line)

  //console.log(leido);
  return leido;
}

export let generarArma = () => {
  var rand = parseInt(Math.random() * armas.length);
  ////console.log(`%c${JSON.stringify(armas[rand])}`,"color:orange");

  //return armas[rand];
  return JSON.parse(JSON.stringify(armas[rand]));
}

export function mostrarEvento(req, resultado, channel) {
  //ahora resultado es un json con arrays
  if (resultado != -1) {
    let a = resultado.evento();

    //crearImagen(req,resultado,channel);     descomentar despues

    return a;

  }

  else { return `Terminó la partida.` }
}

export function contarAtacantes(arrayLugares) {
  let contador = 0;
  for (let element of arrayLugares) {
    if (element == "Atacante") {
      contador++;
    }
  };
  return contador;
}

export function encontrarGanador(jugadores) {
  let ganador;
  for (let i = 0; i < jugadores.length; i++) {
    ganador = jugadores[i];
    if (ganador.alive == 1) { return ganador };
  }
  return null;
}

let randomFondo = () => {
  let fondos = ['https://i.imgur.com/xtHFP7O.png', //1
    'https://i.imgur.com/Cyov2n5.png', //2
    'https://i.imgur.com/KvrFcHD.png', //3
    'https://i.imgur.com/JWkeImg.png', //4
    'https://i.imgur.com/FM9eG84.png', //5
    'https://i.imgur.com/GXVKy4J.png', //6
    'https://i.imgur.com/UkZL0No.png', //7
    'https://i.imgur.com/3ELcvAR.png', //8
    'https://i.imgur.com/5Hrt7CF.png', //9
    'https://i.imgur.com/4RlbJZr.png', //10
    'https://i.imgur.com/nYs9zz1.png', //11
    'https://i.imgur.com/WuuZiVk.png', //12
    'https://i.imgur.com/E0QA4zD.png', //13
    'https://i.imgur.com/dzuPonQ.png', //14
    'https://i.imgur.com/1VdpFZk.png', //15
    'https://i.imgur.com/a1w5R3r.png', //16
  ]
  let fondosHalloween = [
    'https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/fondoHalloween1.png?v=1698703587696',
    'https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/fondoHalloween2.png?v=1698703658698',
    'https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/fondoHalloween3.png?v=1698703661751',
    'https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/fondoHalloween4.png?v=1698703666322',
    'https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/fondoHalloween5.png?v=1698703670253',
  ]

  let fondosChoosen = fondos; //solo cambiar aqui

  let choosen = randomSelector(0, fondosChoosen.length - 1);

  return fondosChoosen[choosen];
}

export async function cargarAvatar(foto, id, tieneOtraFoto, guild, players) {
  let cliente = returnClient();
  let jugador = null;
  let guildMember = null;

  if (id.length >= 5) {
    try {
      guildMember = await cliente.guilds.cache.get(guild).members.fetch(id);
    } catch (err) {
      // Error: user not found in guild
      console.warn(`Could not fetch member ${id}:`, err);
      return await loadImage(`https://cdn.discordapp.com/embed/avatars/0.png?size=1024`);
    }

    // re-verificar el avatar por si cambió en mitad de la partida
    if (guildMember.user.avatar != null) {
      if (guildMember.avatar != null) {
        jugador = buscarPorID(id, players);
        if (jugador) jugador.setFoto(guildMember.avatar);
        jugador.tieneOtraFoto = 1;
      } else {
        jugador = buscarPorID(id, players);
        if (jugador) jugador.setFoto(guildMember.user.avatar);
      }
    } else {
      //si tiene discriminador 0, es que ya migro al username nuevo
      if (guildMember.user.discriminator == 0) {  //esto despues va a cambiar porque lo van a quitar el 0
        let user_id = BigInt(guildMember.user.id);
        let avatar = ((user_id >> 22n) % 6n).toString();

        jugador = buscarPorID(id, players);
        if (jugador) jugador.setFoto(avatar);
        //sino, tiene username viejo con discriminador de 4 digitos
      } else {
        let lastNumber = (guildMember.user.discriminator).slice(-1);
        lastNumber = (parseInt(lastNumber) % 5).toString();
        jugador = buscarPorID(id, players);
        if (jugador) jugador.setFoto(lastNumber);
      }
    }
  }

  let imageUrl;
  if (id.length < 5) {
    //jugador fakes
    imageUrl = `${foto}?size=1024`;
  } else {
    if (foto.length == 1) {
      imageUrl = `https://cdn.discordapp.com/embed/avatars/${jugador.getFoto()}.png?size=1024`;
    } else if (tieneOtraFoto != null) {
      imageUrl = `https://cdn.discordapp.com/guilds/${guild}/users/${id}/avatars/${jugador.getFoto()}.png?size=1024`;
    } else {
      imageUrl = `https://cdn.discordapp.com/avatars/${id}/${jugador.getFoto()}.png?size=1024`;
    }
  }

  try {
    return await loadImage(imageUrl);
  } catch (err) {
    console.error(`Failed to load avatar for user ${id}:`, imageUrl, err);

    // Fallback to Discord's generic avatar
    try {
      return await loadImage(
        `https://cdn.discordapp.com/embed/avatars/0.png?size=1024`
      );
    } catch (fallbackErr) {
      console.error('Failed to load fallback avatar:', fallbackErr);
      throw fallbackErr;
    }
  }
}

export function cantidadArmas() {
  return armas.length;
}

async function dibujarTeam(canvas, context, team, offsetX, offsetY, guild, players) {
  let player;
  let id;
  let foto;
  let name;
  let avatar;
  ////console.log(team);

  //fondo azul
  const halloweenColor = '#c34a07';
  const classicColor = '#414E5E';
  context.fillStyle = classicColor;
  context.fillRect(offsetX - 15, offsetY - 47, 204, 231);

  //name
  if (team.getName() == null) {
    name = `Team ${team.getID()}`;
  } else {
    name = `${team.getName()}`;
  }
  context.font = betterApplyText(canvas, name, 24, 173);;
  context.fillStyle = '#FFFFFF';
  context.fillText(name, offsetX, offsetY - 6 - 12);



  if (team.getPlayer2() == null && team.getPlayer3() == null) {  //team de 1
    player = team.getPlayer1();
    id = player.getID();
    foto = player.getFoto();

    //avatar
    avatar = await cargarAvatar(foto, id, player.getTieneOtraFoto(), guild, players);
    context.drawImage(avatar, offsetX, offsetY, 80, 80);

    //cuadro rojo si murió
    if (player.getAlive() != 1) {
      context.beginPath();
      context.rect(offsetX - 4, offsetY - 4, 88, 88);
      context.fillStyle = 'rgba(236,28,36,0.5)';
      context.fill();
    }
  }

  if (team.getPlayer2() != null && team.getPlayer3() == null) {  //team de 2
    //player1
    player = team.getPlayer1();
    id = player.getID();
    foto = player.getFoto();

    //avatar
    avatar = await cargarAvatar(foto, id, player.getTieneOtraFoto(), guild, players);
    context.drawImage(avatar, offsetX, offsetY, 80, 80);

    //cuadro rojo si murió
    if (player.getAlive() != 1) {
      context.beginPath();
      context.rect(offsetX - 4, offsetY - 4, 88, 88);
      context.fillStyle = 'rgba(236,28,36,0.5)';
      context.fill();
    }

    //player2
    player = team.getPlayer2();
    id = player.getID();
    foto = player.getFoto();

    //avatar
    avatar = await cargarAvatar(foto, id, player.getTieneOtraFoto(), guild, players);
    context.drawImage(avatar, offsetX + 80 + 14, offsetY, 80, 80);

    //cuadro rojo si murió
    if (player.getAlive() != 1) {
      context.beginPath();
      context.rect(offsetX + 80 + 14 - 4, offsetY - 4, 88, 88);
      context.fillStyle = 'rgba(236,28,36,0.5)';
      context.fill();
    }
  }

  if (team.getPlayer2() != null && team.getPlayer3() != null) {  //team de 3
    //player1
    player = team.getPlayer1();
    id = player.getID();
    foto = player.getFoto();

    //avatar
    avatar = await cargarAvatar(foto, id, player.getTieneOtraFoto(), guild, players);
    context.drawImage(avatar, offsetX, offsetY, 80, 80);

    //cuadro rojo si murió
    if (player.getAlive() != 1) {
      context.beginPath();
      context.rect(offsetX - 4, offsetY - 4, 88, 88);
      context.fillStyle = 'rgba(236,28,36,0.5)';
      context.fill();
    }

    //player2
    player = team.getPlayer2();
    id = player.getID();
    foto = player.getFoto();

    //avatar
    avatar = await cargarAvatar(foto, id, player.getTieneOtraFoto(), guild, players);
    context.drawImage(avatar, offsetX + 80 + 14, offsetY, 80, 80);

    //cuadro rojo si murió
    if (player.getAlive() != 1) {
      context.beginPath();
      context.rect(offsetX + 80 + 14 - 4, offsetY - 4, 88, 88);
      context.fillStyle = 'rgba(236,28,36,0.5)';
      context.fill();
    }

    //player3
    player = team.getPlayer3();
    id = player.getID();
    foto = player.getFoto();

    //avatar
    avatar = await cargarAvatar(foto, id, player.getTieneOtraFoto(), guild, players);
    context.drawImage(avatar, offsetX + 40 + 7, offsetY + 80 + 11, 80, 80);

    //cuadro rojo si murió
    if (player.getAlive() != 1) {
      context.beginPath();
      context.rect(offsetX + 40 + 7 - 4, offsetY + 80 + 11 - 4, 88, 88);
      context.fillStyle = 'rgba(236,28,36,0.5)';
      context.fill();
    }

  }

}

export async function mostrarTeams(channel, guildId, players, teams) {  //pensar funcion matematica que haga la suma sola, en vez de hacer mas ifs
  let canvasHeight = 255;
  let filas = ~~((teams.length - 1) / 5) + 1;
  /*if (teams.length > 1 && teams.length < 6 ){
      canvasHeight = 255;
    }
  if (teams.length > 5 && teams.length < 11 ){
      canvasHeight = 510;
  }
  if (teams.length > 10 && teams.length < 16 ){
      canvasHeight = 765;
  }
  if (teams.length > 15 && teams.length < 21 ){
      canvasHeight = 1020;
  }
  if (teams.length > 20 && teams.length < 26 ){
      canvasHeight = 1275;
  }  
  if (teams.length > 25 && teams.length < 31 ){
      canvasHeight = 1530;
  }   */
  canvasHeight = 255 * filas;
  //GlobalFonts.registerFromPath(join(__dirname, '..', 'fonts', 'AppleColorEmoji@2x.ttf'), 'Apple Emoji');
  //GlobalFonts.registerFromPath('/ARIAL.ttf', 'Typographica');
  //GlobalFonts.registerFromPath(join(__dirname, '..', 'fonts', 'https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/TypoGraphica.otf'), 'Typographica');
  //GlobalFonts.register_from_path('/ARIAL.ttf', 'Typographica');

  const canvas = createCanvas(1107, canvasHeight);

  const context = canvas.getContext('2d');

  const halloweenColor = '#160260';
  const classicColor = '#1E2C37';

  context.fillStyle = classicColor;

  context.fillRect(0, 0, canvas.width, canvas.height);

  let cantLineas = Math.ceil((teams.length / 5));
  let teamNumber = 0;
  let offsetX = 27;
  let offsetY = 57;

  for (let i = 0; i < cantLineas; i++) {

    for (let j = 0; j < 5; j++) {
      let team = teams[teamNumber];
      ////console.log(team);
      if (team !== undefined) {
        await dibujarTeam(canvas, context, team, offsetX, offsetY, guildId, players);
        teamNumber++;
        offsetX += 220;
      }
    }

    offsetX = 27;
    offsetY += 244;
  }

  /*const background = await Canvas.loadImage('https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/testimg.png?v=1679946476790');
  context.drawImage(background, 0, 0, canvas.width, canvas.height);*/

  let attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'event-image.png' });
  channel.send({ files: [attachment] });
}

async function dibujarJugador(canvas, context, name, id, foto, hp, danioRecibido, avatarSize, offsetX, offsetY, fontSize) {
  GlobalFonts.registerFromPath(
    "./assets/fonts/NotoSans-Regular.ttf",
    "Noto Sans"
  );

  //avatar
  context.drawImage(foto, offsetX, offsetY, avatarSize, avatarSize);

  //nombre
  context.font = (await betterApplyText(canvas, name, fontSize, avatarSize));
  /*var gradient = context.createLinearGradient(offsetX, 0, offsetX+avatarSize, 0);
  gradient.addColorStop(0, "magenta");
  gradient.addColorStop(0.5, "blue");
  gradient.addColorStop(1.0, "purple");
  context.fillStyle = gradient;*/

  const halloweenColor = '#c34a07';
  const classicColor = 'white';
  context.fillStyle = classicColor;

  context.strokeStyle = 'black';

  let nameOffsetX = offsetX;
  let nameOffsetY = offsetY;

  for (const char of Array.from(name)) {
    const code = char.codePointAt(0);

    if (code > 0x1F000) {
      const codeHex = code.toString(16);
      const url = `https://twemoji.maxcdn.com/v/latest/72x72/${codeHex}.png`;

      try {
        const img = await loadImage(url);
        const size = fontSize * 1.1;
        context.drawImage(
          img,
          nameOffsetX,
          nameOffsetY - size + fontSize * 0.15 + 13 + (~~(fontSize / 2)) + avatarSize,
          size,
          size
        );
        nameOffsetX += size * 0.9;
      } catch {
        nameOffsetX += fontSize * 0.6;
      }
    } else {
      context.fillText(char, nameOffsetX, nameOffsetY + 13 + (~~(fontSize / 2)) + avatarSize);
      context.strokeText(char, nameOffsetX, nameOffsetY + 13 + (~~(fontSize / 2)) + avatarSize);
      nameOffsetX += context.measureText(char).width;
    }
  }

  // context.fillText(name, offsetX, offsetY + 13 + (~~(fontSize / 2)) + avatarSize);
  // context.strokeText(name, offsetX, offsetY + 13 + (~~(fontSize / 2)) + avatarSize);

  //hp
  //fondo negro
  context.beginPath();
  context.rect(offsetX, offsetY - 40, avatarSize, 20);
  context.fillStyle = "black";
  context.fill();

  //danio recibido o curado
  if (danioRecibido < 0) {
    context.beginPath();
    context.rect(offsetX, offsetY - 40, Math.max(0, hp * avatarSize / maxHP), 20);
    context.fillStyle = "white";
    context.fill();
  } else {
    context.beginPath();
    context.rect(offsetX, offsetY - 40, Math.max(0, (hp + danioRecibido) * avatarSize / maxHP), 20);
    context.fillStyle = "#FF2727";
    context.fill();
  }

  //hp que le queda luego del evento
  if (danioRecibido < 0) {
    context.beginPath();
    context.rect(offsetX, offsetY - 40, Math.max(0, (hp + danioRecibido) * avatarSize / maxHP), 20);
    context.fillStyle = "#2AB140";
    context.fill();
  } else {
    context.beginPath();
    context.rect(offsetX, offsetY - 40, Math.max(0, (hp) * avatarSize / maxHP), 20);
    context.fillStyle = "#2AB140";
    context.fill();
  }

  //cantidad HP
  /*if(danioRecibido < 0){
    context.font = "16px URW Gothic L";
    context.fillStyle = '#FFFFFF';
    context.fillText(`${hp}`, offsetX+5, offsetY-25);
  }else{
    let hpBaja = hp-danioRecibido;
    context.font = "16px URW Gothic L";
    context.fillStyle = '#FFFFFF';
    context.fillText(`${hpBaja}`, offsetX+5, offsetY-25);      
  }*/
  context.font = "16px URW Gothic L";
  context.fillStyle = '#FFFFFF';
  context.fillText(`${hp}`, offsetX + 5, offsetY - 25);

  //borde  
  context.strokeStyle = "#FFFFFF";
  context.strokeRect(offsetX - 1, offsetY - 41, avatarSize + 2, 22);
}


async function generarImagenEventoCero(fondo) {
  //GlobalFonts.registerFromPath(join(__dirname, '..', 'fonts', 'AppleColorEmoji@2x.ttf'), 'Apple Emoji');
  //GlobalFonts.registerFromPath('./ARIAL.ttf', 'Typographica');
  //GlobalFonts.registerFromPath(join(__dirname, '..', 'fonts', 'https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/TypoGraphica.otf'), 'Typographica');
  //GlobalFonts.register_from_path('/ARIAL.ttf', 'Typographica');
  ////console.log(GlobalFonts.families)  //fuentes

  // Create a 700x250 pixel canvas and get its context
  // The context will be used to modify the canvas
  const canvas = createCanvas(700, 500);
  const context = canvas.getContext('2d');

  //const background = await loadImage('https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/wallpaper.jpg?v=1679546499781');
  const background = await loadImage(fondo);
  context.drawImage(background, 0, 0, canvas.width, canvas.height);

  let attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'event-image.png' });
  //channel.send({ files: [attachment] });
  return attachment;
}

async function generarImagenEvento(json, tipoEvento) {
  //GlobalFonts.registerFromPath(join(__dirname, '..', 'fonts', 'AppleColorEmoji@2x.ttf'), 'Apple Emoji');
  //GlobalFonts.registerFromPath('./ARIAL.ttf', 'Typographica');
  //GlobalFonts.registerFromPath(join(__dirname, '..', 'fonts', 'https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/TypoGraphica.otf'), 'Typographica');
  //GlobalFonts.register_from_path('/ARIAL.ttf', 'Typographica');
  ////console.log(GlobalFonts.families)  //fuentes

  // Create a 700x250 pixel canvas and get its context
  // The context will be used to modify the canvas
  const canvas = createCanvas(700, 500);
  const context = canvas.getContext('2d');

  //const background = await loadImage('https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/wallpaper.jpg?v=1679546499781');
  let fondo = randomFondo();
  const background = await loadImage(fondo);
  context.drawImage(background, 0, 0, canvas.width, canvas.height);

  /* const avatar = await Canvas.loadImage(`https://cdn.discordapp.com/avatars/${json.id[0]}/${json.foto[0]}.png`);
   context.drawImage(avatar, 244, 144, 212, 212);

   //nombre
   context.font = applyText(canvas,json.names[0]),50;
   context.fillStyle = '#000000';
   context.fillText(json.names[0], 244, 144+218);*/

  switch (tipoEvento) {
    case ("0"):
      //await dibujarEvento0(canvas, context, json.evento);
      break;

    case ("1"):
      //const avatar = await Canvas.loadImage(`https://cdn.discordapp.com/avatars/${json.id[0]}/${json.foto[0]}.png`);
      await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 212, 244, 144, 50);
      //para poner un jugador en el canvas, recibe el canvas, el nombre id foto hp y danio recibido del jugador, el tamanio del avatar y el desplazamiento horiz-vertic, y el tamanio del nombre donde se lo quiere poner
      break;

    case ("2"):
      await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 162, 158, 190, 42);
      await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 162, 414, 190, 42);
      break;

    case ("3"):
      await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 158, 88, 38);
      await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 414, 88, 38);
      await dibujarJugador(canvas, context, json.names[2], json.id[2], json.foto[2], json.hp[2], json.danioRecibido[2], 128, 286, 314, 38);
      break;

    case ("1x1"):
      await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 125, 190, 38);
      await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 474, 190, 38);
      break;

    case ("2x1"):
      await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 46, 190, 38);
      await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 200, 190, 38);
      await dibujarJugador(canvas, context, json.names[2], json.id[2], json.foto[2], json.hp[2], json.danioRecibido[2], 128, 493, 190, 38);
      break;

    case ("3x1"):
      await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 56, 91, 38);
      await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 216, 91, 38);
      await dibujarJugador(canvas, context, json.names[2], json.id[2], json.foto[2], json.hp[2], json.danioRecibido[2], 128, 131, 298, 38);
      await dibujarJugador(canvas, context, json.names[3], json.id[3], json.foto[3], json.hp[3], json.danioRecibido[3], 128, 505, 190, 38);
      break;

    case ("1x2"):
      await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 46, 190, 38);
      await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 372, 190, 38);
      await dibujarJugador(canvas, context, json.names[2], json.id[2], json.foto[2], json.hp[2], json.danioRecibido[2], 128, 526, 190, 38);
      break;

    case ("1x3"):
      await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 56, 190, 38);
      await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 376, 91, 38);
      await dibujarJugador(canvas, context, json.names[2], json.id[2], json.foto[2], json.hp[2], json.danioRecibido[2], 128, 536, 91, 38);
      await dibujarJugador(canvas, context, json.names[3], json.id[3], json.foto[3], json.hp[3], json.danioRecibido[3], 128, 451, 298, 38);
      break;

    default:

      break;
  }

  let attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'event-image.png' });
  //channel.send({ files: [attachment] });
  return attachment;
}

async function generarImagenEventoVieja(json, tipoEvento) {
  //GlobalFonts.registerFromPath(join(__dirname, '..', 'fonts', 'AppleColorEmoji@2x.ttf'), 'Apple Emoji');
  //GlobalFonts.registerFromPath('./ARIAL.ttf', 'Typographica');
  //GlobalFonts.registerFromPath(join(__dirname, '..', 'fonts', 'https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/TypoGraphica.otf'), 'Typographica');
  //GlobalFonts.register_from_path('/ARIAL.ttf', 'Typographica');
  ////console.log(GlobalFonts.families)  //fuentes

  // Create a 700x250 pixel canvas and get its context
  // The context will be used to modify the canvas
  const canvas = createCanvas(700, 500);
  const context = canvas.getContext('2d');

  //const background = await loadImage('https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/wallpaper.jpg?v=1679546499781');
  let fondo = randomFondo();
  const background = await loadImage(fondo);
  context.drawImage(background, 0, 0, canvas.width, canvas.height);

  /* const avatar = await Canvas.loadImage(`https://cdn.discordapp.com/avatars/${json.id[0]}/${json.foto[0]}.png`);
   context.drawImage(avatar, 244, 144, 212, 212);

   //nombre
   context.font = applyText(canvas,json.names[0]),50;
   context.fillStyle = '#000000';
   context.fillText(json.names[0], 244, 144+218);*/

  switch (tipoEvento) {
    case ("0"):
      //await dibujarEvento0(canvas, context, json.evento);
      break;

    case ("1"):
      //const avatar = await Canvas.loadImage(`https://cdn.discordapp.com/avatars/${json.id[0]}/${json.foto[0]}.png`);
      await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 212, 244, 144, 50);
      //para poner un jugador en el canvas, recibe el canvas, el nombre id foto hp y danio recibido del jugador, el tamanio del avatar y el desplazamiento horiz-vertic, y el tamanio del nombre donde se lo quiere poner
      break;

    case ("2"):
      await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 162, 158, 190, 42);
      await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 162, 414, 190, 42);
      break;

    case ("3"):
      await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 158, 88, 38);
      await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 414, 88, 38);
      await dibujarJugador(canvas, context, json.names[2], json.id[2], json.foto[2], json.hp[2], json.danioRecibido[2], 128, 286, 314, 38);
      break;

    case ("1x1"):
      if (json.lugares[0] == "Atacante") {
        await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 125, 190, 38);
        await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 474, 190, 38);
      } else {
        await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 125, 190, 38);
        await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 474, 190, 38);
      }
      break;

    case ("2x1"):
      if (json.lugares[0] == "Victima") {
        await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 493, 190, 38);
        await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 46, 190, 38);
        await dibujarJugador(canvas, context, json.names[2], json.id[2], json.foto[2], json.hp[2], json.danioRecibido[2], 128, 200, 190, 38);
      } else if (json.lugares[1] == "Victima") {
        await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 46, 190, 38);
        await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 493, 190, 38);
        await dibujarJugador(canvas, context, json.names[2], json.id[2], json.foto[2], json.hp[2], json.danioRecibido[2], 128, 200, 190, 38);
      } else if (json.lugares[2] == "Victima") {
        await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 46, 190, 38);
        await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 200, 190, 38);
        await dibujarJugador(canvas, context, json.names[2], json.id[2], json.foto[2], json.hp[2], json.danioRecibido[2], 128, 493, 190, 38);
      }
      break;

    case ("3x1"):
      if (json.lugares[0] == "Victima") {
        await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 505, 190, 38);
        await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 56, 91, 38);
        await dibujarJugador(canvas, context, json.names[2], json.id[2], json.foto[2], json.hp[2], json.danioRecibido[2], 128, 216, 91, 38);
        await dibujarJugador(canvas, context, json.names[3], json.id[3], json.foto[3], json.hp[3], json.danioRecibido[3], 128, 131, 298, 38);
      } else if (json.lugares[1] == "Victima") {
        await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 56, 91, 38);
        await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 505, 190, 38);
        await dibujarJugador(canvas, context, json.names[2], json.id[2], json.foto[2], json.hp[2], json.danioRecibido[2], 128, 216, 91, 38);
        await dibujarJugador(canvas, context, json.names[3], json.id[3], json.foto[3], json.hp[3], json.danioRecibido[3], 128, 131, 298, 38);
      } else if (json.lugares[2] == "Victima") {
        await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 56, 91, 38);
        await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 216, 91, 38);
        await dibujarJugador(canvas, context, json.names[2], json.id[2], json.foto[2], json.hp[2], json.danioRecibido[2], 128, 505, 190, 38);
        await dibujarJugador(canvas, context, json.names[3], json.id[3], json.foto[3], json.hp[3], json.danioRecibido[3], 128, 131, 298, 38);
      } else if (json.lugares[3] == "Victima") {
        await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 56, 91, 38);
        await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 216, 91, 38);
        await dibujarJugador(canvas, context, json.names[2], json.id[2], json.foto[2], json.hp[2], json.danioRecibido[2], 128, 131, 298, 38);
        await dibujarJugador(canvas, context, json.names[3], json.id[3], json.foto[3], json.hp[3], json.danioRecibido[3], 128, 505, 190, 38);
      }
      break;

    case ("1x2"):
      if (json.lugares[0] == "Atacante") {
        await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 46, 190, 38);
        await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 372, 190, 38);
        await dibujarJugador(canvas, context, json.names[2], json.id[2], json.foto[2], json.hp[2], json.danioRecibido[2], 128, 526, 190, 38);
      } else if (json.lugares[1] == "Atacante") {
        await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 372, 190, 38);
        await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 46, 190, 38);
        await dibujarJugador(canvas, context, json.names[2], json.id[2], json.foto[2], json.hp[2], json.danioRecibido[2], 128, 526, 190, 38);
      } else if (json.lugares[2] == "Atacante") {
        await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 372, 190, 38);
        await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 526, 190, 38);
        await dibujarJugador(canvas, context, json.names[2], json.id[2], json.foto[2], json.hp[2], json.danioRecibido[2], 128, 46, 190, 38);
      }
      break;

    case ("1x3"):
      if (json.lugares[0] == "Atacante") {
        await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 56, 190, 38);
        await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 376, 91, 38);
        await dibujarJugador(canvas, context, json.names[2], json.id[2], json.foto[2], json.hp[2], json.danioRecibido[2], 128, 536, 91, 38);
        await dibujarJugador(canvas, context, json.names[3], json.id[3], json.foto[3], json.hp[3], json.danioRecibido[3], 128, 451, 298, 38);
      } else if (json.lugares[1] == "Atacante") {
        await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 376, 91, 38);
        await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 56, 190, 38);
        await dibujarJugador(canvas, context, json.names[2], json.id[2], json.foto[2], json.hp[2], json.danioRecibido[2], 128, 536, 91, 38);
        await dibujarJugador(canvas, context, json.names[3], json.id[3], json.foto[3], json.hp[3], json.danioRecibido[3], 128, 451, 298, 38);
      } else if (json.lugares[2] == "Atacante") {
        await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 376, 91, 38);
        await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 536, 91, 38);
        await dibujarJugador(canvas, context, json.names[2], json.id[2], json.foto[2], json.hp[2], json.danioRecibido[2], 128, 56, 190, 38);
        await dibujarJugador(canvas, context, json.names[3], json.id[3], json.foto[3], json.hp[3], json.danioRecibido[3], 128, 451, 298, 38);
      } else if (json.lugares[3] == "Atacante") {
        await dibujarJugador(canvas, context, json.names[0], json.id[0], json.foto[0], json.hp[0], json.danioRecibido[0], 128, 376, 91, 38);
        await dibujarJugador(canvas, context, json.names[1], json.id[1], json.foto[1], json.hp[1], json.danioRecibido[1], 128, 536, 91, 38);
        await dibujarJugador(canvas, context, json.names[2], json.id[2], json.foto[2], json.hp[2], json.danioRecibido[2], 128, 451, 298, 38);
        await dibujarJugador(canvas, context, json.names[3], json.id[3], json.foto[3], json.hp[3], json.danioRecibido[3], 128, 56, 190, 38);
      }
      break;

    default:

      break;
  }

  let attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'event-image.png' });
  //channel.send({ files: [attachment] });
  return attachment;
}

export async function funcionCrearImagenCero(json, channel, fondo) {
  let textosExtra = "";

  //channel.send(`Soy un evento 0`);

  //generar imagen
  let attachment = await generarImagenEventoCero(fondo);

  //generar Color
  let color = randomHexColor();

  //si tiene textos extra, los agrego
  if (json.extra.length > 0) {
    for (let i = 0; i < json.extra.length; i++) {
      let textoIterado = json.extra[i];
      textosExtra = textosExtra.concat(textoIterado);
      textosExtra = textosExtra.concat('\n');
    }
  }

  //enviar
  if (textosExtra != "") {
    channel.send({
      embeds: [new EmbedBuilder()
        .setColor(color)
        .setImage(`attachment://${attachment.name}`),
      new EmbedBuilder()
        .setColor(color)
        .setDescription(`**${json.evento}**\n`)
        //.setDescription(`${textosExtra}`)
        .addFields(
          { name: ' ', value: `${textosExtra}` })
        .setTimestamp()
        .setFooter({ text: 'RobbieBot 2026 — Lynn & Yugito', iconURL: 'https://cdn.top.gg/teams/855310968584753152/3e377abbe4e44f5ef1babbd6f8484e5a387c08cdc4bbb763c6e22a6c0eb1b663.webp' })
      ],
      files: [attachment]
    });
  } else {
    channel.send({
      embeds: [new EmbedBuilder()
        .setColor(color)
        .setImage(`attachment://${attachment.name}`),
      new EmbedBuilder()
        .setColor(color)
        .setDescription(`**${json.evento}**\n`)
        .setTimestamp()
        .setFooter({ text: 'RobbieBot 2026 — Lynn & Yugito', iconURL: 'https://cdn.top.gg/teams/855310968584753152/3e377abbe4e44f5ef1babbd6f8484e5a387c08cdc4bbb763c6e22a6c0eb1b663.webp' })
      ],
      files: [attachment]
    });
  }
}

export async function funcionCrearImagen(json, tipoEvento, channel) {
  let textosExtra = "";

  //channel.send(`Soy un evento ${tipoEvento}`);

  //generar imagen
  let attachment = await generarImagenEvento(json, tipoEvento);

  //generar Color
  let color = randomHexColor();

  //si tiene textos extra, los agrego
  if (json.extra.length > 0) {
    for (let i = 0; i < json.extra.length; i++) {
      let textoIterado = json.extra[i];
      textosExtra = textosExtra.concat(textoIterado);
      textosExtra = textosExtra.concat('\n');
    }
  }

  //enviar
  if (textosExtra != "") {
    channel.send({
      embeds: [new EmbedBuilder()
        .setColor(color)
        .setImage(`attachment://${attachment.name}`),
      new EmbedBuilder()
        .setColor(color)
        .setDescription(`**${json.evento}**\n`)
        //.setDescription(`${textosExtra}`)
        .addFields(
          { name: ' ', value: `${textosExtra}` })
        .setTimestamp()
        .setFooter({ text: 'RobbieBot 2026 — Lynn & Yugito', iconURL: 'https://cdn.top.gg/teams/855310968584753152/3e377abbe4e44f5ef1babbd6f8484e5a387c08cdc4bbb763c6e22a6c0eb1b663.webp' })
      ],
      files: [attachment]
    });
  } else {
    channel.send({
      embeds: [new EmbedBuilder()
        .setColor(color)
        .setImage(`attachment://${attachment.name}`),
      new EmbedBuilder()
        .setColor(color)
        .setDescription(`**${json.evento}**\n`)
        .setTimestamp()
        .setFooter({ text: 'RobbieBot 2026 — Lynn & Yugito', iconURL: 'https://cdn.top.gg/teams/855310968584753152/3e377abbe4e44f5ef1babbd6f8484e5a387c08cdc4bbb763c6e22a6c0eb1b663.webp' })
      ],
      files: [attachment]
    });
  }
}

export function funcionDePrueba(json, channel) {

  if (json.lugares[0] == "" && json.names.length == 0) {  //entonces es evento de tipo 0
    //channel.send("Soy un evento 0");
  }
  if (json.lugares[0] == "" && json.names.length == 1) {  //entonces es evento de tipo 1
    funcionCrearImagen(json, "1", channel);
  }
  if (json.lugares[0] == "" && json.names.length == 2) {  //entonces es evento de tipo 2
    funcionCrearImagen(json, "2", channel);
  }
  if (json.lugares[0] == "" && json.names.length == 3) {  //entonces es evento de tipo 3
    funcionCrearImagen(json, "3", channel);
  }
  if (json.lugares.length == 2 && contarAtacantes(json.lugares) == 1 && json.names[0] != "") { //entonces es evento de tipo 1x1
    funcionCrearImagen(json, "1x1", channel);
  }
  if (json.lugares.length == 3 && contarAtacantes(json.lugares) == 2 && json.names[0] != "") { //entonces es evento de tipo 2x1
    funcionCrearImagen(json, "2x1", channel);
  }
  if (json.lugares.length == 4 && contarAtacantes(json.lugares) == 3 && json.names[0] != "") { //entonces es evento de tipo 3x1
    funcionCrearImagen(json, "3x1", channel);
  }
  if (json.lugares.length == 3 && contarAtacantes(json.lugares) == 1 && json.names[0] != "") { //entonces es evento de tipo 1x2
    funcionCrearImagen(json, "1x2", channel);
  }
  if (json.lugares.length == 4 && contarAtacantes(json.lugares) == 1 && json.names[0] != "") { //entonces es evento de tipo 1x3
    funcionCrearImagen(json, "1x3", channel);
  }
}

function printAt(context, text, x, y, lineHeight, fitWidth) {
  fitWidth = fitWidth || 0;

  if (fitWidth <= 0) {
    context.fillText(text, x, y);
    return;
  }

  for (var idx = 1; idx <= text.length; idx++) {
    var str = text.substr(0, idx);
    //console.log(str, context.measureText(str).width, fitWidth);
    if (context.measureText(str).width > fitWidth) {
      context.fillText(text.substr(0, idx - 1), x, y);
      printAt(context, text.substr(idx - 1), x, y + lineHeight, lineHeight, fitWidth);
      return;
    }
  }
  context.fillText(text, x, y);
}

function printAtWordWrap(context, text, x, y, lineHeight, fitWidth) {
  fitWidth = fitWidth || 0;

  if (fitWidth <= 0) {
    context.fillText(text, x, y);
    return;
  }
  var words = text.split(' ');
  var currentLine = 0;
  var idx = 1;
  while (words.length > 0 && idx <= words.length) {
    var str = words.slice(0, idx).join(' ');
    var w = context.measureText(str).width;
    if (w > fitWidth) {
      if (idx == 1) {
        idx = 2;
      }
      context.fillText(words.slice(0, idx - 1).join(' '), x, y + (lineHeight * currentLine));
      currentLine++;
      words = words.splice(idx - 1);
      idx = 1;
    }
    else { idx++; }
  }
  if (idx > 0)
    context.fillText(words.join(' '), x, y + (lineHeight * currentLine));
}

const betterApplyText = (canvas, text, fsize, maxWidth) => {
  const context = canvas.getContext('2d');
  let fontSize = fsize;
  //GlobalFonts.registerFromPath(join(__dirname,'https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/NotoEmoji-VariableFont_wght.ttf'),'Noto Emoji');
  do {
    context.font = (fontSize -= 1) + `px Noto Sans`;
  } while (context.measureText(text).width > (maxWidth + 25));

  ////console.log(context.font);
  return context.font;
};

const applyText = (canvas, text, fsize, avatarSize) => {
  const context = canvas.getContext('2d');

  // Declare a base size of the font
  let fontSize = fsize;

  do {
    // Assign the font to the context and decrement it so it can be measured again
    context.font = (fontSize -= 10) + `px`;
    // Compare pixel width of the text to the canvas minus the approximate avatar size
  } while (context.measureText(text).width > canvas.width - avatarSize);

  // Return the result to use in the actual canvas
  ////console.log(context.font);
  return context.font;
};



export async function sleep(ms) {
  await new Promise(r => setTimeout(r, ms))
};

export function copiarJugadores(jugadores) {
  let copia = [];
  for (let i = 0; i < jugadores.length; i++) {
    copia[i] = jugadores[i];
  }

  return copia;
}

export function copiarTeams(teams) {
  let copia = [];
  for (let i = 0; i < teams.length; i++) {
    copia[i] = teams[i];
  }

  return copia;
}

export function setearPistolaATodos(jugadores) {
  let jugador;
  for (let i = 0; i < jugadores.length; i++) {
    jugador = jugadores[i];
    jugador.setArma(pistola);
  }
}

export function crearJugadoresFake(jugadores) {
  let idEquipo;
  var team;
  //const k = new Jugador("🔥K", "617015532394250259", "92065173f81292dcd5407172ebb679d8");
  const eltaquito = new Jugador("eltaquito", "400", "https://i.imgur.com/jpos1yo.png");
  const faalgru = new Jugador("Faalgru", "100", "https://i.imgur.com/r3TzBk1.png");
  const robert = new Jugador("RobertJMP", "200", "https://i.imgur.com/j7Lribn.png");
  const dreher = new Jugador("Drehersho", "300", "https://i.imgur.com/F15xMIk.png");
  //const shin = new Jugador("Shin MS", "933153313992630321", "4895d45f6e73bdf05a60876d367aa2ed");
  const shin = new Jugador("Shin MS", "500", "https://i.imgur.com/xQUweVw.png");

  // const frozono2 = new Jugador("Frozono", "101", "https://images3.memedroid.com/images/UPLOADED683/636ab7ebcfa58.webp");
  // const njug1 = new Jugador("n", "102", "https://i.imgur.com/XcqwX6F.png");
  // const brutal = new Jugador("brutal", "103", "https://a.wattpad.com/useravatar/ApoloMetemeTusDedos.256.559054.jpg");
  // const cj = new Jugador("CJ", "104", "https://i.pinimg.com/236x/fc/64/94/fc649415f82f453fa4c5a9432a633a70.jpg");
  // const dehecho1 = new Jugador("De hecho,", "105", "https://images3.memedroid.com/images/UPLOADED775/643765ba04bd1.jpeg");
  // //const cheems = new Jugador("cheems", "106", "https://styles.redditmedia.com/t5_3g0nth/styles/communityIcon_326mpvyt6i061.png");
  // const jose = new Jugador("José", "107", "https://images7.memedroid.com/images/UPLOADED353/603872f2adc3c.jpeg");
  // const pedro = new Jugador("Pedro of war", "108", "https://a.wattpad.com/useravatar/Dxrk_M4nxx.256.666216.jpg");
  // const maurisio1 = new Jugador("maurisio", "109", "https://i.pinimg.com/originals/13/cb/b6/13cbb6ccc36fb5064fe11281c0de49ca.jpg");
  // const lucas = new Jugador("lucas", "110", "https://i.pinimg.com/736x/8b/8e/a6/8b8ea6bd7c066b4b90bd4dcb1b85dcb1.jpg");
  // const rodrigo = new Jugador("Rodrigo.", "111", "https://i.pinimg.com/564x/b7/d6/b8/b7d6b8a8f0c3cf41395c241101bf6a54.jpg");
  // const antonio = new Jugador("Antonio", "112", "https://i.pinimg.com/564x/48/52/26/4852266a6c709195f2cdc9084b9e7829.jpg");
  // const mesi1 = new Jugador("mesi", "113", "https://i.pinimg.com/564x/69/77/ee/6977ee4d222b30ec6ead221668231021.jpg");
  // const melon = new Jugador("Melon Musk", "114", "https://i.pinimg.com/564x/88/62/c6/8862c6e17552ff867013fb7fe10bf00e.jpg");

  //   const bread = new Jugador("Bread Sheeran", "115", "https://i.pinimg.com/564x/7a/3c/77/7a3c773d0fe183e0ac1b75c6c780a455.jpg");
  //   const shrekira = new Jugador("Shrekira", "116", "https://i.pinimg.com/564x/22/2e/9a/222e9a3cb5b44381c670ee63160e6dc8.jpg");
  //   const docthor = new Jugador("DocThor", "117", "https://i.pinimg.com/564x/48/2c/7e/482c7e2f71c7c65efefbceeeaf821fd2.jpg");
  //   const robrownie = new Jugador("Robert Brownie Jr.", "118", "https://i.pinimg.com/564x/87/03/f9/8703f9cf740951fec53ef1131a2d2832.jpg");
  //   const johnlemon1 = new Jugador("John Lemon", "119", "https://i.pinimg.com/564x/80/61/63/80616304991bdad640942c32f4923628.jpg");
  //   const huevardo = new Jugador("Huevardo", "120", "https://i.pinimg.com/564x/54/e8/ad/54e8ad7f029acc1d39db7c0acedb5766.jpg");
  //   const crock = new Jugador("The crock", "121", "https://i.pinimg.com/564x/27/2d/b5/272db57fcee9666f1f5251a0fcfa02f2.jpg");
  //   const grumba = new Jugador("Grumba", "122", "https://i.pinimg.com/564x/3e/fd/b2/3efdb28d34e08fcd190f57f56df1c1c7.jpg");
  //   const tristeza = new Jugador("Tristeza", "123", "https://i.pinimg.com/564x/eb/e1/f1/ebe1f1c9ac245730584c63902b923a7c.jpg");
  //   const coca = new Jugador("coca", "124", "https://i.pinimg.com/564x/c6/d8/d0/c6d8d010684fbae669f673c70c4553c4.jpg");


  //k.setArma(pistola);
  //eltaquito.setArma(pistola);
  //faalgru.setArma(pistola);

  /*idEquipo = teams.length + 1;
  team = new Team(idEquipo);
  team.setPlayer1 = k;
  teams.push(team);
  k.setTeam(team);
  jugadores.push(k);
 
  idEquipo = teams.length + 1;
  team = new Team(idEquipo);
  team.setPlayer1 = eltaquito;
  teams.push(team);
  eltaquito.setTeam(team);
  jugadores.push(eltaquito);
 
  idEquipo = teams.length + 1;
  team = new Team(idEquipo);
  team.setPlayer1 = faalgru;
  teams.push(team);
  faalgru.setTeam(team);
  jugadores.push(faalgru);*/

  //         idEquipo = teams.length + 1;
  //         team = new Team(idEquipo);
  //         team.setPlayer1 = eltaquito;
  //         eltaquito.setTeam(team);
  //         jugadores.push(eltaquito);
  //         team.setPlayer2 = faalgru;
  //         faalgru.setTeam(team);
  //         jugadores.push(faalgru);
  //         team.setPlayer3 = robert;
  //         robert.setTeam(team);
  //         jugadores.push(robert);
  //         teams.push(team);

  //         idEquipo += 1;
  //         team = new Team(idEquipo);
  //         team.setPlayer1 = dreher;
  //         dreher.setTeam(team);
  //         jugadores.push(dreher);
  //         teams.push(team);

  //         idEquipo += 1;
  //         team = new Team(idEquipo);
  //         team.setPlayer1 = shin;
  //         shin.setTeam(team);
  //         jugadores.push(shin);    
  //         teams.push(team);
  jugadores.push(eltaquito);
  jugadores.push(faalgru);
  jugadores.push(robert);
  jugadores.push(dreher);
  jugadores.push(shin);

  // jugadores.push(frozono2);
  // jugadores.push(njug1);
  // jugadores.push(brutal);
  // jugadores.push(cj);
  // jugadores.push(dehecho1);
  // //jugadores.push(cheems);
  // jugadores.push(jose);
  // jugadores.push(pedro);
  // jugadores.push(maurisio1);
  // jugadores.push(lucas);
  // jugadores.push(rodrigo);
  // jugadores.push(antonio);
  // jugadores.push(mesi1);
  // jugadores.push(melon);

  // jugadores.push(bread);
  // jugadores.push(shrekira);
  // jugadores.push(docthor);
  // jugadores.push(robrownie);
  // jugadores.push(johnlemon1);
  // jugadores.push(huevardo);
  // jugadores.push(crock);
  // jugadores.push(grumba);
  // jugadores.push(tristeza);
  // jugadores.push(coca);

}

let buscarJugadorOtroTeam = (jugador, jugadores) => {    //el jugador del parametro es el q ataca, y esta funcion retorna otro jugador vivo DE OTRO TEAM
  shuffleJugadores(jugadores);
  let victima;
  for (let i = 0; i < jugadores.length; i++) {
    victima = jugadores[i];
    if ((victima.alive == 1) && (victima.id != jugador.id) && (victima.team.id != jugador.team.id)) {
      return victima;
    }
  }
  return null;
}

export function buscarTresTeamsSolo(teams) {
  if (!teams) return null;

  let team;
  let arraySolos = [];

  let copia = copiarTeams(teams);
  shuffleJugadores(copia);

  for (let i = 0; i < copia.length; i++) {
    team = copia[i];
    if (arraySolos.length == 3) {
      //console.log(arraySolos);
      return arraySolos;
    }
    if (team.esTeamDe1() && team.estaVivo1()) {
      arraySolos.push(team.getID());
    }
  }
  if (arraySolos.length == 3) {
    //console.log(arraySolos);
    return arraySolos;
  }
  return null;
}

let arreglarIDs = (teams) => {
  let team;
  for (let i = 0; i < teams.length; i++) {
    team = teams[i];
    team.setID = i + 1;
  }
}

export function eliminarTeam(teamID, teams) {
  let index;
  //console.log(`eliminando el team ${teamID}`);
  index = teamID - 1;
  teams.splice(index, 1);
  arreglarIDs(teams);
}

async function dibujarJugadorDeTeam(canvas, context, player, avatarSize, offsetX, offsetY, fontSize, guild, teamOGanador, players) {
  GlobalFonts.registerFromPath(
    "./assets/fonts/NotoSans-Regular.ttf",
    "Noto Sans"
  );

  //si teamOGanador es 0 es pa mostrar team al principio, si es 1 es para mostrar team ganador al final - falta filtro rojo
  //avatar
  let foto = await cargarAvatar(player.getFoto(), player.getID(), player.getTieneOtraFoto(), guild, players);
  context.drawImage(foto, offsetX, offsetY, avatarSize, avatarSize);

  //cuadro rojo si murió
  if (player.getAlive() != 1) {
    context.beginPath();
    context.rect(offsetX - 2, offsetY - 2, avatarSize + 4, avatarSize + 4);
    context.fillStyle = 'rgba(236,28,36,0.5)';
    context.fill();
  }

  //nombre
  let name = player.getNombre();
  context.font = (await betterApplyText(canvas, name, fontSize, avatarSize));
  /*var gradient = context.createLinearGradient(offsetX, 0, offsetX+avatarSize, 0);
  gradient.addColorStop(0, "magenta");
  gradient.addColorStop(0.5, "blue");
  gradient.addColorStop(1.0, "purple");
  context.fillStyle = gradient;*/
  const halloweenColor = '#c34a07';
  const classicColor = 'white';
  let colorNombre = classicColor;

  if (avatarSize < 150) { colorNombre = 'black'; }
  context.fillStyle = colorNombre;
  let colorBorde = 'black';
  if (avatarSize < 150) { colorBorde = classicColor; }
  context.strokeStyle = colorBorde;

  let nameOffsetX = offsetX;
  let nameOffsetY = offsetY;

  for (const char of Array.from(name)) {
    const code = char.codePointAt(0);

    if (code > 0x1F000) {
      const codeHex = code.toString(16);
      const url = `https://twemoji.maxcdn.com/v/latest/72x72/${codeHex}.png`;

      try {
        const img = await loadImage(url);
        const size = fontSize * 1.1;
        context.drawImage(
          img,
          nameOffsetX,
          nameOffsetY - size + fontSize * 0.15 + 13 + (~~(fontSize / 2)) + avatarSize,
          size,
          size
        );
        nameOffsetX += size * 0.9;
      } catch {
        nameOffsetX += fontSize * 0.6;
      }
    } else {
      context.fillText(char, nameOffsetX, nameOffsetY + 13 + (~~(fontSize / 2)) + avatarSize);
      context.strokeText(char, nameOffsetX, nameOffsetY + 13 + (~~(fontSize / 2)) + avatarSize);
      nameOffsetX += context.measureText(char).width;
    }
  }

  // context.fillText(name, offsetX, offsetY + 13 + (~~(fontSize / 2)) + avatarSize + 3);
  // context.strokeText(name, offsetX, offsetY + 13 + (~~(fontSize / 2)) + avatarSize + 3);

  if (teamOGanador) {
    //hp
    let hp = player.getHP();

    //fondo negro
    context.beginPath();
    context.rect(offsetX, offsetY - 35, avatarSize, 20);
    context.fillStyle = "black";
    context.fill();

    //verde
    context.beginPath();
    context.rect(offsetX, offsetY - 35, Math.max(0, (hp) * avatarSize / maxHP), 20);
    context.fillStyle = "#2AB140";
    context.fill();

    //cantidad vida
    context.font = "16px URW Gothic L";
    context.fillStyle = '#FFFFFF';
    context.fillText(`${hp}`, offsetX + 5, offsetY - 20);

    //borde  
    context.strokeStyle = "#FFFFFF";
    context.strokeRect(offsetX - 1, offsetY - 36, avatarSize + 2, 22);
  }

  //nombre team
  if (teamOGanador) {
    let teamID = player.getTeam()["id"];
    let teamName = player.getTeam()["name"];
    let finalName;
    if (teamName != null) {
      finalName = teamName;
    } else {
      finalName = `Team ${teamID}`;
    }
    context.font = "40px URW Gothic L";
    context.fillStyle = '#000000';
    context.textAlign = "center";
    context.fillText(finalName, canvas.width / 2, 40);
    context.textAlign = "start";
  } else {
    let teamName = player.getTeam()["id"];
    context.font = "40px URW Gothic L";
    context.fillStyle = '#000000';
    context.fillText(`Team ${teamName}`, 269, 84);
  }

}

async function displayOneTeam(channel, team, guild, players) {
  let embed;
  const canvas = createCanvas(700, 500);
  const context = canvas.getContext('2d');
  let color = randomHexColor();

  const background = await loadImage('https://i.imgur.com/rE1O5wh.png');

  context.drawImage(background, 0, 0, canvas.width, canvas.height);

  if (team.esTeamDe1()) {
    await dibujarJugadorDeTeam(canvas, context, team.getPlayer1(), 212, 233, 143, 50, guild, 0, players);
  }

  if (team.esTeamDe2()) {
    await dibujarJugadorDeTeam(canvas, context, team.getPlayer1(), 162, 158, 177, 42, guild, 0, players);
    await dibujarJugadorDeTeam(canvas, context, team.getPlayer2(), 162, 376, 177, 42, guild, 0, players);
  }

  if (team.esTeamDe3()) {
    await dibujarJugadorDeTeam(canvas, context, team.getPlayer1(), 145, 172, 113, 38, guild, 0, players);
    await dibujarJugadorDeTeam(canvas, context, team.getPlayer2(), 145, 393, 113, 38, guild, 0, players);
    await dibujarJugadorDeTeam(canvas, context, team.getPlayer3(), 145, 282, 310, 38, guild, 0, players);
  }

  let attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'team-image.png' });
  embed = generarEmbedImagen(color, `attachment://${attachment.name}`);
  channel.send({
    embeds: [embed],
    files: [attachment]
  });
}

export async function displayWinnerTeam(channel, team, guild, players) {
  let embed;
  const canvas = createCanvas(700, 500);
  const context = canvas.getContext('2d');
  let color = randomHexColor();

  const background = await loadImage('https://i.imgur.com/f7p1xJO.png');

  context.drawImage(background, 0, 0, canvas.width, canvas.height);

  if (team.esTeamDe1()) {
    await dibujarJugadorDeTeam(canvas, context, team.getPlayer1(), 212, 233, 143, 50, guild, 1, players);
  }

  if (team.esTeamDe2()) {
    await dibujarJugadorDeTeam(canvas, context, team.getPlayer1(), 162, 158, 177, 42, guild, 1, players);
    await dibujarJugadorDeTeam(canvas, context, team.getPlayer2(), 162, 376, 177, 42, guild, 1, players);
  }

  if (team.esTeamDe3()) {
    await dibujarJugadorDeTeam(canvas, context, team.getPlayer1(), 145, 172, 90, 38, guild, 1, players);
    await dibujarJugadorDeTeam(canvas, context, team.getPlayer2(), 145, 393, 90, 38, guild, 1, players);
    await dibujarJugadorDeTeam(canvas, context, team.getPlayer3(), 145, 282, 310, 38, guild, 1, players);
  }

  let attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'winners-image.png' });
  embed = generarEmbedImagen(color, `attachment://${attachment.name}`);
  channel.send({
    embeds: [embed],
    files: [attachment]
  });
}

export async function displayTeamByTeam(channel, guild, players, teams) {
  let team;
  for (let i = 0; i < teams.length; i++) {
    team = teams[i];
    await displayOneTeam(channel, team, guild, players);
    await sleep(5000);
  }

}

export function shuffleJugadores(jugadores) {  //algoritmo de Fisher-Yates para reordenar los players de forma random
  for (let i = jugadores.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = jugadores[i];
    jugadores[i] = jugadores[j];
    jugadores[j] = temp;
  }

}

export function generarEmbedTexto(color, texto) {
  let embed = new EmbedBuilder()
    .setColor(color)
    .setTitle(texto)
    .setTimestamp()
    .setFooter({ text: 'RobbieBot 2026 — Lynn & Yugito', iconURL: 'https://cdn.top.gg/teams/855310968584753152/3e377abbe4e44f5ef1babbd6f8484e5a387c08cdc4bbb763c6e22a6c0eb1b663.webp' });

  return embed;
}

export function generarEmbedDescripcion(color, texto) {
  let embed = new EmbedBuilder()
    .setColor(color)
    .setDescription(`**${texto}**`)
    .setTimestamp()
    .setFooter({ text: 'RobbieBot 2026 — Lynn & Yugito', iconURL: 'https://cdn.top.gg/teams/855310968584753152/3e377abbe4e44f5ef1babbd6f8484e5a387c08cdc4bbb763c6e22a6c0eb1b663.webp' });

  return embed;
}

export function generarEmbedImagen(color, url) {
  let embed = new EmbedBuilder()
    .setColor(color)
    .setImage(url)
    .setTimestamp()
    .setFooter({ text: 'RobbieBot 2026 — Lynn & Yugito', iconURL: 'https://cdn.top.gg/teams/855310968584753152/3e377abbe4e44f5ef1babbd6f8484e5a387c08cdc4bbb763c6e22a6c0eb1b663.webp' });

  return embed;
}

export function chequearSonMismoEquipo(players) {
  var ganadores = [];
  let jugador;
  let team;
  let count = 0;
  for (let i = 0; i < players.length; i++) {
    jugador = players[i];
    if (jugador.alive == 1) {

      if (count >= 1 && jugador.team.getID() == team) {
        count++;
        ganadores.push(jugador);
      }

      if (count == 0) {
        count++;
        team = jugador.team.getID();
        ganadores.push(jugador);
      }

    }
  }
  return ganadores;
}

let danioExtra = (min, max) => {
  let danio = Math.floor(Math.random() * (max - min + 1) + min)
  //console.log("\x1b[90m%s\x1b[0m", `${danio} de danio extra`);
  return danio;
}

let porcentajeDeVidaRandom = (min, max) => {
  let vida = Math.floor(Math.random() * (max - min + 1) + min)
  //console.log("\x1b[90m%s\x1b[0m", `${vida} de vida`);
  return vida;
}

let randomSelector = (min, max) => {
  let selected = Math.floor(Math.random() * (max - min + 1) + min)
  //console.log("\x1b[90m%s\x1b[0m", `${selected} selected`);
  return selected;
}

export function generarJugadorFake() {
  var rand = parseInt(Math.random() * jugadoresFake.length);
  return jugadoresFake[rand];
}

let haySuficientes = (jugadores) => {
  let cont = 0;
  let jugador;
  for (let i = 0; i < jugadores.length; i++) {
    jugador = jugadores[i];
    if (jugador.team == null) {
      cont++;
    }
  }
  return cont;
}

export function buscarUnMuerto(players) {
  let jugador;
  for (let i = 0; i < players.length; i++) {
    jugador = players[i];
    if (jugador.alive == 0) {
      return jugador;
    }
  }
  return null;
}

export function formarEquipo(jugadores, teams) {
  let jugador;
  let jugadorA;   //auxiliar
  let jugadorB;   //auxiliar
  let idEquipo = 1;
  shuffleJugadores(jugadores);
  for (let i = 0; i < jugadores.length; i++) {
    jugador = jugadores[i];
    if (jugador.team == null) {   //si no tiene equipo definido

      if (jugadores.length <= 3) {  //si solo juegan 2 o 3 personas
        //team de 1 - 100% prob
        var thisTeam = new Team(idEquipo);
        thisTeam.setPlayer1 = jugador;
        teams.push(thisTeam);

        jugador.setTeam(thisTeam);

        idEquipo++;
      } else {
        let r = Math.random();

        if (r > 0.5) {
          //team de 2 - 50% prob
          let valid = haySuficientes(jugadores)
          if (valid >= 2) {  //forma team de 2 si hay 2 libres

            jugadorA = jugadores[i + 1];

            var thisTeam = new Team(idEquipo);
            thisTeam.setPlayer1 = jugador;
            thisTeam.setPlayer2 = jugadorA;
            teams.push(thisTeam);

            jugador.setTeam(thisTeam);
            jugadorA.setTeam(thisTeam);

            idEquipo++;
          } else {  //team de 1

            var thisTeam = new Team(idEquipo);
            thisTeam.setPlayer1 = jugador;
            teams.push(thisTeam);

            jugador.setTeam(thisTeam);

            idEquipo++;
          }

        } else if (r < 0.2) {
          //team de 3 - 20% prob
          let valid = haySuficientes(jugadores)
          if (valid >= 3) {  //forma team de 3 si hay 3 libres

            jugadorA = jugadores[i + 1];
            jugadorB = jugadores[i + 2];

            var thisTeam = new Team(idEquipo);
            thisTeam.setPlayer1 = jugador;
            thisTeam.setPlayer2 = jugadorA;
            thisTeam.setPlayer3 = jugadorB;
            teams.push(thisTeam);

            jugador.setTeam(thisTeam);
            jugadorA.setTeam(thisTeam);
            jugadorB.setTeam(thisTeam);

            idEquipo++;
          } else {  //team de 1

            var thisTeam = new Team(idEquipo);
            thisTeam.setPlayer1 = jugador;
            teams.push(thisTeam);

            jugador.setTeam(thisTeam);

            idEquipo++;
          }
        } else {
          //team de 1 - 30% prob

          var thisTeam = new Team(idEquipo);
          thisTeam.setPlayer1 = jugador;
          teams.push(thisTeam);

          jugador.setTeam(thisTeam);

          idEquipo++;
        }
      }


    }
  }

  let n = 1;
  /*    while(n < idEquipo){
          //console.log(`%c EQUIPO ${n} `,"border-radius:8px; border:2px solid white;");
          for(let k=0; k<jugadores.length; k++){
              let jugador = jugadores[k];
              if(jugador.team.getID() == n){
                  //console.log(`• ${jugador.getNombre()}`);
              }
          }
          n++;
      }
  */
  let arrayConTodo = [];
  while (n < idEquipo) {
    arrayConTodo.push(`EQUIPO ${n}`);
    for (let k = 0; k < jugadores.length; k++) {
      let jugador = jugadores[k];
      if (jugador.team.getID() == n) {
        arrayConTodo.push(` ${jugador.getNombre()}`);
      }
    }
    //console.log(`%c ${arrayConTodo}`, "border-radius:8px; border:2px solid white; padding-top:7px; padding-bottom:7px;padding-right:4px;");
    arrayConTodo = [];
    n++;
  }


}


export function imprimirTeams(teams1) {
  for (let countTeams = 0; countTeams < teams1.length; countTeams++) {
    // console.log("\x1b[36m%s\x1b[0m", `TEAM ${teams1[countTeams].getID()}`);
    if (teams1[countTeams].getPlayer1() != null) {
      if (teams1[countTeams].getPlayer1().getHP() == 0) {
        // console.log("\x1b[31m%s\x1b[0m", `${teams1[countTeams].getPlayer1().getNombre()} - HP: ${teams1[countTeams].getPlayer1().getHP()} - alive  ${teams1[countTeams].getPlayer1().getAlive()}`);
      } else {
        // console.log("\x1b[36m%s\x1b[0m", `${teams1[countTeams].getPlayer1().getNombre()} - HP: ${teams1[countTeams].getPlayer1().getHP()} - alive  ${teams1[countTeams].getPlayer1().getAlive()}`);
      }
    }
    if (teams1[countTeams].getPlayer2() != null) {
      if (teams1[countTeams].getPlayer2().getHP() == 0) {
        // console.log("\x1b[31m%s\x1b[0m", `${teams1[countTeams].getPlayer2().getNombre()} - HP: ${teams1[countTeams].getPlayer2().getHP()} - alive  ${teams1[countTeams].getPlayer2().getAlive()}`);
      } else {
        // console.log("\x1b[36m%s\x1b[0m", `${teams1[countTeams].getPlayer2().getNombre()} - HP: ${teams1[countTeams].getPlayer2().getHP()} - alive  ${teams1[countTeams].getPlayer2().getAlive()}`);
      }
    }
    if (teams1[countTeams].getPlayer3() != null) {
      if (teams1[countTeams].getPlayer3().getHP() == 0) {
        // console.log("\x1b[31m%s\x1b[0m", `${teams1[countTeams].getPlayer3().getNombre()} - HP: ${teams1[countTeams].getPlayer3().getHP()} - alive  ${teams1[countTeams].getPlayer3().getAlive()}`);
      }
      else {
        // console.log("\x1b[36m%s\x1b[0m", `${teams1[countTeams].getPlayer3().getNombre()} - HP: ${teams1[countTeams].getPlayer3().getHP()} - alive  ${teams1[countTeams].getPlayer3().getAlive()}`);
      }
    }
    // console.log(``);
  }
}


export async function muerteJugador(guildID, channel, players) {
  let embed;
  let color = randomHexColor();

  const gameState = getGuildGameState(guildID);
  let teams = gameState.teams;

  let cantidadConVida = calcularVivos(players);
  let language = getGuildPlayLanguage(guildID);

  await sleep(3000);

  if (language === "es") {
    //console.log(`Quedan ${cantidadConVida} jugadores con vida.`);
    embed = generarEmbedTexto(color, "Queda" + (cantidadConVida != 1 ? "n" : "") + ` ${cantidadConVida} jugador` + (cantidadConVida != 1 ? "es" : "") + " con vida.");
  } else {
    //console.log(`There are ${cantidadConVida} players alive.`);
    embed = generarEmbedTexto(color, `${cantidadConVida} player` + (cantidadConVida != 1 ? "s" : "") + " remaining.");
  }


  channel.send({ embeds: [embed] });

  await sleep(1000);
  imprimirTeams(teams);
  mostrarTeams(channel, guildID, players, teams);
}

////////////

let eventoAleatorio1 = async (jugador, players, req, channel, idioma, teams) => {
  let resultado;
  //console.log(" Sucedió un evento aleatorio 1");
  if (idioma === "es") {

    //console.log("Eventos aleatorios 1 en español");

    do {
      var rand = parseInt(Math.random() * eventosAleatorios1.length);
      //console.log("\x1b[33m%s\x1b[0m", ` ${rand}`);
      resultado = await eventosAleatorios1[rand](jugador, players, maxHP, teams, req, channel); //le paso el array original
    }
    while (resultado != 1) //si el evento no cumple alguna condicion especial, retorna null y buscamos otro evento

  } else {

    //console.log("Eventos aleatorios 1 en ingles");

    do {
      var rand = parseInt(Math.random() * eventosAleatorios1En.length);
      //console.log("\x1b[33m%s\x1b[0m", ` ${rand}`);
      resultado = await eventosAleatorios1En[rand](jugador, players, maxHP, teams, req, channel); //le paso el array original
    }
    while (resultado != 1) //si el evento no cumple alguna condicion especial, retorna null y buscamos otro evento


  }
};

let lootEspecificoxCategoria = async (jugador, arma, players, req, channel, idioma) => {

  if (idioma === "es") {
    //console.log("Eventos loot especifico por categoria en español");
    await eventoslootEspecificoxCategoria[0](jugador, players, arma, req, channel); //le paso el array original
  } else {
    //console.log("Eventos loot especifico por categoria en ingles");
    await eventoslootEspecificoxCategoriaEn[0](jugador, players, arma, req, channel); //le paso el array original
  }

};

let lootArmaEstetica = async (jugador, arma, players, req, channel) => {

  await eventosLootArmaEstetica[0](jugador, players, arma, req, channel); //le paso el array original

};

let lootGenerico = async (jugador, arma, players, req, channel, idioma) => {
  ////console.log(` ${jugador.getNombre()} looteó una ${arma["nombre"]}`);
  let resultado;

  if (idioma === "es") {
    //console.log("Eventos loot generico en español");
    do {
      var rand = parseInt(Math.random() * eventosLootGenerico.length);
      //console.log("\x1b[33m%s\x1b[0m", ` ${rand}`);
      resultado = await eventosLootGenerico[rand](jugador, players, arma, maxHP, req, channel); //le paso el array original
    }
    while (resultado != 1) //si el evento no cumple alguna condicion especial, retorna null y buscamos otro evento
  } else {
    //console.log("Eventos loot generico en ingles");
    do {
      var rand = parseInt(Math.random() * eventosLootGenerico.length);
      //console.log("\x1b[33m%s\x1b[0m", ` ${rand}`);
      resultado = await eventosLootGenericoEn[rand](jugador, players, arma, maxHP, req, channel); //le paso el array original
    }
    while (resultado != 1) //si el evento no cumple alguna condicion especial, retorna null y buscamos otro evento
  }
};

let eventoAleatorio2 = async (jugador, players, req, channel, playersReal, idioma, teams) => {
  let resultado;
  //console.log(" Sucedió un evento aleatorio 2");
  if (idioma === "es") {
    //console.log("Eventos aleatorios 2 en español");
    do {
      var rand = parseInt(Math.random() * eventosAleatorios2.length);
      //console.log("\x1b[33m%s\x1b[0m", ` ${rand}`);
      resultado = await eventosAleatorios2[rand](jugador, players, maxHP, teams, req, channel, playersReal); //le paso el array original
    }
    while (resultado != 1) //si el evento no cumple alguna condicion especial, retorna null y buscamos otro evento 
  } else {
    //console.log("Eventos aleatorios 2 en ingles");
    do {
      var rand = parseInt(Math.random() * eventosAleatorios2.length);
      //console.log("\x1b[33m%s\x1b[0m", ` ${rand}`);
      resultado = await eventosAleatorios2En[rand](jugador, players, maxHP, teams, req, channel, playersReal); //le paso el array original
    }
    while (resultado != 1) //si el evento no cumple alguna condicion especial, retorna null y buscamos otro evento


  }
};

let ataqueEspecificoxCategoria1 = (jugador, victima) => {
  //console.log(` ${jugador.getNombre()} atacó con su ${jugador.getArma()["nombre"]} a ${victima.getNombre()}`);
  let danio = jugador.getArma()["danio"] + danioExtra(1, 500);
  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso
  if (jugador.getArma()["usos"] <= 0) {
    //console.log(`La ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se quedó sin usos`);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  //console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    //console.log("\x1b[90m%s\x1b[0m", `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`);
  }
};

let ataqueEspecificoxCategoria = async (jugador, copia, victima, req, channel, realPlayers, idioma) => {

  if (idioma === "es") {
    //console.log("Eventos ataque especifico por categoria en español");
    await eventosAtaqueEspecificoxCategoria[0](jugador, copia, victima, req, channel, realPlayers); //le paso una COPIA, luego buscar la victima original
  } else {
    //console.log("Eventos ataque especifico por categoria en ingles");
    await eventosAtaqueEspecificoxCategoriaEn[0](jugador, copia, victima, req, channel, realPlayers); //le paso una COPIA, luego buscar la victima original
  }

};



let ataqueGenericoConArma1 = (jugador, victima) => {
  //console.log(` ${jugador.getNombre()} atacó con su ${jugador.getArma()["nombre"]} a ${victima.getNombre()}`);
  let danio = jugador.getArma()["danio"] + danioExtra(1, 500);
  victima.setHP(Math.max(0, victima.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  jugador.getArma()["usos"] -= 1; //cada vez que usa el arma pierde 1 uso  
  if (jugador.getArma()["usos"] <= 0) {
    //console.log(`La ${jugador.getArma()["nombre"]} de ${jugador.getNombre()} se quedó sin usos`);
    jugador.setArma(null);
  } //si su arma se queda sin usos, la pierde

  //console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    //console.log("\x1b[90m%s\x1b[0m", `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`);
  }
};

async function ataqueGenericoConArma(jugador, players, victima, req, channel, playersOriginal, idioma) {
  let resultado;
  //console.log(`Ataque generico con arma`);
  if (idioma === "es") {
    //console.log("Eventos ataque generico con arma en español");
    do {
      var rand = parseInt(Math.random() * ataquesGenericosConArma.length);
      //console.log("\x1b[33m%s\x1b[0m", ` ${rand}`);
      resultado = await ataquesGenericosConArma[rand](jugador, players, victima, req, channel, playersOriginal); //le paso una copia
    }
    while (resultado != 1) //si el evento no cumple alguna condicion especial, retorna null y buscamos otro evento
  } else {
    //console.log("Eventos ataque generico con arma en ingles");
    do {
      var rand = parseInt(Math.random() * ataquesGenericosConArma.length);
      //console.log("\x1b[33m%s\x1b[0m", ` ${rand}`);
      resultado = await ataquesGenericosConArmaEn[rand](jugador, players, victima, req, channel, playersOriginal); //le paso una copia
    }
    while (resultado != 1) //si el evento no cumple alguna condicion especial, retorna null y buscamos otro evento

  }
};

let ataqueGenericoSinArma1 = (jugador, victima) => {

  //console.log(` ${jugador.getNombre()} atacó sin arma a ${victima.getNombre()}`);
  let danio = danioExtra(30, 90);
  victima.setHP(Math.max(0, victima.getHP() - danio));

  //console.log(` HP de ${victima.getNombre()}: ${victima.getHP()}`);
  if (victima.getHP() <= 0) {
    victima.alive = 0;
    jugador.kills++;
    //console.log("\x1b[90m%s\x1b[0m", `Kills de ${jugador.getNombre()}: ${jugador.getKills()}.`);
  }
};

async function ataqueGenericoSinArma(jugador, players, victima, req, channel, playersOriginal, idioma) {
  let resultado;
  //console.log(`Ataque generico sin arma`);
  if (idioma === "es") {
    //console.log("Eventos ataque generico sin arma en español");
    do {
      var rand = parseInt(Math.random() * ataquesGenericosSinArma.length);
      //console.log("\x1b[33m%s\x1b[0m", ` ${rand}`);
      resultado = await ataquesGenericosSinArma[rand](jugador, players, victima, req, channel, playersOriginal); //le paso una copia
    }
    while (resultado != 1) //si el evento no cumple alguna condicion especial, retorna null y buscamos otro evento
  } else {
    //console.log("Eventos ataque generico sin arma en ingles");
    do {
      var rand = parseInt(Math.random() * ataquesGenericosSinArma.length);
      //console.log("\x1b[33m%s\x1b[0m", ` ${rand}`);
      resultado = await ataquesGenericosSinArmaEn[rand](jugador, players, victima, req, channel, playersOriginal); //le paso una copia
    }
    while (resultado != 1) //si el evento no cumple alguna condicion especial, retorna null y buscamos otro evento
  }
};


// ronda de loot
export async function rondaLoot(req, jugador, players, channel, nroEvento, idioma = "en", modo = false, teams) {
  //let armaVieja = jugador.getArma();
  let probabilidad = Math.random();
  let probabilidadExtra = Math.random();

  if (probabilidad < 0.2 - sumarProbabilidad(nroEvento, players.length, 20, modo)) {
    await eventoAleatorio1(jugador, players, req, channel, idioma, teams);
  } else {
    let armaAux = generarArma()
    let arma = new Arma(armaAux.nombre, armaAux.categoria, armaAux.danio, armaAux.usos, armaAux.pronombre, armaAux.plural, armaAux.name, armaAux.pluralEn);

    if (arma.danio == 0) {
      await lootArmaEstetica(jugador, arma, players, req, channel);
    } else {
      if (arma.categoria && probabilidadExtra < 0.75) {
        await lootEspecificoxCategoria(jugador, arma, players, req, channel, idioma);
      } else {
        await lootGenerico(jugador, arma, players, req, channel, idioma);
      }
    }

    /*if(armaVieja != null && armaVieja.danio > arma.danio){
        //console.log("\x1b[33m%s\x1b[0m",` Como el arma anterior hacía más daño, ${jugador.getNombre()} decide no cambiarla.`);
        jugador.setArma(armaVieja);
    }*/
  }
};

//ronda de ataque
export async function rondaAtaque(req, jugador, jugadores, cantidadConVida, channel, playersOriginal, nroEvento, idioma = "en", modo = false, teams) {
  if (jugador.alive == 1) {
    if (cantidadConVida >= 2) {
      let probabilidad = Math.random();
      let probabilidadAleatorios = Math.random();
      if (probabilidad < 0.2) {
        if (probabilidadAleatorios < 0.5 - sumarProbabilidad(nroEvento, playersOriginal.length, 50, modo)) {
          await eventoAleatorio1(jugador, playersOriginal, req, channel, idioma, teams);
        } else {
          await eventoAleatorio2(jugador, jugadores, req, channel, playersOriginal, idioma, teams);
        }
      } else {
        let victima = buscarJugadorOtroTeam(jugador, jugadores);
        if (victima == null) { console.log("hay problemas"); }
        if (!jugador.arma) {
          await ataqueGenericoSinArma(jugador, jugadores, victima, req, channel, playersOriginal, idioma);
        } else {
          if (jugador.arma.categoria) {
            let probabilidadEspecial = Math.random();
            if (probabilidadEspecial < 0.4) {
              await ataqueEspecificoxCategoria(jugador, jugadores, victima, req, channel, playersOriginal, idioma);
            } else {
              await ataqueGenericoConArma(jugador, jugadores, victima, req, channel, playersOriginal, idioma);
            }
          } else {
            await ataqueGenericoConArma(jugador, jugadores, victima, req, channel, playersOriginal, idioma);
          }
        }
      }
    }
  }
};


function polinomioNewton(x = 0) {
  return -2.292119782 - 0.2016887131 * (x - 80) + 0.000730706225 * (x - 80) * (x - 70) - 0.00003732680067 * (x - 80) * (x - 70) * (x - 60) + 0.0000006834432208 * (x - 80) * (x - 70) * (x - 60) * (x - 50) - 0.00000002529093684 * (x - 80) * (x - 70) * (x - 60) * (x - 50) * (x - 40) + 0.000000001236588063 * (x - 80) * (x - 70) * (x - 60) * (x - 50) * (x - 40) * (x - 30);
}


export function sumarProbabilidad(eventos, jugadores, porc, modo = false) {
  let numMode = modo ? 0 : 1;
  let num = numMode * (50 * Math.atan((eventos + polinomioNewton(porc) - jugadores) / 10) + porc - 25 * Math.PI);
  return num >= 0 ? num / 100 : 0;
};
/*------------ loot generico de armas ------------*/
//let maxHP = 1000;
import {
  ataqueEspecificoxCategoria,
  ataqueGenericoConArma,
  ataqueGenericoSinArma,
  buscarJugador,
  buscarJugadorConArma,
  buscarPorID,
  calcularVivos,
  chequearSonMismoEquipo,
  copiarJugadores,
  danioExtra,
  encontrarGanador,
  esDelMismoTeam,
  eventoAleatorio1,
  eventoAleatorio2,
  formarEquipo,
  generarArma,
  haySuficientes,
  lootEspecificoxCategoria,
  lootGenerico,
  mostrarResultados,
  recibirJugadores,
  rondaAtaque,
  rondaLoot,
  shuffleJugadores,
  imprimirTeams,    
  pluralS,
  pronombreUnUnaUnosUnas,
  pronombreOAOsAs,
  pronombreElLaLosLas,
  englishPronoun
} from "../utils.js"
import {
  createObject,
  funcionDePrueba,
  cargarAvatar,
  funcionCrearImagen
} from "../../utils.js";

var eventosLootGenerico = [];


eventosLootGenerico[0] = async (jugador, players, arma, maxHP, req, channel)=>{
  let pronombre = englishPronoun(arma);
  let evento = ` ${jugador.getNombre()} looted ${pronombre}${arma["nombre"]}`;
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[1] = async (jugador, players, arma, maxHP, req, channel)=>{
  let pronombre = englishPronoun(arma);
  let evento = ` ${jugador.getNombre()} found ${pronombre}${arma["name"]} in a corner`;
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[2] = async (jugador, players, arma, maxHP, req, channel)=>{
  let pronombre = englishPronoun(arma);
  let evento = ` ${jugador.getNombre()} opens a mystery box. The box contained ${pronombre}${arma["name"]}!`;
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[3] = async (jugador, players, arma, maxHP, req, channel)=>{
  let pronombre = englishPronoun(arma);
  let evento = ` ${jugador.getNombre()} was walking when they stepped on ${pronombre}${arma["name"]}. Thanking God for their luck, they takes it.`
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[4] = async (jugador, players, arma, maxHP, req, channel)=>{
  let pronombre = englishPronoun(arma);

  jugador.setArma(arma);
  let evento =` A mysterious figure offers ${pronombre}${arma["name"]} to ${jugador.getNombre()}`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[5] = async (jugador, players, arma, maxHP, req, channel)=>{
  let pronombre = englishPronoun(arma);
  let evento = ` ${jugador.getNombre()} gets ${pronombre}${arma["nombre"]}`
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[6] = async (jugador, players, arma, maxHP, req, channel)=>{
  let pronombre = englishPronoun(arma);
  let evento = ` ${jugador.getNombre()} finds ${pronombre}${arma["name"]}. Not bad.`
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[7] = async (jugador, players, arma, maxHP, req, channel)=>{
  let pronombre = englishPronoun(arma);
  let evento = ` ${jugador.getNombre()} takes out from their backpack ${pronombre}${arma["name"]} that had hidden since the game started. Is that cheating?`
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[8] = async (jugador, players, arma, maxHP, req, channel)=>{
  let pronombre1 = englishPronoun(arma);
  let arma2 = generarArma();
  let pronombre2 = englishPronoun(arma2);
  let evento = ` ${jugador.getNombre()} has their hands full choosing between ${pronombre1}${arma["name"]} and ${pronombre2}${arma2["name"]}, so decides to keep the ${arma["name"]}.`
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);   
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[9] = async (jugador, players, arma, maxHP, req, channel)=>{
  let pronombre1 = englishPronoun(arma);
  jugador.setArma(arma);
  let arma2 = generarArma();
  let pronombre2 = englishPronoun(arma2);
  let evento = ` ${jugador.getNombre()} has their hands full choosing between ${pronombre2}${arma2["name"]} and ${pronombre1}${arma["name"]}, so decides to keep the ${arma["name"]}.`;
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[10] = async (jugador, players, arma, maxHP, req, channel)=>{
  let pronombre1 = englishPronoun(arma);
  jugador.setArma(arma);
  let arma2 = generarArma();
  let pronombre2 = englishPronoun(arma2);
  let evento = ` ${jugador.getNombre()} sees ${pronombre2}${arma2["name"]} and ${pronombre1}${arma["name"]} on the ground, obviously they keeps the ${arma["name"]}.`
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[11] = async (jugador, players, arma, maxHP, req, channel)=>{
  let pronombre1 = englishPronoun(arma);
  jugador.setArma(arma);
  let arma2 = generarArma();
  let pronombre2 = englishPronoun(arma2);
  let evento = ` ${jugador.getNombre()} sees ${pronombre1}${arma["name"]} and ${pronombre2}${arma2["name"]} on the ground, obviously they keeps the ${arma["name"]}.`;
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[12] = async (jugador, players, arma, maxHP, req, channel)=>{
  let pronombre = englishPronoun(arma);
  let evento = ` ${jugador.getNombre()} finds ${pronombre}${arma["name"]}.`
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[13] = async (jugador, players, arma, maxHP, req, channel)=>{
  let pronombre = englishPronoun(arma);
  let evento = ` ${jugador.getNombre()} finds ${pronombre}${arma["name"]} partially buried and decides to keep it.`
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[14] = async (jugador, players, arma, maxHP, req, channel)=>{
  let pronombre = englishPronoun(arma);
  let evento = ` ${jugador.getNombre()} obtains ${pronombre}${arma["nombre"]}.`
  jugador.setArma(arma);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}


eventosLootGenerico[15] = async (jugador, players, arma, maxHP, req, channel)=>{
  if(jugador.hp == maxHP){return null};

  let hp = jugador.getHP();

  let curacion;
  if(maxHP - jugador.hp < 0.13*hp){
    curacion = -(maxHP - jugador.hp);
  }else{
    curacion = -(0.13*hp);
  }


  let evento=` ${jugador.getNombre()} eats fruits from a tree.`;
  console.log(evento);

  console.log(` HP antes: ${hp}`);
  hp += 0.13*hp;
  jugador.setHP(Math.min(maxHP,~~(hp)));
  console.log(` HP luego: ${jugador.getHP()}`);

  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [curacion], []);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[16] = async (jugador, players, arma, maxHP, req, channel)=>{
  if(jugador.hp == maxHP){return null};

  let hp = jugador.getHP();

  let curacion;
  if(maxHP - jugador.hp < 0.55*hp){
    curacion = -(maxHP - jugador.hp);
  }else{
    curacion = -(0.55*hp);
  }

  let evento = ` ${jugador.getNombre()} finds a first aid kit with bandages and heals their wounds.`;
  console.log(evento);

  console.log(` HP antes: ${hp}`);
  hp += 0.55*hp;
  jugador.setHP(Math.min(maxHP,~~(hp)));
  console.log(` HP luego: ${jugador.getHP()}`);

  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [curacion], []);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[17] = async (jugador, players, arma, maxHP, req, channel)=>{
  if(jugador.hp == maxHP){return null};

  let hp = jugador.getHP();

  let curacion;
  if(maxHP - jugador.hp < 0.05*hp){
    curacion = -(maxHP - jugador.hp);
  }else{
    curacion = -(0.05*hp);
  }

  let evento = ` ${jugador.getNombre()} drinks water`;
  console.log(evento);

  console.log(` HP antes: ${hp}`);
  hp += 0.05*hp;
  jugador.setHP(Math.min(maxHP,~~(hp)));
  console.log(` HP luego: ${jugador.getHP()}`);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [curacion], []);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[18] = async (jugador, players, arma, maxHP, req, channel)=>{
  return null;
  let copia = copiarJugadores(players);
  let idVictima = buscarJugadorConArma(jugador, copia);
  if(idVictima==null){return null;}
 
  let jugadorOriginal = buscarPorID(idVictima, players);
  if(jugadorOriginal==null){ 
  return null;
  }

  let agregaS = pluralS(jugadorOriginal.getArma());

  let evento =` ${jugador.getNombre()} tells to ${jugadorOriginal.getNombre()} “Look there, your waifu!” and when ${jugadorOriginal.getNombre()} turns around, they steals their ${jugadorOriginal.getArma()["name"]}.`;
  console.log(evento);

  jugador.arma=jugadorOriginal.getArma();
  jugadorOriginal.arma=null;

  let variable = "tiene arma";
  if(jugadorOriginal.getArma() == null){
      variable = "vacio";
  }
  
  console.log("\x1b[33m%s\x1b[0m",` ${jugadorOriginal.getNombre()} - ${variable} // ${jugador.getNombre()} - ${jugador.getArma()["nombre"]}`);

  let json = createObject(evento, 
                         [jugador.getNombre(), jugadorOriginal.getNombre()],
                         [jugador.getID(),     jugadorOriginal.getID()], 
                         [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players),
                          await cargarAvatar(jugadorOriginal.getFoto(),jugadorOriginal.getID(),jugadorOriginal.getTieneOtraFoto(),req.body.channel.guild_id,players)],
                         [jugador.getHP(),     jugadorOriginal.getHP()],
                         [0,0],
                         []);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1x1",channel);
  return 1;
}


eventosLootGenerico[19] = async (jugador, players, arma, maxHP, req, channel)=>{
  let copia = copiarJugadores(players);
  let idVictima = buscarJugadorConArma(jugador, copia);
  if(idVictima==null){return null;}
  
  let jugadorOriginal = buscarPorID(idVictima, players);
  if(jugadorOriginal==null){ 
  return null;
  }

  let elLa1 = pronombreElLaLosLas(jugadorOriginal.getArma());

  //console.log(JSON.stringify(jugadorOriginal));
  let evento = ` ${jugador.getNombre()} took ${jugadorOriginal.getNombre()}'s ${jugadorOriginal.getArma()["name"]} away while they were distracted.`; 
  console.log(evento);
 
  jugador.arma=jugadorOriginal.getArma();
  jugadorOriginal.arma=null;

  let variable = "tiene arma";
  if(jugadorOriginal.getArma() == null){
      variable = "vacio";
  }
  
  console.log("\x1b[33m%s\x1b[0m",` ${jugadorOriginal.getNombre()} - ${variable} // ${jugador.getNombre()} - ${jugador.getArma()["nombre"]}`);

  let json = createObject(evento, 
                         [jugador.getNombre(), jugadorOriginal.getNombre()],
                         [jugador.getID(),     jugadorOriginal.getID()], 
                         [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players),
                          await cargarAvatar(jugadorOriginal.getFoto(),jugadorOriginal.getID(),jugadorOriginal.getTieneOtraFoto(),req.body.channel.guild_id,players)],
                         [jugador.getHP(),     jugadorOriginal.getHP()],
                         [0,0],
                         []);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1x1",channel);
  return 1;
}

eventosLootGenerico[20] = async (jugador, players, arma, maxHP, req, channel)=>{
  return null;
  let pronombre = englishPronoun(arma);

  jugador.setArma(arma);
  let evento =` ${jugador.getNombre()} found ${pronombre}${arma["name"]}. Woah.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[21] = async (jugador, players, arma, maxHP, req, channel)=>{
  let pronombre = englishPronoun(arma);
  //jugador.setArma(arma);
  let evento =` ${jugador.getNombre()} sees ${pronombre}${arma["name"]}. But since they don't know how to use it, they leave it there.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[22] = async (jugador, players, arma, maxHP, req, channel)=>{
  return null;
  let pronombre = pronombreUnUnaUnosUnas(arma);

  jugador.setArma(arma);
  let evento =` ${jugador.getNombre()} compró ${pronombre} ${arma["nombre"]} con wabis, diría que ahora es pobre, pero siempre lo fue.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[23] = async (jugador, players, arma, maxHP, req, channel)=>{
  return null;
  let pronombre = pronombreUnUnaUnosUnas(arma);

  jugador.setArma(arma);
  let evento =` ${jugador.getNombre()} encuentra ${pronombre} ${arma["nombre"]} y se confía. "Esto está ganado"`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[24] = async (jugador, players, arma, maxHP, req, channel)=>{
  let pronombre = englishPronoun(arma);

  jugador.setArma(arma);
  let evento =` ${jugador.getNombre()} picks up ${pronombre}${arma["name"]}`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[25] = async (jugador, players, arma, maxHP, req, channel)=>{
  return null;
  let agregaS = pluralS(arma);

  jugador.setArma(arma);
  let evento =` ${jugador.getNombre()}: "Jamás podrán vencerme a mi y a mi${agregaS} ${arma["nombre"]}"`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[26] = async (jugador, players, arma, maxHP, req, channel)=>{
  let agregaS = pluralS(arma);

  jugador.setArma(arma);
  let evento =` ${jugador.getNombre()} looks happy with their ${arma["name"]}.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[27] = async (jugador, players, arma, maxHP, req, channel)=>{
  return null;
  if(jugador.getArma() == null){return null}
  let pronombre1 = pronombreUnUnaUnosUnas(arma);
  let elLa1 = pronombreElLaLosLas(arma);
  let arma2 = generarArma();
  let pronombre2 = pronombreUnUnaUnosUnas(arma2);
  let agregaS = pluralS(jugador.getArma());
  let evento = `Un hada se le aparece a ${jugador.getNombre()} en un estanque. "¿Dejaste caer ${pronombre1} ${arma["nombre"]} o ${pronombre2} ${arma2["nombre"]}?". ${jugador.getNombre()} le miente al hada y esta se enoja, así que le quita su${agregaS} ${jugador.getArma()["nombre"]}`
  jugador.setArma(null);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);   
  console.log(json.evento);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[28] = async (jugador, players, arma, maxHP, req, channel)=>{
  return null;
  let agregaS = pluralS(arma);

  jugador.setArma(arma);
  let evento =` ${jugador.getNombre()} está listo para ganar esta wea con su${agregaS} ${arma["nombre"]}`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[29] = async (jugador, players, arma, maxHP, req, channel)=>{
  return null;
  if(jugador.getArma() == null){return null}
  let pronombre1 = pronombreUnUnaUnosUnas(arma);
  let armaRobada;
  let arma2 = generarArma();
  let pronombre2 = pronombreUnUnaUnosUnas(arma2);
  let evento = `Un hada se le aparece a ${jugador.getNombre()} en un estanque. "¿Dejaste caer ${pronombre1} ${arma["nombre"]} o ${pronombre2} ${arma2["nombre"]}?". ${jugador.getNombre()}: "no dejé caer ninguna". El hada se alegra por la honestidad de ${jugador.getNombre()} así que le regala ambas.`

  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);   
  console.log(json.evento);
  //channel.send(json.evento);
  
   if(arma["danio"] > arma2["danio"]){
    armaRobada = arma;
  }else{
    armaRobada = arma2;
  }

  jugador.setArma(armaRobada);

  let elLaLosLas = pronombreElLaLosLas(armaRobada);

  let extra2 = `${jugador.getNombre()} decide quedarse con ${elLaLosLas.toLowerCase()} ${armaRobada["nombre"]}`;
  console.log(extra2);
  json.extra.push(extra2);

  
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[30] = async (jugador, players, arma, maxHP, req, channel)=>{
  return null;
  let pronombre = pronombreUnUnaUnosUnas(arma);

  jugador.setArma(arma);
  let evento =` En una plaza mística, ${jugador.getNombre()} encuentra una fuente decorada con monedas y objetos olvidados. Al arrojar un Wabi, una luz brillante ilumina la fuente y, cuando se despeja el agua, se revela ${pronombre} ${arma["nombre"]}`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[31] = async (jugador, players, arma, maxHP, req, channel)=>{
  let pronombre = englishPronoun(arma);
  
  jugador.setArma(arma);
  let evento =` ${jugador.getNombre()} picks up ${pronombre}${arma["name"]}. How did nobody notice it before?`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[32] = async (jugador, players, arma, maxHP, req, channel)=>{
  return null;
  let pronombre = pronombreUnUnaUnosUnas(arma);
  let oAosas = pronombreOAOsAs(arma);
  
  jugador.setArma(arma);
  let evento =` ${jugador.getNombre()} se lleva ${pronombre} ${arma["nombre"]} de un airdrop.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}

eventosLootGenerico[33] = async (jugador, players, arma, maxHP, req, channel)=>{
  let pronombre = englishPronoun(arma);
  
  jugador.setArma(arma);
  let evento =` ${jugador.getNombre()} picks up ${pronombre}${arma["name"]} from the ground.`;
  console.log(evento);
  let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,players)], [jugador.getHP()], [0], []);
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  return 1;
}



export {eventosLootGenerico};
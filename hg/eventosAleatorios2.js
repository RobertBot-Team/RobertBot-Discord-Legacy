/*------------ eventos aleatorios 2 ------------*/
import { buscarTeamDe2, copiarJugadores, buscarPorID, danioExtra, buscarJugador, buscarJugadorOtroTeam, buscarJugadorDistintoA2, buscarUnMuerto, shuffleJugadores, porcentajeDeVidaRandom,pluralS,pronombreElLaLosLas } from "./utils.js";
import {Team,Jugador} from "./clases.js";
import {createObject, funcionDePrueba, cargarAvatar, funcionCrearImagen, funcionCrearImagenCero, muerteJugador} from "../utils.js";

var eventosAleatorios2 = [];

eventosAleatorios2[0] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento = ` ${jugador.getNombre()} se cansó del juego, se escapó de la arena y se convirtió en un monje tibetano.`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    jugador.setHP(0);
    jugador.alive = -1;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

   
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  
    return 1;
}

eventosAleatorios2[1] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento = ` ${jugador.getNombre()} es atacado por onis salvajes y muere en el acto.`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);

    return 1;
}

eventosAleatorios2[2] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento = ` ${jugador.getNombre()} es atacado por onis salvajes y logra escapar por los pelos.`; 
    console.log(evento);

    let danio = danioExtra(50,200);
  
    let cuantoquita;
    if(jugador.getHP()<danio){
      cuantoquita = jugador.getHP()-1;
    }else{
      cuantoquita = danio;
    }
  
    jugador.setHP(Math.max(1,jugador.getHP() - danio)); 
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [jugador.getHP()], [cuantoquita], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
     if(jugador.getHP()<=0){
      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    }

    return 1;
}

eventosAleatorios2[3] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento =` ${jugador.getNombre()} se tropieza con una ramita. Maldita naturaleza!!`; 
    console.log(evento);
    
    let danio = danioExtra(50,150);
  
    let cuantoquita;
    if(jugador.getHP()<danio){
      cuantoquita = jugador.getHP();
    }else{
      cuantoquita = danio;
    }
  
    jugador.setHP(Math.max(0,jugador.getHP() - danio)); 
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    if(jugador.getHP()<=0){
        jugador.alive=0;
    }
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [jugador.getHP()], [cuantoquita], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
     if(jugador.getHP()<=0){
      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    }
  
    return 1;
}

eventosAleatorios2[4] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento =` Cae un rayo del cielo y le viene a pegar justo JUSTO a ${jugador.getNombre()}.`; 
    console.log(evento);
    
    let danio = danioExtra(200,400);
  
    let cuantoquita;
    if(jugador.getHP()<danio){
      cuantoquita = jugador.getHP();
    }else{
      cuantoquita = danio;
    }
  
    jugador.setHP(Math.max(0,jugador.getHP() - danio)); 
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    if(jugador.getHP()<=0){
        jugador.alive=0;
    }
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [jugador.getHP()], [cuantoquita], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
     if(jugador.getHP()<=0){
      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    }
  
    return 1;
}

eventosAleatorios2[5] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    const paises = ["argentina","bolivia","brasil","colombia","venezuela","ecuador","chile","uruguay","paraguay"];
    let pais;
    var rand = parseInt(Math.random()*paises.length);  
    pais = paises[rand];

    let evento =` ${jugador.getNombre()} intentó investigar los casos de corrupción en ${pais}`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
    jugador.setHP(0);
    jugador.alive = 0;

    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  

      await muerteJugador(req.body.channel.guild_id, channel, playersReal);


    return 1;
}

eventosAleatorios2[6] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento =` Comienza a granizar y ${jugador.getNombre()} no encontró refugio.`; 
    console.log(evento);
    
    let danio = danioExtra(100,350);
  
    let cuantoquita;
    if(jugador.getHP()<danio){
      cuantoquita = jugador.getHP();
    }else{
      cuantoquita = danio;
    }
  
    jugador.setHP(Math.max(0,jugador.getHP() - danio)); 
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    if(jugador.getHP()<=0){
        jugador.alive=0;
    }
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [jugador.getHP()], [cuantoquita], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
     if(jugador.getHP()<=0){
      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    }
  
    return 1;
}

eventosAleatorios2[7] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento =` ${jugador.getNombre()} accidentalmente pisa una mina de la segunda guerra mundial.`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);

    return 1;
}

eventosAleatorios2[8] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento = ` ${jugador.getNombre()} resbala con una cáscara de banana. Qué cliché.`; 
    console.log(evento);
    
    let danio = danioExtra(20,100);
  
    let cuantoquita;
    if(jugador.getHP()<danio){
      cuantoquita = jugador.getHP();
    }else{
      cuantoquita = danio;
    }
  
    jugador.setHP(Math.max(0,jugador.getHP() - danio)); 
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    if(jugador.getHP()<=0){
        jugador.alive=0;
    }
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [jugador.getHP()], [cuantoquita], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
     if(jugador.getHP()<=0){
      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    }
  
    return 1;
}

eventosAleatorios2[9] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;

    let copiaJugadores = copiarJugadores(players);
    let jugadorDos = buscarJugador(jugador,copiaJugadores);
    if(jugadorDos==null){return null;}
  
    let evento = ` ${jugadorDos.getNombre()} le robó una cajita de pollux a ${jugador.getNombre()}. ${jugador.getNombre()} se entristeció y murió de tristeza.`; 
    console.log(evento);
    
    let json = createObject(evento, 
                            [jugador.getNombre(), jugadorDos.getNombre()],
                            [jugador.getID(),    jugadorDos.getID()],
                            [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal),
                            await cargarAvatar(jugadorDos.getFoto(),jugadorDos.getID(),jugadorDos.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)],
                            [0, jugadorDos.getHP()], [jugador.getHP(),0], []);
  
  

    jugadorDos.kills++;
    let extra2 = `Kills de ${jugadorDos.getNombre()}: ${jugadorDos.getKills()}.`;
    console.log(extra2);
    json.extra.push(extra2);

    //channel.send(json.evento);
    funcionCrearImagen(json,"1x1",channel);
    
  
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  
 
      await muerteJugador(req.body.channel.guild_id, channel, playersReal);


    return 1;
}

eventosAleatorios2[10] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento =` ${jugador.getNombre()} murió de cringe.`; 
    console.log(evento);
    
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  
   
      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    

    return 1;
}

eventosAleatorios2[11] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento =` ${jugador.getNombre()} vió una pelicula de K.`; 
    console.log(evento);
    
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  
     
      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    

    return 1;
}

eventosAleatorios2[12] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento =` ${jugador.getNombre()} intentó nadar en lava.`; 
    console.log(evento);
    
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  
 
      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    

    return 1;
}

eventosAleatorios2[13] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento =` ${jugador.getNombre()} pensó que podía atravesar un lago nadando. Pero no sabía nadar.`; 
    console.log(evento);
    
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  

      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    

    return 1;
}

eventosAleatorios2[14] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento =` ${jugador.getNombre()} jura que fue atacado por un misterioso tulanejo, pero nadie le cree.`; 
    console.log(evento);
    
    let danio = danioExtra(50,200);
  
    let cuantoquita;
    if(jugador.getHP()<danio){
      cuantoquita = jugador.getHP();
    }else{
      cuantoquita = danio;
    }
  
    jugador.setHP(Math.max(5,jugador.getHP() - danio)); 
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [jugador.getHP()], [cuantoquita], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
     if(jugador.getHP()<=0){
      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    }

    return 1;
}

eventosAleatorios2[15] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento =` ${jugador.getNombre()} decide acabar con su sufrimiento.`; 
    console.log(evento);
    
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  
      await muerteJugador(req.body.channel.guild_id, channel, playersReal);

    return 1;
}

eventosAleatorios2[16] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    if(jugador.getArma()==null){return null;}

    let plural = pluralS(jugador.getArma());
  
    let evento = ` ${jugador.getNombre()} juega con su${plural} ${jugador.getArma()["nombre"]} y se corta un dedo.`;
    console.log(evento);
    
    let danio = danioExtra(100,400);
  
    let cuantoquita;
    if(jugador.getHP()<danio){
      cuantoquita = jugador.getHP();
    }else{
      cuantoquita = danio;
    }
  
    jugador.setHP(Math.max(0,jugador.getHP() - danio)); 
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
    
    if(jugador.getHP()<=0){
        jugador.alive=0;
    }
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [jugador.getHP()], [cuantoquita], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
     if(jugador.getHP()<=0){
      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    }
  
    return 1;
}

eventosAleatorios2[17] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{

    let copiaJugadores = copiarJugadores(players);
    let jugadorDos = buscarJugador(jugador,copiaJugadores);
    if(jugadorDos==null){return null;}
  
    let evento = ` ${jugador.getNombre()} le pide por favor a ${jugadorDos.getNombre()} que lo mate. ${jugadorDos.getNombre()} se rehúsa.`;
    console.log(evento);
  
    let json = createObject(evento, 
                            [jugador.getNombre(), jugadorDos.getNombre()],
                            [jugador.getID(),    jugadorDos.getID()],
                            [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal),
                            await cargarAvatar(jugadorDos.getFoto(),jugadorDos.getID(),jugadorDos.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)],
                            [jugador.getHP(), jugadorDos.getHP()], [0,0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1x1",channel);

    
    return 1;
}

eventosAleatorios2[18] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento = ` ${jugador.getNombre()} fue absorbido por un agujero negro.`;
    console.log(evento);
    
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  
      await muerteJugador(req.body.channel.guild_id, channel, playersReal);

    return 1;
}

eventosAleatorios2[19] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento = ` ${jugador.getNombre()} pasó a un mundo mejor.`;
    console.log(evento);
    
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  
      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    

    return 1;
}

eventosAleatorios2[20] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento = ` A ${jugador.getNombre()} lo atropelló un camión y ya debe andar en algun mundo con elfas tetonas y animales que hablan.`;
    console.log(evento);
    
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  

      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    

    return 1;
}

eventosAleatorios2[21] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento = `Avión`; 
    console.log(evento);
  
    let json = createObject(evento, [], [], [], [], [], [":airplane:"]);
    //channel.send(json.evento);
    //funcionCrearImagen(json,"0",channel);
    funcionCrearImagenCero(json,channel,'https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/avion.png?v=1684641135480');

    return 1;
}

eventosAleatorios2[22] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento = ` ${jugador.getNombre()} tocó antimateria y se desintegró.`; 
    console.log(evento);
    
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  

      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    

    return 1;
}

eventosAleatorios2[23] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento = ` ${jugador.getNombre()} se pregunta ¿qué hago aquí?`;
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);

    return 1;
}

eventosAleatorios2[24] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento =` ${jugador.getNombre()} intenta trepar un árbol para tener ventaja táctica. Pero se resbala y se cae.`; 
    console.log(evento);
    
    let danio = danioExtra(100,250);
  
    let cuantoquita;
    if(jugador.getHP()<danio){
      cuantoquita = jugador.getHP();
    }else{
      cuantoquita = danio;
    }
  
    jugador.setHP(Math.max(0,jugador.getHP() - danio)); 
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
    
    if(jugador.getHP()<=0){
        jugador.alive=0;
    }
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [jugador.getHP()], [cuantoquita], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
     if(jugador.getHP()<=0){
      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    }
  
    return 1;
}

eventosAleatorios2[25] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento =` ${jugador.getNombre()} muere por la abstinencia de WiFi.`; 
    console.log(evento);
    
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  

      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    

    return 1;
}

eventosAleatorios2[26] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento =` ${jugador.getNombre()} no quiere ganar esta partida del bot y decide suicidarse.`; 
    console.log(evento);
    
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  

      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    

    return 1;
}

eventosAleatorios2[27] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento =` ${jugador.getNombre()} entró a Wabi Sabi y se murió del asco.`; 
    console.log(evento);
    
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  

      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    

    return 1;
}

eventosAleatorios2[28] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento =` ${jugador.getNombre()} se pone a jugar LOL y K lo mata personalmente.`; 
    console.log(evento);
    
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  
      await muerteJugador(req.body.channel.guild_id, channel, playersReal);

    return 1;
}

eventosAleatorios2[29] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{

    let copiaJugadores = copiarJugadores(players);
    let jugadorDos = buscarJugadorOtroTeam(jugador,copiaJugadores);
    if(jugadorDos==null){return null;}

  
    let evento =` ${jugador.getNombre()} ve a ${jugadorDos.getNombre()}. ${jugador.getNombre()} se aleja porque le da miedo.`; 
    console.log(evento);
  
    let json = createObject(evento, 
                            [jugador.getNombre(), jugadorDos.getNombre()],
                            [jugador.getID(),    jugadorDos.getID()],
                            [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal),
                            await cargarAvatar(jugadorDos.getFoto(),jugadorDos.getID(),jugadorDos.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)],
                            [jugador.getHP(), jugadorDos.getHP()], [0,0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1x1",channel);

    return 1;
}

eventosAleatorios2[30] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento =` A ${jugador.getNombre()} se le fue el internet y se desconectó del juego. LATAM moment`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
    jugador.setHP(0);
    jugador.alive = -1;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

      await muerteJugador(req.body.channel.guild_id, channel, playersReal);

  
    return 1;
}

eventosAleatorios2[31] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento =` ${jugador.getNombre()} murió. F en el chat.`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  
  
      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  

    return 1;
}

eventosAleatorios2[32] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento =` ${jugador.getNombre()} decide matarse por si había apostado algo muy feo (no recuerda)`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  

      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    

    return 1;
}

eventosAleatorios2[33] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento =` Se extiende un incendio repentino, y ${jugador.getNombre()} no logró escapar.`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  

      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    

    return 1;
}

eventosAleatorios2[34] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento =` Cambiaron las reglas del juego, y el área en que estaba ${jugador.getNombre()} quedó fuera de los límites. ${jugador.getNombre()} fue descalificado.`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    
    jugador.setHP(0);
    jugador.alive = -1;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  

      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    

    return 1;
}

eventosAleatorios2[35] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    if(jugador.getArma() == null){return null;}
    let elLa1 = pronombreElLaLosLas(jugador.getArma());
    let plural = pluralS(jugador.getArma());
  
    let evento =` Una gaviota le roba ${elLa1.toLowerCase()} ${jugador.getArma()["nombre"]} a ${jugador.getNombre()}.`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    
    let extra1 = `${jugador.getNombre()} perdió su${plural} ${jugador.getArma()["nombre"]}`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);

    return 1;
}

eventosAleatorios2[36] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento =` ${jugador.getNombre()} se cayó de las escaleras llevando un paraguas...`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  

      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    

    return 1;
}

eventosAleatorios2[37] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento =` Surge una fiebre de disco repentina y todos se ponen a bailar incontroladamente. ${jugador.getNombre()} muere del cansancio.`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  

      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    

    return 1;
}

eventosAleatorios2[38] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento =` A ${jugador.getNombre()} lo ataca un pulpo, ya se a donde va esto...`; 
    console.log(evento);
    
    let danio = danioExtra(10,50);
  
    let cuantoquita;
    if(jugador.getHP()<danio){
      cuantoquita = jugador.getHP();
    }else{
      cuantoquita = danio;
    }
  
    jugador.setHP(Math.max(0,jugador.getHP() - danio)); 
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    if(jugador.getHP()<=0){
        jugador.alive=0;
    }
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [jugador.getHP()], [cuantoquita], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
     if(jugador.getHP()<=0){
      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    }
  
    return 1;
}

eventosAleatorios2[39] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    if(jugador.getArma() == null){return null;}
    let plural = pluralS(jugador.getArma());
  
    let evento =` ${jugador.getNombre()} no quiere pelear más y prende fuego su${plural} ${jugador.getArma()["nombre"]}.`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    
    let extra1 = `${jugador.getNombre()} perdió su${plural} ${jugador.getArma()["nombre"]}`;
    console.log(extra1);
    json.extra.push(extra1);
    jugador.setArma(null);

    return 1;
}

eventosAleatorios2[40] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento = ` ${jugador.getNombre()} se fue de vacaciones, hay se ven bitches 😎`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    jugador.setHP(0);
    jugador.alive = -1;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  

      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    

    return 1;
}

eventosAleatorios2[41] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento = ` ${jugador.getNombre()} decide regalar todos sus wabis, qué caritativo!`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);

    return 1;
}

eventosAleatorios2[42] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let jugadorDos = buscarJugador(jugador,players);
    if(jugadorDos==null){return null;}
  
    let evento = ` ${jugador.getNombre()} vio la biblioteca de Steam de ${jugadorDos.getNombre()} y quedó horrorizado. Huyó del lugar para curar sus traumas.`;
    console.log(evento);
    let json = createObject(evento, 
                            [jugador.getNombre(), jugadorDos.getNombre()],
                            [jugador.getID(),     jugadorDos.getID()],
                            [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal),
                             await cargarAvatar(jugadorDos.getFoto(),jugadorDos.getID(),jugadorDos.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)],
                            [jugador.getHP(),     jugadorDos.getHP()], [0,0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1x1",channel);

    return 1;
}

eventosAleatorios2[43] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento = ` ${jugador.getNombre()} consiguió +15 social credits 👍`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);

    return 1;
}

eventosAleatorios2[44] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento = ` ${jugador.getNombre()} perdió -1000 social credits 👎`;
    console.log(evento);
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);

    return 1;
}

eventosAleatorios2[45] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let hp;
    let evento = ` ${jugador.getNombre()} se lastima con las espinas de una flor.`;
    console.log(evento);
    hp = jugador.getHP();
    console.log(` HP antes: ${hp}`);
  
    let cuantoquita;
    if(jugador.getHP()<0.06*hp){
      cuantoquita = jugador.getHP();
    }else{
      cuantoquita = 0.06*hp;
    }
  
    hp -= 0.06*hp;
    jugador.setHP(Math.max(1,~~(hp)));

    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [jugador.getHP()], [cuantoquita], []);

    console.log(` HP luego: ${jugador.getHP()}`);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
     if(jugador.getHP()<=0){
      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    }
  
    return 1;
}

eventosAleatorios2[46] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let hp;
    let evento = ` ${jugador.getNombre()} come algunas bayas silvestres. El problema es que eran tóxicas.`;
    console.log(evento);
    hp = jugador.getHP();
    console.log(` HP antes: ${hp}`);
  
    let cuantoquita;
    if(jugador.getHP()<0.18*hp){
      cuantoquita = jugador.getHP();
    }else{
      cuantoquita = 0.18*hp;
    }
  
    hp -= 0.18*hp;
    jugador.setHP(Math.max(1,~~(hp)));
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [jugador.getHP()], [cuantoquita], []);  

    console.log(` HP luego: ${jugador.getHP()}`);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
     if(jugador.getHP()<=0){
      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    }
  
    return 1;
}

eventosAleatorios2[47] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento =`${jugador.getNombre()} se puso un Padoru antes de diciembre y todo el server se unió para matarlo.`; 
    console.log(evento);
  
    let json = createObject(evento, 
                            [jugador.getNombre()],
                            [jugador.getID()],
                            [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)],
                            [0],
                            [jugador.getHP()], []);
  
    jugador.setHP(0);
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
    jugador.alive=0;
  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);
  

      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    
  return 1;
}

eventosAleatorios2[48] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento =` Se encontró el cuerpo sin vida de ${jugador.getNombre()}. ¿Qué le habrá pasado?`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);


    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    
       
    return 1;
}

eventosAleatorios2[49] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento = `juan.`; 
    console.log(evento);
  
    let json = createObject(evento, [], [], [], [], [], []);
    //channel.send(json.evento);
    //funcionCrearImagen(json,"0",channel);
    funcionCrearImagenCero(json,channel,'https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/juan.png?v=1684641371195');

    return 1;
}

eventosAleatorios2[50] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento = `CUBA`; 
    console.log(evento);
  
    let json = createObject(evento, [], [], [], [], [], []);
    //channel.send(json.evento);
    //funcionCrearImagen(json,"0",channel);
    funcionCrearImagenCero(json,channel,'https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/cuba.png?v=1684641570169');

    return 1;
}

eventosAleatorios2[51] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento = `nambre`; 
    console.log(evento);
  
    let json = createObject(evento, [], [], [], [], [], ["<:NambreMexicano:977699179059105792>"]);
    //channel.send(json.evento);
    //funcionCrearImagen(json,"0",channel);
    funcionCrearImagenCero(json,channel,'https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/nambre.png?v=1684641766467');

    return 1;
}

eventosAleatorios2[52] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento =` ${jugador.getNombre()} se muere de forma misteriosa.. :thinking:`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);


    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    
       
    return 1;
}

eventosAleatorios2[53] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento =` Hubo una ola de calor y ${jugador.getNombre()} no soportó.`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);


    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    
       
    return 1;
}

eventosAleatorios2[54] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento =` ${jugador.getNombre()} consigue un kit de primeros auxilios!! Lamentablemente no sabe usarlo.`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
           
    return 1;
}

eventosAleatorios2[55] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento =` ${jugador.getNombre()} tropieza y muere. Haber tenido piernas útiles.`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);


    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    
       
    return 1;
}

eventosAleatorios2[56] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento =` ${jugador.getNombre()} muere de aburrimiento.`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);


    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    
       
    return 1;
}

eventosAleatorios2[57] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento =` ${jugador.getNombre()} se hace comunista. Muere de hambre.`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);


    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    
       
    return 1;
}

eventosAleatorios2[58] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento =` ${jugador.getNombre()} se nacionaliza Español, se da de alta como autónomo y muere instantáneamente. Casualidad?`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);


    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    
       
    return 1;
}

eventosAleatorios2[59] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento =` ${jugador.getNombre()} mezcló pastillas para dormir con alcohol y F.`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);


    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    
       
    return 1;
}

eventosAleatorios2[60] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento =` La Vara de la Verdad cae del cielo, y le parte la cabeza a ${jugador.getNombre()}`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);


    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    
       
    return 1;
}

eventosAleatorios2[61] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento =` ${jugador.getNombre()} pidió ayuda a un Mod. ${jugador.getNombre()} murió esperando`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);


    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    
       
    return 1;
}

eventosAleatorios2[62] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento =` ${jugador.getNombre()} habló de LOL y Arcane en el canal general. No se supo más de él.`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);


    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    
       
    return 1;
}

eventosAleatorios2[63] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento =` Se ofrece una recompensa de 1 Wabi extra para el banco, para quien mate a ${jugador.getNombre()}!!`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [jugador.getHP()], [0], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
           
    return 1;
}


eventosAleatorios2[64] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento =` ${jugador.getNombre()} despreocupadamente va entre la maleza y ve una planta venenosa. ${jugador.getNombre()} intenta recogerla pero tuvo 0 de iq y la tocó con las manos desprotegidas, así que se hace daño.`; 
    console.log(evento);
  
    let danio = danioExtra(10,80);

    let cuantoquita;
    if(jugador.getHP()<danio){
      cuantoquita = jugador.getHP();
    }else{
      cuantoquita = danio;
    }
  
    jugador.setHP(Math.max(0,jugador.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

    let json = createObject(evento, [jugador.getNombre()],
                          [jugador.getID()],
                          [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, playersReal)],
                          [jugador.getHP()], [cuantoquita], []);
  
  
  console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  if(jugador.getHP()<=0){
    jugador.alive=0;
  }

  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);

   if(jugador.getHP()<=0){
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }
           
  return 1;  
  
}

eventosAleatorios2[65] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
  
  let evento = `${jugador.getNombre()} se encuentra con un cucco. Y tuvo la pésima idea de golpearlo. En consecuencia, el cucco llama toda una bandada y le dejan moribundo.`;
  console.log(evento);


  let danio = danioExtra(400,600);

  let cuantoquita;
  if(jugador.getHP()<danio){
    cuantoquita = jugador.getHP();
  }else{
    cuantoquita = danio;
  }

  jugador.setHP(Math.max(1,jugador.getHP() - danio)); //le quita de vida el danio base de su arma. si queda en negativo pone 0

  let json = createObject(evento, [jugador.getNombre()],
                          [jugador.getID()],
                          [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id, playersReal)],
                          [jugador.getHP()], [cuantoquita], []);


  console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);
  if(jugador.getHP()<=0){
      jugador.alive=0;
  }

  //channel.send(json.evento);
  funcionCrearImagen(json,"1",channel);

   if(jugador.getHP()<=0){
    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
  }
  
  return 1;
}

eventosAleatorios2[66] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento =`${jugador.getNombre()} murió en una estampida de ñus`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);


    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    
       
    return 1;
}

eventosAleatorios2[67] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento =` ${jugador.getNombre()} decide comer una planta que se ve bien sabrosa y bien roja. No será venenosa, no?`; 
    console.log(evento);
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [0], [jugador.getHP()], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
    
    jugador.setHP(0);
    jugador.alive = 0;
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);


    await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    
       
    return 1;
}

eventosAleatorios2[68] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
    let evento =` ${jugador.getNombre()} deja picarse por una araña para convertirse en Spider-${jugador.getNombre()}. No funciona.`; 
    console.log(evento);
    
    let danio = danioExtra(100,250);
  
    let cuantoquita;
    if(jugador.getHP()<danio){
      cuantoquita = jugador.getHP();
    }else{
      cuantoquita = danio;
    }
  
    jugador.setHP(Math.max(0,jugador.getHP() - danio)); 
    console.log(` HP de ${jugador.getNombre()}: ${jugador.getHP()}`);

    if(jugador.getHP()<=0){
        jugador.alive=0;
    }
  
    let json = createObject(evento, [jugador.getNombre()], [jugador.getID()], [await cargarAvatar(jugador.getFoto(),jugador.getID(),jugador.getTieneOtraFoto(),req.body.channel.guild_id,playersReal)], [jugador.getHP()], [cuantoquita], []);
    //channel.send(json.evento);
    funcionCrearImagen(json,"1",channel);
  
     if(jugador.getHP()<=0){
      await muerteJugador(req.body.channel.guild_id, channel, playersReal);
    }
  
    return 1;
}

eventosAleatorios2[69] = async (jugador, players, maxHP, teams, req, channel, playersReal)=>{
  return null;
    let evento = `Es el cumpleaños de taco. ¡Feliz cum! 🎉`;
    console.log(evento);
  
    let json = createObject(evento, [], [], [], [], [], [""]);
    //channel.send(json.evento);
    //funcionCrearImagen(json,"0",channel);
    funcionCrearImagenCero(json,channel,'https://cdn.glitch.global/4c4df917-cd9b-4528-909a-8c1293d76759/tacocum.png?v=1694143016637');

    return 1;
}


export {eventosAleatorios2};
import {Jugador} from "../../hg/clases.js";
import {
  agregarJugador,
  mostrarEvento,
  funcionEventos,
  funcionRetornaJson,
  reiniciarContador,
  reiniciarJugadoresFake,
  calcularVivos,
  sleep,
  copiarJugadores,
  formarEquipo,
  imprimirTeams,
  rondaLoot,
  rondaAtaque,
  createObject,
  mostrarTeams,
  randomHexColor,
  shuffleJugadores,
  chequearSonMismoEquipo,
  generarEmbedTexto,
  generarEmbedDescripcion,
  limpiarTeams,
  encontrarGanador,
  crearJugadoresFake,
  setearPistolaATodos,
  displayTeamByTeam,
  displayWinnerTeam,
  cantidadArmas,
  sumarProbabilidad
} from "../../utils.js";
import {
  InteractionResponseType,
  InteractionResponseFlags,
  MessageComponentTypes,
  ButtonStyleTypes
} from "discord-interactions";
import {
  Client,
  Message,
  EmbedBuilder
} from "discord.js"
import { mostrarKills } from "../../hg/utils.js"
import {GlobalFonts} from "@napi-rs/canvas";
import { getPartidaActiva, setPartidaActiva } from "../../app.js"
const guildGameStates = new Map();

function getGuildIdFromReq(req) {
  return req.body.guild_id || req.body.channel?.guild_id || "global";
}

function getGuildGameState(guildId) {
  if (!guildGameStates.has(guildId)) {
    guildGameStates.set(guildId, {
      players: [],
      modoK: 0,
      slowMode: false,
    });
  }

  return guildGameStates.get(guildId);
}

export function resetGuildGameState(guildId) {
  if (!guildId) return;

  const gameState = getGuildGameState(guildId);
  gameState.players = [];
  gameState.modoK = 0;
  gameState.slowMode = false;
}

//const client = new Client();

export async function messagePlay_1(req, res, client){
  const guildId = getGuildIdFromReq(req);
  const gameState = getGuildGameState(guildId);
  const players = gameState.players;
  let newPlayer;
  let color;
  let nick;
  let jugadoresUnidos = "";
    
  if (req.body.member.nick == null){
    if(req.body.member.user.global_name == null) {
      //el nombre en la guild y global son nulos. Uso su username
      nick = req.body.member.user.username;
    }else{
      //el nombre en la guild es nulo, uso su nombre global
      nick = req.body.member.user.global_name;
    }
  }else{
      //uso el nombre en la guild
    nick = req.body.member.nick;
  }
  //console.log(req.body);
  
  const channel = client.channels.cache.get(`${req.body.channel_id}`);
  
  //channel.send(`Hay ${cantidadArmas()} armas registradas.`);
    //console.dir(GlobalFonts.families, {'maxArrayLength': null});
    //console.dir(JSON.stringify(GlobalFonts.families), {'maxArrayLength': null});
  //console.log(req.body);
      if(req.body.member.user.avatar != null){
          if(req.body.member.avatar != null){
            newPlayer = new Jugador(nick,req.body.member.user.id,req.body.member.avatar); 
            newPlayer.tieneOtraFoto = 1;
          }else{ 
            newPlayer = new Jugador(nick,req.body.member.user.id,req.body.member.user.avatar);
          }
      }//si tiene discriminador 0, es que ya migro al username nuevo
      else if(req.body.member.user.discriminator == 0){  //esto despues va a cambiar porque lo van a quitar el 0
          let user_id = BigInt(req.body.member.user.id);
          let avatar = ((user_id >> 22n) % 6n).toString();
             
          //let avatar = (((user_id)>>22)%6).toString();
            
          newPlayer = new Jugador(nick,req.body.member.user.id,avatar);
             
        //sino, tiene username viejo con discriminador de 4 digitos
        }else{
          let lastNumber = (req.body.member.user.discriminator).slice(-1);
          lastNumber = (parseInt(lastNumber)%5).toString();
          //console.log(`>>numero ${lastNumber}`);
          newPlayer = new Jugador(nick,req.body.member.user.id,lastNumber);
      }
  
      console.log(newPlayer);
      let resultado = agregarJugador(res, newPlayer, players);
  
      for(let i=0; i<players.length; i++){
        let jugadorIterado = players[i];
        jugadoresUnidos = jugadoresUnidos.concat(jugadorIterado.getNombre());
        jugadoresUnidos = jugadoresUnidos.concat('\n');
      }
  
      if (resultado === 1) {
        color = randomHexColor();
        channel.messages.edit(req.body.message.id,{embeds: 
              [ new EmbedBuilder()
              .setColor(color)
              .setDescription(`${players.length} Jugadores unidos\n ${jugadoresUnidos}`)
              .setTimestamp()
              .setFooter({ text: 'RobertBot 2023 — Lynn & Yugito', iconURL: 'https://i.imgur.com/eg58vNp.png'})
              ],
        });        
        
        await res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: { content: `⚔ ${nick} se unió a la batalla` }, // 🎃
        });
      }
      else{
        await res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {content: `Ya te has unido a esta partida`,
                flags: InteractionResponseFlags.EPHEMERAL
                }
        })
      }
};

export async function messagePlay_2(req, res, client){
  const guildId = getGuildIdFromReq(req);
  const gameState = getGuildGameState(guildId);
  const players = gameState.players;
  let resultado;
  let component;
  let color;
  let embed;
  let embed2;

  const channel = client.channels.cache.get(`${req.body.channel_id}`);
    //console.log(req.body);
      if(req.body.message.interaction.user.id === req.body.member.user.id && players.length >= 2 && gameState.modoK == 0){      //luego >=2
        
        let modo = (gameState.slowMode) ? "Modo Rapido" : "Modo Lento";
        
        channel.messages.edit(req.body.message.id,{components: [
            {
              type: MessageComponentTypes.ACTION_ROW,
              components: [
                {
                  type: MessageComponentTypes.BUTTON,
                  custom_id: "my_button",
                  label: "Unirse a la batalla",
                  style: ButtonStyleTypes.PRIMARY,
                  disabled: true
                },
                {
                  type: MessageComponentTypes.BUTTON,
                  custom_id: "my_button_begin",
                  label: "Comenzar",
                  style: ButtonStyleTypes.SUCCESS,
                  disabled: true
                },
                {
                  type: MessageComponentTypes.BUTTON,
                  custom_id: "my_button_slow_mode",
                  label: modo,
                  style: ButtonStyleTypes.SECONDARY,
                  disabled: true
                }
              ],
            },
          ]});
        
          await res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {content: `Se viene la batalla` },
          });
        
        setPartidaActiva(2, guildId);
        
        /*for(let i=0; i<.., i++){
          component = ..
          component.disabled = true;
        }*/
      
        /////////////////////////////////
                 

        
       //////////////////////////////////
        
        let cantidadConVida = calcularVivos(players);
        console.log(`Hay ${cantidadConVida} jugadores con vida`);
        /*channel.send({
              embeds: [ new EmbedBuilder()
              .setColor(color)
              .setTitle(`Hay ${cantidadConVida} jugadores con vida.`)
              .setFooter({ text: 'RobertBot 2023 — Lynn & Yugito', iconURL: 'https://i.imgur.com/AfFp7pu.png'})
            ]
         }); */
        color = randomHexColor();
        embed = generarEmbedTexto(color, `Hay ${cantidadConVida} jugadores con vida`);
        channel.send({embeds:[embed]});
        
        //Inicio del juego

        //ronda de formar equipos
        //crearJugadoresFake(players);
        
        let copia1 = copiarJugadores(players)
        formarEquipo(copia1);
        
        
        await sleep(2000);
        
        //mostrar equipos 1 a 1
        await displayTeamByTeam(channel,req.body.channel.guild_id,players);
        
        //mostrar equipos
        imprimirTeams();
        mostrarTeams(channel,req.body.channel.guild_id,players);        
        
        cantidadConVida = calcularVivos(players);
        
        //primera ronda de loot
        //for(let loop = 0;loop<5;loop++){
        for(let i=0;i<cantidadConVida;i++){
            await sleep(10000);
            let jugador = players[i];
            let evento = `Ronda inicial de Loot - ${jugador.getNombre()}`;
//            let json = createObject(evento, [jugador], [jugador.getID()], /* Modificar */[1] /*   */, [jugador.getHP], [0], [""], [""]);
//            let message = channel.send(json.evento);
            await sleep(2000);
            //message.edit("Editado");
            console.log(evento);
            await rondaLoot(req, jugador, players, channel, 1, gameState.slowMode);
            }
        await sleep(2000); 
        mostrarTeams(channel, req.body.channel.guild_id,players);
        //}
        
        color = randomHexColor();
        cantidadConVida = calcularVivos(players);
        //console.log();
        /*channel.send({
                embeds: [ new EmbedBuilder()
                .setColor(color)
                .setTitle(`Quedan ${cantidadConVida} jugadores con vida.`)
                .setFooter({ text: 'RobertBot 2023 — Lynn & Yugito', iconURL: 'https://i.imgur.com/AfFp7pu.png'})
              ]
        });*/
        await sleep(2000); 
        embed = generarEmbedTexto(color, "Queda" + (cantidadConVida != 1 ? "n" : "") + ` ${cantidadConVida} jugador`+ (cantidadConVida != 1 ? "es" : "") + " con vida.");
        channel.send({embeds:[embed]});

        let nroRonda = 1;
        let nroEvento = 0;
        let danioSuma = 50;
        
        //setearPistolaATodos(players);
        
        await sleep(10000);
        whileGrande:
        while(cantidadConVida > 1 ){
          console.log(`• Ronda ${nroRonda}.`);
          shuffleJugadores(players);      //por cada ronda, reordeno la lista para que ataquen en orden random
          for(let j=0;j<players.length;j++){

              cantidadConVida = calcularVivos(players);

              if(cantidadConVida == 3){   //si quedan 3 jugadores y son del mismo team, termina el juego
                  let check = chequearSonMismoEquipo(players);
                  if(check.length == 3){
                      await sleep(3000);
                      displayWinnerTeam(channel,check[0].getTeam(),req.body.channel.guild_id,players);
                      await sleep(3000);
                      console.log(` Los ganadores son ${check[0].getNombre()}, ${check[1].getNombre()} y ${check[2].getNombre()}`);  //despues hacerlo imagen
                      embed = generarEmbedTexto(color, ` Los ganadores son ${check[0].getNombre()}, ${check[1].getNombre()} y ${check[2].getNombre()}`);
                      channel.send({embeds:[embed]});
                      let finalKills = mostrarKills(players);
                      embed2 = generarEmbedDescripcion(color, finalKills);
                      await sleep(1000);
                      channel.send({embeds:[embed2]});              
                      break whileGrande;
                  }

              }    

              if(cantidadConVida == 2){   //si quedan 2 jugadores y son del mismo team, termina el juego
                  let check = chequearSonMismoEquipo(players);
                  if(check.length == 2){
                      await sleep(3000);
                      displayWinnerTeam(channel,check[0].getTeam(),req.body.channel.guild_id,players);
                      await sleep(3000);
                      console.log(` Los ganadores son ${check[0].getNombre()} y ${check[1].getNombre()}`);
                      embed = generarEmbedTexto(color, ` Los ganadores son ${check[0].getNombre()} y ${check[1].getNombre()}`);
                      channel.send({embeds:[embed]});
                     let finalKills = mostrarKills(players);
                      embed2 = generarEmbedDescripcion(color, finalKills);
                      await sleep(1000);
                      channel.send({embeds:[embed2]});
                      break whileGrande;
                  }

              }    
              let jugador = players[j];
              if(cantidadConVida <= 1){
                break whileGrande;
              }
              if(jugador.alive == 1){
              await sleep(9000);  //este se hace siempre    10000
                  nroEvento++;
                  console.log(`Turno de ${jugador.getNombre()}`);
                let probabilidad = Math.random();
                
                  if(jugador.getArma() == null){
                  //si el jugador no tiene arma, tiene 80% de chances de lootear
                    if(probabilidad < 0.80){
                      console.log(`> Loot`);
                      await rondaLoot(req, jugador, players, channel, nroEvento, gameState.slowMode);
                    }else{
                      console.log(`> Ataque`);
                      let copia = copiarJugadores(players);
                      await rondaAtaque(req, jugador, copia, cantidadConVida, channel, players, nroEvento, gameState.slowMode);  //le mando una copia para que los que atacan sigan un orden, pero los que reciben el ataque sean random                      
                    }
                  }
                  //si el jugador tiene arma, tiene 80% de chances de atacar
                  else{
                    if(probabilidad < 0.2 - sumarProbabilidad(nroEvento, players.length, 20, gameState.slowMode)){
                      console.log(`> Loot`);
                      await rondaLoot(req, jugador, players, channel, nroEvento, gameState.slowMode);
                    }else{
                      console.log(`> Ataque`);
                      let copia = copiarJugadores(players);
                      await rondaAtaque(req, jugador, copia, cantidadConVida, channel, players, nroEvento, gameState.slowMode);  //le mando una copia para que los que atacan sigan un orden, pero los que reciben el ataque sean random
                    }
                  }
              }
          }
          nroRonda++;
          
          cantidadConVida = calcularVivos(players);
          
          /*await sleep(1000); 
          console.log(`Quedan ${cantidadConVida} jugadores con vida.`);
          embed = generarEmbedTexto(color, `Quedan ${cantidadConVida} jugadores con vida.`);
          channel.send({embeds:[embed]});

          imprimirTeams();
          mostrarTeams(channel, req.body.channel.guild_id);*/

          if(nroRonda>=4){        //mas daño hacen las armas cuantas mas rondas hayan pasado
              for(let contador = 0;contador<players.length;contador++){
                  let playerRonda = players[contador];
                  if(playerRonda.getArma() && (playerRonda.getAlive()==1)){
                      console.log(`danio antes ${playerRonda.getArma()["danio"]}`);
                      playerRonda.getArma().danio += danioSuma + (players.length*10);
                      console.log(`danio despues ${playerRonda.getArma()["danio"]}`);
                  }
              }
              danioSuma+=25;
          }
    }//fin whileGrande
        
    if(cantidadConVida==1){
      await sleep(3000);
      let ganador = encontrarGanador(players);
      displayWinnerTeam(channel,ganador.getTeam(),req.body.channel.guild_id,players);
      await sleep(3000);
      console.log(` El ganador es ${ganador.getNombre()}`);
      embed = generarEmbedTexto(color, ` El ganador es ${ganador.getNombre()}`);
      channel.send({embeds:[embed]}); 
      let finalKills = mostrarKills(players);
      embed2 = generarEmbedDescripcion(color, finalKills);
      await sleep(1000);
      channel.send({embeds:[embed2]});
    }

    if(cantidadConVida<1){
      await sleep(3000);
      console.log(` Parece que esta vez no hubo ganadores...`);
      embed = generarEmbedTexto(color, ` Parece que esta vez no hubo ganadores...`);
      channel.send({embeds:[embed]});   
      await sleep(3000);
      let finalKills = mostrarKills(players);
      console.log(`final kills: ${finalKills}`);
      embed2 = generarEmbedDescripcion(color, finalKills);
      console.log(`embed2: ${embed2}`)
      channel.send({embeds:[embed2]});
    }

    //mostrarResultados(players);
        
        
    console.log(`Total de eventos = ${nroEvento}`); 
        
       /* do{
          await sleep(2000);
          //resultado = funcionEventos();
          resultado = funcionRetornaJson();
          //console.log(req.body);
          channel.send(mostrarEvento(req,resultado,channel));
        }           
        while (resultado != -1);
        */

        
        //vaciar variables
        //players = [];
        resetGuildGameState(guildId);
        reiniciarContador();
        reiniciarJugadoresFake();
        limpiarTeams();
        setPartidaActiva(0, guildId);
        
        /////////////////////////////////
        
        
      }else if(req.body.message.interaction.user.id === req.body.member.user.id && players.length < 2) {
          await res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {content: `Se necesitan al menos 2 jugadores para comenzar.`,
            flags: InteractionResponseFlags.EPHEMERAL
            }
          })
        
      }else if(req.body.message.interaction.user.id != req.body.member.user.id && req.body.member.user.id == "435210238711300107"){
        gameState.modoK = 1;
        await res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {content: `Modo K activado.`,
            flags: InteractionResponseFlags.EPHEMERAL
            }
        })
      }else if(req.body.message.interaction.user.id === req.body.member.user.id && players.length >= 1 && gameState.modoK == 1){
            
                
        let modo = (gameState.slowMode) ? "Modo Rapido" : "Modo Lento";
        
        channel.messages.edit(req.body.message.id,{components: [
            {
              type: MessageComponentTypes.ACTION_ROW,
              components: [
                {
                  type: MessageComponentTypes.BUTTON,
                  custom_id: "my_button",
                  label: "Unirse a la batalla",
                  style: ButtonStyleTypes.PRIMARY,
                  disabled: true
                },
                {
                  type: MessageComponentTypes.BUTTON,
                  custom_id: "my_button_begin",
                  label: "Comenzar",
                  style: ButtonStyleTypes.SUCCESS,
                  disabled: true
                },
                {
                  type: MessageComponentTypes.BUTTON,
                  custom_id: "my_button_slow_mode",
                  label: modo,
                  style: ButtonStyleTypes.SECONDARY,
                  disabled: true
                }
              ],
            },
          ]});
        
        await res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {content: `Comienza la partida` },
        });
        
        setPartidaActiva(2, guildId);
        color = randomHexColor();
        embed = generarEmbedTexto(color, `Todos se mataron y K ganó`);
        setPartidaActiva(0, guildId);
        resetGuildGameState(guildId);
        reiniciarContador();
        reiniciarJugadoresFake();
        limpiarTeams();
        channel.send({embeds:[embed]});
      
      }else{
        await res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {content: `No tienes permisos para comenzar la batalla.`,
            flags: InteractionResponseFlags.EPHEMERAL
            }
          })
        
      }
      //console.log(req.body.message);
      //console.log(req.body.member);
};

export async function messageSlowMode(req,res,client){
  const guildId = getGuildIdFromReq(req);
  const gameState = getGuildGameState(guildId);
  if(req.body.message.interaction.user.id === req.body.member.user.id){
    gameState.slowMode = !gameState.slowMode;
            
        const channel = client.channels.cache.get(`${req.body.channel_id}`);
    
        let modo = (gameState.slowMode) ? "Modo Rapido" : "Modo Lento";
        
        channel.messages.edit(req.body.message.id,{components: [
            {
              type: MessageComponentTypes.ACTION_ROW,
              components: [
                {
                  type: MessageComponentTypes.BUTTON,
                  custom_id: "my_button",
                  label: "Unirse a la batalla",
                  style: ButtonStyleTypes.PRIMARY,
                },
                {
                  type: MessageComponentTypes.BUTTON,
                  custom_id: "my_button_begin",
                  label: "Comenzar",
                  style: ButtonStyleTypes.SUCCESS,
                },
                {
                  type: MessageComponentTypes.BUTTON,
                  custom_id: "my_button_slow_mode",
                  label: modo,
                  style: ButtonStyleTypes.SECONDARY,
                }
              ],
            },
          ]});
    
    await res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {content: `Se cambió el modo a Modo ` + (gameState.slowMode ? "Lento" : "Rapido")},
    });
    
  }else{
      await res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {content: `No tienes permisos para cambiar el modo de la partida.`,
          flags: InteractionResponseFlags.EPHEMERAL
          }
        })
    }
}

export async function messageJoin(req, res, client){
let guildId = getGuildIdFromReq(req);
  const gameState = getGuildGameState(guildId);
  const players = gameState.players;
let newPlayer;
  let nick;
  if (req.body.member.nick == null){
    nick = req.body.member.user.username;
  }else{
    nick = req.body.member.nick;
  }
    //console.log(req.body);
      if(req.body.member.user.avatar != null){
          if(req.body.member.avatar != null){
            newPlayer = new Jugador(nick,req.body.member.user.id,req.body.member.avatar); 
            newPlayer.tieneOtraFoto = 1;
          }else{ 
            newPlayer = new Jugador(nick,req.body.member.user.id,req.body.member.user.avatar);
          }
      }else{
        let lastNumber = (req.body.member.user.discriminator).slice(-1);
        lastNumber = (parseInt(lastNumber)%5).toString();
        console.log(`>>numero ${lastNumber}`);
        newPlayer = new Jugador(nick,req.body.member.user.id,lastNumber);
      }

      console.log(newPlayer);
      let resultado = agregarJugador(res, newPlayer, players);
      if (resultado === 1) {
        await res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: { content: `⚔ ${nick} se unió a la batalla` }, //🎃
        });
      }
      else{
        await res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {content: `Ya te has unido a esta partida`,
                flags: InteractionResponseFlags.EPHEMERAL
                }
        })
      }  
}

export function limpiarPlayers(){
  for (const gameState of guildGameStates.values()) {
    gameState.players = [];
  }
  console.log("Limpiando players en todas las guilds...");
}

export function limpiarPlayersPorGuild(guildId){
  if (!guildId) return;
  const gameState = getGuildGameState(guildId);
  gameState.players = [];
  console.log(`Limpiando players de guild ${guildId}...`);
}
import "dotenv/config";
import express from "express";
import {
  InteractionType,
  InteractionResponseType,
  InteractionResponseFlags,
  MessageComponentTypes,
  ButtonStyleTypes,
} from "discord-interactions";
import {
  VerifyDiscordRequest,
  getRandomEmoji,
  DiscordRequest,
  mostrarEvento,
  funcionRetornaJson,
} from "./utils.js";
import { 
  getShuffledOptions, 
  getResult 
} from "./game.js";
import {
  // CHALLENGE_COMMAND,
  // TEST_COMMAND,
  PLAY_COMMAND,
  //LYNN_COMMAND,
  STOP_COMMAND,
  //JOIN_COMMAND,
  HasGlobalCommands,
  HasGuildCommands
} from "./commands.js";
import {
  Jugador
} from "./hg/clases.js";
import {lynn} from "./controllers/commands/lynn.js"
import {challenge} from "./controllers/commands/challenge.js"
import {test} from "./controllers/commands/test.js"
import {play, partidaEnCurso} from "./controllers/commands/play.js"
import {stop} from "./controllers/commands/stop.js"
import {
  messageChallenge_1,
  messageChallenge_2
} from "./controllers/message_component/challenge.js";
import {messageLynn} from "./controllers/message_component/lynn.js";
import {
  messagePlay_1,
  messagePlay_2,
  messageJoin,
  messageSlowMode
} from "./controllers/message_component/play.js";
import { SlashCommandBuilder } from 'discord.js';

// Create an express app
const app = express();
// Get port, or default to 80
const PORT = process.env.PORT || 80;
// Parse request body and verifies incoming requests using discord-interactions package
app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));

// Store for in-progress games. In production, you'd want to use a DB
const activeGames = {};

const partidaActivaPorGuild = new Map();

function getGuildIdFromBody(body) {
  return body?.guild_id || body?.channel?.guild_id || "global";
}

export function setPartidaActiva(n, guildId = "global"){
  partidaActivaPorGuild.set(guildId, n);
}

export function getPartidaActiva(guildId = "global"){
  return partidaActivaPorGuild.get(guildId) || 0;
}

/**
 * Interactions endpoint URL where Discord will send HTTP requests
 */


app.post("/interactions", async function (req, res) {
  // Interaction type and data
  const { type, id, data } = req.body;

  /**
   * Handle verification requests
   */
  if (type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  }

  /**
   * Handle slash command requests
   * See https://discord.com/developers/docs/interactions/application-commands#slash-commands
   */
  if (type === InteractionType.APPLICATION_COMMAND) {
    const { name } = data;
    const guildId = getGuildIdFromBody(req.body);
    switch(name){
      // case "test":  // "test" guild command
      //   return test(req, res);  // Send a message into the channel where command was triggered from
      //   break;
      case "play":
        //console.log(version);
        if(getPartidaActiva(guildId) == 0){
        return await play(req, res, client);
        }else{
        return partidaEnCurso(req, res, client);
        }
        break;
        
     // case "lynn":
     //   const channel = client.channels.cache.get(`${req.body.channel_id}`);
     //   //channel.send('mensaje de prueba');
     //   return lynn(req, res);
     //   break;
      // case "join":
      //   return messageJoin(req, res, client);
      //   break;
      // case "challenge":    // "challenge" guild command
      //   if(id){
      //     return challenge(activeGames, id, req, res);
      //   }
      //  break;
      case "stop":
        await stop(req, res, client);        
        break;
        
    };
  }
  /**
   * Handle requests from interactive components
   * See https://discord.com/developers/docs/interactions/message-components#responding-to-a-component-interaction
   */
  if (type === InteractionType.MESSAGE_COMPONENT) {
    // custom_id set in payload when sending message component
    const componentId = data.custom_id;
    const userId = req.body.member.user.id;
    switch(componentId){
      // case componentId.startsWith("accept_button_") ? componentId : "":
      //   messageChallenge_1(componentId, req, res);
      //   break;
      // case componentId.startsWith("select_choice_") ? componentId : "":
      //   messageChallenge_2(componentId, activeGames, data, req, res);
      //   break;
       case componentId.startsWith("other_button_") ? componentId : "":
         messageLynn(req, res, client); 
         break;
      case "my_button":
        messagePlay_1(req, res, client);
        break;
      case "my_button_begin":
        await messagePlay_2(req, res, client);
        break;
      case "my_button_slow_mode":
        await messageSlowMode(req, res, client);
        break;
    }
  }
  
});



import { Client, Events, GatewayIntentBits, version } from "discord.js";
import Canvas from "@napi-rs/canvas";

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });  //GatewayIntentBits.MessageContent

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);



app.listen(PORT, () => {
  console.log("Listening on port", PORT);
  
  // Register global commands so the bot works in any server where it is invited.
  HasGlobalCommands(process.env.APP_ID, [
    //TEST_COMMAND,
    PLAY_COMMAND,
    //LYNN_COMMAND,
    STOP_COMMAND,
        // CHALLENGE_COMMAND,
    //JOIN_COMMAND
  ]);
});

export function returnClient(){
  return client;
}


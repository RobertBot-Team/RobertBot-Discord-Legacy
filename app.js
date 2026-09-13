/* global process */
import "dotenv/config";
import express from "express";
import {
  InteractionType,
  InteractionResponseType,
  InteractionResponseFlags,
  verifyKeyMiddleware,
  // MessageComponentTypes,
  // ButtonStyleTypes,
} from "discord-interactions";
// import {
// getShuffledOptions,
// getResult
// } from "./game.js";
import {
  // CHALLENGE_COMMAND,
  // TEST_COMMAND,
  PLAY_COMMAND,
  //LYNN_COMMAND,
  STOP_COMMAND,
  HELP_COMMAND,
  //JOIN_COMMAND,
  HasGlobalCommands,
  // HasGuildCommands
} from "./commands.js";
// import {
//   Jugador
// } from "./hg/clases.js";
// import { lynn } from "./controllers/commands/lynn.js"
// import { challenge } from "./controllers/commands/challenge.js"
// import { test } from "./controllers/commands/test.js"
import { play, partidaEnCurso } from "./controllers/commands/play.js"
import { stop } from "./controllers/commands/stop.js"
import { help } from "./controllers/commands/help.js"
// import {
//   messageChallenge_1,
//   messageChallenge_2
// } from "./controllers/message_component/challenge.js";
import { messageLynn } from "./controllers/message_component/lynn.js";
import {
  messagePlay_1,
  messagePlay_2,
  // messageJoin,
  messageSlowMode
} from "./controllers/message_component/play.js";
// import { SlashCommandBuilder } from 'discord.js';
import { DEFAULT_PLAY_LANGUAGE, getPlayLanguageFromOptions } from "./controllers/play_i18n.js";
import logger from "./logger.js";
import { Api } from '@top-gg/sdk';

// Create an express app
const app = express();
// Get port, or default to 80
const PORT = process.env.PORT || 80;
// Parse request body and verifies incoming requests using discord-interactions package

// Store for in-progress games. In production, you'd want to use a DB
// const activeGames = {};

const partidaActivaPorGuild = new Map();
const gameCreatorPorGuild = new Map();
const playLanguagePorGuild = new Map();
const collectedMessagePorGuild = new Map();
const gameChannelPorGuild = new Map();
const timerPorGuild = new Map();

function getGuildIdFromBody(body) {
  return body?.guild_id || body?.channel?.guild_id || "global";
}

export function setPartidaActiva(n, guildId = "global") {
  partidaActivaPorGuild.set(guildId, n);
}

export function getPartidaActiva(guildId = "global") {
  return partidaActivaPorGuild.get(guildId) || 0;
}

export function setGameCreator(userId, guildId = "global") {
  gameCreatorPorGuild.set(guildId, userId);
}

export function getGameCreator(guildId = "global") {
  return gameCreatorPorGuild.get(guildId);
}

export function clearGameCreator(guildId = "global") {
  gameCreatorPorGuild.delete(guildId);
}

export function setGuildPlayLanguage(language, guildId = "global") {
  playLanguagePorGuild.set(guildId, language || DEFAULT_PLAY_LANGUAGE);
}

export function getGuildPlayLanguage(guildId = "global") {
  return playLanguagePorGuild.get(guildId) || DEFAULT_PLAY_LANGUAGE;
}

export function clearGuildPlayLanguage(guildId = "global") {
  playLanguagePorGuild.delete(guildId);
}

export function setCollectedMessagePorGuild(message, guildId = "global") {
  collectedMessagePorGuild.set(guildId, message);
}

export function getCollectedMessagePorGuild(guildId = "global") {
  return collectedMessagePorGuild.get(guildId);
}

export function clearCollectedMessagePorGuild(guildId = "global") {
  collectedMessagePorGuild.delete(guildId);
}

export function setGameChannelPorGuild(channel, guildId = "global") {
  gameChannelPorGuild.set(guildId, channel);
}

export function getGameChannelPorGuild(guildId = "global") {
  return gameChannelPorGuild.get(guildId);
}

export function clearGameChannelPorGuild(guildId = "global") {
  gameChannelPorGuild.delete(guildId);
}

export function setTimerPorGuild(timer, guildId = "global") {
  timerPorGuild.set(guildId, timer);
}

export function getTimerPorGuild(guildId = "global") {
  return timerPorGuild.get(guildId);
}

export function clearTimerPorGuild(guildId = "global") {
  timerPorGuild.delete(guildId);
}

/**
 * Interactions endpoint URL where Discord will send HTTP requests
 */


app.post("/interactions", verifyKeyMiddleware(process.env.PUBLIC_KEY), async function (req, res) {
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
    const appPermissions = req.body.app_permissions;
    if (appPermissions) {
      const bitfield = new PermissionsBitField(BigInt(appPermissions));
      if (!bitfield.has(PermissionsBitField.Flags.SendMessages) || !bitfield.has(PermissionsBitField.Flags.ReadMessageHistory) || !bitfield.has(PermissionsBitField.Flags.ViewChannel)) {
        return res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: "❌ To function properly, I need the following permissions in this channel: **Send Messages**, **Read Message History**, and **View Channel**.",
            flags: InteractionResponseFlags.EPHEMERAL
          }
        });
      }
    }

    const { name } = data;
    const guildId = getGuildIdFromBody(req.body);
    switch (name) {
      // case "test":  // "test" guild command
      //   return test(req, res);  // Send a message into the channel where command was triggered from
      //   break;
      case "play":
        if (getPartidaActiva(guildId) === 0) {
          const options = req.body.data?.options || [];
          const selectedLanguage = getPlayLanguageFromOptions(options);
          const autoStartOption = options.find((option) => option?.name === "auto_start");
          const autoStartDelay = {
            "300000": 300000,
            "600000": 600000,
            "1800000": 1800000,
            "3600000": 3600000,
            "10800000": 10800000,
            "21600000": 21600000,
            "43200000": 43200000,
            "86400000": 86400000,
          }[autoStartOption?.value] || 600000;

          return await play(req, res, client, selectedLanguage, autoStartDelay);
        } else {
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
        if(getPartidaActiva(guildId) !== 0){
          await stop(req, res, client);
        }else{
          res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
              content: "No game in progress/No hay una partida en curso.",
              flags: InteractionResponseFlags.EPHEMERAL
            }
          });
        }
        break;
      case "help":
        const helpLanguage = getPlayLanguageFromOptions(req.body.data?.options || []);
        return await help(req, res, helpLanguage);
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
    switch (componentId) {
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
        await messagePlay_2(req, res, client, req.body.message.id);
        break;
      case "my_button_slow_mode":
        await messageSlowMode(req, res, client);
        break;
    }
  }

});

app.use(express.json());



import { Client, Events, GatewayIntentBits, version, PermissionsBitField } from "discord.js";
// import Canvas from "@napi-rs/canvas";

process.on("unhandledRejection", (err) => {
  logger.error({
    err
  }, "Unhandled Promise Rejection");
});

process.on("uncaughtException", (err) => {
  logger.error({
    err
  }, "Uncaught Exception");
});

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });  //GatewayIntentBits.MessageContent

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
  console.log(`Servers: ${c.guilds.cache.size}`);
  c.guilds.cache.forEach((guild) => {
    console.log(`- ${guild.name} (${guild.id})`);
  });
});

// Log in to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);

logger.info("Bot starting...");

const api = new Api(process.env.TOPGG_TOKEN);

client.on('guildCreate', () => {
    api.postMetrics({
        serverCount: client.guilds.cache.size
    });
});

client.on('guildDelete', () => {
    api.postMetrics({
        serverCount: client.guilds.cache.size
    });
});

app.listen(PORT, () => {
  console.log("Listening on port", PORT);

  // Register global commands so the bot works in any server where it is invited.
  HasGlobalCommands(process.env.APP_ID, [
    //TEST_COMMAND,
    HELP_COMMAND,
    PLAY_COMMAND,
    //LYNN_COMMAND,
    STOP_COMMAND,
    // CHALLENGE_COMMAND,
    //JOIN_COMMAND
  ]);
});

export function returnClient() {
  return client;
}


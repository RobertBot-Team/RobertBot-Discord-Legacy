import { getRPSChoices } from './game.js';
import { capitalize, DiscordRequest } from './utils.js';

export async function HasGuildCommands(appId, guildId, commands) {
  if (appId === '') return;

  commands.forEach((c) => HasGuildCommand(appId, guildId, c));
}

export async function HasGlobalCommands(appId, commands) {
  if (appId === '') return;

  commands.forEach((c) => HasGuildCommand(appId, null, c));
}

// Checks for a command
async function HasGuildCommand(appId, guildId, command) {
  const endpoint = getCommandsEndpoint(appId, guildId);

  try {
    const res = await DiscordRequest(endpoint, { method: 'GET' });
    const data = await res.json();

    if (data) {
      const installedNames = data.map((c) => c['name']);
      // This is just matching on the name, so it's not good for updates
      if (!installedNames.includes(command['name'])) {
        console.log(`Installing "${command['name']}"`);
        InstallGuildCommand(appId, guildId, command);
      } else {
        console.log(`Updating "${command['name']}" command`);
        InstallGuildCommand(appId, guildId, command);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

// Installs a command
export async function InstallGuildCommand(appId, guildId, command) {
  const endpoint = getCommandsEndpoint(appId, guildId);
  // install command
  try {
    await DiscordRequest(endpoint, { method: 'POST', body: command });
  } catch (err) {
    console.error(err);
  }
}

function getCommandsEndpoint(appId, guildId) {
  if (guildId) {
    return `applications/${appId}/guilds/${guildId}/commands`;
  }

  return `applications/${appId}/commands`;
}

// Get the game choices from game.js
function createCommandChoices() {
  const choices = getRPSChoices();
  const commandChoices = [];

  for (let choice of choices) {
    commandChoices.push({
      name: capitalize(choice),
      value: choice.toLowerCase(),
    });
  }

  return commandChoices;
}

// Simple test command
export const TEST_COMMAND = {
  name: 'test',
  description: 'Basic guild command',
  type: 1,
};

// Begin a new game
export const PLAY_COMMAND = {
  name: 'play',
  description: 'Comenzar una partida nueva de los Juegos del Hambre.',
  options: [
    {
      type: 3,
      name: 'idioma',
      description: 'Idioma de la partida',
      required: true,
      choices: [
        {
          name: 'Espanol',
          value: 'es',
        },
        {
          name: 'English',
          value: 'en',
        },
      ],
    },
  ],
  type: 1,
};

export const JOIN_COMMAND = {
  name: 'join',
  description: 'Unirse a una partida en curso',
  type: 1,
};

// Command containing options
export const CHALLENGE_COMMAND = {
  name: 'challenge',
  description: 'Challenge to a match of rock paper scissors',
  options: [
    {
      type: 3,
      name: 'object',
      description: 'Pick your object',
      required: true,
      choices: createCommandChoices(),
    },
  ],
  type: 1,
};

export const LYNN_COMMAND = {
  name: 'lynn',
  description: 'Prueba',
  type: 1
};

export const STOP_COMMAND = {
  name: 'stop',
  description: 'Detiene una partida iniciada inmediatamente.',
  type: 1
}
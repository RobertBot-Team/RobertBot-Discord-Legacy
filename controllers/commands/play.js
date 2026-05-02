import {
  InteractionResponseType,
  MessageComponentTypes,
  ButtonStyleTypes,
  InteractionResponseFlags
} from "discord-interactions"
import {  
  randomHexColor,
  sleep,
  limpiarTeams,
  reiniciarContador,
  reiniciarJugadoresFake
} from "../../utils.js"
import { limpiarPlayersPorGuild } from "../message_component/play.js"
import { EmbedBuilder } from "discord.js";
import { clearGuildPlayLanguage, getGuildPlayLanguage, getPartidaActiva, setGuildPlayLanguage, setPartidaActiva, setGameCreator, clearGameCreator } from "../../app.js"
import { getModeLabel, tPlay } from "../play_i18n.js";

export function play4(req, res, partidaActiva, client){
  let color = randomHexColor();
  if(partidaActiva.activa == 0){
    
      partidaActiva.activa = 1;
    //console.log(req.body);
      //setTimeout(desactivarComando(req,client),3000);
        // Send a message into the channel where command was triggered from
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: "Se ha iniciado una nueva partida de Los Juegos del Hambre",
          
          // Buttons are inside of action rows
          components: [
            {
              type: MessageComponentTypes.ACTION_ROW,
              components: [
                {
                  type: MessageComponentTypes.BUTTON,
                  // Value for your app to identify the button
                  custom_id: "my_button",
                  label: "Unirse a la batalla",
                  style: ButtonStyleTypes.PRIMARY
                },
                {
                  type: MessageComponentTypes.BUTTON,
                  // Value for your app to identify the button
                  custom_id: "my_button_begin",
                  label: "Comenzar",
                  style: ButtonStyleTypes.SUCCESS
                }
              ],
            },
            ],
              
              embeds: [ new EmbedBuilder()
              .setColor(color)
              .setDescription(`Jugadores unidos`)
              .setFooter({ text: 'RobertBot 2023 — Lynn & Yugito', iconURL: 'https://i.imgur.com/eg58vNp.png'})
            ],

        },
      });
    
      //enviar
    
  } else {
    
        res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {content: `Ya hay una partida en curso`,
                flags: InteractionResponseFlags.EPHEMERAL
                }
        })

  }
    //await setTimeout(10000);
   
/*  const timeout = 3000;
  const buttonIndex = data.components.findIndex(component => component.custom_id === 'my_button');
    setTimeout(() => {
      // disable the button
      console.log(buttonIndex);
        data.components[buttonIndex].disabled = true;
      }, timeout);*/
}

export function play6(req, res, partidaActiva, client){
  let color = randomHexColor();
  const channel = client.channels.cache.get(`${req.body.channel_id}`);
  if(partidaActiva.activa == 0){
    
      partidaActiva.activa = 1;
    //console.log(req.body);
      //setTimeout(desactivarComando(req,client),3000);
        // Send a message into the channel where command was triggered from
      res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: "Se ha iniciado una nueva partida de Los Juegos del Hambre",

        },
      })
      
      channel.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          components: [
            {
              type: MessageComponentTypes.ACTION_ROW,
              components: [
                {
                  type: MessageComponentTypes.BUTTON,
                  // Value for your app to identify the button
                  custom_id: "my_button",
                  label: "Unirse a la batalla",
                  style: ButtonStyleTypes.PRIMARY
                },
                {
                  type: MessageComponentTypes.BUTTON,
                  // Value for your app to identify the button
                  custom_id: "my_button_begin",
                  label: "Comenzar",
                  style: ButtonStyleTypes.SUCCESS
                }
              ],
            },
            ],
              
              embeds: [ new EmbedBuilder()
              .setColor(color)
              .setDescription(`Jugadores unidos`)
              .setFooter({ text: 'RobertBot 2023 — Lynn & Yugito', iconURL: 'https://i.imgur.com/eg58vNp.png'})
            ]}
          );
    
      //enviar
    
  } else {
    
        res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {content: `Ya hay una partida en curso`,
                flags: InteractionResponseFlags.EPHEMERAL
                }
        })

  }
    //await setTimeout(10000);
   
/*  const timeout = 3000;
  const buttonIndex = data.components.findIndex(component => component.custom_id === 'my_button');
    setTimeout(() => {
      // disable the button
      console.log(buttonIndex);
        data.components[buttonIndex].disabled = true;
      }, timeout);*/
}

const sendMessage = async (res, message) => {
  try {
    const sentMessage = await new Promise((resolve, reject) => {
      res.status(200).send(message, (error, sentMessage) => {
        if (error) {
          reject(error);
        } else {
          resolve(sentMessage);
        }
      });
    });
    const messageId = sentMessage.id;
    console.log(`Sent message with ID ${messageId}`);
  } catch (error) {
    console.error(`Error sending message: ${error}`);
  }
}


///ESTE SI!!!!!!!!!!!!!!
///
///
///
///
export async function play(req, res, client, selectedLanguage){
  const channel = client.channels.cache.get(`${req.body.channel_id}`);
  const guildId = req.body.guild_id || req.body.channel?.guild_id || channel?.guildId || "global";
  const language = selectedLanguage || getGuildPlayLanguage(guildId);
  let color = randomHexColor();
  let idTimeout;

  setGuildPlayLanguage(language, guildId);

  let messagee = res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: tPlay(language, "game_started"),
      
      // Buttons are inside of action rows
      components: [
        {
          type: MessageComponentTypes.ACTION_ROW,
          components: [
            {
              type: MessageComponentTypes.BUTTON,
              // Value for your app to identify the button
              custom_id: "my_button",
              label: tPlay(language, "join_button"),
              style: ButtonStyleTypes.PRIMARY
            },
            {
              type: MessageComponentTypes.BUTTON,
              // Value for your app to identify the button
              custom_id: "my_button_begin",
              label: tPlay(language, "begin_button"),
              style: ButtonStyleTypes.SUCCESS
            },
            {
              type: MessageComponentTypes.BUTTON,
              // Value for your app to identify the button
              custom_id: "my_button_slow_mode",
              label: getModeLabel(language, false),
              style: ButtonStyleTypes.SECONDARY
            }
          ],
        },
        ],
          
          embeds: [ new EmbedBuilder()
          .setColor(color)
          .setDescription(tPlay(language, "joined_players"))
          .setFooter({ text: 'RobertBot 2023 — Lynn & Yugito', iconURL: 'https://i.imgur.com/eg58vNp.png'})
        ],

    },
  })
  
  if(getPartidaActiva(guildId) == 0){
    
    setPartidaActiva(1, guildId);
    setGameCreator(req.body.member.user.id, guildId);

    const filter = (message) => message.author.id == '1067669524192702464' && message.content == tPlay(language, "game_started");
    const collector = channel.createMessageCollector({ filter, time: 7000 });
    collector.on('collect', (message) => {
      console.log(`Collected message: ${message.content}`);
      console.log(`ID is ${message.id}`);
      idTimeout = message.id;
      collector.stop();
    });
    collector.on('end', (collected) => {
      console.log(`Collected ${collected.size} messages`);
    });

    
    setTimeout(async function () { await desactivarComando(channel,idTimeout,guildId);
                               },600000);  //6 mins
    
return messagee;
    
//enviar
    
  } else {
    
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {content: tPlay(language, "already_running"),
              flags: InteractionResponseFlags.EPHEMERAL
              }
      })

  }
    //await setTimeout(10000);
   
/*  const timeout = 3000;
  const buttonIndex = data.components.findIndex(component => component.custom_id === 'my_button');
    setTimeout(() => {
      // disable the button
      console.log(buttonIndex);
        data.components[buttonIndex].disabled = true;
      }, timeout);*/
}

export async function play7(req, res, partidaActiva, client){
  const channel = client.channels.cache.get(`${req.body.channel_id}`);
  let color = randomHexColor();
  let result;
  if(partidaActiva.activa == 0){
    
    partidaActiva.activa = 1;

        // Send a message into the channel where command was triggered from
      result = res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: "Se ha iniciado una nueva partida de Los Juegos del Hambre",
           
          // Buttons are inside of action rows
          components: [
            {
              type: MessageComponentTypes.ACTION_ROW,
              components: [
                {
                  type: MessageComponentTypes.BUTTON,
                  // Value for your app to identify the button
                  custom_id: "my_button",
                  label: "Unirse a la batalla",
                  style: ButtonStyleTypes.PRIMARY
                },
                {
                  type: MessageComponentTypes.BUTTON,
                  // Value for your app to identify the button
                  custom_id: "my_button_begin",
                  label: "Comenzar",
                  style: ButtonStyleTypes.SUCCESS
                }
              ],
            },
            ],
              
              embeds: [ new EmbedBuilder()
              .setColor(color)
              .setDescription(`Jugadores unidos`)
              .setFooter({ text: 'RobertBot 2023 — Lynn & Yugito', iconURL: 'https://i.imgur.com/eg58vNp.png'})
            ],

        },
      });
    
    //console.log(result.req.body);
    
      //enviar
    
  } else {
    
        res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {content: `Ya hay una partida en curso`,
                flags: InteractionResponseFlags.EPHEMERAL
                }
        })

  }
    //await setTimeout(10000);
   
/*  const timeout = 3000;
  const buttonIndex = data.components.findIndex(component => component.custom_id === 'my_button');
    setTimeout(() => {
      // disable the button
      console.log(buttonIndex);
        data.components[buttonIndex].disabled = true;
      }, timeout);*/
  //console.log(result);
 
  /*setTimeout(async function () { await desactivarComando(req,client,result.req.body.id,partidaActiva);
             },3000);*/
  
  /*client.on('ready', async () => {
  try {
    const channel = await client.channels.fetch('channel_id');
    console.log(`Fetched channel: ${channel.name}`);
  } catch (error) {
    console.error(error);
  }
});*/
  
  //const message = await channel.messages.fetch(res.id);
  //console.log(message);
  return result;
}

export function play2(req, res, partidaActiva, client){
  let color = randomHexColor();
  let result;
  if(partidaActiva.activa == 0){
    
      partidaActiva.activa = 1;
    console.log(req.body);
    //setTimeout(desactivarComando(req,client),3000);
        // Send a message into the channel where command was triggered from
      result = res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: "Se ha iniciado una nueva partida de Los Juegos del Hambre",
          
          // Buttons are inside of action rows
          components: [
            {
              type: MessageComponentTypes.ACTION_ROW,
              components: [
                {
                  type: MessageComponentTypes.BUTTON,
                  // Value for your app to identify the button
                  custom_id: "my_button",
                  label: "Unirse a la batalla",
                  style: ButtonStyleTypes.PRIMARY
                },
                {
                  type: MessageComponentTypes.BUTTON,
                  // Value for your app to identify the button
                  custom_id: "my_button_begin",
                  label: "Comenzar",
                  style: ButtonStyleTypes.SUCCESS
                }
              ],
            },
            ],
              
              embeds: [ new EmbedBuilder()
              .setColor(color)
              .setDescription(`Jugadores unidos`)
              .setFooter({ text: 'RobertBot 2023 — Lynn & Yugito', iconURL: 'https://i.imgur.com/eg58vNp.png'})
            ],

        },
      }).then((msg) => {
        
      setTimeout(msg.edit(req.body.message.id,{components: [
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
                }
              ],
            },
          ]}),3000);
      });
    
      //enviar
    
  } else {
    
        res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {content: `Ya hay una partida en curso`,
                flags: InteractionResponseFlags.EPHEMERAL
                }
        })

  }
  
  return result;

}

async function desactivarComando1(req,client,msgid){
   const channel = client.channels.cache.get(`${req.body.channel_id}`);
  //const messageFetched = Array.from(await channel.messages.fetch({ limit: 1 }));
  const messageFetched = await channel.messages.fetch({ limit: 1 });
  //console.log(req.body);
  console.log(messageFetched.keys().next().value);
          channel.messages.edit(messageFetched.keys().next().value,{components: [
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
                }
              ],
            },
          ]});
                                                                         
}

async function desactivarComando2(req,client,msgid,partidaActiva){
   const channel = client.channels.cache.get(`${req.body.channel_id}`);
  //const messageFetched = Array.from(await channel.messages.fetch({ limit: 1 }));
  const messageFetched = await channel.messages.fetch({ limit: 1});
  //const botLastMessage = messagesFetched.find(msg => msg.author.id === '1067669524192702464');

  //console.log(messageFetched.id);
  //console.log(botLastMessage.keys().next().value);
          channel.messages.edit(messageFetched.keys().next().value,{
            content: "Se ha acabado el tiempo de espera. Por favor inicia una nueva partida.",
          
          // Buttons are inside of action rows
          components: [
            {
              type: MessageComponentTypes.ACTION_ROW,
              components: [
                {
                  type: MessageComponentTypes.BUTTON,
                  // Value for your app to identify the button
                  custom_id: "my_button",
                  label: "Unirse a la batalla",
                  style: ButtonStyleTypes.PRIMARY,
                  disabled: true
                },
                {
                  type: MessageComponentTypes.BUTTON,
                  // Value for your app to identify the button
                  custom_id: "my_button_begin",
                  label: "Comenzar",
                  style: ButtonStyleTypes.SUCCESS,
                  disabled: true
                }
              ],
            },
            ]
          });
           partidaActiva.activa = 0;                                                              
}

async function desactivarComando(channel,msgid,guildId){
  //const messageFetched = await channel.messages.fetch(msgid);
  //console.log(messageFetched.components);
  if(getPartidaActiva(guildId) == 1){  //si es 1 está en espera, si es 2 ya comenzó
        const language = getGuildPlayLanguage(guildId);
            
        channel.messages.edit(msgid,{
            content: tPlay(language, "wait_timeout"),
          
          // Buttons are inside of action rows
          components: [
            {
              type: MessageComponentTypes.ACTION_ROW,
              components: [
                {
                  type: MessageComponentTypes.BUTTON,
                  // Value for your app to identify the button
                  custom_id: "my_button",
                  label: tPlay(language, "join_button"),
                  style: ButtonStyleTypes.PRIMARY,
                  disabled: true
                },
                {
                  type: MessageComponentTypes.BUTTON,
                  // Value for your app to identify the button
                  custom_id: "my_button_begin",
                  label: tPlay(language, "begin_button"),
                  style: ButtonStyleTypes.SUCCESS,
                  disabled: true
                }
              ],
            },
            ]
          });

                limpiarPlayersPorGuild(guildId);
            reiniciarContador();
            limpiarTeams();
            reiniciarJugadoresFake();
            setPartidaActiva(0, guildId);
            clearGameCreator(guildId);
            clearGuildPlayLanguage(guildId);
            //no se reinicia slowMode ni modoK porque aqui no estan las variables
            //espero que no moleste en el futuro (?)
        }
}


          export function partidaEnCurso(req, res, client){
        const guildId = req.body.guild_id || req.body.channel?.guild_id || "global";
        const language = getGuildPlayLanguage(guildId);
        res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {content: tPlay(language, "already_running"),
                flags: InteractionResponseFlags.EPHEMERAL
                }
        })
}
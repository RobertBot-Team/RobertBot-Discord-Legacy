import { InteractionResponseType, InteractionResponseFlags, MessageComponentTypes, ButtonStyleTypes } from "discord-interactions";
import { PermissionsBitField } from "discord.js";
import {
  clearGuildPlayLanguage, getGuildPlayLanguage, setPartidaActiva, getGameCreator, clearGameCreator,
  getGameChannelPorGuild, getCollectedMessagePorGuild, getPartidaActiva, clearCollectedMessagePorGuild, clearGameChannelPorGuild,
  getTimerPorGuild,
  clearTimerPorGuild
} from "../../app.js";
import { getGuildGameState, resetGuildGameState } from "../message_component/play.js";
import { reiniciarContador, reiniciarJugadoresFake, limpiarTeams } from "../../utils.js";
import { tPlay } from "../play_i18n.js";
import { limpiarPlayersPorGuild } from "../message_component/play.js"

function hasStopPermission(req, guildId) {
  const isCreator = req.body.member?.user?.id === getGameCreator(guildId);
  if (isCreator) return true;

  const permissions = req.body.member?.permissions;
  if (!permissions) return false;

  const permissionValue = BigInt(permissions);
  const admin = BigInt(PermissionsBitField.Flags.Administrator);
  const manageGuild = BigInt(PermissionsBitField.Flags.ManageGuild);

  return (permissionValue & admin) !== 0n || (permissionValue & manageGuild) !== 0n;
}

function limpiarConstantesYMaps(guildId) {
  let state = getGuildGameState(guildId);
  const timer = getTimerPorGuild(guildId);
  timer.stopTimer();
  clearTimerPorGuild(guildId);
  limpiarPlayersPorGuild(guildId);
  reiniciarContador(state);
  limpiarTeams(state.teams);
  reiniciarJugadoresFake();
  setPartidaActiva(0, guildId);
  clearGameCreator(guildId);
  clearGuildPlayLanguage(guildId);
  clearCollectedMessagePorGuild(guildId);
  clearGameChannelPorGuild(guildId);
}

// funcion duplicada de play.js, pero es lo que hay para una beta
async function desactivarComando(msgid, guildId, client) {
  console.log("Limpiando data desde comando stop...");
  //const messageFetched = await channel.messages.fetch(msgid);
  //console.log(messageFetched.components);
  if (getPartidaActiva(guildId) === 1) {  //si es 1 está en espera, si es 2 ya comenzó
    const language = getGuildPlayLanguage(guildId);

    const savedChannelId = getGameChannelPorGuild(guildId);
    console.log(`[DEBUG] Intentando recuperar canal para Guild ${guildId}. ID guardado:`, savedChannelId);
    if (!savedChannelId) {
        console.error("❌ ERROR CRÍTICO: savedChannelId es undefined. La variable global se borró.");
        limpiarConstantesYMaps(guildId)
        return;
    }

    const channel = client.channels.cache.get(savedChannelId) || await client.channels.fetch(savedChannelId).catch(err => {
        console.error("❌ ERROR: No se pudo hacer fetch del canal a la API de Discord:", err);
        limpiarConstantesYMaps(guildId)
        return null;
    });
    if (!channel) {
        console.log("No se pudo recuperar el canal ni de la caché ni de la API.");
        limpiarConstantesYMaps(guildId)
        return;
    }

    try {
      await channel.messages.edit(msgid, {
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
    } catch (error) {
        console.error('Error al editar el mensaje:', error);
    }
  }

  limpiarConstantesYMaps(guildId);
}

export async function stop(req, res, client) {
  const guildId = req.body.guild_id || req.body.channel?.guild_id || "global";
  const language = getGuildPlayLanguage(guildId);
  let nick;
  if (hasStopPermission(req, guildId)) {

    if (req.body.member.nick == null) {
      if (req.body.member.user.global_name == null) {
        //el nombre en la guild y global son nulos. Uso su username
        nick = req.body.member.user.username;
      } else {
        //el nombre en la guild es nulo, uso su nombre global
        nick = req.body.member.user.global_name;
      }
    } else {
      //uso el nombre en la guild
      nick = req.body.member.nick;
    }

    res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: tPlay(language, "stop_by_staff", { nick }),
      }
    });

    await desactivarComando(getCollectedMessagePorGuild(guildId), guildId, client);
    resetGuildGameState(guildId);

  } else {

    res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: tPlay(language, "stop_no_permission"),
        flags: InteractionResponseFlags.EPHEMERAL
      }
    });
  }
};
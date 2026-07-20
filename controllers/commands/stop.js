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

// funcion duplicada de play.js, pero es lo que hay para una beta
async function desactivarComando(channel, msgid, guildId) {
  console.log("Limpiando data desde comando stop...");
  //const messageFetched = await channel.messages.fetch(msgid);
  //console.log(messageFetched.components);
  if (getPartidaActiva(guildId) === 1) {  //si es 1 está en espera, si es 2 ya comenzó
    const language = getGuildPlayLanguage(guildId);

    channel.messages.edit(msgid, {
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
  }

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

    await desactivarComando(getGameChannelPorGuild(guildId), getCollectedMessagePorGuild(guildId), guildId);
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
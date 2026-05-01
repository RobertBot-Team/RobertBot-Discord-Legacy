import {InteractionResponseType, InteractionResponseFlags} from "discord-interactions";
import { PermissionsBitField } from "discord.js";
import { clearGuildPlayLanguage, getGuildPlayLanguage, setPartidaActiva, getGameCreator, clearGameCreator } from "../../app.js";
import { resetGuildGameState } from "../message_component/play.js";
import { reiniciarContador, reiniciarJugadoresFake, limpiarTeams } from "../../utils.js";
import { tPlay } from "../play_i18n.js";

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

export async function stop(req, res, client){
  const guildId = req.body.guild_id || req.body.channel?.guild_id || "global";
  const language = getGuildPlayLanguage(guildId);
  let nick;
  if(hasStopPermission(req, guildId)){
    
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

      res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {content: tPlay(language, "stop_by_staff", { nick }),
              }
      });

      setPartidaActiva(0, guildId);
      clearGuildPlayLanguage(guildId);
      clearGameCreator(guildId);
      resetGuildGameState(guildId);
      reiniciarContador();
      reiniciarJugadoresFake();
      limpiarTeams();

  }else{
    
    res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {content: tPlay(language, "stop_no_permission"),
            flags: InteractionResponseFlags.EPHEMERAL
            }
      });
    }
};
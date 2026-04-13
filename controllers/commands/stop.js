import {InteractionResponseType, InteractionResponseFlags} from "discord-interactions";
import { PermissionsBitField } from "discord.js";
import { setPartidaActiva } from "../../app.js";
import { resetGuildGameState } from "../message_component/play.js";
import { reiniciarContador, reiniciarJugadoresFake, limpiarTeams } from "../../utils.js";

function hasStopPermission(req) {
  const permissions = req.body.member?.permissions;
  if (!permissions) return false;

  const permissionValue = BigInt(permissions);
  const admin = BigInt(PermissionsBitField.Flags.Administrator);
  const manageGuild = BigInt(PermissionsBitField.Flags.ManageGuild);

  return (permissionValue & admin) !== 0n || (permissionValue & manageGuild) !== 0n;
}

export async function stop(req, res, client){
  const guildId = req.body.guild_id || req.body.channel?.guild_id || "global";
  let nick;
  if(hasStopPermission(req)){
    
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
        data: {content: `${nick} ha detenido la partida de los Juegos del Hambre.`,
              }
      });

      setPartidaActiva(0, guildId);
      resetGuildGameState(guildId);
      reiniciarContador();
      reiniciarJugadoresFake();
      limpiarTeams();

  }else{
    
    res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {content: `No te hagas el chistoso, solo Staff puede detener una partida.`,
            flags: InteractionResponseFlags.EPHEMERAL
            }
      });
    }
};
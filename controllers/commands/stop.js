import {InteractionResponseType, InteractionResponseFlags} from "discord-interactions";

export async function stop(req, res, client){
  let nick;
  //lynn, yugito, k, robert, chun, aya
  let habilitados = ["531329779312361483", "435210238711300107", "617015532394250259", 
                     "872255680030056469", "325055202132492299" , "738570170351747112"];
  if(habilitados.includes(req.body.member.user.id)){
    
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

      client.destroy();

  }else{
    
    res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {content: `No te hagas el chistoso, solo Staff puede detener una partida.`,
            flags: InteractionResponseFlags.EPHEMERAL
            }
      });
    }
};
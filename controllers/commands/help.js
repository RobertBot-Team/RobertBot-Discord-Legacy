import { InteractionResponseType, InteractionResponseFlags } from "discord-interactions";
import { tPlay } from "../play_i18n.js";

export async function help(req, res, language) {
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: tPlay(language, "help_message"),
    }
  });
}

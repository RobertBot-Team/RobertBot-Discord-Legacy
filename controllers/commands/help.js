import { InteractionResponseType, InteractionResponseFlags } from "discord-interactions";
import { tPlay } from "../play_i18n.js";
import { EmbedBuilder } from "discord.js";

export async function help(req, res, language) {
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    embeds: [
      new EmbedBuilder()
        .setColor("Blurple")
        .setTitle(tPlay(language, "help_embed_title"))
        .setDescription(tPlay(language, "help_message")),
      new EmbedBuilder()
        .setColor("Blurple")
        .setDescription(tPlay(language, "help_embed_description"))
    ]
  });
}

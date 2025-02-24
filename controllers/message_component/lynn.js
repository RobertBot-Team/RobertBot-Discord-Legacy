import {InteractionResponseType} from "discord-interactions";
import "dotenv/config";
import {exampleEmbed} from "../../utils.js";
import {Client} from "discord.js"

export async function messageLynn(req, res, client){
    let avatar = `https://cdn.discordapp.com/avatars/${req.body.member.user.id}/${req.body.member.user.avatar}.png?size=1024`;
    const channel = client.channels.cache.get(`${req.body.channel_id}`);
    exampleEmbed(channel);
    await res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: avatar
      }
    });    
}
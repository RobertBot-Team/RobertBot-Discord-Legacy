import { InteractionResponseType, InteractionResponseFlags } from "discord-interactions";

export async function help(req, res) {
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: "🛠️ **Comandos de RobertBot:**\n\n**/play** - Comenzar una partida nueva de los Juegos del Hambre. Te pedirá elegir el idioma de la partida.\n**/stop** - Detiene una partida iniciada inmediatamente.\n**/help** - Muestra este mensaje de ayuda explicando los comandos.",
    }
  });
}

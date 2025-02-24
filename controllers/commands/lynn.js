import {InteractionResponseType,
        MessageComponentTypes,
        ButtonStyleTypes
       } from "discord-interactions";
import {getRandomEmoji} from "../../utils.js";


export function lynn(req, res){
  res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
          content: 'Que alguien presione el botón',
          components: [{
              type: MessageComponentTypes.ACTION_ROW,
              components: [{
                type: MessageComponentTypes.BUTTON,
                custom_id: `other_button_${req.body.id}`,
                label: 'Boton',
                style: ButtonStyleTypes.PRIMARY
                }]
            }]
          }
        });
  };
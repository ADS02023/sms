// Importa las credenciales de Twilio (cuenta SID y token de autenticación) desde las variables
// de entorno
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;


// Requiere el módulo 'twilio' y crea un cliente de Twilio usando las credenciales
const client = require('twilio')(accountSid, authToken);

//funcion para enviar mensajes a WhatsApp
const sendMessage = async (message, senderID) => {
  try {
    // Utiliza el cliente de Twilio para enviar un mensaje de WhatsApp
    await client.messages.create({
      to: senderID, // El destinatario del mensaje (número de teléfono de WhatsApp)
      body: message, // El contenido del mensaje
      from: `whatsapp:+14155238886` // El número de teléfono de WhatsApp que envía el mensaje
    });
  } catch (error) {
    // Captura y maneja cualquier error que pueda ocurrir durante el envío del mensaje
    console.log(`error en sendMessage --> ${error}`);
  }

}

module.exports = {
  sendMessage
}
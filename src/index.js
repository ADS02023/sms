//paquetes externos 
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

//inicializar el webApp
const webApp = express();

//webApp configuracion
webApp.use(bodyParser.urlencoded({
    extended: true
}))
webApp.use(bodyParser.json());

//puerto del server
const PORT = process.env.PORT;

//ruta home
webApp.get('/', (req,res)=>{
    res.send("hello world.!");
});

const WA = require('../funciones/mensaje-whatsapp.js');

//ruta de whatsApp
webApp.post('/whatsapp', async(req, res)=>{
    
   // Extrae el contenido del mensaje del cuerpo de la solicitud POST
   let message = req.body.Body;
   // Extrae el ID del remitente del cuerpo de la solicitud POST
   let senderID = req.body.From;    

   // Registra el contenido del mensaje en la consola
   console.log(message);
   // Registra el ID del remitente en la consola
   console.log(senderID);

   //funcion para enviar mensajes devuelta
   await WA.sendMessage("cuando te vea te voy a dar muchos besitos y te voy a mimar mucho :3",senderID)
});//fin metodo post

//comienzo del server
webApp.listen(PORT, () =>{
    console.log( `el servidor esta montado y corriendo en el puerto ${PORT}`)
})
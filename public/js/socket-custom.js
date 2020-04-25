var socket = io();
socket.on("connect", function () {
  console.log("Conectado al servidor");
});
// escuchar información
socket.on("disconnect", function () {
  console.log("Perdimos conexión con el servidor");
});
//Enviar información
socket.emit(
  "enviarMensaje",
  {
    usuario: "Larry",
    mensaje: "Hola Universo",
  },
  function (resp) {
    console.log("Respuesta server:", resp);
  }
);
//escuchando información
socket.on("enviarMensaje", function (mensaje) {
  console.log("Servidor:", mensaje);
});

const {io} = require('../server');
io.on('connection',(client)=>{
    console.log('Usuario conectado');
    client.emit('enviarMensaje',{
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });
    client.on('disconnect',()=>{
        console.log('Usuario desconectado');
    });

    //escuchando al cliente
    client.on('enviarMensaje',(mensaje, callback)=>{
        console.log(mensaje);
        client.broadcast.emit('enviarMensaje', mensaje);
        //callback();
        // if(mensaje.usuario){
        //     callback({
        //         resp:'TODO SALIO BIEN'
        //     });
        // }else{
        //     callback({
        //         resp:'TODO SALIO MAL!'
        //     })
        // }
    });
});

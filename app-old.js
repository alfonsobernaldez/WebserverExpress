const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'aplication/json' });

    let salida = {
        nombre: 'Alfonso',
        edad: 28,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    // res.write('Hola mundo');
    res.end();

})

.listen(8080);

console.log('Escuchando 8080');
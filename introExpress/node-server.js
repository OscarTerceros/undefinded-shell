const http = require('http');

const serverCallback = ( request, response ) => {
  response.writeHead( 200, { 'Content-Type': 'application/json' } ); //Encabezado -> qué tipo de contenido se responderá
  response.end( JSON.stringify( { message: 'Hello Bootcamp' } ) );
}

const server = http.createServer( serverCallback );

server.listen( 3000, () => console.log( 'Server running on port 3000'));
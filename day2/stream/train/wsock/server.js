const wsock = require('websocket-stream');
const http = require('http');
const ecstatic = require('ecstatic');

const PORT = 5000;

const server = http.createServer(ecstatic(__dirname + '/public'));
server.listen(PORT)

wsock.createServer({ server }, stream => {
    stream.pipe(stream);
})
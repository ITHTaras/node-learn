// Working with Events
/*
const EventEmitter = require('events');


const Logger = require('./logger');
const logger = new Logger();


// Register A Listener
logger.on('messageLogged', (arg) => {
    console.log('Listener Called', arg);
});

logger.log('message');

*/

const http = require('http');

const server = http.createServer();

server.on('connection', (request, response) => {
    if(request.url === '/') {
        response.write('Hello World!');
        response.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000');
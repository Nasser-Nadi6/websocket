const WebSocketServer = require('websocket').server
const serverInstance = require('../../protocols/http1.1/Server').getInstance()

class Websocket {
    #port
    #websocket
    #connection

    constructor(config) {
        this.#port = config.port
    }

    init() {
        const webSocket = new WebSocketServer({
            'httpServer': serverInstance.create(this.#port)
        })
        this.#websocket = webSocket
        return webSocket
    }

    fetchRequest(callback) {
        this.#websocket.on('request', (request) => {
            callback(request)
        })
    }

    performHandshake(request) {
        const connection = request.accept(null, request.origin);
        this.#connection = connection
        connection.on('open', () => console.log('connection opened...'))
        console.log((new Date()) + ' Connection accepted.');
    }

    subscribeMessage() {
        this.#connection.on('message', (message) => {
            if(message.type==='utf8') this.#connection.sendUTF('this is from server')
        })
    }
}

module.exports = Websocket
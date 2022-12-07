const {Server} = require('socket.io')
const serverInstance = require('../../protocols/http1.1/Server').getInstance()


class SocketIO {
    #port
    #socketIo
    #connection

    constructor(config) {
        this.#port = config.port
    }

    init() {
        const socketIo=new Server(this.#port,{
            allowRequest: (req, callback) => {
                console.log(req)
                // const isOriginValid = check(req);
                // callback(null, isOriginValid);
            }
        })
        this.#socketIo=socketIo
        return socketIo
    }

    // fetchRequest(callback) {
    //     this.#websocket.on('request', (request) => {
    //         callback(request)
    //     })
    // }
    //
    // performHandshake(request) {
    //     const connection = request.accept(null, request.origin);
    //     this.#connection = connection
    //     connection.on('open', () => console.log('connection opened...'))
    //     console.log((new Date()) + ' Connection accepted.');
    // }
    //
    // subscribeMessage() {
    //     this.#connection.on('message', (message) => {
    //         if(message.type === 'utf8') this.#connection.sendUTF('this is from server')
    //     })
    // }
}

module.exports = SocketIO

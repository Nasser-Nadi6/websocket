class WebsocketGateway {
    #libraryInstance
    #allowedOrigins

    constructor(libraryInstance, config) {
        this.#libraryInstance = libraryInstance
        this.#allowedOrigins = config.allowedOrigins
    }

    checkOrigin(request) {
        return this.#allowedOrigins.includes(request.origin)
    }

    checkConnectionHealth() {
        // check connection health between client and server
    }

    init() {
        this.#libraryInstance.init()
    }

    fetchRequest(callback) {
        this.init()
        // this.#libraryInstance.fetchRequest((request) => {
        //     callback(request)
        // })
    }

    performHandshake() {
        this.fetchRequest((request) => {
            const originIsValid = this.checkOrigin(request)
            if(!originIsValid) {
                request.reject()
                console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
                return
            }
            this.#libraryInstance.performHandshake(request)
            this.subscribeMessage()
        })
    }

    subscribeMessage() {
        this.#libraryInstance.subscribeMessage()
    }
}

module.exports = WebsocketGateway
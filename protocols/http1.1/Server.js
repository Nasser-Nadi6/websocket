const http = require('http')

class Server {
    static #serverInstance

    create(port) {
        const server = http.createServer((req, res) => {
            console.log('http1.1 server')
        }).listen(port, () => {
            console.log(`http server is running on port ${port} ...`)
        })
        return server
    }

    static getInstance() {
        if(this.#serverInstance) return this.#serverInstance
        return this.#serverInstance = new Server()
    }
}

module.exports = Server
const WebsocketGateway = require('./gateway/Websocket-Gateway')
const Websocket = require('./library/websocket/Websocket')
const SocketIO=require('./library/socket.io/SocketIO')

const config = {
    port: 8080,
    protocol: 'http1.1'
}

const gatewayConfig = {
    allowedOrigins: ['http://localhost:8080', 'http://localhost:4000', 'chrome://new-tab-page']
}

// const instance = new WebsocketGateway(new Websocket(config), gatewayConfig)
const instance = new WebsocketGateway(new SocketIO(config), gatewayConfig)

instance.performHandshake()




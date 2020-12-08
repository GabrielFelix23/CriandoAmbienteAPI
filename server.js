//cria um arquico http
const http = require('http')
//chama o arquivo app
const app = require('./app')
// cria uma porta
const port = process.env.PORT || 3000
// cria um server
const server = http.createServer(app)
server.listen(port)
const http = require('http')
const signale = require('signale')

const app = require('../../server/app')

const server = http.createServer(app)

signale.await('Starting server...')
server.listen(process.env.PORT, () => {
    signale.success(`Server is running on PORT: ${process.env.PORT}`)
})

const express = require('express')
const path = require('path')
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack')
// eslint-disable-next-line import/no-extraneous-dependencies
const webpackDevMiddleware = require('webpack-dev-middleware')
// eslint-disable-next-line import/no-extraneous-dependencies
const webpackHotMiddleware = require('webpack-hot-middleware')
const compress = require('compression')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
// const signale = require('signale')

const webpackConfigDev = require('../build/webpack.dev.config')

const project = require('../project.config')

const app = express()

// Load Environment Variables
dotenv.config({
    path: `${project.basePath}/config/.${process.env.NODE_ENV}`
})

// App Setup
app.use(compress())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cookieParser())

// Apply API Routes
require('./routes')(app)

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (project.env === 'development') {
    const compiler = webpack(webpackConfigDev)

    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackConfigDev.output.publicPath,
        hot: true,
        quiet: false
    }))

    app.use(webpackHotMiddleware(compiler, {
        path: '/__webpack_hmr',
        heartbeat: 2000
    }))

    // Serve static assets from ~/public since Webpack is unaware of
    // these files. This middleware doesn't need to be enabled outside
    // of development since this directory will be copied into ~/dist
    // when the application is compiled.
    app.use([express.static(path.resolve(project.basePath, 'public'))])

    // This rewrites all routes requests to the root /index.html file
    // (ignoring file requests). If you want to implement universal
    // rendering, you'll want to remove this middleware.
    app.get('*', (req, res, next) => {
        const filename = path.join(compiler.outputPath, 'index.html')
        compiler.outputFileSystem.readFile(filename, (err, result) => {
            if (err) {
                return next(err)
            }
            res.set('content-type', 'text/html')
            res.send(result)
            return res.end()
        })
    })
} else {
    app.get('/health', (req, res) => {
        res.send('OK')
    })

    // app.use([auth, express.static(path.resolve(project.basePath, project.outDir))])
    app.use([express.static(path.resolve(project.basePath, project.outDir))])

    // app.get('*', auth, (req, res) => {
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(project.basePath, project.outDir, 'index.html'))
    })
}

module.exports = app

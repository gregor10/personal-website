const {
    Router
} = require('express')

const {
    postUser
} = require('./user-controller')

const router = Router()

router.post('/users', postUser)

module.exports = router

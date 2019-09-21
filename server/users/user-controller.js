const postUser = async (req, res) => {
    const {
        email,
        password
    } = req.body

    let statusCode = 403
    let metadata = { message: 'Incorrect credentials' }

    if (email === 'a' && password === 'a') {
        statusCode = 200
        metadata = {}
    }

    return res.status(statusCode).json(metadata)
}

module.exports = {
    postUser
}

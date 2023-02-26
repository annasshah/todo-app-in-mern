const jwt = require('jsonwebtoken')

const { AUTH_TOKEN_SECRET_KEY } = process.env

const check_auth = async (req, res, next) => {
    const { authorization } = req.headers


    if (!authorization) {
        return res.json({ success: false, message: 'Unauthorize user' }).status(402)

    }
    const token = authorization.split(' ')[1]

    const verify_token = jwt.verify(token, AUTH_TOKEN_SECRET_KEY)

    if (!verify_token) {
        return res.json({ success: false, message: 'Unauthorize user' }).status(402)
    }

    const { id } = verify_token

    req.user_id = id

    next()
    return
}


module.exports = { check_auth }
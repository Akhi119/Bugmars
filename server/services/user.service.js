const { MESSAGE } = require('../config/constants')
const userCrud = require('../crud/user.crud')

// Create an new user
const createUsers = async (req, res) => {
    try {
        const result = await userCrud.post(req.body)
        console.log(`User created succesfully, ${JSON.stringify(result)}`)
        return res.send({ message: MESSAGE.USER_CREATE.SUCCESS, body: null })
    } catch (err) {
        console.error(`Failed to create user, ${err}`)
        return res.status(500).send({ message: MESSAGE.USER_CREATE.FAILED, body: `${err}` })
    }
}

module.exports = {
    createUsers
}

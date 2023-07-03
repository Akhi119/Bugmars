const User = require('../models/user')

// Create an new users
const post = async (users) => {
    try {
        const result = await User.insertMany(users)
        console.log(`User created succesfully, ${JSON.stringify(result)}`)
        return result
    } catch (err) {
        console.error(`Failed to create user, ${err}`)
        throw err
    }
}

module.exports = {
    post
}

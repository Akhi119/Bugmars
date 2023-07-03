const SERVER = {
    SSL_PORT: 3000,
    NON_SSL_PORT: 3001,
    DATABASE_NAME: 'BugMars'
}

const MESSAGE = {
    USER_CREATE: {
        SUCCESS: 'User(s) created successfully',
        FAILED: 'Failed to create user(s)'
    }
}

module.exports = {
    SERVER,
    MESSAGE
}

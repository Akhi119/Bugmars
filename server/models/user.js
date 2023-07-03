const mongoose = require('mongoose')

var emailIdPattern = '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}';
var phonePattern = '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$';


// Validate emailid
const validateEmail = function (email) {
    const regex = emailIdPattern;
    return regex.test(email)
}

// Validate phone
const validatePhone = function (phone) {
    const regex = phonePattern;
    return regex.test(email)
}

// User schema
const UserSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true,
        validate: this.validateEmail
    },
    phone: {
        type: String,
        required: true,
        validate: this.validatePhone
    },
    companyName: {
        type: String,
        required: true
    },
    companyTitle: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: false
    }
})

module.exports = mongoose.model('User', UserSchema)

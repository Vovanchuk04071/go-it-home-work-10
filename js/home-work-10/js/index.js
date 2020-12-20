const validator = require('validator');


const validatorEmail = (email => {
    return validator.isEmail(email)
})

console.log(
    'Is mango@gmail.com a valid email?: ',
    validatorEmail('mango@gmail.com'),
)
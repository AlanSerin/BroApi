const Joi = require('joi');

const registerValidation = (body) => {
    const schema = Joi.object({
        username: Joi.string().alphanum().min(6).required(),
        email: Joi.string().email({ minDomainSegments: 2 }).required(),
        password: Joi.string().min(6).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    })
    const {error} = schema.validate(body)
    return error;
}
const loginValidation = (body) => {
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2 }).required(),
        password: Joi.string().min(6).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    })
    const {error} = schema.validate(body)
    return error;
}
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
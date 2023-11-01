import Joi from 'joi'

const accountValidator = {

    validateRegister: Joi.object({
        fullname: Joi.string()
            .not(null)
            .only()
            .required(),
        phone: Joi.string()
            .not(null)
            .only()
            .required(),
        email: Joi.string()
            .email()
            .not(null)
            .only()
            .required(),
        password: Joi.string()
            .min(8)
            .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$'))
            .required(),
    }),



}

export default accountValidator
import Joi from 'joi'

const subjectValidator = {

    validateSubject: Joi.object({
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

export default subjectValidator
import { findUserByEmail } from "../data/db"

export async function testEmail(email) {
    const validations = [
        {
            validation: (email) => email && String(email).length > 0,
            message: "Por favor introduza o seu endereço de email."
        },
        {
            validation: (email) => validateEmail(email),
            message: "Por favor introduza um endereço de email válido."
        },
        {
            validation: async (email) => !await findUserByEmail(email),
            message: "O endereço introduzido já está registado."
        }
    ]

    for (const validation of validations) {
        if (!await validation.validation(email)) {
            return {
                email: validation.message
            }
        }
    }
}

export function testPassword(password) {

    return password && password.length > 0
        ? password.length >= 8
            ? checkPasswordStrength(password) >= 4
                ? {}
                : { password: "A sua password deve ter pelo menos um número, uma mínuscula, uma maiúscula e um símbolo." }
            : { password: "A sua password deve ter no mínimo 8 caracteres." }
        : { password: "Por favor introduza a sua password." }
}
export function testPasswordConfirmation(password, passwordConfirmation) {


    if (!passwordConfirmation) {
        return { passwordConfirmation: "Por favor introduza novamente a sua password." }
    }
    else if (password !== passwordConfirmation) {
        return { passwordConfirmation: "Por favor introduza novamente a sua password." }
    }
    return {} //ou null
}

export function validateEmail(email) {
    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return EMAIL_REGEX.test(email)
}

export function checkPasswordStrength(password) {
    if (password.length < 8) return 0;
    const regexes = [/[a-z]/, /[A-Z]/, /[0-9]/, /[~!@#$%^&*)(+=._-]/]
    return regexes
        .map(re => re.test(password))
        .reduce((score, t) => t ? score + 1 : score, 0)
}
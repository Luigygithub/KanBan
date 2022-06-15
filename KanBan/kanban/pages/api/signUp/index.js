import { createUser } from "../../../data/db"
import { testEmail, testPassword, testPasswordConfirmation } from "../../../services/signup"

export default async function apiSignUp(req, res) {
    if (req.method === "POST") {
        console.log(req.body)

        const errors = {
            ... await testEmail(req.body.EmailAddress),
            ...testPassword(req.body.Password),
            ...testPasswordConfirmation(req.body.Password, req.body.passwordConfirmation)
        }

        //separar resposta de sucesso e resposta de erro
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ message: "Os dados introduzidos não são válidos", errors })
        }
        const id = await createUser(req.body)
        res.status(200).json({ message: "Utilizador Criado com Sucesso!", _id: id.insertedId })
    }
}
import { confirmPassEmail, goToPlatform } from "../../../services/login"

export default async function apiLogIn (req, res) {
    if (req.method === "POST") {
        console.log(req.body)
        return await confirmPassEmail(req.body.EmailAddress, req.body.Password, res )
    }
}
   
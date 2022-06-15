import { createCardOnBD } from "../../../services/createCard"
import { editCardOnBD } from "../../../services/editCard"

export default async function apiCreateCard (req, res) {
    if (req.method === "POST") {
                
        return await createCardOnBD(req.headers.authenticate, req.body, res)
    }
    if (req.method === "PATCH") {
                
        return await editCardOnBD(req.headers.authenticate, req.body, res)
    }
}
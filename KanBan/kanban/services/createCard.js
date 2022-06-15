import { createCardOnMONGO, findUserID } from "../data/db"

export async function createCardOnBD(token, data, res){
	const user = await findUserID(token)

    if(user){
        await createCardOnMONGO(data, user)
            return res.status(200).json({message: "Your card was created succesfully"})

    }
    
    return res.status(404).json({ message: "Algo de errado não está certo " })



}
//         //verificar se o email existe   
//         if (!user) {
//             //se não, 404 e { "message": "O utilizador não foi encontrado!" }
//             return res.status(404).json({ message: "O utilizador não foi encontrado!" })
//         }
//         //se a password é igual
//         if (user.Password !== password) {
//             return res.status(401).json({ message: "A password introduzida é inválida!" })
//         }
//         const token = await createSession({userId: user._id})
//         return res.status(200).json({token: token.insertedId})
// }
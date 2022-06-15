import { editCardOnMONGO } from "../data/db"

export async function editCardOnBD(token, data, res){
    const user = await findUserID(token)

    if(user){
        await editCardOnMONGO(data)
            return res.status(200).json({message: "Your card was updated succesfully"})

    }
    
    return res.status(404).json({ message: "Algo de errado não está certo " })
}
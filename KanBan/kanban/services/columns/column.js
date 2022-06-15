import { findCardsByState } from '../../data/columns'
import { findUserID } from '../../data/db'

// req.query.auth


export async function getCards(stateFunnel, auth){
    

    let user = await findUserID(auth)
        console.log(user._id)
//    console.log( stateFunnel, {userId: user._id})
return user 
? await findCardsByState(stateFunnel, {userId: user._id})
: res.status(404).json({ message: "Deve voltar a fazer login" })

}
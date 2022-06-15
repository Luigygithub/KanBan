import {getCard} from "../../../services/cards"
export default async function catchCard (req, res){
    if(req.method === "POST"){
        const id = req.query.id
        console.log(id)
         let a = await getCard(req.query.id)   
     
        a ? res.status(200).json(a) : res.status(300).json({message:"Cartão não encontrado"})
    }
}
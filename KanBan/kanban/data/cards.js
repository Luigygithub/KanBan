import { getMongoCollection } from "./db"
import { MongoClient, ObjectId } from "mongodb" 
const DB_NAME = "db_opplog"

const COLLECTION_CARDS = "db_cards"


export async function getOneCard(id) {
    console.log({_id:ObjectId(id.id)})
    const collection = await getMongoCollection(DB_NAME, COLLECTION_CARDS)
    if(ObjectId.isValid(id)){
        return await collection.findOne({_id:ObjectId(id)})
    }
    return false
}
import { MongoClient, ObjectId } from "mongodb" 

const URL = process.env.MONGO_URL ?? "mongodb://localhost:27017"

const DB_NAME = "db_opplog"
const COLLECTION_USERS = "db_users"
const COLLECTION_CARDS = "db_cards"
const COLLECTION_SESSIONS = "db_sessions"

let client;

export  async function connectToMongo() {
    try {
        if (!client) { client = await MongoClient.connect(URL)}
        return client
    } catch (errors) {
        console.log(errors)
    }
}

export  async function getMongoCollection(dbName, collectionName) {
    const client = await connectToMongo()
    return  await client.db(dbName).collection(collectionName)
}


//sign in/up
export  async function findUserByEmail(email) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_USERS)
    return await collection.findOne({ EmailAddress: email })
    
}

//sign up
export  async function createUser(data) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_USERS)
    return await collection.insertOne({...data})
}

// sign in
export  async function createSession(data) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_SESSIONS)
    return await collection.insertOne(data)
}
export  async function findUserID(token) {
    console.log(token)
    const collection = await getMongoCollection(DB_NAME, COLLECTION_SESSIONS)
    const sessionOfToken = await collection.findOne({ _id: ObjectId(token) })
    const collectionUser = await getMongoCollection(DB_NAME, COLLECTION_USERS)
    return await collectionUser.findOne({ _id: ObjectId(sessionOfToken.userId) })

    
}

export  async function createCardOnMONGO(data, user) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_CARDS)
    return await collection.insertOne({...data, userId: user._id})
}

export  async function editCardOnMONGO(data, user) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_CARDS)
    return await collection.updateOne({_id: data._id}, {$set: data})
}
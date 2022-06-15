// -------------------------FE--------------------------------


// -------------------------API--------------------------------

aplication.get("/list", authenticate, (req, res) => {
    const user = req.user
    res.status(200).json(user)
})

async function authenticate(req, res, next) {
    const gotToken = req.headers.authenticate //é o token que vem do frontend
    const result = await findToken(gotToken) //verifica se o token existe na sessao
    if (!result) return res.status(404).send() //se nao exister, xau
    const user = await findUserId(result.userId) //se existir, obtermos o utilizador 
    req.user = user //e guardamos no pedido
    next() // salta para o proxim0o
}


const token = localStorage.getItem("token")

// -------------------------SERVICES--------------------------------

const res = await fetch("/list", {
    method: "GET",
    headers: {
        "Authenticate": localStorage.getItem("token")
    }
})

// -------------------------DATA--------------------------------

async function findToken(gotToken) {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_SESSION)
    return await collection.findOne({
        _id: new ObjectId(gotToken)
    })
}
// import { saveNota } from "../../services/notas";

// export default async function (req, res) {
//     if (req.method === "POST") {
//         console.log(req.body)

//         const insertedId = await saveNota(req.body)
//         res.status(201)
//             .json({
//                 message: 'ok',
//                 _id: insertedId
//             })
//         return;
//     }
//     res.status(405).json({ message: 'not_allowed' })
// }
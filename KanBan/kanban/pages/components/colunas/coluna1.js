import { useState, useEffect } from "react"
import CardThumbnail from "../cards/CardThumbnail"
import QuickAdd from "../cards/quickAdd"
import colunas from "../../../styles/colunas.module.css"
export default function Coluna1(props) {

  const [cards_Col1, setCards_Col1] = useState([])


  // useEffect(() => {
  //   console.log(props)
  // })

  useEffect(() => {
    async function CallBack() {
      const res = await fetch(
        `../../api/cards/column?stateFunnel=Interest&auth=${localStorage.getItem("tokenG3")}`, {
        method: "GET"
      })
      console.log(res)
      const json = await res.json()
      setCards_Col1(json.a)
      console.log("Fim do UseEffect")
    }
    CallBack()
  }, [])


  return (


    <div className='colunas'>
      <h2 className={colunas.textocoluna}>Interest</h2>



      <h2>


        {

          cards_Col1.map(e => <CardThumbnail
            viewCard={props.viewCard}
            {...props}
            setViewCard={(eee) => {
              console.log(eee, e._id)
              props.setViewCard(eee)
            }}
            {...e}
            key={e._id}
            CardId={e._id}
            companyName={e.companyName}
            jobFunction={e.jobFunction}
            creationDate={e.creationDate}


          />)


        }

      </h2>


      {/* CardId, companyName, jobFunction, creationDate */}
      {/* <span>{cards_Col1}</span> */}

    </div>
  )
}
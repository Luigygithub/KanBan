import { useState, useEffect } from "react"
import CardThumbnail from "../cards/CardThumbnail"
import colunas from "../../../styles/colunas.module.css"
export default function Coluna2(props) {

  const [cards_Col2, setCards_Col2] = useState([])
 

  useEffect(() => {
    async function CallBack() {
      const res = await fetch(
        `../../api/cards/column?stateFunnel=Application Sent&auth=${localStorage.getItem("tokenG3")}`, {
          headers: {
          "Content-Type": "application/json",
          "Authenticate": localStorage.getItem("tokenG3")
        },
        method: "GET"
      })
      console.log(res)
      const json = await res.json()
      setCards_Col2(json.a)
      console.log("Fim do UseEffect")
    }
    CallBack()
  }, [])


return (


  <div className='colunas'>
    <h2 className={colunas.textocoluna}>Application Sent</h2>
    

    {
      
      cards_Col2.map(e => < CardThumbnail 
        {...props}
        setViewCard={(e) => {
          console.log(e)
          props.setViewCard(e)
        }}
        key={e._id} 
        CardId={e._id} 
        companyName={e.companyName} 
        jobFunction={e.jobFunction}
        creationDate={e.creationDate} /> )


    }

{/* CardId, companyName, jobFunction, creationDate */}
    {/* <span>{cards_Col1}</span> */}

  </div>
)
}
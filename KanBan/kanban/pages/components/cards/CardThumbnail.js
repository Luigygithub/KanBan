// import { useState } from "react"
import OpenCard from "./OpenCard"
import smallcard from "../../../styles/thumbnail.module.css"

// import {useState, useEffect} from "react"

export default function CardThumbnail(props) {


  // const [open, setOpen] = useState(false)
  //aqui vai ter que ter um state ou route em que tu clicas e abre o cartao sem inputs, so com a informação
  //estilo onClick={}

  //o caminho vai ser, on click no thumbnail => openCard, que abre um popup com a informaçao renderizada da BD e depois onclick no botao edit => o mesmo card com os inputs
  //isto da alteraçao entre edit e view há de ser um state || route; O submit é que terá de certeza um route para redirect para a plataforma, o close tambem há de ter um route;
  return (
    <div onClick={() => props.setViewCard(props.CardId)}>
      
      <div className={smallcard.cardDiv}>
      <div className={smallcard.infocontainer}>
        <div className={smallcard.divjunction}>
          <span className={smallcard.cardtitles}>Co. Name</span>
          <span className={smallcard.cardinfos}>{props.companyName}</span>
        </div>
        <div className={smallcard.divjunction}>
          <span className={smallcard.cardtitles}>Job Function</span>
          <span className={smallcard.cardinfos}>{props.jobFunction}</span>
        </div>
        {/* <span><p className={smallcard.dateTexto}>{props.creationDate}</p></span> */}
       {props.viewCard === props.CardId &&  <OpenCard
       {...props} 
        setViewCard={(a) => props.setViewCard(a)}/>}
      </div>

    
    

</div>

      </div>
      )
}
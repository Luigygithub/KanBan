import { useState } from "react"
// import styles from "../../../styles/colunas.module.css"
import styles from "../../../styles/Home.module.css"
import form from "../../../styles/formulario.module.css"



export default function QuickAdd(props) {

  
  const [QuickAdd, setQuickAdd] = useState({
    // Card_Id: "_id",
    // User_Id: "_Id",
    stateFunnel: "string",
    creationDate: "data",
    observations: "string",
    companyName: "string",
    companylocation: "string",
    companyLink: "url",
    offerSource: "string",
    jobFunction: "string",
    salaryRangeMin: 0,
    salaryRangeMax: 0,
    offerLink: "url",
    regime: "",
    nomeRecruiter: "string",
    emailRecruiter: "email",
    telRecruiter: 0,
    linkedinRecruiter: "irl",
    companyLink: "url",
    appointmentData: "data",
    appointmentLocation: "string",
    appoimentInformation: "string",
    lastAppointment: "data"
  })

  const submit = async () => {
    console.log("olá")
    const res = await fetch(
      '../../api/cards/createCard', {
      body: JSON.stringify(QuickAdd),
      headers: {
        "Content-Type": "application/json",
        "Authenticate": localStorage.getItem("tokenG3")
      },
      method: "POST"
    })
    console.log("Adeus")
    const json = await res.json()

    //route para plataforma
    console.log(QuickAdd, res.status, json)
  }


  return (
    //TODOS OS INPUTS PRECISAM DE APRESENTAR PLACEHOLDER: CardData.XXXXX
    <div className={styles.popup}>
      <span>
        <form
        className={form.formMaindiv} 
          onSubmit={() => {
            // e.preventDefault(),
            submit()
            props.setAddCard(false)
            
        }}>

{/* <div className={form.topcontainer}>
          <div className={form.companiDiv}></div> */}
          <div className="companyINFO" >

          <fieldset className={form.formFormat}>
          <h3 className={form.fontDisplay}>Company INFO</h3>

          <label className={form.fontTitle}>Co. Name</label><br />
              <input
              className={form.placeHolderBox}
                type="text"
                autoComplete="off"
                onChange={(e) => setQuickAdd({ ...QuickAdd, companyName: e.target.value })}
                placeholder='Company Name'>
              </input><br /><br/>

              <label className={form.fontTitle}>Website</label><br />
              <input 
              className={form.placeHolderBox}
                onChange={(e) => setQuickAdd({ ...QuickAdd, companyLink: e.target.value })}
                name="description" placeholder="Website"></input><br />


            </fieldset>


            </div>
          <div className="functionDATA" >
            <fieldset className={form.formFormat}>
              <legend>


                <h3 className={form.fontDisplay}>Job Function</h3>
              </legend>

              {/* <label className={form.fontTitle}>Job Function</label><br /> */}
              <input
              className={form.placeHolderBox} 
              type="text" autoComplete="off"
                onChange={(e) => setQuickAdd({ ...QuickAdd, jobFunction: e.target.value })}
                placeholder='Working Position'></input><br/>





<br /><label className={form.fontTitle} id="Range">Monthly Salary Range Between</label><br/>
              <input
              className={form.placeHolderBox}  
              type="number"
                onChange={(e) => setQuickAdd({ ...QuickAdd, salaryRangeMin: e.target.value })}
                name="salary" min="200" max="100000" step="25" />
              <label>-</label>
              <input
              className={form.placeHolderBox} 
              type="number"
                onChange={(e) => setQuickAdd({ ...QuickAdd, salaryRangeMax: e.target.value })}
                name="salary" min="200" max="5000" step="25" />
                <input
                className={form.placeHolderBox}
                list="currency"
                id="Range"
                name="currency"
                placeholder="Pick a currency" />
              <datalist id="currency">

                <option value="EUR €" />
                <option value="USD $" />
                <option value="GBP £" />
                <option value="SIM §" />

              </datalist><br /><br/>




              <label className={form.fontTitle} id="Regime">Regime:</label>
                <input
                className={form.placeHolderBox}
                list="regimes"
                id="Regime"
                name="regimes"
                placeholder="Pick a Regime" />
                
                
                <datalist  id="regimes">
              <option value="Presencial" />
              <option value="Remote" />
              <option value="Hybrid" />

                </datalist><br/>

                <br /><label className={form.fontTitle} id="Estado">State Funnel:</label>
                <input
                className={form.placeHolderBox}
                onChange={(e) => setQuickAdd({...QuickAdd, stateFunnel: e.target.value})}
                list="state"
                id="Estado"
                name="state"
                placeholder="Opportunity State" />
                
                
                <datalist  id="state">

              <option value="Interest" />
              <option value="Application Sent" />
              <option value="Interview" />
              <option value="Awaiting Response" />
              <option value="Closed" />
                </datalist>

            </fieldset>
          </div>


          <span>
          <br /><br /><input className={styles.button1} type="submit"></input>
          <input className={styles.button1} type="reset"></input>
          <button 
          className={styles.button1}
          onClick={() => props.setAddCard(false)}>Close</button>
        </span>

        </form>
      </span>
  

    </div>
    
  )
}
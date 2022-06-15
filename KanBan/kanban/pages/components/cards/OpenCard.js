import { useState, useEffect } from "react"
import styles from "../../../styles/Home.module.css"
import form from "../../../styles/formulario.module.css"
// import {useRouter} from "next/router"
// import styles from "../../../styles/testes.module.css"
// import form from "../../../styles/testes1FORM.module.css"


export default function OpenCard(props) {
  const [openAndEdit, setOpenAndEdit] = useState(false)

  const [cardData, setCardData] = useState({
    stateFunnel: "",
    creationDate: "",
    observations: "",
    companyName: "",
    companylocation: "",
    companyLink: "",
    offerSource: "",
    jobFunction: "",
    salaryRangeMin: "",
    salaryRangeMax: "",
    offerLink: "",
    regime: "",
    nomeRecruiter: "",
    emailRecruiter: "",
    telRecruiter: "",
    linkedinRecruiter: "",
    appointmentData: "",
    appointmentLocation: "",
    appoimentInformation: "",
    lastAppointment: ""
  });


  // Não estamos a conseguir colocar a prop cardId sem ele chorar. 
  // Para fazer fetch temos que conseguir fazer chegar cardId ao API.

  // Colocámos cardId no ultimo parametro do useEffect e parou de chorar

  useEffect(() => {
    console.log(props)
    async function callCard() {
      
      const res = await fetch(`../../api/cards/catchCard?id=${props.CardId}`, {
        method: "POST"
      })
      if (res.status === 200) {
          const json = await res.json()
          console.log(json)
          setCardData(json)
          console.log("Fim do UseEffect")
      }
      console.log(res.status)
      // const res = await fetch(
      //   `../../api/cards/catchCard?id=${props.CardId}`, {
      //   ////ISTO NAO ESTÁ A FUNCIONAR COM O CARD_ID, tentar perceber pq
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Authenticate": localStorage.getItem("tokenG3")
      //   },
      //   method: "POST"
      // })
      // console.log('resposta', res.status)
      // if (res.status === 200) {
      //   const json = await res.json()
      //   setCardData(json.a)
      //   console.log("Fim do UseEffect")
      // }
    }
    callCard()
  }, [props.CardId])

  // AINDA FALTA FAZER. Basta copiar o que já está feito para criar o cartão e alterar para update. 
  //Possivelmente temos que ver o "data" pq pode ser necessária uma função nova para o mongoDB

  const editCard = async () => {
    const res = await fetch(
      '../../api/cards/editCard', {
      body: JSON.stringify(cardData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH"
    })
    const json = await res.json()
    console.log(cardData, res.status, json)
  }
  if (openAndEdit == false) {

    return (

      <div>
        <form
          className={form.formMaindiv2}
          onSubmit={(e) => {
            e.preventDefault()
            // editCard()
            //AQUI LEVA A FUNCAO DE SUBMIT
          }}>

          <div >
            <div >
              <div className="companyINFO" >

                <fieldset className={form.formFormat}>
                  <h3 className={form.fontDisplay}>Company INFO</h3>

                  <label className={form.fontTitle}>Company Name</label><br />
                  <p>{cardData.companyName}</p>
                  <label className={form.fontTitle}>Company Website </label><br />
                  <p>{cardData.companyLink}</p>


                  <label className={form.fontTitle}>Company Address</label><br />
                  <p>{cardData.companyLocation}</p>

                </fieldset>

              </div>
              <div className="functionDATA" >
                <fieldset >
                  <legend>
                    <h3 className={form.fontDisplay}>Job Function</h3>
                  </legend>

                  <br/><label className={form.fontTitle}>Job Function</label>
                  <span>{cardData.jobFunction}</span>


                  <br /><label className={form.fontTitle}>Offer Source</label>
                  <span>{cardData.offerSource}</span>


                  <br /><label className={form.fontTitle}>Offer Link</label>
                  <span>{cardData.offerLink}</span>


                  <br/><label className={form.fontTitle}>Monthly Salary Range</label>
                  <span>Between €{cardData.salaryRangeMax} and €{cardData.salaryRangeMin}</span>


                  

                  <br/><label className={form.fontTitle} id="Regime">Regime:</label>
                  <p>{cardData.regime}</p>


                  <datalist id="regimes">
                    <option value="Presencial">
                    </option>
                    <option value="Remote">
                    </option>
                    <option value="Hybrid">
                    </option>

                  </datalist>
                  <label className={form.fontTitle} id="Estado">State Funnel:</label>
                  <p>{cardData.stateFunnel}</p>

                  <datalist id="state">
                    <option value="Interest">
                    </option>
                    <option value="Application Sent">
                    </option>
                    <option value="Interview">
                    </option>
                    <option value="Awaiting Response">
                    </option>
                    <option value="Closed">
                    </option>
                  </datalist>
                </fieldset>
              </div>

            </div>
            <div><br />
              <label className={form.fontDisplay}>Observations</label><br />
              <textarea
                
                className={form.placeholder2}
                onChange={(e) => setCardData({ ...cardData, observations: e.target.value })}
                type="text"
                placeholder={cardData.observations}></textarea><br />
            </div>
          </div>



          <div className={form.bottomcontainer}>
            <div className="recruiterINFO" >
              <fieldset className={form.formFormat}>
                <h3 className={form.fontDisplay}>Interviewer Contact INFO</h3>

                <label className={form.fontTitle}>Name</label>
                <p>{cardData.nomeRecruiter}</p>


                <label className={form.fontTitle}>Email</label>
                <p>{cardData.emailRecruiter}</p>


                <label className={form.fontTitle}>Contact</label>
                <p>{cardData.telRecruiter}</p>


                <label className={form.fontTitle}>Linkedin</label>
                <p>{cardData.linkedinRecruiter}</p>

              </fieldset>

            </div>
            <div>

              <h3 className={form.fontDisplay}>Interview</h3>

              <label className={form.fontTitle}>Location</label>
              <p>{cardData.appointmentLocation}</p>


              <label className={form.fontTitle}>Next Interview</label>
              <p>{cardData.appointmentData}</p>


              <label className={form.fontTitle}>Last Interview</label>
              <p>{cardData.lastAppointment}</p>



            </div>
            <div>
              <label className={form.fontDisplay}>Additional Info</label><br />
              <p>{cardData.appoimentInformation}</p>
            </div>

          </div>
          {/* Aqui no botao de submit Ã© que ele vai fazer o route de volta para a plataforma */}
          <div className={styles.spanBotoes}>
            {/* <input className={styles.button1} type="submit"></input>
      <input className={styles.button1} type="reset"></input> */}




            <button
              className={styles.button1}
              onClick={() => setOpenAndEdit(true)}>Edit Card</button>


<button
                className={styles.button1}
                onClick={(e) => {
                  e.stopPropagation()
                  props.setViewCard(false)
                }}>Return</button>

          </div>

        </form>



      </div>
    )

  } else {
    return <>


      <div>

        <span>




          <form
            action="/plataforma"
            className={form.formMaindiv}
            onSubmit={(e) => {
              e.preventDefault()
              editCard()
            }}>

            <div className={form.topcontainer}>
              <div className={form.companiDiv}>
                <div className="companyINFO" >

                  <fieldset className={form.formFormat}>
                    <h3 className={form.fontDisplay}>Company INFO</h3>

                    <label className={form.fontTitle}>Company Name</label><br />
                    <input
                      value={cardData.companyName}
                      className={form.placeHolderBox}
                      type="text"
                      autoComplete="off"
                      onChange={(e) => setCardData({ ...cardData, companyName: e.target.value })}
                      placeholder='Company Name'>
                    </input><br />

                    <label className={form.fontTitle}>Company Website</label><br />
                    <input
                      value={cardData.companyLink}
                      className={form.placeHolderBox}
                      type="url"
                      onChange={(e) => setCardData({ ...cardData, companyLink: e.target.value })}
                      name="description" placeholder={cardData.companyLink}></input><br />

                    <label className={form.fontTitle}>Company Address</label><br />
                    <input
                    value={cardData.companyLocation}
                      className={form.placeHolderBox}
                      type="text"
                      name=""
                      onChange={(e) => setCardData({ ...cardData, companyLocation: e.target.value })}
                      placeholder='Address'></input><br />
                  </fieldset>


                </div>
                <div className="functionDATA" >
                  <fieldset className={form.formFormat}>
                    <legend>


                      <h3 className={form.fontDisplay}>Job Function</h3>
                    </legend>

                    <label className={form.fontTitle}>Job Function</label><br />
                    <input
                    value={cardData.jobFunction}
                      className={form.placeHolderBox}
                      type="text"
                      autoComplete="off"
                      onChange={(e) => setCardData({ ...cardData, jobFunction: e.target.value })}
                      placeholder='Working Position'></input>

                    <br /><label className={form.fontTitle}>Offer Source</label><br />
                    <input
                      value={cardData.offerSource}
                      className={form.placeHolderBox}
                      type="url"
                      onChange={(e) => setCardData({ ...cardData, offerSource: e.target.value })}
                      name="description" placeholder='Where did you find it?' />

                    <br /><label className={form.fontTitle}>Offer Link</label><br />
                    <input
                      value={cardData.offerLink}
                      className={form.placeHolderBox}
                      type="url"
                      onChange={(e) => setCardData({ ...cardData, offerLink: e.target.value })}
                      name="description" placeholder='Keep here the link' />

                    <br /><label className={form.fontTitle}>Salary Range Between</label>
                    <input
                      value={cardData.salaryRangeMin}
                      className={form.placeHolderBox}
                      type="number"
                      onChange={(e) => setCardData({ ...cardData, salaryRangeMin: e.target.value })}
                      name="salary" min="200" max="10000" step="25" />
                    <label>-</label>
                    <input
                      value={cardData.salaryRangeMax}
                      className={form.placeHolderBox}
                      type="number"
                      list="currency"
                      id="Range"
                      onChange={(e) => setCardData({ ...cardData, salaryRangeMax: e.target.value })}
                      name="currency" min="200" max="5000" step="25" />


                    <datalist className={form.placeHolderBox} id="currency">

                      <option value="EUR €" />
                      <option value="USD $" />
                      <option value="GBP £" />
                      <option value="SIM §" />

                    </datalist><br />




                    <label className={form.fontTitle} id="Regime">Regime:</label>
                    <input
                      value={cardData.regime}
                      className={form.placeHolderBox}
                      list="regimes"
                      id="Regime"
                      name="regimes"
                      placeholder="Selecione..." />


                    <datalist id="regimes">


                      <option value="Presencial">

                      </option>


                      <option value="Remote">

                      </option>

                      <option value="Hybrid">

                      </option>

                    </datalist>
                    <br/><label className={form.fontTitle} id="Estado">State Funnel:</label>
                    <input
                      value={cardData.stateFunnel}
                      className={form.placeHolderBox}
                      list="state"
                      id="Estado"
                      name="state"
                      placeholder="Selecione..." />


                    <datalist id="state">


                      <option value="Interest">

                      </option>


                      <option value="Application Sent">

                      </option>

                      <option value="Interview">

                      </option>

                      <option value="Awaiting Response">

                      </option>

                      <option value="Closed">

                      </option>

                    </datalist>


                  </fieldset>
                </div>

              </div>
              <div>
                <label className={form.fontDisplay}>Observations</label><br />
                <textarea className={form.placeholder2} onChange={(e) => setCardData({ ...cardData, observations: e.target.value })} type="text"></textarea><br />
              </div>
            </div>



            <div className={form.bottomcontainer}>
              <div className="recruiterINFO" >
                <fieldset className={form.formFormat}>
                  <h3 className={form.fontDisplay}>Interviewer Contact INFO</h3>

                  <label className={form.fontTitle}>Name</label><br />
                  <input value={cardData.nomeRecruiter} className={form.placeHolderBox} type="text" autoComplete="off"
                    onChange={(e) => setCardData({ ...cardData, nomeRecruiter: e.target.value })}
                    placeholder='Person Name' ></input><br />

                  <label className={form.fontTitle}>Email</label><br />
                  <input type="email"
                    value={cardData.emailRecruiter}
                    className={form.placeHolderBox}
                    onChange={(e) => setCardData({ ...cardData, emailRecruiter: e.target.value })}
                    name="description" placeholder='Do you have an email?' />

                  <br /><label className={form.fontTitle}>Contact</label><br />
                  <input type="number"
                  value={cardData.telRecruiter}
                    className={form.placeHolderBox}
                    onChange={(e) => setCardData({ ...cardData, telRecruiter: e.target.value })}
                    name="and contact?" />

                  <br /><label className={form.fontTitle}>Linkedin</label><br />
                  <input type="url"
                    value={cardData.linkedinRecruiter}
                    className={form.placeHolderBox}
                    name="description"
                    onChange={(e) => setCardData({ ...cardData, linkedinRecruiter: e.target.value })}
                    placeholder="Linkedin?" autoComplete="off" /><br />
                </fieldset>

              </div>
              <div>

                <h3 className={form.fontDisplay}>Interview</h3>

                <label className={form.fontTitle}>Location</label>
                <input type="text"
                  value={cardData.appointmentLocation}
                  className={form.placeHolderBox}
                  autoComplete="off"
                  onChange={(e) => setCardData({ ...cardData, appointmentLocation: e.target.value })}
                  placeholder='Address'></input><br />

                <label className={form.fontTitle}>Next Interview</label>
                <input type="datetime-local"
                  value={cardData.appointmentData}
                  className={form.placeHolderBox}
                  onChange={(e) => setCardData({ ...cardData, appointmentData: e.target.value })}
                  name="description" min="19/05/2022" /><br />

                <label className={form.fontTitle}>Last interview</label>
                <input type="datetime-local"
                  value={cardData.lastAppointment}
                  className={form.placeHolderBox}
                  onChange={(e) => setCardData({ ...cardData, lastAppointment: e.target.value })}
                  name="description" />

                <br />


              </div>
              <div>
                <label className={form.fontDisplay}>Additional Info</label><br />
                <input type="text"
                  value={cardData.appoimentInformation}
                  className={form.placeholder2}
                  name="description"
                  onChange={(e) => setCardData({ ...cardData, appoimentInformation: e.target.value })}
                  placeholder="Observations" autoComplete="off" /><br />
              </div>

            </div>

            <span>
              <br /><br /><input className={styles.button1} type="submit"></input>
              <input className={styles.button1} type="reset"></input>

              <button
                className={styles.button1}
                onClick={() => setOpenAndEdit(!openAndEdit)}>Return to View</button>
              <button
                className={styles.button1}
                onClick={(e) => {
                  e.stopPropagation()
                  props.setViewCard(false)
                }}>Close</button>
            </span>
          </form>



        </span>
        <span>

        </span>
        {/* AO CLICAR NO BOTAO EDITAR (CHAVE INGLESA), ELE PASSA A FAZER DISPLAY DE INPUTS/LABELS PASSIVEIS DE ALTERAÇAO */}

      </div>
    </>

  }
}
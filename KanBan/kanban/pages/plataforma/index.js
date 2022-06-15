import Head from 'next/head'
import Dashboard from '../components/dashboard'
// import Menu from './menu'
import dashstyle from "../../styles/colunas.module.css"
// import QuickAdd from ".././components/cards/quickAdd"
import { useState } from "react"
import { useRouter } from "next/router"
import colunas from "../../styles/colunas.module.css"
import QuickAdd from "../components/cards/quickAdd"


export default  function Plataforma() {
  const [addCard, setAddCard] = useState(false)
  // const [open, setOpen] = useState(false)
  const router = useRouter()

  const [viewCard, setViewCard] = useState(false)
  

  return (
    <>

    <Head>
    <title>OPPLOG</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/logo.ico" />
  </Head>

  <main className={dashstyle.maindiv}>

  <header className={dashstyle.header}>
    
    
        
        <img className={dashstyle.logoPossi} src="Logo-dashboard.svg"></img>
        <button 
        className={colunas.logoutbutton} 
        onClick={() => router.push("/components/paginaInicial/login")}>Logout</button>
      <button
      className={colunas.addBottom}        onClick={() => setAddCard(true)}
        >Create Opportunity</button>
      {addCard && <div>
        <QuickAdd
          setAddCard
          addCard />
      </div>}

     </header>

    <aside className='menuBar'>

    {/* <Menu />
    */}

    </aside>

    <content className='mainPage'>
    <Dashboard
    //  open={open}
    //  setOpen={setOpen}
    
    addCard={addCard}
    viewCard={viewCard}
    setAddCard={setAddCard}
    setViewCard={setViewCard} 
     />

    </content>

    </main>

    </>
    

  )
}

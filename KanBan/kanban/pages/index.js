import Head from 'next/head'
import styles from "../styles/Home.module.css"
//import vector from "../../../public/Vector.png"
import {useRouter} from "next/router"

export default function Landing() {
  const router = useRouter()
  return (
    <div className={styles.body}>
      <Head>
        <title>OPPLOG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className={styles.container1}>

        <content className={styles.containerE1}>
        <div className={styles.logoDivlock}>
        <img className={styles.image2} src="logo.svg"></img>
          <span className={styles.fontQuote}><p>Welcome to your new Job!</p></span>
        </div>


          {/* BOTOES!!!! */}
          <div className={styles.verticalContainer1}>
            <button 
            className={styles.button1} 
            label="Sign Up" 
            onClick={() => router.push('/components/paginaInicial/signup')}
            >Sign Up
            </button>
            <button 
            className={styles.button1} 
            label="Log In" 
            onClick={() => router.push('/components/paginaInicial/login')}
            >Login
            </button> 
          </div>

         
          <footer className={styles.verticalContainer2}>
          <span className={styles.fontAboutUs}>
            <a href="https://github.com/JoaoSalgadoAzevedo/KanBan" className={styles.fontAboutUs}>About-us</a></span>
          <span className={styles.fontAboutUs}>
            <a href="https://github.com/JoaoSalgadoAzevedo/KanBan" className={styles.fontAboutUs}>
              FAQs</a></span>
          <a href="https://www.facebook.com/douglas.lourenco.3/"><img src="Facebook.svg"></img></a>
          <a href="https://github.com/Dougloness89"><img src="Github.svg"></img></a>
          <a href="https://www.instagram.com/dougloness/"><img src="Instagram.svg"></img></a>
     </footer>
        </content>

        <aside className={styles.containerD1}>
          <div className={styles.boxInfo}>
            <span><img className={styles.image}src="Clip.svg"></img></span>
            <span className={styles.span1}><h3 className={styles.description2}>What you will find?</h3><p className={styles.description}>
            Here it should go an image of our platform</p></span>

          </div>
          <span className={styles.fontCopyright}><p>©2022 Opplog. All rights reserved</p></span>
        </aside>
        
      </main>


    </div>
  )
}
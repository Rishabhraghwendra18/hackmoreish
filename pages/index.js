import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Theme from '../components/Theme'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <NavBar></NavBar>
    </div>
    <div className={styles.container}>
      <Theme></Theme>
    </div>
    </>
  )
}

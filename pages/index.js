import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Prizes from '../sections/Prizes/index.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar></NavBar>
      <Prizes></Prizes>
       </div>
  )
}

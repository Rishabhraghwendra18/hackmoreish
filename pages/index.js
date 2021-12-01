import styles from '../styles/Home.module.css'
import Hero from '../sections/Hero'
import Prizes from '../sections/Prizes/index'
import Theme from '../sections/Theme/index'


export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Hero></Hero>
      <Prizes></Prizes>
      <Theme></Theme>
    </div>
    </>
  )
}

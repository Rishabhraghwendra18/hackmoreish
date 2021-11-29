import styles from '../styles/Home.module.css'
import Hero from '../sections/Hero'
import Theme from '../sections/Theme/index'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Hero></Hero>
      <Theme></Theme>
    </div>
    </>
  )
}


import styles from '../../styles/About.module.css'

export default function About() {
    return (
        <div className={`${styles.box}`}>





            <h1 className={`${styles.heading}`}>
                <div className={`${styles.title_HackMoreish}`}>
                    <p >Hack</p>
                    <p style={{ color: "#4700ff" }}>  Moreish</p>

                </div>

                <div className={`${styles.heading2}`}>
                    About
                    <div className={`${styles.contents}`}>

                        <p>This will be a great opportunity for beginners to start with their journey. Participants will have all the
                            rights to choose a project for themselves. Active and top participants will be awarded with
                            cool goodies and opportunities.</p>
                        <p>Our focus is on letting your imagination flow free and enable you to push the boundaries of
                            what can be done. We're open for all!</p>

                        <p className={`${styles.quote}`}>“Hackathons are where your crazy idea becomes reality”
                            – Alex Kern</p>
                    </div>
                </div>
            </h1>

        </div>
    )
}
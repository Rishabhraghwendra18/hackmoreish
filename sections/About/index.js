import styles from "../../styles/About.module.css";

export default function About() {
  return (
    <div className={`${styles.box} vh-100 d-flex justify-content-center `} id="About">
      <div className={`d-flex justify-content-center ${styles.heading}`}>
        <div className="d-flex justify-content-center">
          <div className={`largerText ${styles.title_HackMoreish}`}>
            <p>Hack </p>
            <p style={{ color: "#4700ff" }}>Moreish</p>
          </div>
        </div>
        <div className={`${styles.content}`}>
          <h1 className="Abot">About</h1>
          <cite className="fs-3" style={{fontSize: "1.5vw !important"}}>
            <q>
              Hackathons are where your crazy idea becomes reality
            </q>
            ~ Alex Kern
          </cite>
          <p className="fs-3" style={{fontSize: "1.5vw !important"}}>
            Hackmoreish 2022 is open for all hackathon where participants can use
            any technology to build their hacks. It's a great opportunity to
            showcase your unique ideas and expand your boundaries with your
            creativity and proficiency. Hackmoreish is a 48-hour hackathon and
            whether you are having a formidable team or you are a lone-wolf, do
            grab this opportunity to take home some exciting prizes, goodies and
            certificates and MEMORIES!
          </p>
        </div>
      </div>
    </div>
  );
}

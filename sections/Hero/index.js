import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/Home.module.css';
import discordLogo from '../../public/discord-logo-for-apply.png'
import devfolioLogo from '../../public/devfolio.svg'


export default function Hero() {
      return (


            <div className="d-flex flex-column justify-content-center align-items-center vh-100" id="Home">
                  <div className="border-start border-5 rounded ps-2">
                        <div className={styles.two_vw_font_size}>
                              HACKATHON 2022
                        </div>
                        <div className={`largerText my-3 ${styles.title_HackMoreish}`}>
                              <p>Hack </p>
                              <p style={{ color: "#4700ff" }}>Moreish</p>
                        </div>
                        <div className={styles.two_vw_font_size}>
                              <span>Coming Soon...</span>
                        </div>
                  </div>
                  <div className={`d-flex flex-row justify-content-center align-items-center mt-3 ${styles.Joining_Buttons_Div}`}>
                        <div className={`border border-1  d-flex flex-row justify-content-center align-items-center ${styles.Joining_Links} p-3`}>
                              <Image src={devfolioLogo} width={32} height={32} className="mx-auto" />
                              <span className="ms-1">Apply with Devfolio</span>
                        </div>
                        <a href={"https://discord.gg/ncvVmHSV"} target={"_blank"} style={{textDecoration: "none"}}>
                        <div className={`border border-1 d-flex flex-row justify-content-center align-items-center ${styles.Joining_Links} p-3`}>
                              <Image src={discordLogo} width={32} height={32} className="mx-auto" />
                              <span className="ms-1">Join Discord Server</span>
                        </div>
                        </a>
                  </div>
            </div>
      )
}
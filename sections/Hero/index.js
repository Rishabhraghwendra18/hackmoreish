import Image from "next/image";
import Link from "next/link";
import { useEffect } from 'react'
import styles from "../../styles/Home.module.css";
import discordLogo from "../../public/discord-logo-for-apply.png";

export default function Hero() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100"
      id="Home"
    >
      <div className="border-start border-5 rounded ps-2">
        <div className={styles.two_vw_font_size}>HACKATHON 2022</div>
        <div className={`largerText my-3 ${styles.title_HackMoreish}`}>
          <p>Hack </p>
          <p style={{ color: "#4700ff" }}>Moreish</p>
        </div>
        <div className={styles.two_vw_font_size}>
          <span>
            20<sup>th</sup> May 2022
          </span>
        </div>
      </div>
      <div
        className={`d-flex flex-row justify-content-center align-items-center mt-3 ${styles.Joining_Buttons_Div}`}
      >
        <div
          class={"apply-button"}
          data-hackathon-slug={"hackmoreish"}
          data-button-theme={"light"}
          style={{height: "44px",width: "312px"}}
        ></div>

        <a
          href={"https://discord.gg/PqwCqPxhkd"}
          target={"_blank"}
          style={{ textDecoration: "none" }}
        >
          <div
            className={`border border-1 d-flex flex-row justify-content-center align-items-center ${styles.Joining_Links} p-3`}
            style={{height: "44px",width: "312px"}}
          >
            <Image
              src={discordLogo}
              width={32}
              height={32}
              className="mx-auto"
            />
            <span className="ms-1">Join Discord Server</span>
          </div>
        </a>
      </div>
    </div>
  );
}

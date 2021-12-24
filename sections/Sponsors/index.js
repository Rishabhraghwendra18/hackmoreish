import Image from "next/image";
import Div from "../../components/Div";
import styles from "../../styles/Sponsors.module.css";

function SponsorDiv({ href, src, alt }) {
  return (
    <a href={href} target={"_blank"}>
      <img src={src} alt={alt} className={`${styles.image}`} />
    </a>
  );
}
export default function Sponsors({ goldSponsors, silverSponsors }) {
  return (
    <>
      <Div title={"Gold Sponsors"} section_id={"Sponsors"}>
        <div className="d-flex justify-content-center flex-wrap mt-1">
          {goldSponsors.map((e, i) => (
            <div className="d-flex justify-content-center">
              <SponsorDiv
                key={i}
                href={e.sponsorWebsiteLink}
                src={e.sponsorIcon.url}
                alt={e.sponsorIcon.title}
              />
            </div>
          ))}
        </div>
      </Div>
      <Div title={"Silver Sponsors"} section_id={"Sponsors"}>
        <div className={`${styles.grid_container}`}>
          {silverSponsors.map((e, i) => (
            <div className="d-flex justify-content-center">
              <SponsorDiv
                key={i}
                href={e.sponsorWebsiteLink}
                src={e.sponsorIcon.url}
                alt={e.sponsorIcon.title}
              />
            </div>
          ))}
        </div>
      </Div>
    </>
  );
}

import Div from "../../components/Div";
import styles from "../../styles/Sponsors.module.css";

function SponsorDiv({ href, src, alt }) {
  return (
    <a href={href} target={"_blank"}>
      <img src={src} alt={alt} className={`${styles.image}`} />
    </a>
  );
}
// Gold Sponsors = Diamond Sponsors , Silver Sponsors = Gold Sponsors
export default function Sponsors({ goldSponsors, silverSponsors }) {
  return (
    <>
      <Div title={"Diamond Sponsors"} section_id={"Sponsors"}>
        <div className={`${styles.grid_container}`}>
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
      <Div title={"Gold Sponsors"} section_id={"Sponsors"}>
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

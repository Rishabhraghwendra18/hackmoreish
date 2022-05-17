import Div from "../../components/Div";
import styles from "../../styles/Sponsors.module.css";

function SponsorDiv({ href, src, alt }) {
  return (
    <a href={href} target={"_blank"}>
      <img src={src} alt={alt} className={`${styles.image}`} />
    </a>
  );
}
// Gold Sponsors = Associate Sponsors , Silver Sponsors = Diamond Sponsors
export default function Sponsors({ goldSponsors, silverSponsors,level4Sponsors,communitySponsors }) {
  return (
    <>
      <Div title={"Associate Sponsors"} section_id={"Sponsors"}>
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
      <Div title={"Diamond Sponsors"} section_id={"Sponsors"}>
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
      <Div title={"Gold Sponsors"} section_id={"Sponsors"}>
        <div className={`${styles.grid_container}`}>
          {level4Sponsors.map((e, i) => (
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
      <Div title={"Community Sponsors"} section_id={"Sponsors"}>
        <div className={`${styles.grid_container}`}>
          {communitySponsors.map((e, i) => (
            <div className="d-flex justify-content-center">
              <SponsorDiv
                key={i}
                href={e.link}
                src={e.logo.url}
                alt={e.logo.title}
              />
            </div>
          ))}
        </div>
      </Div>
    </>
  );
}

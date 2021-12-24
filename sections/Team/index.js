import Image from "next/image";
import Div from "../../components/Div";
import { Card } from "react-bootstrap";
import styles from "../../styles/team.module.css";
import Cards from "../../components/Cards";
import teams from "./team";
// import ansh from "../../public/ansh.jpeg"

function ProfileCards({title,url,width,height,alt,description}) {
    return (
        <Card className={`card col-xs-12 col-sm-4 ${styles.profile}`}>
        <div className="d-flex justify-content-center" id="image_div">
              <Image
              variant="top"
              src={url}
              width={width}
              height={height}
              alt={alt}
              className="img-card"
              />
        </div>
        <Card.Body className="card-content">
          <Card.Title className="card-title text-center">{title}</Card.Title>
          <Card.Text className="text-center">{description}</Card.Text>
        </Card.Body>
      </Card>
    )
}
export default function Team(){
    console.log('style: ',styles);
    return (
        <Div title={"Our Team"} section_id={"Team"}>
            <div className={`${styles.grid_container}`}>
                {
                    teams.map((e,i)=>(
                        <a href={e.linkedinId} target={"_blank"} style={{textDecoration: "none"}}>
                            <Cards key={i} title={e.name} url={require(`../../public/profile_photos/${e.photoName}`)} description={e.role} className={`${styles.profile}`} width={110} height={110}></Cards>
                        </a>
                    ))
                }
            </div>
        </Div>
    );
}
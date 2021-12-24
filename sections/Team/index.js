import Image from "next/image";
import Div from "../../components/Div";
import { Card } from "react-bootstrap";
import styles from "../../styles/team.module.css";
import teams from "./team";
import ansh from "../../public/ansh.jpeg"

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
        <Div>
            <div className={`${styles.grid_container}`}>
                <ProfileCards url={ansh}></ProfileCards>
            </div>
        </Div>
    );
}
import Div from "../../components/Div";
import Cards from "../../components/Cards";
import styles from "../../styles/team.module.css";
import teams from "./team";
import ansh from "../../public/ansh.jpeg"

export default function Team(){
    return (
        <Div>
            <div className="d-flex flex-row" >
            <a href="" style={{textDecoration:"none;"}}><Cards title={"Rishabh Raghwendra"} url={ansh} width={70} height={70} description={"Lead organizer"} alt={"none"} className={`${styles.image}`}></Cards></a>
            <a href=""><Cards title={"Rishabh Raghwendra"} url={ansh} width={70} height={70} description={"Lead organizer"} alt={"none"} className={`${styles.image}`}></Cards></a>
            <a href=""><Cards title={"Rishabh Raghwendra"} url={ansh} width={70} height={70} description={"Lead organizer"} alt={"none"} className={`${styles.image}`}></Cards></a>
            <a href=""><Cards title={"Rishabh Raghwendra"} url={ansh} width={70} height={70} description={"Lead organizer"} alt={"none"} className={`${styles.image}`}></Cards></a>
            </div>
            <div className="d-flex flex-row" >
            <a href=""><Cards title={"Rishabh Raghwendra"} url={ansh} width={70} height={70} description={"Lead organizer"} alt={"none"} className={`${styles.image}`}></Cards></a>
            <a href=""><Cards title={"Rishabh Raghwendra"} url={ansh} width={70} height={70} description={"Lead organizer"} alt={"none"} className={`${styles.image}`}></Cards></a>
            <a href=""><Cards title={"Rishabh Raghwendra"} url={ansh} width={70} height={70} description={"Lead organizer"} alt={"none"} className={`${styles.image}`}></Cards></a>
            <a href=""><Cards title={"Rishabh Raghwendra"} url={ansh} width={70} height={70} description={"Lead organizer"} alt={"none"} className={`${styles.image}`}></Cards></a>
            </div>
        </Div>
    );
}
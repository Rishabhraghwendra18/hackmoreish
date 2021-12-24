import Div from "../../components/Div";
import styles from "../../styles/team.module.css";
import Cards from "../../components/Cards";
import teams from "./team";

export default function Team(){
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
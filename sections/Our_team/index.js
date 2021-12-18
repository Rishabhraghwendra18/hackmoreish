import Image from "next/image";
import open from "../../public/open.png";
import team from "../../styles/team.module.css"

export default function Our_Team(){
    return (
        
        <div className={team.team_area}>
        <div className="container">
            <div classNameName="row">
                <div className="col-md-4 col-sm-6 col-xs-12">
                 <div className={team.single_team}>
                    <div className={team.img_area}>
                        <Image src={open} className="img-responsive" />
                        <div className="social">
                            <ul className="list-inline">
                                
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={team.img_text}>
                        <h4>Paritosh Srivastava</h4>
                        <h5>Web Designer</h5>
                    </div>
                 </div>
                </div>
            </div>
        </div>
        </div>
    );
}
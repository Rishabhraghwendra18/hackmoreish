import healths from "../../public/health.png";
import education from "../../public/education.png";
import game from "../../public/game.png";
import open from "../../public/open.png";
import enviro from "../../public/enviro.png";
import artificial from "../../public/artificial.png";
import Cards from "../../components/Cards";

export default function Theme({content}) {
return (
<div className="section">
 <div className="row">
   {content.map(e=>(
     <Cards title={e.title} url={e.icon.url} width={e.icon.width} height={e.icon.height} description={e.description}/>
   ))}
</div> 
</div>
);
}
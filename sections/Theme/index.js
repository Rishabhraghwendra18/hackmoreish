import Cards from "../../components/Cards";

export default function Theme({content}) {
return (
<div className="section">
 <div className="row">
   {content.map(e=>(
     <Cards key={e.icon.title} title={e.title} url={e.icon.url} width={e.icon.width} height={e.icon.height} alt={e.icon.description} description={e.description}/>
   ))}
</div> 
</div>
);
}
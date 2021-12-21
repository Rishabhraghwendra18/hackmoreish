import Cards from "../../components/Cards";
import Div from "../../components/Div";

export default function Theme({content}) {
return (
  <Div title={"Themes"} section_id={"Theme"}>
  <div className="d-flex justify-content-center flex-wrap mt-1">
    {content.map((e) => (
      <Cards
        key={e.icon.title}
        title={e.title}
        url={e.icon.url}
        width={e.icon.width}
        height={e.icon.height}
        alt={e.icon.description}
        description={e.description}
      />
    ))}
  </div>
  </Div>

);
}
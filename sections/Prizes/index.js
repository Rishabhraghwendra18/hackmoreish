import Cards from "../../components/Cards";
import Div from "../../components/Div";

export default function Prize({ prizes }) {
  return (
    <Div title={"Prizes"}>
    <div className="d-flex justify-content-center flex-wrap mt-1">
      {prizes.map((e) => (
        <Cards
          key={e.icon.title}
          title={e.title}
          url={e.icon.url}
          width={200}
          height={200}
          alt={e.icon.description}
          description={e.description}
        />
      ))}
    </div>
    </Div>
  );
}

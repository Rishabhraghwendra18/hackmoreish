import Cards from "../../components/Cards";

export default function Prize({ prizes }) {
  return (
    <div className="d-flex justify-content-center flex-wrap">
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
  );
}

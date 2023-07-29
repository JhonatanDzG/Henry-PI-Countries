import "../../css/cards/cards.css";
import Card from "./Card.jsx";

export default function Cards({ countries, onClose }) {
  return (
    <>
    <div className="CardsContainer">
      {countries &&
        countries.map((element, index) => {
          return (
            <Card
              key={index}
              id={element.id}
              name={element.name}
              flagImage={element.flagImage}
              continent={element.continent}
              capital={element.capital}
              subregion={element.subregion}
              area={element.area}
              population={element.population}
              onClose={onClose}
            />
          );
        })}
    </div>
    </>
  );
}

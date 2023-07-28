import "../../css/cards/cards.css";
import Card from "./Card.jsx";

export default function Cards({ countries, onClose }) {
  return (
    <div className="CardsContainer">
      {countries &&
        countries.map((element, index) => {
          return (
            <Card
              key={index}
              id={element.id}
              name={element.name}
              status={element.status}
              species={element.species}
              gender={element.gender}
              origin={element.origin.name}
              image={element.image}
              onClose={onClose}
            />
          );
        })}
    </div>
  );
}

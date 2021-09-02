import "./card-list-styles.css";
import { Card } from "../card/card.component";
export function CardList({ monsters }) {
  return (
    <div className="CardList">
     
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
}

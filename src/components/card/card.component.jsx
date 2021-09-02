import "./card.styles.css";
export const Card = ({ monster }) => {
  return (
    <div className="Card">
      <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2`} />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({elem}) => {
  return (
    <div key={elem.id} className="card">
      <Link to={`/accomodation/${elem.id}`}>
        <div className="card__img"></div>
        <h2 className="card__title">{elem.title}</h2>
      </Link>
    </div>
  );
};

export default Card;

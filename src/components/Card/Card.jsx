import "./Card.scss";
import data from "../../data/data.json";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      {data.map((elem) => {
        return (
          <div key={elem.id} className="card">
            <Link to={`/accomodation/${elem.id}`}>
              <div className="card__img"></div>
              <h2 className="card__title">{elem.title}</h2>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Card;

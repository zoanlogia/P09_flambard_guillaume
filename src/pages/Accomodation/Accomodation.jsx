import { useParams } from "react-router-dom";
import Header from "../../layouts/Header/Header";
import "./Accomodation.scss";
import data from "../../data/data.json";

const Accomodation = () => {

  const { id } = useParams();
  const accomodation = data.find((elem) => elem.id === id);

  const title = accomodation.title.split("-")[0]
  const location = accomodation.title.split("-")[1]

  return (
    <>
      <Header />
      <section className="accomodation">
        <div className="accomodation__container container">
          <div
            id="cover"
            style={{ backgroundImage: `url(${accomodation.cover})` }}
            alt="accomodation"
          ></div>
        </div>
      </section>
      <section className="desc container">
        <div>
          <h2 className="desc__title">{title}</h2>
          <p className="desc__adress">{location}</p>
        </div>
        <div className="host">
          <div className="host__details">
          <p>{accomodation.host.name}</p>
          <img src={accomodation.host.picture} alt="host" />
          </div>
          <div className="host__rating">
            <p>{accomodation.rating}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accomodation;

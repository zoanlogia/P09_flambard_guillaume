import { useParams } from "react-router-dom";
import Header from "../../layouts/Header/Header";
import "./Accomodation.scss";
import data from "../../data/data.json";
import Stars from "../../components/Star/Stars.jsx";
import Dropdown from "../../components/Dropdown/Dropdown.jsx";

const Accomodation = () => {
  const { id } = useParams();
  const accomodation = data.find((elem) => elem.id === id);

  const title = accomodation.title.split("-")[0];
  const location = accomodation.title.split("-")[1];

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
          <div className="host__ratings">
            <Stars />
          </div>
        </div>
      </section>
      <section className="badge container">
        <div className="badge__content">
          {accomodation.tags.map((tag, index) => {
            return (
              <div key={index} className="badge__item">
                <p>{tag}</p>
              </div>
            );
          })}
        </div>
        <div className="dropdown">
          <Dropdown  title='Description' text={accomodation.description}/>
          <Dropdown title='Equipements' text={(accomodation.equipments).map(equipment => 
            <p>{equipment}</p>
            )}/>
        </div>
      </section>
    </>
  );
};

export default Accomodation;

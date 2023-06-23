import { useParams } from "react-router-dom";
import Header from "../../layouts/Header/Header";
import "./Accomodation.scss";
import Dropdown from "../../components/Dropdown/Dropdown.jsx";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetch.js";
import Star from "../../components/Star/Star.jsx";
import Carousel from "../../components/Carousel/Carousel.jsx";

const Accomodation = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  // const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const dataApi = await fetchData();
      setData(dataApi);
    })();
  }, []);

  if (!data) {
    return <p>chargement...</p>;
  }

  const accomodation = data.find((elem) => elem.id === id);
  const title = accomodation.title.split("-")[0];
  const location = accomodation.title.split("-")[1];

  const rating = new Array(5).fill("inactive", 0, 5);
  rating.fill("active", 0, accomodation.rating);

  const pictures = accomodation.pictures.map(picture => picture);

  return (
    <>
      <Header />
      <section className="accomodation">
        <div className="accomodation__container container">
            <Carousel images={pictures} />
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
            <div className="star-rating">
              {rating.map((status, index) => 
                <Star key={index} starClass={status} />
              )}
            </div>
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
          <Dropdown title="Description" text={accomodation.description} />
          <Dropdown
            title="Equipements"
            text={accomodation.equipments.map((equipment, index) => (
              <p key={index}>{equipment}</p>
            ))}
          />
        </div>
      </section>
    </>
  );
};

export default Accomodation;

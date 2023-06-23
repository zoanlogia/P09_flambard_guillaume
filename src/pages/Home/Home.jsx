import { useEffect, useState } from "react";
import Gallery from "../../layouts/Gallery/Gallery";
import Header from "../../layouts/Header/Header";
import "./Home.scss";
import { fetchData } from "../../utils/fetch.js";
import Footer from "../../layouts/Footer/Footer.jsx";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const dataApi = await fetchData();
      setData(dataApi);
    })();
  }, []);

  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero__container container">
          <div className="overlay"></div>
          <h1>
            Chez Vous, <br /> partout ailleurs
          </h1>
        </div>
      </section>
      {data ? <Gallery data={data} /> : <p>chargement...</p>}
      <Footer />
    </>
  );
};

export default Home;

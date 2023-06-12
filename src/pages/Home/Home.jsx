import Gallery from "../../layouts/Gallery/Gallery"
import Header from "../../layouts/Header/Header"
import "./Home.scss"

const Home = () => {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero__container container">
          <div className="overlay"></div>
          <h1>Chez Vous, <br /> partout ailleurs</h1>
        </div>
      </section>
      <Gallery />
    </>

  )
}

export default Home
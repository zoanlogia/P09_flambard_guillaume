import Card from "../../components/Card/Card.jsx"
import "./Gallery.scss"


const Gallery = ({data}) => {
  return (
    <div className="gallery container">
      {data.map(elem => 
        <Card key={elem.id} elem={elem} />
      )}
    </div>
  )
}

export default Gallery
import "./Star.scss";

const Star = ({starClass}) => {
  return (
      <span className={`star ${starClass}`}>&#9733;</span>
  );
};

export default Star;

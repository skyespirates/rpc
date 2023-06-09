import { TourType } from "./@types/tour";
import { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }: TourType) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="tour">
      <img className="tour__img" src={image} alt={name} />
      <div className="tour__body">
        <div className="tour__title">
          <h4 className="tour__name">{name}</h4>
          <span className="tour__price">{price}</span>
        </div>
        <p className="tour__info">
          {readMore ? info : ` ${info.substring(0, 200)}...`}
          <button
            className="tour__info-button"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
      </div>
      <button
        className="tour__button"
        onClick={() => {
          if (removeTour) removeTour(id);
        }}
      >
        Not Interested
      </button>
    </div>
  );
};

export default Tour;

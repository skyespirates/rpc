import { useState, useEffect } from "react";
import { TourType } from "./@types/tour";

import Tour from "./Tour";

import "./style.css";

const url = "https://course-api.com/react-tours-project";

const Tours = () => {
  const [tours, setTours] = useState<TourType[] | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchTours = (): Promise<void> => {
    setLoading(true);
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setTours(data);
      })
      .catch((error) => {
        setLoading(false);
        throw new Error(error.message);
      });
  };
  useEffect(() => {
    fetchTours();
  }, []);

  const handleRemoveTour = (id: string) => {
    const newTours = tours?.filter((tour) => tour.id !== id) as TourType[];
    setTours(newTours);
  };
  {
    tours?.length === 0 && (
      <button onClick={() => setTours(tours)}>refresh</button>
    );
  }

  if (loading) return <div>Loading...</div>;

  if (tours?.length === 0)
    return (
      <div className="tours__empty">
        <h2>No tours left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    );

  return (
    <div className="tours">
      <h1 className="tours__title">Our Tours</h1>
      <div className="tours__container">
        {tours?.length! > 0 &&
          tours?.map(({ id, image, info, name, price }) => (
            <Tour
              key={id}
              id={id}
              image={image}
              info={info}
              name={name}
              price={price}
              removeTour={handleRemoveTour}
            />
          ))}
      </div>
    </div>
  );
};

export default Tours;

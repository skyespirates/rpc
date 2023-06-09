import { useState } from "react";
import data from "./data";
import List from "./List";
import "./style.css";
const App = () => {
  const [person, setPerson] = useState(data);
  return (
    <div className="card">
      <h3 className="card__header">{person.length} birthdays today</h3>
      <ul className="list">
        {person.map((item) => (
          <List
            key={item.id}
            name={item.name}
            age={item.age}
            image={item.image}
          />
        ))}
      </ul>
      {person.length ? (
        <button className="card__button" onClick={() => setPerson([])}>
          Clear All
        </button>
      ) : (
        <button className="card__button" onClick={() => setPerson(data)}>
          Refresh
        </button>
      )}
    </div>
  );
};

export default App;

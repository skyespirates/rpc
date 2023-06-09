type ListProps = {
  name: string;
  age: number;
  image: string;
};
const List = ({ name, age, image }: ListProps) => {
  return (
    <li className="list__item">
      <img className="list__img" src={image} alt={name} />
      <span className="list__text">
        <h4 className="list__title">{name}</h4>
        <p className="list__subtitle">{age} years</p>
      </span>
    </li>
  );
};

export default List;

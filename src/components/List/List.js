import './list.css';

export const List = ({ list }) => {
  return (
    <section className="list-section">
      <ul>
        {list.map((item) => (
          <li className="list-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

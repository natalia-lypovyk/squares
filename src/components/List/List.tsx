import { FC } from 'react';

import './list.css';

interface ListProps {
  list: string[];
}

export const List: FC<ListProps> = ({ list }) => {
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

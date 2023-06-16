import { FC } from 'react';

import { Cell } from '../Cell/Cell';

import type { Squares } from './squares';
import './squares.css';

interface SquaresProps {
  quantity: number;
  handleHover: (id: string) => void;
}

export const Squares: FC<SquaresProps> = ({ quantity, handleHover }) => {
  const squares = (quantity: number): Squares => {
    return [...Array(quantity).keys()].map((el) => (
      [...Array(quantity).keys()].map((item) => ({
        id: `row ${el+1} col ${item+1}`,
        row: el + 1,
        col: item + 1
      }))
    ))
  };

  return (
    <div className="squares">
      {squares(quantity).map((square, index) => (
        <div key={`square-${index}`}>
          {square.map((el) => (
            <Cell key={el.id} id={el.id} handleHover={handleHover}  />
          ))}
        </div>
      ))}
    </div>
  );
};

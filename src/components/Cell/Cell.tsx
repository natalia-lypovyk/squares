import { FC, MouseEvent } from "react";

import './cell.css';

interface CellProps {
  handleHover: (id: string) => void;
  id: string;
}
export const Cell: FC<CellProps> = ({ handleHover, id }) => {
  const changeBackground = (event: MouseEvent<HTMLDivElement>, id: string) => {
    const box: HTMLDivElement = event.currentTarget;
    if (box.style.background === '') {
      box.style.background = '#01a9f4';

    } else {
      box.style.background = '';
    }

    handleHover(id);
  }

  return (
    <div
      onMouseOver={(e) => changeBackground(e, id)}
      className='squares__block'
    ></div>
  );
};

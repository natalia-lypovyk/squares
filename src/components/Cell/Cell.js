import './cell.css';

export const Cell = ({ handleHover, id }) => {
  function changeBackground(e, id) {
    if (e.target.style.background === '') {
      e.target.style.background = '#01a9f4';

    } else {
      e.target.style.background = '';
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

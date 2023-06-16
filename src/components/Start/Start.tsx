import { FC, MouseEvent } from 'react';

import './start.css';

interface StartProps {
  selectedMode: string ;
  setSelectedMode: (e: string) => void;
  isLoading: boolean;
  modes: [string];
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
  hasGameStarted: boolean;
}

export const Start: FC<StartProps> = ({ selectedMode, setSelectedMode, isLoading, modes, handleClick, hasGameStarted }) => {
  return (
    <div className="top">
      <form className="start-form">
        <select
          name="mode-select"
          className="start-form__select"
          value={selectedMode}
          onChange={(e) => setSelectedMode(e.target.value)}
        >
          {
            isLoading ? (
              <option value="" disabled>Is Loading...</option>
            ) : (
              <option value="" disabled>Pick Mode</option>
            )
          }

          {modes && modes?.map((mode) => (
            <option
              value={mode}
              key={mode}
            >
              {mode}
            </option>
          ))}
        </select>

        <button
          type="button"
          className="start-form__button"
          onClick={handleClick}
        >
          Start
        </button>
      </form>

      {hasGameStarted && <h2 className="start-heading">Hover Squares</h2>}
    </div>
  );
};

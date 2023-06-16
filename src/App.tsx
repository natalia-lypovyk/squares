import { useState, useEffect, FC, MouseEvent } from 'react';

import { API_URL } from './constants';
import { Squares } from './components/Squares/Squares';
import { Start } from './components/Start/Start';
import { List } from './components/List/List';

import './app.css';
type SquareData = {
  name: string;
  field: number;
  id: string
}

const App: FC = () => {
  const [squaresData, setSquaresData] = useState<SquareData[]>([]);
  const [modes, setModes] = useState<string[]>([]);
  const [quantity, setQuantity] = useState<number>(0);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedMode, setSelectedMode] = useState<string>('');

  const [hoveredSquares, setHoveredSquares] = useState<string[]>([]);
  const [hasGameStarted, setGameHasStarted] = useState<boolean>(false);

  console.log( squaresData,'modes', modes)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await fetch(API_URL)
        .then(res => res.json())
        .catch(error => console.error(error));

      setSquaresData(result);
      setIsLoading(false);
      setModes(result.map((item) => item.name))
    }

    fetchData();
  }, []);

  useEffect(() => {
    setHoveredSquares([]);
    setGameHasStarted(false);
  }, [selectedMode])

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const wantedItem = squaresData.find((el) => el.name === selectedMode);
    setQuantity(wantedItem?.field as number);
    setGameHasStarted(true);
  }

  const handleHover = (id: string) => {
    if (hoveredSquares.find(el => el === id)) {
      setHoveredSquares(hoveredSquares.filter(el => el !== id))
    } else {
      setHoveredSquares(prev => [...prev, id])
    }
  };

  return (
    <main>
      <Start
        selectedMode={selectedMode}
        setSelectedMode={setSelectedMode}
        isLoading={isLoading}
        modes={modes}
        handleClick={handleClick}
        hasGameStarted={hasGameStarted}
      />

      {hasGameStarted && (
        <div className="wrapper">
          <div>
            <Squares quantity={quantity} handleHover={handleHover} />
          </div>


          <List list={hoveredSquares} />
        </div>
      )}
    </main>
  );
};

export default App;
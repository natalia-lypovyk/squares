import { useState, useEffect } from 'react';

import { API_URL } from './constants';
import { Squares } from './components/Squares/Squares';
import { Start } from './components/Start/Start';
import { List } from './components/List/List';

import './app.css';

const App = () => {
  const [squaresData, setSquaresData] = useState([]);
  const [modes, setModes] = useState([]);
  const [quantity, setQuantity] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [selectedMode, setSelectedMode] = useState('');

  const [hoveredSquares, setHoveredSquares] = useState([]);
  const [hasGameStarted, setGameHasStarted] = useState(false);

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

  const handleClick = (e) => {
    e.preventDefault();
    const wantedItem = squaresData.find((el) => el.name === selectedMode);
    setQuantity(wantedItem.field);
    setGameHasStarted(true);
  }

  const handleHover = (id) => {
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
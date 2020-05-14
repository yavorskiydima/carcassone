import React, { useState, } from 'react';
import './App.css';
import data from './data';



function App() {
  const [tiles, setTile] = useState(data);

  const handleClick = (index) => {
    if (!tiles[index].number) return;
    const updatedTile = tiles.map((tile, i) =>
      i === index ? { ...tile, number: --tile.number, } : tile)
    setTile(updatedTile)
  }

  return (
    <div className="App">
      {tiles.map(({ pic, number, }, i) => (
        <div className={`tile ${!!number ? '' : 'blocked'}`}>
          <div className="tile__content" onClick={() => handleClick(i)}>
            <div className="tile__pic">
              <img src={pic} alt="alt" />
            </div>
            <div>{number}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

import React, { useState, } from 'react';
import './App.css';
import data from './data';



function App() {
  const [tiles, setTile] = useState(data);
  const [history, setHistory] = useState([3]);

  const handleClick = (index) => {
    if (!tiles[index].number) return;
    const updatedTile = tiles.map((tile, i) =>
      i === index ? { ...tile, number: --tile.number, } : tile)
    setTile(updatedTile)
    setHistory(history => [index, ...history])
  };

  const undoClick = () => {
    const index = history[0];
    setHistory(history => history.slice(1));
    setTile(tiles => tiles.map((tile, i) => i === index ? { ...tile, number: tile.number + 1 } : tile));
  };

  const tilesFree = tiles.reduce((acc, item) => acc += item.number, 0);

  return (
    <div className="App">
      <div className="board">
        {tiles.map(({ pic, number, }, i) => (
          <div className={`tile ${!!number ? '' : 'blocked'}`} key={i}>
            <div className="tile__content" onClick={() => handleClick(i)}>
              <div className="tile__pic">
                <img src={pic} alt="alt" />
              </div>
              <div>{number}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="history">
        <div className="menu">
          <div>Total: {tilesFree} (left {72 - tilesFree})</div>
          <button onClick={undoClick}>down</button>
        </div>
        <div className="list">
          {history.map((item, index) => (
            <div key={index} className="list___item">
              {history.length - index}
              <img src={data[item].pic} alt="pic" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

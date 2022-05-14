import { useState } from 'react';

import './App.css';

function App() {
  //eslint-disable-next-line
  const [randomBuyList, setRandomBuyList] = useState([]);
  const [randomSellList, setRandomSellList] = useState([]);
  const [clickedBuyList, setClickedBuyList] = useState([])
  const generateRandomQuantity = ( min=35000, max=36000) => {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
  }
  const getRandomBuyList = () => {
    const randomBuyList = [];
    let buyRate = Math.floor(Math.random() * 10);
    let buyQuantity = generateRandomQuantity();
    randomBuyList.push(buyRate, buyQuantity);
    setRandomBuyList(randomBuyList);
    
  }

  const getRandomSellList = () => {
    const randomSellList = [];
    let sellRate = Math.floor(Math.random() * 10);
    let sellQuantity = generateRandomQuantity();
    randomSellList.push(sellRate, sellQuantity);
    setRandomSellList(randomBuyList);
  }

  return (
    <div>
      <h3 style={{ fontWeight: "bold" }}>Buy Sell</h3>
      <div className="buttons">
        <div className="buy items">
          <button type="button" onClick={() => getRandomBuyList()}>
            Buy
          </button>
        </div>
        <div className="sell items">
          <button type="button" onClick={() => getRandomSellList()}>
            Sell
          </button>
        </div>
      </div>
     
    </div>
  );
}

export default App;

import { useState } from "react";

import "./App.css";

function App() {
  //eslint-disable-next-line
  const [randomBuyList, setRandomBuyList] = useState([]);
  const [randomSellList, setRandomSellList] = useState([]);
  const [clickedBuyList, setClickedBuyList] = useState([]);
  const generateRandomQuantity = (min = 35000, max = 36000) => {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
  };
  const getRandomBuyList = () => {
    let buyRate = Math.floor(Math.random() * 10);
    let buyQuantity = generateRandomQuantity();
    setRandomBuyList([...randomBuyList, { qty: buyQuantity, rate: buyRate }]);
    console.log(randomBuyList);
  };

  const getRandomSellList = () => {
    const sellList = [];
    let sellRate = Math.floor(Math.random() * 10);
    let sellQuantity = generateRandomQuantity();
    sellList.push(sellRate, sellQuantity);
    setRandomSellList([
      ...randomSellList,
      { qty: sellQuantity, rate: sellRate },
    ]);
    console.log(randomSellList);
  };

  return (
    <div>
      <div className="mb-[0.09rem]">
        <h3 className="mb-5"  style={{ fontWeight: "bold" }}>Buy Sell</h3>
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
      <div className="sell items flex flex-col">
        <div className="buy-list w-full">
          {randomBuyList?.map((item, index) => (
            <div
              key={index}
              className="flex flex-row-reverse justify-between bg-black text-green-500 font-bold text-[1.5rem] box"
            >
              <p className="mr-28">{item.qty}</p>
              <p className="ml-28">{item.rate}</p>
            </div>
          ))}
        </div>
        <hr className="bg-black w-1 m-1 hline" />

        <div className="sell-list w-full">
          {randomSellList?.map((item, index) => (
            <div
              key={index}
              className="flex flex-row-reverse justify-between bg-black text-red-500 font-bold text-[1.5rem] box"
            >
              <p className="mr-28">{item.qty}</p>
              <p className="ml-28">{item.rate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
import axios from "axios";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  //eslint-disable-next-line
  const [randomBuyList, setRandomBuyList] = useState([]);
  const [randomSellList, setRandomSellList] = useState([]);
  const [clickedBuyList, setClickedBuyList] = useState([]);
  const backendUrl = 'http://localhost:5000';

  useEffect(()=>{
    fetchBuyData();
    fetchSellData();
  },[backendUrl])
  const fetchBuyData = async()=>{
    try{
      const data = await axios.get(`${backendUrl}/api/v1/get-buy-data`);
      setRandomBuyList(data?.data?.buys);
    }catch(err){
      console.log(err);
    }
  }

  const fetchSellData = async () => {
    try {
      const data = await axios.get(`${backendUrl}/api/v1/get-sell-data`);
      console.log(data);
      setRandomSellList(data?.data?.sells);
    } catch (error) {
      console.log(error)
    }
  }

  const generateRandomQuantity = (min = 35000, max = 36000) => {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
  };
  const getRandomBuyList = async() => {
    let buyRate = Math.floor(Math.random() * 10);
    let buyQuantity = generateRandomQuantity();
    // setRandomBuyList([...randomBuyList, { qty: buyQuantity, rate: buyRate }]);
    await axios.post(`${backendUrl}/api/v1/buy`,{ qty: buyQuantity, rate: buyRate }).then(data=>{
      fetchBuyData();
    });
  };

  const getRandomSellList = async () => {
    let sellRate = Math.floor(Math.random() * 10);
    let sellQuantity = generateRandomQuantity();
    // sellList.push(sellRate, sellQuantity);
    // setRandomSellList([
    //   ...randomSellList,
    //   { qty: sellQuantity, rate: sellRate },
    // ]);
     await axios.post(`${backendUrl}/api/v1/sell`,{ qty: sellQuantity, rate: sellRate }).then(data=>{
      fetchSellData();
    });
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
              key={item._id}
              className="flex flex-row-reverse justify-between bg-black text-green-500 font-bold text-[1.5rem] box"
            >
              <p className="mr-80">{item.buyQuantity}</p>
              <p className="ml-80">{item.buyRate}</p>


            </div>
          ))}
        </div>
        <hr className="bg-black w-1 m-1 hline" />

        <div className="sell-list w-full">
          {randomSellList?.map((item, index) => (
            <div
              key={item._id}
              className="flex flex-row-reverse justify-between bg-black text-red-500 font-bold text-[1.5rem] box"
            >
              <p className="mr-80">{item.sellQuantity}</p>
              <p className="ml-80">{item.sellRate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";
import ShowTable from "../ShowTable/ShowTable";

const Cryptocurrencies = () => {
  const [row, setrow] = useState([]);
  
  const fetchData = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await response.json();
    setrow(data);
  };  

  useEffect(() => {
    fetchData();
  }, []);

  return <ShowTable rows={row}/>;
};

export default Cryptocurrencies;

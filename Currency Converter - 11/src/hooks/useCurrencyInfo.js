import { useState, useEffect } from "react";
import axios from "axios";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})
  const API_KEY = `https://v6.exchangerate-api.com/v6/41740f242f8dfdd871e297aa/latest/${currency}`
  
  useEffect(() => {
    fetch(API_KEY)
    .then((res) => res.json())
    .then((res) => setData(res[currency]))
    console.log(data);
  }, [currency])
  console.log(data);
  return data  
}

export default useCurrencyInfo;
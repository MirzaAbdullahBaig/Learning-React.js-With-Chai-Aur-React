import { useState, useEffect } from "react";


function useCurrencyInfo(currency) {
  const [data, setData] = useState({})
  
  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/41740f242f8dfdd871e297aa/latest/${currency}`)
    .then((res) => res.json())
    .then((res) => setData(res[currency]))
    console.log(data);
  }, [currency])
  console.log(data);
  return data  
}

export default useCurrencyInfo;
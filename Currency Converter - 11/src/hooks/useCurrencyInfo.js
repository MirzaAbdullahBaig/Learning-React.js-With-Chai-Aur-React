import { useState, useEffect } from "react";
import axios from "axios";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  const API_KEY = `https://v6.exchangerate-api.com/v6/41740f242f8dfdd871e297aa/latest/${currency}`

  const getResponse = async () => {
    try {
      const response = await axios.get(API_KEY)
      setData(response.data.conversion_rates)
    } catch (error) {
      console.log("🚀 ~ getResponse ~ error:", error)
    }
  }

  useEffect(() => {
    try {
      getResponse()
    } catch (error) {
      console.log("🚀 ~ useEffect ~ error:", error)
    }
  }, [currency])
  
  console.log("data", data);
  return data
}

export default useCurrencyInfo;
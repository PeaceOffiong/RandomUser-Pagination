import { useState, useEffect } from 'react';
import paginate from "./context";

//Api Url
const url = "https://randomuser.me/api/?results=100"
// const url = "https://randomuser.me/api/?page=3&results=10&seed=abc"

//Fetching data
export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([]);
  const [apiDatas, setApiData] = useState([]);
  const [rawData, setRawData] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url)
    const rawData = await response.json();
    setApiData(paginate(rawData.results));
    setData(paginate(rawData.results))
    setLoading(false)
    setRawData(rawData.results)
  }

  useEffect(() => {
    getProducts()
  }, [])
  return { loading, data,  apiDatas, rawData}
}
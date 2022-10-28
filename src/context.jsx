import React, {useState, useEffect, useContext}from "react";
import { useFetch } from './useFetch'


const AppContext = React.createContext();

//pagination function
const paginate = (people) =>{
    const itemPerPage = 10;
    const numberOfPages = Math.ceil(people.length/itemPerPage)

    const newPeople = Array.from({length: numberOfPages}, (_, index) =>{
      const start = index * itemPerPage;
      return people.slice(start, start + itemPerPage)
    })

    return newPeople;
  }

const AppProvider = ({children}) => {

  //states 
  const [apiData, setApiData] = useState([]);
  const [page, setPage] = useState(0);
  const { loading, data, apiDatas, rawData } = useFetch();
  const [people, setPeople] = useState([]);
  const[presentPerson, setPerson] = useState("");
 
  useEffect(() => {
    if (loading) return
    setPeople(data[page])
    setApiData(apiDatas);
    
  }, [loading, page])

  const randomPerson = people[Math.floor(Math.random() * people.length)];

  const nextPage = () =>{
    setPage(() =>{
      let nextPage = page + 1
      if (nextPage > apiData.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }

  const prevPage = () =>{
    setPage(() => {
      let prevPage = page - 1
      if (prevPage < 0) {
        prevPage = apiData.length - 1
      }
      return prevPage
    })
  }

  const handlePage = (index) =>{
    setPage(index);
  }

  
 return (
   <AppContext.Provider 
     value={{
       apiData,
       people,
       loading,
       page,
       prevPage,
       handlePage,
       nextPage,
       rawData,
       presentPerson,
       setPerson,
       randomPerson,
     }}
     >{children}</AppContext.Provider>
 );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppContext, AppProvider}

export default paginate
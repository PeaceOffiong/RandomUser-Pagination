import {useGlobalContext} from "../context";
import Users from "../components/Users";

const Home = () =>{
  const {loading, people, prevPage, page, apiData, handlePage, nextPage} = useGlobalContext();

  //set Loading condition
  if(loading){
    return <>
      <section className="loading">
        <h3>Loading ...</h3>
      </section>
    </>
  }
  return <>
    <section className="contained">
      <ul>
        {people.map((each, index) =>{
        return <Users key={index} each ={each}/>
      }
    )}
      </ul>
      <div className="btn-container">
        
        <button 
          className="prev-btn"
          onClick={() => prevPage()}
          >
          Prev
        </button>

        {apiData.map((each, index) =>{
          return (
            <button
              key={index}
              className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
              >{index}</button>
          )
        })}

        <button 
          className="prev-btn"
          onClick={() => nextPage()}
          >
          Next
        </button>
        
      </div>
    </section>
  </>
}

export default Home
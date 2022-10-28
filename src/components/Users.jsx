import {Link} from "react-router-dom";

const Users = ({each}) =>{
  const { id, picture, name, location}= each;
  const {city, country} = location
  const {first, last} = name;
  const {medium}= picture;

  //Function to run check incase of an id value is null
  const checkValue = (each) =>{
    if(each.id.value !== null){
      return each.id.value
    } else if(each.id.value == undefined || each.id.value === null){
      return first
    }
  }
  
  return <>
      <li>
        <article className='card'>
          <img src={medium} alt={`${first}  ${last}`} className= "image"/>
          <section className= "center">
            <h3>{first}</h3>
            <p>{country}</p>
            <small>{city}</small>
          </section>
          <Link className='profile' to= {`/User/${checkValue(each)}`}>
            view profile
          </Link>
        </article>
      </li>
  </>
}

export default Users
import {useGlobalContext} from "../context";

const Location = () =>{
  const {presentPerson} = useGlobalContext();
  const { 
    city, 
    country, 
    postcode, 
  } = presentPerson.location;
   const {
      street: { number, name },
    } = presentPerson.location;
   return <>
      <ul className = "list-style">
      <li className = "list">
        <div className ="title">City:</div> 
        <div>{city}</div>
      </li>
      <li className = "list">
        <div className ="title">Country:</div> 
        <div>{country}</div>
      </li>
      <li className = "list">
        <div className ="title">Post-Code:</div> 
        <div>{postcode}</div>
      </li>
      <li className = "list">
        <div className ="title">Street:</div> 
        <div>{number} {name}</div>
      </li>

    </ul>
   </>
 }

export default Location
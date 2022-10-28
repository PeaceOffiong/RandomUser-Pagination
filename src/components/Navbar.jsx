import { BsFillPersonLinesFill } from "react-icons/bs";
import {Link} from "react-router-dom";
import {useGlobalContext} from "../context";
import React, {useState} from "react";

const Navbar = () =>{
  const {randomPerson} = useGlobalContext()

  const checkPerson = (person) =>{
    if(person && person.id.value !== null){
      return person.id.value
    }else if(person && person.id.value === null){
      return person.name.first
    }
  }

  const person = checkPerson(randomPerson);
  return <>
    <nav>
      <div className = "nav-center">
        < BsFillPersonLinesFill className="site-icon"/>
        <Link to= "/" className= "a">
          <h2>Users</h2>
        </Link>
       </div>
      <div className = "nav-header">
        <Link to={`/User/${person}`}>
          <button className="button">
            <h4>Random user</h4>
          </button>
        </Link>
      </div>
    </nav>
  </>
}

export default Navbar


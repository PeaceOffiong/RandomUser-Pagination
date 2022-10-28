import React, {useRef, useEffect} from 'react'
import {useParams} from "react-router-dom";
import {useGlobalContext} from "../context";
import {Link, Outlet} from "react-router-dom"
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';

const Userdetails = () =>{
  
  const { people, setPerson} = useGlobalContext();
  const linksContainerRef = useRef(null)

  //search data for person
  const {id} = useParams();
  const person = people.find((each) => 
    {if(each.id.value === id || each.name.first === id){
      return each;
    }});
  

  const handleApperance = (e) => {
    const linksChildren = linksContainerRef.current.children;
    Array.from(linksChildren).forEach(each => {
      if(each.classList.contains("active")){
       each.classList.remove("active");
      }
      const target = e.target;
     target.classList.add("active");
    });
  }

  if(!person){
    return<>
      <section className="loading">
        <h3>Oops!, No user of such</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </>
  } else{
    console.log(person)
  useEffect(() =>{
    setPerson(person)
  }, [person])
  
  const{ email, login, phone, picture, dob, location} = person;
  const{password} = login
  const {large} = picture
  const { first, last } = person.name;
  const{ age} = dob;
  const {city, country} = location;
  return <>
      <div className = "runOutOfNames">
        <div className="img-container">
          <div className="img-center">
            <img src ={large} alt={first} className= "image"/>
          </div>
        </div>
        <div className="details">
          <article className='card'>
            <FaUser className="icon"/>
            <h4>{`${first} ${last}`}</h4>
          </article>
          <article className='card'>
            <FaEnvelopeOpen className="icon"/>
            <h4>{email}</h4>
          </article>
          <article className='card'>
            <FaCalendarTimes className="icon"/>
            <h4>{age}</h4>
          </article>
          <article className='card'>
            <FaMap className="icon"/>
            <h4>{`${city}, ${country}`}</h4>
          </article>
          <article className='card'>
            <FaPhone className="icon"/>
            <h4>{phone}</h4>
          </article>
          <article className='card'>
            <FaLock className="icon"/>
            <h4>{password}</h4>
          </article> 
        </div>
        <div className = "btn-cont" ref={linksContainerRef}>
          <Link to = "locationdetails" onClick= {handleApperance} className = "btn">
              Location Details
          </Link>
          <Link to = "logindetails" onClick= {handleApperance} className = "btn">
             Login Details
          </Link>
        </div>
        <Outlet/>
      </div>
  </>
}
}

export default Userdetails
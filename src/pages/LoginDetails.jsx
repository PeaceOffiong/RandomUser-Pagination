import {useLocation} from "react-router-dom";
import {useGlobalContext} from "../context";

const LoginDetails = () =>{
  const { presentPerson} = useGlobalContext();
  const {login, registered} = presentPerson;
  const {
    uuid,
    username,
    md5
  } =login;
  const{ date} = registered;
  
  return <>
    <ul className = "list-style">
      <li className = "list">
        <div className ="title">UUID:</div> 
        <div>{uuid}</div>
      </li>
      <li className = "list">
        <div className ="title">Username:</div> 
        <div>{username}</div>
      </li>
      <li className = "list">
        <div className ="title">MD5:</div> 
        <div>{md5}</div>
      </li>
      <li className = "list">
        <div className ="title">Registration Date:</div> 
        <div>{date}</div>
      </li>
    </ul>
  </>
}

export default LoginDetails
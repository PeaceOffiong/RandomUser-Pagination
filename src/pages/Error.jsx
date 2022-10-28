import {Link} from "react-router-dom"

const Error = () =>{
  return <>
    <section className="loading">
        <h3>Oops!, it's a dead end</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
  </>
}

export default Error
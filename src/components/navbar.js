import React, { Component } from 'react'
import {Link} from "react-router-dom";
import './index.css'
export class navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{color:'white'}}>News-Buddy</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" style={{backgroundColor:'white'}}data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/business" style={{color:'white'}}>Business</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/entertainment" style={{color:'white'}}>Entertainment</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sports" style={{color:'white'}}>Sports</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/general" style={{color:'white'}}>General</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/health" style={{color:'white'}}>Health</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/science" style={{color:'white'}}>Science</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/technology" style={{color:'white'}}>Technology</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }
}

export default navbar
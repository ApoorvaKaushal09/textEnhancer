import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  const green = () =>{
    document.body.style.backgroundColor = '#E5FDD1';
    props.setclrmode('success');
    // props.colorMode('success');


  }
  const dark = () =>{
    document.body.style.backgroundColor = '#000000';
    props.setclrmode('info');
    // props.colorMode('success');


  }
  const light = () =>{
    document.body.style.backgroundColor = 'white';
    props.setclrmode('primary');
    // props.colorMode('success');


  }
  const yellow= () =>{
    document.body.style.backgroundColor = '#FFE9B1';
    props.setclrmode('warning');

  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
  {/* <input onClick={props.colorMode}  className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/> */}
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Color Mode</label>
  <div className='d-flex'>
    <div className='bg-warning rounded mx-2' onClick={yellow} style={{height:'20px', width:'20px', border:'solid black 2px' }}></div>
    <div className='bg-success rounded mx-2' onClick={green} style={{height:'20px', width:'20px', border:'solid black 2px' }}></div>
    <div className='bg-dark rounded mx-2' onClick={dark}  style={{height:'20px', width:'20px' , border:'solid black 2px'}}/>
    <div className='bg-light rounded mx-2' onClick={light}  style={{height:'20px', width:'20px', border:'solid black 2px' }}/>
    <div>
    {/* <input onClick={props.toggleMode}  className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/> */}
    </div>
  </div>
  {/* <button onClick={yellow }>yellow</button> */}
  {/* <button onClick= {green}>green</button> */}
  
  {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label> */}
  </div>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
    
  </div>
</nav>
  )
}



Navbar.propTypes={
    title:PropTypes.string,
    about:PropTypes.string
}

Navbar.defaultProps={
    title:"Set Title"
}
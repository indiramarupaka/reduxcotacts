import React from 'react';


export default function Header(){

    return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Contacts</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form classNameName="form-inline my-2 my-lg-0">
    
      <input classNameName="form-control mr-sm-2 d-flex flex-row justify-content-between" type="search" placeholder="Search" aria-label="Search" />
      <button classNameName="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

    )
}
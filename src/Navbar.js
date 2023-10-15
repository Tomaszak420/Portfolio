import React, { useState } from 'react';
import './Navbar.scss'
import {Link} from "react-router-dom"
function Navebar(props) {


    return (
      <div>
      <button className="btn btn-dark pp sticky-top position-absolute top-0 end-0" type="button" data-toggle="collapse" data-target="#menu" aria-expanded="false">
    ☰
  </button>
      
      <div className="collapse position-absolute top-0 end-0" id="menu">
  <div class="card card-body cc">
  <Link  className="lin"to="/"><box-icon type='solid'  color="#ffff"name='home-alt-2' animation='tada-hover' size='md'className='icona' ></box-icon>Start</Link>
   <Link  className="lin"to="/Projekty"><box-icon type='solid'  name='edit-alt' color="#ffff" animation='tada-hover' size='md'className='icona'></box-icon>Projekty</Link>
    <Link  className="lin"to="/Kontakt"><box-icon type='solid' name='phone'  color="#ffff"animation='tada-hover' size='md'cclassName='icona'></box-icon>Kontakt</Link>
  </div>
</div>
</div>
    );
  }
  
  export default Navebar;
  
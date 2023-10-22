import React from 'react';
import './Navbar.scss'
import { Link } from "react-router-dom"
function Navebar(props) {


  return (
    <div>
      <button className="btn btn-dark przyc sticky-top position-absolute top-0 end-0" type="button" data-toggle="collapse" data-target="#menu" aria-expanded="false">
        ☰
      </button>

      <div className="collapse position-absolute top-0 end-0" id="menu">
        <div class="card card-body linki">
          <Link className="link" to="/Portfolio/"><box-icon type='solid' color="#ffff" name='home-alt-2' animation='tada-hover' size='md' className='icona' ></box-icon>Start</Link>
          <Link className="link" to="/Projekty"><box-icon type='solid' name='edit-alt' color="#ffff" animation='tada-hover' size='md' className='icona'></box-icon>Projekty</Link>
          <Link className="link" to="/Kontakt"><box-icon type='solid' name='phone' color="#ffff" animation='tada-hover' size='md' cclassName='icona'></box-icon>Kontakt</Link>
        </div>
      </div>
    </div>
  );
}

export default Navebar;

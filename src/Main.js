import React from 'react-bootstrap';
import './main.scss'
import zdj from './zdj.png'
import cv from './CV.pdf'
function Main() {
    return (
     <div>
      <div style={{fontWeight: "bold", fontSize: "120%",marginTop:"10px"}}>Cześć, jestem<span>...</span></div>
      <div id='p'>Tomasz Młynarczyk</div>
      <img alt="Ja"src={zdj}/>
      <br/>
      <a href={cv} download="CV.pdf"><button className='btn btn-info mb-2 mb-sm-0' type="button">Pobierz CV</button></a>
      <button className="btn btn-info mb-2 mb-sm-0" type="button" data-toggle="collapse" data-target="#dos" aria-expanded="false">
      Umiejętności
      </button>
      <div className="collapse" id="dos">
  <div className="card card-body car">
  <div className='row'>
  <div className='col-auto ll mb-2 m-auto m-sm-2'>
      <h3>Frontend</h3>
      <dl>
  <dt>HTML</dt>
  <dd>Zaawansowany</dd>
  <dt>CSS/SCSS</dt>
  <dd>Średnio zaawansowany</dd>
  <dt>JavaScript/ES6</dt>
  <dd>Średnio zaawansowany</dd>
  <dt>React.js</dt>
  <dd>Podstawowy</dd>
  <dt>Bootstrap</dt>
  <dd>Średnio zaawansowany</dd>
  <dt>Redux</dt>
  <dd>Podstawowy</dd>
  <dt>jQuery</dt>
  <dd>Podstawowy</dd>
</dl>
  </div>
  <div className='col-auto ll m-auto m-sm-2'>
  <h3>Backend</h3>
  <dl >
  <dt>MongoDB</dt>
  <dd>Podstawowy</dd>
  <dt>Express.js</dt>
  <dd>Podstawowy</dd>
  <dt>Mongoose</dt>
  <dd>Podstawowy</dd>
  <dt>MySQL</dt>
  <dd>Średnio zaawansowany</dd>
  
</dl>

  </div>
  
  </div>
  </div>
</div>
      <div id='text'>Jestem po szkole na kierunku informatycznym i <br/>
      studiuje na Politechnice Białostockiej również na <br/>
      kierunku informatycznym więc chciałbym rozwijać<br/>
       się w tym kierunku w szczególności typu Front End. <br/>
       Obecnie szukam pracy która pozwoliła by mi poszerzać wiedzę.<br/>
       </div>
      </div>
     

  
      
    );
  }
  
  export default Main;
  
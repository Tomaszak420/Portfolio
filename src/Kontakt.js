import React from 'react';
import './kontakt.scss'
function Kontakt() {
    return (
<div>
   <h2 >Poznajmy się!</h2>
<form action="https://formsubmit.co/tomaszm2021@gmail.com" method="POST" >

   <label for="imie">Imię:</label>
   <br/>
<input type="text" name="name" className='in' id="imie"required ></input>

<br/>
   <label for="mail"> E-mail:</label>
      <br/>
    <input type="email" name="email" className='in'id='mail' required></input>
    
    <br/>
    
   <label for="wiad">Wiadomość:<br/></label>
     <textarea input type="text" name="wiadomosc"  className='in' required id='wiad'></textarea>
     
     
     <br/>
     <button type="submit" className='btn btn-info b' >Wyślij</button>
</form>

<div id='bot'>
<div className='inf ph'><box-icon name='phone' color='#ffffff' ></box-icon><div id='num'>500094932</div></div>

<div className='inf ema'><box-icon name='envelope' color='#ffffff' ></box-icon><div id='em'>Tomaszm2021@gmail.com</div></div>
<a target="_blank"  id="ico"href='https://github.com/Tomaszak420'><box-icon name='github' type='logo' color='#ffffff' ></box-icon></a>
<br/>
</div>

</div>
    );
  }
  
  export default Kontakt;
  
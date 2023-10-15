import React, { useEffect, useState } from 'react';
import './Project2.scss'

function Project2(){
    const [pyt,setPyt]=useState([{}])
    const [sc,setSc]=useState(0)
    const [kt,setKt]=useState(0)
    async function getData(){
      fetch('https://opentdb.com/api.php?amount=10&type=boolean')
            .then((response) => response.json())
            .then(data =>(setPyt(data.results),document.getElementById('py').innerHTML=data.results[0].question));
            
    }
    useEffect(()=>{
      getData()

     
    },[])
    useEffect(()=>{
     
      if (kt === 9) {
       
        const torfButtons = document.querySelectorAll('.torf');
        torfButtons.forEach(button => {
          button.disabled = true;
     
        });
      }
      else{
        
        const torfButtons = document.querySelectorAll('.torf');
        torfButtons.forEach(button => {
          button.disabled = false;
        });
      }
     
    },[kt])
  function up(){
 
    setKt(prev=>prev===9?prev:prev+1)
    document.getElementById('py').innerHTML=pyt[kt+1].question
    

    
  }
 
  function chc(event){
    const {value} = event.target
    if(pyt[kt].correct_answer===value){
        setSc(prev=>prev===10?prev:prev+1)
        up()
    }
    else
    up()
    
  }
  function newg(){
    setPyt([{}])
    setSc(0)
    setKt(0)
    getData()
   
  }
    return (
        <div>
<div id='gui'>
<h4 >Wynik: {sc}</h4>
<h4>Pytanie: {kt +1}</h4>
</div>
<h4>Kategoria: {pyt[kt].category}</h4>
<h2 id='py'></h2>
<div id='ster'>
<button className='torf' onClick={chc} value="True">Prawda</button>
<button className='torf' onClick={chc} value="False">Fałsz</button>
<br/>
<button id='s' onClick={newg} value="Start">Nowa Gra</button>
</div>
</div>
    );
}
export default Project2;
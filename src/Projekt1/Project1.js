import React, {useState ,useRef, useEffect}from 'react';
import './Project1.scss'
import Box from './box.js'



function Project1(){
var ra=Math.floor(Math.random() * 9) + 1
const [score,setScore]=useState(0)
const maxScore=useRef(0)
const [ngame,setNagame]=useState(false)
const [squ,setSqu]= useState(createSqu())
const [randNumber ,setRandNumber]=useState(ra)
const czasss=useRef(30)

   
function createSqu(){
    let squList=[]
    for (let i = 1; i < 10; i++) {
        squList.push({
            glow:false,
            id:i
        }   
        )     
}
return squList
}
function play(){

setRandNumber(prev=>prev===ra?ra==9?ra-1:ra+1:ra)
let newState=squ.map(obj=>{
if(obj.id===randNumber)
    return{...obj,glow:true};
    else return {...obj,glow:false}
  
})
setSqu(newState)

}
function timer(){
czasss.current= 30
setNagame(true)
setScore(0)
play()
var timerId = setInterval(countdown, 1000);

function countdown() {
    
   const prz= document.getElementById('starcik')
   const button = document.querySelector('button')
  if (czasss.current===-1 ) 
  {
    setNagame(false)
    setSqu(createSqu())
    clearTimeout(timerId);
    prz.disabled = false;
  
    prz.style='pointer-events:auto !important';
   
  } 
  else 
  {
    document.getElementById('time').innerHTML = "Czas: <br/>"+czasss.current+"s";
    czasss.current= czasss.current-1;
    prz.disabled = true;
   
    prz.style='pointer-events:none !important';
  }
}

}
if(score>maxScore.current){
    maxScore.current=score
}

function reciveId(idd){
   squ.map(squr=>{
        if(squr.id===idd &&squr.glow===true){
            return setScore(prev=>prev+1)
        }
        else if(squr.id===idd && squr.glow!==true && ngame){
           return setScore(prev=>prev===0?0:prev-1)
        }
       
    })

   setSqu(createSqu())
 if(ngame){
    play()
   
 }

}



   const rend= squ.map(one=>(<div className='col-4'><Box key={one.id}  glow={one.glow} rec={()=>reciveId(one.id)}/></div>))
   
    return (<div>

    <div id='ui'>
<div id="highscore" className='uii'>Highscore:<br/>{maxScore.current}</div>
<div id='time' className='uii'>Czas:<br/>{czasss.current}s</div>
<div id="score" className='uii'>Score:<br/>{score}</div>
</div>
<div id='game'>
   <div className='container-flex'>
        <div className='row'>
            {rend}
        </div>
        </div>
    
</div>
<button id="starcik"  onClick={()=>timer()}>Nowa Gra</button>

</div>
    );
}
export default Project1;
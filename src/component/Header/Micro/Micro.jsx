import React, { useState } from 'react'
import Style from './micro.style.module.css';
function Micro() {
  const [state,setState] = useState(true);
  return (
    <div className={state?Style.micro:Style.active} onClick={(e)=>{
      e.stopPropagation();
      setState(prev => !prev)}}>
      <i  class="fa-solid fa-microphone"></i>
    </div>
  )
}

export default Micro
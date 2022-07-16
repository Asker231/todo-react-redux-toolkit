import React from 'react'
import Style from './bottom.style.module.css';
import { data } from './bot.props';
import { useState } from 'react';
import { useEffect } from 'react';


function Bottom() {
  const [state,setState] = useState([]);
  useEffect(()=>{
       setState(data)
  },[])
  return (
    <div className={Style.bottom}>
         {
          state.map((el)=>{
            return <div className={Style.item}>{el.todo} <button>Delete</button></div>
          })
         }
    </div>
  )
}

export default Bottom
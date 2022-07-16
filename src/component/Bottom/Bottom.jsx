import React from 'react'
import Style from './bottom.style.module.css';

import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


function Bottom() {
  const [state,setState] = useState([]);
  const selector = useSelector(state => state.items.arr);
  useEffect(()=>{
       setState(selector)
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
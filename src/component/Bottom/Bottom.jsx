import React from 'react'
import Style from './bottom.style.module.css';

import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


function Bottom() {

  const selector = useSelector(state => state.items.arr);

  return (
    <div className={Style.bottom}>
         {
          selector.map((el)=>{
            return <div className={Style.item}>{el} <button>Delete</button></div>
          })
         }
    </div>
  )
}

export default Bottom
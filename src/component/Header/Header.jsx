import React from 'react'
import Style from './header.style.module.css';
import Micro from './Micro/Micro';


export default function Header() {
  return (
    <div className={Style.header}>
       <Micro/>
    </div>
  )
}

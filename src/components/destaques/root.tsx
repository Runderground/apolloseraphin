import React from 'react'
import style from './destaque.module.css'

interface IDRoot {
  children: React.ReactNode;
  bg?: string;
}

export default function DRoot({children, bg}: IDRoot) {
  return (
    <div className={`${style.box} ${style[bg]}`}>
      {children}
    </div>
  )
}
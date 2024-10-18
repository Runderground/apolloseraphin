import React from 'react'
import style from './destaque.module.css'

interface IDRoot {
  children: React.ReactNode;
}

export default function DRoot({children}: IDRoot) {
  return (
    <div className={style.box}>
      {children}
    </div>
  )
}
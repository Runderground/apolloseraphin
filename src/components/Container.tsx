import React from 'react'

interface IContainer {
  children: React.ReactNode
}

export default function Container({ children }: IContainer) {
  return (
    <div style={{margin: '2rem 5rem'}}>{children}</div>
  )
}
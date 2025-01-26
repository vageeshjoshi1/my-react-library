import React from 'react'

const Card = ({ title, children }) => {
  return (
    <div
      style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}
    >
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  )
}

export default Card

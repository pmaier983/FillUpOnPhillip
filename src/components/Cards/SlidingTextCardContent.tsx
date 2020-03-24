import React from 'react'

interface ISlidingTextCardContentProps {
  title: string
}

const SlidingTextCardContent: React.FC<ISlidingTextCardContentProps> = ({ title, children }) => {
  console.log('yeet')
  return (
    <div>
      {children}
      <h1>{title}</h1>
    </div>
  )
}

export default SlidingTextCardContent

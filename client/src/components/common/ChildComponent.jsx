import React from 'react'

const ChildComponent = (props) => {
  return (
    <div className='text-red-700'>{props.children}</div>
  )
}

export default ChildComponent
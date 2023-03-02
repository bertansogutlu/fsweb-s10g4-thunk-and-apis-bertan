import React from 'react';
import { useSelector } from 'react-redux';


function Item({ data }) {
const current = useSelector(depo => depo.current)
  return (
    <div className='shadow-md bg-white text-center'>
      <p className='text-2xl p-10'>{current.activity}</p>
    </div>
  )
}

export default Item
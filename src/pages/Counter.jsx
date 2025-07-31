import React from 'react'
import { useSelector } from 'react-redux'

export default function Counter() {
  const {count} = useSelector(state => state.counter)
console.log(count , ' fast redux data fetch')
  return (
    <div className='text-center absolute top-[50%] left-[50%]'>
      <div className="flex items-center gap-4">
        <button className='bg-purple-600 rounded p-2 text-[#fff] px-5 hover:cursor-pointer'>Increment</button>
          <p>{count}</p>
        <button className='bg-red-400 rounded p-2 text-[#fff] px-5 hover:cursor-pointer'>Decrement</button>
      </div>
    </div>
  )
}

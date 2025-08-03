import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByFive} from '../redux/features/counter/counter';


export default function Counter() {
  const {count} = useSelector(state => state.counter)
  const dispatch  = useDispatch();
  console.log(count,'count')
  return (
    <div className='text-center absolute top-[50%] left-[50%]'>
      <div className="flex items-center gap-4">
        <button onClick={()=> dispatch(increment())} className='bg-purple-600 rounded p-2 text-[#fff] px-5 hover:cursor-pointer'>Increment</button>
          <p>{count}</p>
        <button onClick={()=> dispatch(decrement())} className='bg-red-400 rounded p-2 text-[#fff] px-5 hover:cursor-pointer'>Decrement</button>
        <button onClick={()=> dispatch(incrementByFive(5))} className='bg-blue-400 rounded p-2 text-[#fff] px-5 hover:cursor-pointer'>Increment by 5 </button>
        
      </div>
    </div>
  )
}

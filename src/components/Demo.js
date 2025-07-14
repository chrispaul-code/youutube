import React, { useState } from 'react'
import { nthPrime } from '../utils/helper'

const Demo = () => {
  
    const [val,setVal]=useState(0)
    const [isDarkTheme,setDarkTheme]=useState(true)
    // const [prime,setPrime]=useState(0)

    const primee =nthPrime(val)


  return (
    <div >
      <div className={"w-[400px] h-[400px]"+ (isDarkTheme && "bg-gray-700")+"w-[400px] h-[400px] border border-black m-10 p-5"}>
        <input onChange={(e)=>setVal(e.target.value) } value={val} className='border border-black ' type='number'  placeholder='num' ></input>
        {/* <button onClick={()=>calculatePrime(val)}  className='mx-5 bg-green-300 p-2 rounded-lg'> Calculate</button> */}
        <div>
        <h1 className='font-semibold text-xl pt-6 '>nth Prime number= {primee}</h1>
      </div>
      </div>
    </div>
  )
}

export default Demo

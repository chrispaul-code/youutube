import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import store from '../utils/store';
import { addMessage } from '../utils/chatSlice';
import {  generateRandomAvatar, generateRandomeName, generateRandomMessage } from '../utils/helper';

const LiveChat = () => { 

  const[liveMessage,setLiveMessage]=useState("")

    const dispatch=useDispatch();
    const data=useSelector(store=>store.chat.messages)

  useEffect(()=>{
    const i=setInterval(() => {
        dispatch(addMessage({
            name:generateRandomeName(),
            message:generateRandomMessage(),
            img:generateRandomAvatar(),
        }))
    }, 2000);

    return ()=>clearInterval(i)

  },[])

  return (
    <div>
    <h1 className='mb-4 ml-10'>Live chat</h1>
    <div className=' p-3 border border-black bg-gray-100 w-[500px] h-[500px] ml-10 rounded-lg overflow-y-scroll flex flex-col-reverse '>
      {data.map((elem,index) => (<ChatMessage key={index} name={elem.name} message={elem.message} img={elem.img} />))}
    </div>
    <form 
    onSubmit={(e)=>{
      e.preventDefault(); 
      dispatch(
        addMessage({
          name:"Chris", 
          message:liveMessage,
          img:"https://imgs.search.brave.com/NmPZjePZioE_lCWEwu7wkqrQwsFRs9j0toSsN3hn8gY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTMv/NTQ3LzEyMC9zbWFs/bC9nZW5lcmljLXVz/ZXItcHJvZmlsZS1h/dmF0YXItZm9yLW9u/bGluZS1wbGF0Zm9y/bXMtYW5kLXNvY2lh/bC1tZWRpYS12ZWN0/b3IuanBn"
        }))
      setLiveMessage("")
      }} 
      className='border border-black w-[500px] ml-10 rounded-lg'>
      <input value={liveMessage} placeholder='Comment...' onChange={(e)=>{setLiveMessage(e.target.value)}} className='border border-gray-300 w-[410px] rounded-lg  p-3'></input>
      <button className=' p-4  bg-blue-500 rounded-lg'type="submit" >Submit</button>
    </form>
    </div>
  )
}

export default LiveChat

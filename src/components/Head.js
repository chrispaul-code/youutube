import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMeanu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import {chacheResults} from "../utils/searchSlice"


const Head = () => {

  const [serachQuery,setSearchQuery]=useState("");
  const [suggestions, setSuggestions]=useState([]);
  const [showSuggestion , setShowSuggestion]=useState(false)

  const searchCache= useSelector((store)=>store.search);

  const dispatch = useDispatch()

  useEffect(()=>{
    const timer= setTimeout(()=>{

      if(searchCache[serachQuery]){
        setSuggestions(searchCache[serachQuery]);
      }else{
         getSearchSuggestion();
      }
    },200)

    return ()=>{
      clearTimeout(timer)
    }
   
  },[serachQuery]);

  const getSearchSuggestion= async()=>{
    try{
      console.log("API CALL - "+serachQuery)
    const data = await fetch(YOUTUBE_SEARCH_API+serachQuery);
    const json = await data.json();
    // console.log(json)
    setSuggestions(json[1]);

    //update cache
    dispatch(chacheResults({
      [serachQuery]:json[1]
    }))
    }catch(err){
      console.log("ERROR: "+ err.message)
    }
  }


  const toggleMeanuHandler=()=>{
   dispatch(toggleMeanu())
  }

  return (
    <div className='grid grid-flow-col  shadow-lg p-1'>
      <div className='flex col-span-4'>
         <img onClick={()=>toggleMeanuHandler()} className='h-5 mt-5 ml-2 mx-2 cursor-pointer' src="https://imgs.search.brave.com/HL8iJuw9H7BbueuMXaEk2T_wS3URwMSfFYt_KTwjqWU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3ZncmVwby5jb20v/c2hvdy80ODk1MDgv/bWVudS1idXJnZXIt/aG9yaXpvbnRhbC5z/dmc"></img>
         <img className='h-14' alt="youtube -icon" src="https://imgs.search.brave.com/0jMEbl-2WeSaQHRXZ2T0rRRxpr6bYa9d5QILr3u6B8M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA1/L1lvdXR1YmUtTG9n/by01MDB4MjgxLnBu/Zw"></img>
      </div>
      <div className='col-span-10 mt-3 '>
        <div>
          <input className='w-1/2 border border-gray-400 p-2 px-5 rounded-l-full' placeholder='Search' type="text" value={serachQuery} onChange={(e)=>setSearchQuery(e.target.value)} onFocus={()=> setShowSuggestion(true)} onBlur={()=> setShowSuggestion (false)}/>
           <button className=' border border-gray-400 px-3 p-2 rounded-r-full '>🔍</button>
        </div>
        {showSuggestion && (
         <div className='fixed bg-white px-3 py-2 w-[32rem] shadow-lg rounded-lg border border-gray-100'>
          <ul>
            {suggestions.map(elem=><li key={elem} className='py-2 shadow-sm m-1 hover:bg-gray-100 '>🔍 {elem}</li>)}
          </ul>
        </div>
        )}
      </div>
      <div className='col-span-1'>
        <img className='h-9 mt-2' src="https://imgs.search.brave.com/NmPZjePZioE_lCWEwu7wkqrQwsFRs9j0toSsN3hn8gY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTMv/NTQ3LzEyMC9zbWFs/bC9nZW5lcmljLXVz/ZXItcHJvZmlsZS1h/dmF0YXItZm9yLW9u/bGluZS1wbGF0Zm9y/bXMtYW5kLXNvY2lh/bC1tZWRpYS12ZWN0/b3IuanBn"></img>
      </div>
    </div>
  )
}

export default Head

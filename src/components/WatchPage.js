import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';

const WatchPage = () => {
  
    const [searchParams]=useSearchParams();
    console.log(searchParams.get("v"))
    const videoId=searchParams.get("v")

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    },[]);
  return (
    <div className=''>
    <div className='m-7 mr-4 rounded-md ms-20'>
     <iframe className='rounded-xl -mr-4 ' width="800" height="450" src={`https://www.youtube.com/embed/${videoId}?si=ihfCpzH86A8ja4Nn`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
     <CommentContainer/>
    </div>
  )
}

export default WatchPage

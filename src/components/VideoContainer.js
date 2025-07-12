import React , {useEffect, useState} from 'react'
import {YOUTUBE_VIDEO_API } from '../utils/constants'
import VideoCard ,{AdVideoCard} from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

  const [videos,setVideos]=useState([])

  useEffect(()=>{
    getVideo();
  },[])
   
  const getVideo=async()=>{
    try {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      // console.log(json);
      setVideos(json.items || []); // fallback if items is undefined
    } catch (error) {
      console.error("Failed to fetch videos:", error);
    }
  }

  // console.log(videos[0].snippet)

  return (
    <div className='flex flex-wrap' >
      <AdVideoCard info={videos[0]}/>
    {
      videos.map((video,index)=>(
        <Link key={video.id} to={"/watch?v="+video.id} >
          <VideoCard info={video}/>
        </Link> 
      ))
    }

    </div>

  )

}

export default VideoContainer

import React from 'react'

const VideoCard = ({info}) => {

  if (!info || !info.snippet) return null;
     const { snippet,statistics } = info;
     const {channelTitle,title,thumbnails}=snippet
  return (
    <div className='p-2 m-2 w-72 shadow-lg rounded-md'>
        <img alt="video" src={thumbnails.medium.url}></img>
        <ul>
            <li className='font-bold text-sm py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
        </ul>
    </div>
  )
}

export const AdVideoCard=({info})=>{
     return(
      <div className='text-gray-400 '>
        <h1 className='absolute justify-center text-red-600'  >Add</h1>
        <VideoCard info={info}/>
      </div>
     )
}

export default VideoCard

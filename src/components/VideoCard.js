import React from 'react'

const VideoCard = ({info}) => {

  if (!info || !info.snippet) return null;
     console.log(info)
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

export default VideoCard

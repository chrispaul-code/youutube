import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  
  const isMeanuOpen=useSelector(store=>store.app.isMeanuOpen);

  if(!isMeanuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li> <Link to="/">Home</Link></li>
        <li>Sports</li>
        <li>Video</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>Trending</li>
        <li>Shopping</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Settings</li>
        <li>Report history</li>
        <li>Help</li>
        <li>Send Feedback</li>
      </ul>
    </div>
  )
}

export default Sidebar

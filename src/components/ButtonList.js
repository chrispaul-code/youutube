import React from 'react'
import Button from './Button'

const list=["All", "Live" , "Gamming" , "Songs" ,"Cricket","Football","Funny"]

const ButtonList = () => {
  return (
    <div className='flex'>

      {
        list.map((elem,index)=>{
          return <Button key={index} name={elem}/>
        })
      }

    </div>
  )
}

export default ButtonList

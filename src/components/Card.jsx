import React from 'react'

const Card = ({ details }) => {
  const { id, type, thumbnail, src, title } = { ...details };
  return (
    <a href={src} target="_blank">
      <div className='w-80 h-80 overflow-hidden rounded m-5 relative'>

        {type == 'Image' ? <img src={thumbnail} alt={title} className='w-full h-full object-cover rounded' /> : ""}

        {type == 'Video' ? <video className='w-full h-full object-cover' autoPlay mute="true" loop ><source src={src} /></video> : ""}

        {type == 'GIF' ? <img src={src} alt={title} className='w-full h-full object-cover rounded' /> : ""}
        
        <h2 className='absolute bottom-0 px-4 py-6 bg-linear-to-b transparent to-black w-full'>{title}</h2>
      </div>
    </a>
  )
}

export default Card
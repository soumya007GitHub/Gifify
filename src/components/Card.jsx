import React from 'react'

const Card = ({ details }) => {
  const saveToCollection = (details)=>{
    const allData = JSON.parse(localStorage.getItem("collection")) || [];
    allData.push(details);
    localStorage.setItem("collection", JSON.stringify(allData));
  }
  const { id, type, thumbnail, src, title } = { ...details };
  return (
    <div className='w-80 h-80 overflow-hidden rounded m-5 relative'>

      <a href={src} target="_blank">

        {type == 'Image' ? <img src={thumbnail} alt={title} className='w-full h-full object-cover rounded' /> : ""}

        {type == 'Video' ? <video className='w-full h-full object-cover' autoPlay mute="true" loop ><source src={src} /></video> : ""}

        {type == 'GIF' ? <img src={src} alt={title} className='w-full h-full object-cover rounded' /> : ""}
      </a>
      <div className="flex justify-between items-center absolute bottom-0 bg-linear-to-b transparent to-black px-4 py-6 w-full">
        <span className='inline'>{title}</span>
        <button className="bg-violet-800 px-5 py-2 rounded active:scale-95 cursor-pointer" onClick={
          ()=>saveToCollection(details)
        }>Save</button>
      </div>
    </div>
  )
}

export default Card
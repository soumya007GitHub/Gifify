import React from 'react'
import NavBar from '../components/NavBar';
import Card from "../components/Card";
import { useState, useEffect } from 'react';


const CollectionPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getSavedData = () => {
            const savedData = localStorage.getItem("collection");
            return savedData ? JSON.parse(savedData) : [];
        }
        const d = getSavedData();
        setData(d);
        console.log("useffect ran");
    }, [])

    const removeFromCollection = (id) => {
        const newData = data.filter((item) => item.id != id);
        setData(newData);
        localStorage.setItem("collection", JSON.stringify(newData));
    }

    return (
        <>
            <NavBar />
            <div className="w-full min-h-screen flex flex-wrap justify-center items-center mt-5">
                {data.length==0 && <p className='absolute top-[60%] self-center text-gray-400'>Nothing is saved :(</p>}
                {
                    data.map((item, index) => {
                        return (
                            <div className='w-80 h-80 overflow-hidden rounded m-5 relative' key={item.id}>

                                <a href={item.src} target="_blank">

                                    {item.type == 'Image' ? <img src={item.thumbnail} alt={item.title} className='w-full h-full object-cover rounded' /> : ""}

                                    {item.type == 'Video' ? <video className='w-full h-full object-cover' autoPlay muted loop ><source src={item.src} /></video> : ""}

                                    {item.type == 'GIF' ? <img src={item.src} alt={item.title} className='w-full h-full object-cover rounded' /> : ""}
                                </a>
                                <div className="flex justify-between items-center absolute bottom-0 bg-linear-to-b transparent to-black px-4 py-6 w-full">
                                    <span className='inline'>{item.title}</span>
                                    <button className="bg-red-800 px-5 py-2 rounded active:scale-95 cursor-pointer" onClick={
                                        () => removeFromCollection(item.id)
                                    }>Remove</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default CollectionPage
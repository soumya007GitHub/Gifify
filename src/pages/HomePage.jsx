import React from 'react'
import SearchBar from "../components/SearchBar"
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import NavBar from '../components/NavBar';

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <div className='px-5 flex flex-col justify-center items-center'>
            <SearchBar />
            <Tabs />
            <ResultGrid />
            </div>
        </div>
    )
}

export default HomePage
import React from 'react'
import SearchBar from "../components/SearchBar"
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";

const HomePage = () => {
  return (
    <div>
    <nav>
       <ul className=''>
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/about">About</Link>
         </li>
         <li>
           <Link to="/contact">Contact</Link>
         </li>
       </ul>
     </nav>
      <SearchBar/>
      <Tabs/>
      <ResultGrid/>
    </div>
  )
}

export default HomePage
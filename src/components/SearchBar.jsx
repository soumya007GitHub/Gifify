import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice';

const SearchBar = () => {
    const qFromStore = useSelector(state => state.search.query)
    const [query, setLocalQuery] = useState(qFromStore);
    const dispatch = useDispatch();
  return (
    <div>
        <form className='flex items-center gap-5' onSubmit={
            (e)=>{
                e.preventDefault();
                dispatch(setQuery(query));
            }
        }>
            <input type="text" placeholder="e.g. Nature" value={query}
                onChange = {
                    (e)=>{
                        const value = e.target.value;
                        setLocalQuery(value);
                    }
                    }
                className="border border-gray-900 rounded focus:border-gray-600 px-4 py-3 w-full outline-none"
                required
            />
            <button className='border border-gray-900 focus:border-gray-600 px-4 py-3 rounded cursor-pointer active:scale-95 bg-violet-950 hover:scale-110 transition'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar
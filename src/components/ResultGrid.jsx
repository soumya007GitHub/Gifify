import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setQuery, setActiveTab, setResult, setError, setLoading } from '../redux/features/searchSlice';
import { getPhotos, getVideos, getGifs } from '../api/getData.js';
import Card from './Card.jsx';

const ResultGrid = () => {
    const qFromStore = useSelector(state => state.search.query);
    const activeTabFromStore = useSelector(state => state.search.activeTab);
    const resultFromStore = useSelector(state => state.search.result);
    const errorFromStore = useSelector(state => state.search.error);
    const loadingFromStore = useSelector(state => state.search.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch(setLoading());
                let data;
                if (activeTabFromStore === 'Photos') {
                    data = await getPhotos(qFromStore);
                } else if (activeTabFromStore === 'Videos') {
                    data = await getVideos(qFromStore);
                } else {
                    data = await getGifs(qFromStore);
                }

                dispatch(setResult(data));
                console.log(data);
            } catch (e) {
                dispatch(setError(err));

            }
        };

        if (qFromStore) {
            fetchData();
        }
    }, [qFromStore, activeTabFromStore, dispatch])
    return (
        <>
            {loadingFromStore && <p className='text-lg font-bold text-center'>Loading...</p>}
            {errorFromStore && <p className='text-lg font-bold self-center'>{errorFromStore}</p>}
            <div className="w-full min-h-screen flex flex-wrap justify-center items-center mt-5">
                {!qFromStore && <p className='absolute top-[60%] self-center text-gray-400'>Search something</p>}
                {
                    resultFromStore.map((item, index) => {
                        console.log(item);
                        return <Card details={item} key={index} />
                    })
                }
            </div>
        </>
    )
}

export default ResultGrid
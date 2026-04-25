import { useSelector, useDispatch } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice';

const Tabs = () => {
  const tabFromStore = useSelector(state => state.search.activeTab);
  const tabs = ["Photos", "Videos", "GIFs"];
  const dispatch = useDispatch();
  return (
    <div className='flex justify-evenly items-center gap-10 mt-5'>
      {
        tabs.map((tab, index) => {
          return <button key={index} onClick={
            () => {
              dispatch(setActiveTab(tab));
            }
          } className={tabFromStore == tab ? 
          'bg-white text-black px-3 py-2 rounded active:scale-95' : 
          'border border-white px-3 py-2 rounded active:scale-95'}>
          {tab}
          </button>
        })
      }
    </div>
  )
}

export default Tabs
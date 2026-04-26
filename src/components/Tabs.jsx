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
          'bg-violet-600 text-white px-3 py-2 rounded active:scale-95 hover:scale-110 transition' : 
          'border border-gray-900 active px-3 py-2 rounded active:scale-95 hover:scale-110 transition'}>
          {tab}
          </button>
        })
      }
    </div>
  )
}

export default Tabs
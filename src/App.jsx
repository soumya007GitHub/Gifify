import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';

const App = () => {
  return (
    <div className='min-h-screen w-full bg-gray-950 text-white'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/saved" element={<CollectionPage />} />
      </Routes>
    </div>
  )
}

export default App;
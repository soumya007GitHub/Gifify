import SearchBar from "./components/SearchBar"
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";

const App = () => {
  return (
    <div className='min-h-screen w-full bg-gray-950 text-white p-4'>
      <SearchBar/>
      <Tabs/>
      <ResultGrid/>
    </div>
  )
}

export default App;
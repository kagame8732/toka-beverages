
import { RiSearch2Line } from "react-icons/ri";
const Search = () => {
  return (
    <div className='relative  bg-white h-fit w-[40%] ring-1 ring-black'>
      <input className=" w-full h-8 px-4 py-2 rounded-sm  pl-10 focus:outline-none " type="search" placeholder="What are you looking for?" />
      <RiSearch2Line  className='absolute left-2 text-black top-2'/>
    </div>
  )
}

export default Search

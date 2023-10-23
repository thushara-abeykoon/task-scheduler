import {FaSearch} from "react-icons/fa";

export function Tabs(){

    const tabDecoration = 'text-xl relative after:bg-white after:absolute after:h-0.5 after:w-0 after:top-7 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'

    return <div className=' font-thin flex w-1/4 justify-between text-xl  underline-offset-8'>
        <a href="" className={tabDecoration}>calender</a>
        <a href="" className={tabDecoration}>tasks</a>
        <a href="" className={tabDecoration}>about</a>
    </div>
}

export function SearchBar(){
    return <div className='border-2 px-4 py-2 rounded-full flex items-center'>
        <input className='outline-0 text-lg bg-transparent mr-3' placeholder='search tasks'  type='text'/>
        <FaSearch className='text-xl cursor-pointer text-stone-500' />
    </div>
}

export default function Header() {
    return <div>
        <h1 className='font-thin text-5xl'>task scheduler</h1>
    </div>
}
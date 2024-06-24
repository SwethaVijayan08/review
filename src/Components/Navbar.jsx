import React , {useState}from "react";
import { AiOutlineClose,AiOutlineMenu} from "react-icons/ai";


const Navbar = () => {

    const[nav, setNav]= useState(false)

    const handleNav=() =>[
        setNav(!nav)
    ]


    return(
        <div>
        <div className="text-gray-400 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-lg">
            <h1 className="text-3xl font-bold primary-color ml-4">
                Online Sessions
            </h1>
            
            <ul className="hidden md:flex">
            <li className='p-5'>Courses</li>
            <li className='p-5'>Login</li>   
            </ul>

            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20}/>:<AiOutlineMenu size={30}/>}
            </div>
            <div className={nav ?'text-gray-300 fixed h-full left-0 top-0 w[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500':"fixed left-[-100%]"}>
             
                <ul className="flex md:hidden flex-col">
                    <li className='p-5'>Courses</li>
                    <li className='p-5'>Login</li>              
                </ul>
            </div>
        </div>
    </div>
    ) 
}

export default Navbar
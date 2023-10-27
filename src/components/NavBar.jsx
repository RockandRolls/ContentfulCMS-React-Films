import { useState } from 'react';
import {Link} from "react-router-dom"
import Logo from '../assets/Images/logo.png';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import { FiLogIn, FiUserPlus } from 'react-icons/fi';
import NavBarItem from './NavBarItem';
import { useNavigate } from 'react-router-dom';


function NavBar({searchQuery, setSearchQuery}) {
    //Dropdown / hamburger menu
    const [toggle, setToggle] = useState(false);
    // Search bar

    // Navigate to the '/trending' route
    const navigate = useNavigate();
    const handleTrendingClick = () => {
        navigate('/trending');
    };
     // NavBar Items
    const menu=[
        {
            name:'HOME',
            icon:HiHome,
            path:'/'
        },
        {
            name:'WATCH LIST',
            icon:HiPlus,
            path:'/*'
        },
        {
            name:'TRENDING',
            icon:HiStar,
            path: '/trending',
            onClick: handleTrendingClick
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle,
            path: '/trending',
        },
        {
            name:'SERIES',
            icon:HiTv,
            path:'/*'
        }
    ]

    
    // console.log({searchQuery})


return (
    <div className ='flex items-center justify-between p-5'>
    <div className ='flex gap-8 items-center' >
        <img src={Logo} className='w-[80px] md:w-[115px] object-cover' />

        {menu.map((item, index) => (
        <Link to={item.path} key={index}>
            <NavBarItem name={item.name} Icon={item.icon} />
        </Link>
        ))}
        

        <div className='flex md:hidden gap-5'>
            {/* {menu.map(( item, index ) => index < 4 && (
                <NavBarItem key = {index} name={''} Icon={item.icon} />
            ))} */}
            <div className='md:hidden' onClick={() => setToggle(!toggle)}>


            <NavBarItem  name={''} Icon={HiDotsVertical} />

            {toggle
                ? <div className='absolute z-50 mt-3 bg-[#f5f4f4] border-[1px] border-gray-700 p-3 px-5 py-4'>
                    {menu.map((item,index) => index < 4 && (
                        <NavBarItem key={index} name= {item.name} Icon={item.icon} />
                    ))}
            </div> 
                : null}
            </div> 
        </div>
    </div>
    <div className='md:flex hidden items-center gap-3 mb-0 '>
    <HiMagnifyingGlass className='text-black right-2 top-1/2 transform -translate-y-1/2 mr-2  mt-4'  /> 
            <input
                type='text'
                placeholder='Search'
                className='border-none rounded-md px-1 py-0 focus:outline-none mr-0 ' 
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
            />
            <Link to="/login"> 
            
                    <button className="text-black flex items-center gap-2text-[15px] font-semibold cursor-pointer hover:underline
    underline-offset-8 mr-1 "><FiLogIn className="mr-1" />LOGIN</button>
                
                </Link>
                
                <Link to="/signup"> 
                    <button className="text-black flex items-center gap-2 text-[15px] font-semibold cursor-pointer hover:underline
    underline-offset-8 mr-1"><FiUserPlus className="mr-1" />SIGN UP</button>
                
                </Link>
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className='w-[60px] rounded-full'/>
        </div>
    
    </div>
)

}

export default NavBar;
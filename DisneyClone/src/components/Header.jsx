import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import HeaderItem from './HeaderItem'
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv,
    HiEye
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from 'react-icons/hi';


function Header() {
    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
    ]

    return (
        <div className='text-white flex items-center gap-8 justify-between'>
            <div className='flex gap-8 items-center'>
                <img src={logo} className=' bg-white w-[80px] md:w-[115px] object-cover rounded-lg m-3' />

                <div className='hidden md:flex gap-8'>
                    {menu.map((item) => (
                        <HeaderItem name={item.name} Icon={item.icon} />
                    ))}
                </div>

                <div className='flex md:hidden gap-5'>
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItem name={''} Icon={item.icon} />
                    ))}

                    <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical} />

                        {toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                            {menu.map((item, index) => index > 2 && (
                                <HeaderItem name={item.name} Icon={item.icon} />
                            ))}
                        </div> : null}
                    </div>
                </div>
            </div>
            <img src='src\assets\Images\user.jpg' className='w-[40px] rounded-full' />
        </div>
    )
}

export default Header
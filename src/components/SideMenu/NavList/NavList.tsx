import React from 'react'
import { AiOutlineFire, AiOutlineRight } from 'react-icons/ai'
import NavItem from './NavItem/NavItem'
import { PiStarFourLight } from 'react-icons/pi';
import { MdGppBad } from 'react-icons/md';

interface NavItemType {
    id: number;
    label: string;
    link: string;
    icon: React.ReactNode;
}

const NavList = () => {
  const navList: NavItemType[] = [
      { id: 1, label: 'Good', link: '/forms/good', icon: <PiStarFourLight size={15} className='mt-1.5 mr-0.5' /> },
      { id: 2, label: 'Bad', link: '/forms/bad', icon: <MdGppBad size={15} className='mt-1.5 mr-0.5' /> },
      { id: 3, label: 'Try', link: '/forms/try', icon: <AiOutlineFire size={15} className='mt-1.5 mr-0.5' /> }
  ];

  return (
    <div className='flex flex-col ml-5 mt-5'>
        <div>
            <div className="relative inline-block text-left w-full">
                <div className='flex'>
                    <AiOutlineRight size={15} className='mt-1.5' />
                    <p className='pb-2 text-base'>Form</p>
                </div>
                {navList.map((item) => (
                    <NavItem key={item.id} label={item.label} link={item.link} icon={item.icon} />
                ))}
            </div>
            <div className='flex'>
                <p className='pb-2 text-base'>History</p>
            </div>
            <div className='flex'>
                <p className='pb-2 text-base'>Dash Board</p>
            </div>
        </div>
      </div>
  )
}

export default NavList
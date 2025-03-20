'use client'

import React, { useState } from 'react'
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
  const [isOpen, setIsOpen] = useState(false);

  const navMenuStyles = {
    container: 'flex',
    paragraph: 'pb-2 text-base cursor-pointer w-full select-none',
  };

  const navList: NavItemType[] = [
      { id: 1, label: 'Good', link: '/forms/good', icon: <PiStarFourLight size={15} className='mt-1.5 mr-0.5' /> },
      { id: 2, label: 'Bad', link: '/forms/bad', icon: <MdGppBad size={15} className='mt-1.5 mr-0.5' /> },
      { id: 3, label: 'Try', link: '/forms/try', icon: <AiOutlineFire size={15} className='mt-1.5 mr-0.5' /> }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='flex flex-col ml-5 mt-5'>
        <div>
            <div className="relative inline-block text-left w-full">
                <div className={navMenuStyles.container}>
                    <AiOutlineRight 
                      className={`
                        mt-1.5 transition-transform duration-100
                        ${isOpen ? 'rotate-90' : 'rotate-0'}
                      `} 
                      size={15}
                    />
                    <p onClick={toggleMenu} className={navMenuStyles.paragraph}>Form</p>
                </div>
                {isOpen && navList.map((item) => (
                    <NavItem key={item.id} label={item.label} link={item.link} icon={item.icon} />
                ))}
            </div>
            <div className={navMenuStyles.container}>
                <p className={navMenuStyles.paragraph}>History</p>
            </div>
            <div className={navMenuStyles.container}>
                <p className={navMenuStyles.paragraph}>Dash Board</p>
            </div>
        </div>
      </div>
  )
}

export default NavList
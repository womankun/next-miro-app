'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface NavItemProps {
    label: string;
    link: string;
    icon: React.ReactNode;
}

const NavItem: React.FC<NavItemProps>  = ({
    label, link, icon
}) => {
  const pathname = usePathname();
  return (
    <Link href={link} className={`flex px-4 py-2 cursor-pointer w-full
    ${pathname === link ? 'bg-blue-900 border-r-4 border-r-white': ''}`}>
        <div>{icon}</div>
        <span>{label}</span>
    </Link>
  )
}

export default NavItem
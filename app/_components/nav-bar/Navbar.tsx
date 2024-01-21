'use client'
import './Navbar.scss'
import { HiSearch, HiMenu, HiOutlineX } from "react-icons/hi";
import { usePathname } from 'next/navigation';
import { navBarSkipPathList, checkPathInWhiteList } from '@/app/_utils/whiteListUtils.ts';
import { NavItem } from './_conponents/desktop/NavItem'
import { navItems } from './navItems';
import { useEffect, useState } from 'react';
import { MobileNavItem } from './_conponents/mobile/MobileNavItem';
export default function Navbar() {
    const [expandMobileMenu, setExpandMobileMenu] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        if (expandMobileMenu === false)
        {
            setSelectedMenu(null);
        }
    }, [expandMobileMenu]);
    const handleResize = () => {
        if (window.innerWidth > 992) {
            setExpandMobileMenu(false);
        }
    };

    function handleClick(e: React.MouseEvent<HTMLElement>, newMenu: string | null) {
        setSelectedMenu(newMenu);
        if(newMenu==null)
        {
            setExpandMobileMenu(false)
        }
    }
    return (
        <nav className='nav'>
            <div>
                <div className='nav-container'>
                    <div className='header-container'>
                        <div className='logo-container' ><h1>Logo</h1></div>
                        <ul className='menu-list-container'>
                            {

                                navItems.map((navItem, index) => {
                                    return (<NavItem key={index} nav={navItem} />)

                                })
                            }
                        </ul>
                        <div style={{ flexGrow: 1 }} />
                        <div className='search-container-wrapper'>
                            <div className='search-container'>
                                <input className='search-input' type='text' placeholder='파밍할 아이템을 검색해보세요!' />
                                <HiSearch size={24}/>
                            </div>
                        </div>
                        <HiMenu size={32} className='mobile-icon' onClick={() => {
                            setExpandMobileMenu(!expandMobileMenu)
                        }} />
                    </div>

                </div>
                <div className={`nav-mobile-menu ${expandMobileMenu ? 'expand' : `collapse`}`}>
                    <div className='mobile-header-container'>
                        <div className='logo-container' ><h1>Logo</h1></div>
                        <div style={{ flexGrow: 1 }} />
                        <HiOutlineX size={32} onClick={() => {
                            setExpandMobileMenu(false)
                        }} />
                    </div>

                    <ul className='mobile-menu-list-container'>
                        {

                            navItems.map((navItem, index) => {
                                return (<MobileNavItem key={index} nav={navItem} selectedMenu={selectedMenu} handleClick={handleClick} />)

                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>);

}
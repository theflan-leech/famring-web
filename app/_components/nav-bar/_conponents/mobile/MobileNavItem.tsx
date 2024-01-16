'use client'
import { Navigation } from '@/app/_types/navigation'
import './MobileNavItem.scss'
import Link from 'next/link'
import { useState } from 'react'
export const MobileNavItem = ({ nav ,selectedMenu, handleClick}: { nav: Navigation ,selectedMenu:string|null, handleClick:(e:React.MouseEvent<HTMLElement>,b:string|null)=>void}) => {


    return (
        <li className='mobile-menu-item'>
            {
                nav.url ?
                    <p> <Link onClick={(e) => {
                        handleClick(e, null)
                    }} href={nav.url}>{nav.title}</Link></p> :
                    <p onClick={(e) => {
                        handleClick(e, nav.title)
                    }
                    }>{nav.title}</p>

            }
            {
                nav.subNav.length > 0?
                    <ul className={'mobile-menu-depth-container ' + (selectedMenu === nav.title ? 'sub-menu-expand' : 'sub-menu-collapse')}>
                        {
                            nav.subNav.map((subItem, index) => {
                                return (
                                    <li key={index}>
                                        <p> <Link onClick={(e) => {
                                            handleClick(e, null)
                                        }} key={subItem.title} href={subItem.url}>{subItem.title}</Link></p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    : null
            }
        </li>
    )
}

import { Navigation } from '@/app/_types/navigation'
import './NavItem.scss'
import Link from 'next/link'
export const NavItem = ({ nav }: { nav: Navigation }) => {

    return (
        <li className='menu-item'>
            {
                nav.url ?
                   <p> <Link href={nav.url}>{nav.title}</Link></p> : <p>{nav.title}</p>

            }
            {
                nav.subNav.length>0?
                    <ul className='menu-depth-container'>
                        {
                            nav.subNav.map((subItem,index) => {
                                return (
                                    <li key={index}>
                                        <Link key={subItem.title} href={subItem.url}><p>{subItem.title}</p></Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                :null
            }
        </li>
    )
}

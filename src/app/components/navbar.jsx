import styles from './navbar.module.css'
import {ActiveLink} from './activeLink'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navbar = () => {
    return (
        <>
        <nav className={styles['Contariner-nav']}>
            {
                menuItems.map(({text, href}) =>(
                  
                    <ActiveLink key={href} href={href} Text={text} />
                    ))
            }
        {/* <ActiveLink href={menuItems[0].href} Text={menuItems[0].text} />
      
        <ActiveLink href={menuItems[2].href} Text={menuItems[2].text} />
        <ActiveLink href={menuItems[3].href} Text={menuItems[3].text} />
        */}
        </nav>
        
        
    </>
    )
}

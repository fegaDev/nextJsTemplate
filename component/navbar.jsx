import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/navbar.module.css'

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div class={styles.navbarBrand}>
                <Image src='/brand-image.png' alt="logo"width={60} height={50}/>
            </div>
            <div className={styles.navbarMenu}>
                <ul className={styles.ulist}>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/features">
                            <a>Features</a>
                        </Link>
                    </li>
                    <li> 
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
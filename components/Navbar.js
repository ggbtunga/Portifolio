import Image from "next/image"
import Link from "next/link"

import { GiHamburgerMenu } from "react-icons/gi";

import styles from "../styles/Navbar.module.css"

export default function Navbar(){

    return(
            <nav className={styles.navbar}>
                <Image
                    className={styles.logo}
                    src="/images/meulogo.png"
                    width={80}
                    height={80}
                    alt="logo"
                    priority="true"
                />

                <input type="checkbox" id={styles.check}/>
                <label for={styles.check} className={styles.menu}>
                    <GiHamburgerMenu/>
                </label>
                <ul className={styles.links}>
                    <li>
                        <Link href="/" legacyBehavior>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sobre" legacyBehavior>
                            <a>Sobre</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/tecnologias" legacyBehavior>
                            <a>Tecnologias</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projetos" legacyBehavior>
                            <a>Projetos</a>
                        </Link>
                    </li>
                </ul>
                
            </nav>
        

    )
}
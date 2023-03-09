import Image from "next/image"
import Link from "next/link"

import styles from "../styles/Navbar.module.css"

export default function Navbar(){

    return(
        <header>
            <nav className={styles.navbar}>
                <Image
                    src="/images/meulogo.png"
                    width={80}
                    height={80}
                    alt="logo"
                    priority="true"
                />

                <ul className={styles.links}>
                    <li>
                        <Link href="/" legacyBehavior>
                            Home
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
        </header>
        

    )
}
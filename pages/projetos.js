import styles from "../styles/Projetos.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Projetos(){
    return(
        <div className={styles.container}>
            <h1>Projetos</h1>
            <div className={styles.projetos_container}>
                <div className={styles.card}>
                    <Image src="/images/ethereum.jpg" width={300} height={166} alt="ethereum" priority/>
                    <h2>Ethereum</h2>
                    <p>2022 06-Jul</p>
                    <div className={styles.card_botao}>
                        <Link href="https://ggbtunga.github.io/ethereum/" legacyBehavior><a>Deploy</a></Link>
                        <Link href="https://github.com/ggbtunga/ethereum" legacyBehavior><a>Repositório</a></Link>
                    </div>
                </div>
                <div className={styles.card} id={styles.projeto2}>
                    <Image src="/images/audio.jpg" width={300} height={166} alt="audio"/> 
                    <h2>Áudio Player</h2>
                    <p>2022 06-Jul</p>
                    <div className={styles.card_botao}>
                        <Link href="https://ggbtunga.github.io/audio-player/" legacyBehavior><a>Deploy</a></Link>
                        <Link href="https://github.com/ggbtunga/audio-player" legacyBehavior><a>Repositório</a></Link>
                    </div>
                </div>
                <div className={styles.card} id={styles.projeto3}>
                    <Image src="/images/landing-page.jpg" width={300} height={166} alt="landing-page"/>
                    <h2>Landing Page</h2>
                    <p>2022 7-Jul</p>
                    <div className={styles.card_botao}>
                        <Link href="https://ggbtunga.github.io/Landing-page/" legacyBehavior><a>Deploy</a></Link>
                        <Link href="https://github.com/ggbtunga/Landing-page" legacyBehavior><a>Repositório</a></Link>
                    </div>
                </div>
                <div className={styles.card} id={styles.projeto4}>
                    <Image src="/images/calculadora.jpg" width={300} height={166} alt="calculadora"/>
                    <h2>Calculadora</h2>
                    <p>2022 29-Nov</p>
                    <div className={styles.card_botao}>
                        <Link href="https://ggbtunga-calculator.netlify.app/" legacyBehavior><a>Deploy</a></Link>
                        <Link href="https://github.com/ggbtunga/Calculator-App" legacyBehavior><a>Repositório</a></Link>
                    </div>
                </div>
                <div className={styles.card} id={styles.projeto5}>
                    <Image src="/images/pomodoro.jpg" width={300} height={166} alt="pomodoro"/>
                    <h2>Cronômetro Pomodoro</h2>
                    <p>2023 21-Fev</p>
                    <div className={styles.card_botao}>
                        <Link href="https://pomodoro-timer-ggbtunga.vercel.app/" legacyBehavior><a>Deploy</a></Link>
                        <Link href="https://github.com/ggbtunga/Pomodoro_timer" legacyBehavior><a>Repositório</a></Link>
                    </div>
                </div>
                <div className={styles.card} id={styles.projeto6}>
                    <Image src="/images/pokenext.jpg" width={300} height={166} alt="pokenext"/>
                    <h2>PokeNext</h2>
                    <p> 2023 26-Fev</p>
                    <div className={styles.card_botao}>
                        <Link href="https://pokenext-pc1n.vercel.app/" legacyBehavior><a>Deploy</a></Link>
                        <Link href="https://github.com/ggbtunga/pokenext" legacyBehavior><a>Repositório</a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
import styles from "../styles/Sobre.module.css"
import Image from "next/image"

export default function About(){
    return(
        <div className={styles.sobre}> 
            <h1>Sobre mim</h1>
            <p>
                Desde meu primeiro contato com a área de programação,
                venho sempre buscando novos conhecimentos que me ajudem 
                a ingressar no mercado de trabalho. Nos últimos anos venho 
                criando projetos pessoais colocando em prática meus conhecimentos. 
                Tenho facilidade de aprender, sou comunicativo e estou sempre aberto para novos 
                conhecimentos que possam me aprimorar,dicas são sempre bem-vindas.
            </p>
            <Image src="/images/fotocinza.jpg" width={200} height={290} alt="foto"/>
        </div>
    )
}

import styles from '@/styles/Welcome.module.css'
import { useEffect, useState } from 'react'

export default function Welcome() {
  const [animado,setAnimado] = useState(false);

  useEffect(()=>{
    setAnimado(true);
    console.log("relogado")
  },[])

  return (
      <div className={`${styles.main_text} ${animado? "ativo" : ""}`}>
        <h1>Bem-vindo</h1>
        <p>ao meu portifólio,aqui você encontrará mais sobre mim e poderá vizualizar meus projetos pessoais.</p>
      </div>
  )
}

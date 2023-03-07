import styles from '@/styles/Welcome.module.css'
import { useEffect, useState } from 'react'

export default function Welcome({titulo,texto}) {
  const [animado,setAnimado] = useState(false);

  useEffect(()=>{
    setAnimado(true);
    console.log("relogado")
  },[])

  return (
      <div className={`${styles.main_text} ${animado? "ativo" : ""}`}>
        <h1>{titulo}</h1>
        <p>{texto}</p>
      </div>
  )
}

import { useEffect, useState } from "react";
import { checkPageWidth750 } from "../scripts/checkPageWidth";
import styles from "../styles/components/Menu.module.css";

interface MenuProps {
    background: string;
}

export function Menu({ background }:MenuProps) {
    const [width, setWidth] = useState(0); 

    useEffect(()=>{
      setWidth(window.innerWidth);
    }, [])
    
    return(
        <div className={styles.menuContainer} style={{background: background}}>
            <div className={styles.logoContainer}>
                LaiDesign
            </div>

           {
                width > 750
                && (
                    <div className={`menuContent ${styles.linksContainer}`}>
                        <div>
                            <a href="">Produtos</a>
                            <a href="">Serviços</a>
                            <a href="">Sobre</a>
                            <a href="">Contato</a>
                        </div>
                        <p>|</p>
                        <button>
                            Orçamento
                        </button>
                    </div>
                ) 
            }

        </div>
    );
}
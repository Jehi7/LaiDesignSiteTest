import { Menu } from '../components/Menu';
import styles from '../styles/pages/identidadeVisual.module.css';

export default function VisualIdentity() {
    return(
        <div>
            <Menu background="#F28F8F"/>

            <section className={styles.titleScreenContainer}>
                <div className={styles.contentContainer}>
                    <div className={styles.promoContainer}>
                        <div>
                            <p>
                            EM 2021
                            </p>
                        </div>

                        <p>Seu Negócio Precisa de Uma Logo</p>
                    </div>

                    <h1>Criação de Logo & Identidade Visual</h1>
                    
                    <p>
                        A melhor maneira de apresentar sua empresa ao mercado é com uma marca personalizada, profissional e marcante. A Lai Design desenvolve logos e identidades visuais com uma equipe de designers especialistas em traduzir o desejo do cliente.
                    </p>
                    <button className={styles.mainButton}>
                        Faça um orçamento!
                        <div>
                            <img src="/icon/ArrowIcon.svg" alt="Seguir"/>
                        </div>
                    </button>
                </div>
            </section>

            <section className={styles.callForActionContainer}>
                <div className={styles.DarkContainer}>
                    <div className={styles.DarkContent}>
                        <h2>
                            Criação de Sites: <br/> Qual a modalidade de site ideal para o seu negócio?
                        </h2>
                        <p>
                            Antes de planejar a criação de site que atenda a todos os seus objetivos, <br/> tenha em mente que para cada estratégia, existe uma modalidade de site apropriada.
                        </p>
                    </div>
                </div>

                <div className={styles.WhiteContainer}>
                    <div>
                        <div className={styles.callContainer}>
                            <div className={styles.mainTittle}>
                                <h2>
                                    Criação de Sites Institucionais 
                                </h2>
                                <button>Solicite um orçamento</button>
                            </div>

                            <div className={styles.textContent}>
                                <p>Ideal para ser utilizado como apresentação do seu negócio bem como para projetos que almejam rankeamento orgânico no Google.</p>
                            </div>
                        </div>

                        <div className={styles.callContainer}>
                            <div className={styles.mainTittle}>
                                <h2>
                                    Criação de Sites Institucionais 
                                </h2>
                                <button>Solicite um orçamento</button>
                            </div>

                            <div className={styles.textContent}>
                                <p>Ideal para ser utilizado como apresentação do seu negócio bem como para projetos que almejam rankeamento orgânico no Google.</p>
                            </div>
                        </div>
                        
                        <div className={styles.callContainer}>
                            <div className={styles.mainTittle}>
                                <h2>
                                    Criação de Sites Institucionais 
                                </h2>
                                <button>Solicite um orçamento</button>
                            </div>

                            <div className={styles.textContent}>
                                <p>Ideal para ser utilizado como apresentação do seu negócio bem como para projetos que almejam rankeamento orgânico no Google.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
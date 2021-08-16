import styles from '../styles/components/Footer.module.css';

export function Footer() {
    return(
        <div className={styles.FooterContainer}>
            <div className={styles.FooterContent}>
                <div className={styles.logoContainer}>
                    <p>
                        LaiDesign
                    </p>
                </div>

                <div className={styles.QuickLinkContainer}>
                    <h3>
                        QuickLink
                    </h3>

                    <ul>
                        <a href="">Home</a>
                        <a href="">Produtos</a>
                        <a href="">Serviços</a>
                        <a href="">Sobre</a>
                        <a href="">Contato</a>
                    </ul>
                </div>
            </div>

            <div className={styles.SocialsCopyContainer}>
                <p>
                    ©2021 CRAPPO. All rights reserved
                </p>

                <div className={styles.SocialsContainer}>
                    <a href="">
                        <img src="/icon/instagram.svg" alt=""/>
                    </a>
                    <a href="">
                        <img src="/icon/linkedin.svg" alt=""/>
                    </a>
                    <a href="">
                        <img src="/icon/whatsapp.svg" alt=""/>
                    </a>
                </div>
            </div>
        </div>
    );
}
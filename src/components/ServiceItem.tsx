import styles from '../styles/components/ServiceItem.module.css';

interface ServiceItemProps {
    tittle: string;
    paragraph: string;
    icon: string;
    id?: string;
}

export function ServiceItem({icon, tittle, paragraph, id}: ServiceItemProps) {
    return(
        <div className={styles.serviceItemContainer} id={ id }>
            <div className={styles.iconContainer}>
                <h1>{icon}</h1>
            </div>

            <h3>{tittle}</h3>

            <p>
                {paragraph}
            </p>

            <div className={styles.separationLine}></div>

            <ul>
                <li> Criação de Site em WordPress </li>
                <li> Criação de Site em WordPress </li>
                <li> Criação de Site em WordPress </li>
                <li> Criação de Site em WordPress </li>
            </ul>

            <div className={styles.separationLine}></div>

            <button className={styles.choiceButton}>
                Escolher
                <div className={styles.arrowContainer}>
                    <img src="/icon/ArrowIcon.svg" alt="Click"/>
                </div>
            </button>
        </div>
    );
}
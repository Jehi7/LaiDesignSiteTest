import styles from "../styles/components/Functionality.module.css";

export function Functionality({ textId, title, text, icon}) {
    var isOpened = false;

    function openAnswer() {
        const paragraph = document.querySelector(`#${ textId }`);

        if(isOpened) {
            paragraph.classList.add("hidden");
            isOpened = false;
            console.log('Fechou')

        } else {
            paragraph.classList.remove("hidden"); 
            isOpened = true;
            console.log('Abriu');
        }

        console.log("Clicou ne");
    }

    return(
        <div
            className={styles.functionalityButton}
            onClick={openAnswer}
        >
            <div className={styles.functionalitiesItem} id={styles.itemId}>                
                <img src={ icon } alt="SitesResponsivos"/>

                <h3>{ title }</h3>

                <div className={styles.separationLine}></div>

                <p className={`hidden`} id={ textId }>
                    { text }
                </p>
            </div>
        </div> 
    );
}
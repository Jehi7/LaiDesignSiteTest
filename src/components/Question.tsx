import styles from '../styles/components/Question.module.css';
//import { openAnswer } from '../scripts/questionsAction';

export function Question ({ id, question, answer }) {
    var isOpened = false;

    function openAnswer() {
        const answerContainer = document.querySelector(`#${ id }`);

        if(isOpened) {
            answerContainer.classList.add("hidden");
            isOpened = false;
            console.log('Fechou')

        } else {
            answerContainer.classList.remove("hidden");
            isOpened = true;
            console.log('Abriu');
        }

        console.log("Clicou oh");
    }

    return(
        <button
            className={styles.questionButton}
            onClick={openAnswer}
        >
            <div className={`questionContainer ${styles.questionContainer}`}>
                <div className={styles.mainContent}>
                    <img src="/icon/PlusIcon.svg" alt="Veja Mais"/>
                    <h3>{ question }</h3>
                </div>

                <p id={ id } className={`hidden answerContainer ${styles.answerContainer}`}> 
                    { answer }
                </p>
            </div>

            <div id={ id } className={`hidden answerContainer ${styles.answerContainer}`}>
            </div>
        </button>
    );
}


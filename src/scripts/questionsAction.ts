var isOpened = false;

export function openAnswer() {
    const answerContainer = document.querySelector('.answerContainer');

    if(isOpened) {
        answerContainer.classList.add("hidden");
        isOpened = false;
        console.log('Fechou')

    } else {
        answerContainer.classList.remove("hidden");
        isOpened = true;
        console.log('Abriu');
    }

    console.log("Clicou");
    console.log(window.innerHeight);
    
}
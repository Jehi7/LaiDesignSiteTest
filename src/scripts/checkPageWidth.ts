import { useEffect } from "react";

let isPageSmallerThan750 = false

export function checkPageWidth750() {
    useEffect(() => {
        console.log(window.innerWidth);

        if(window.innerWidth < 750 ) {
            isPageSmallerThan750 = true;
            console.log('Menor que 750');
            console.log(isPageSmallerThan750);
            
            
        } else {
            isPageSmallerThan750 = false;
            console.log('Maior que 750');
        }
    });

    return(isPageSmallerThan750);
}

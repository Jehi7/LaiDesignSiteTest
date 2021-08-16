import { useState } from "react";
import { BurgerMenu } from "../components/BurgerMenu";
import { MenuContent } from "../components/MenuContent";

export default function menuTest() {
    const [isOpened, setIsOpened] = useState(false); 

    return(
        <div>
            <BurgerMenu isOpened={isOpened} setIsOpened={setIsOpened}/>
            <MenuContent isOpened={isOpened} setIsOpened={setIsOpened}/>

            <h1>Hi, we're gonna be testing the menu here</h1>
        </div>
    );
}
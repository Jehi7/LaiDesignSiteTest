import { StyledBurger } from '../styles/components/BurgerMenu.styled';

interface BurgerMenuProps {
    isOpened: boolean;
    setIsOpened: Function;
}

export function BurgerMenu({isOpened, setIsOpened}: BurgerMenuProps) {
    return(
        <StyledBurger isOpened={isOpened} onClick={()=>{setIsOpened(!isOpened)}}>
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
    )
}
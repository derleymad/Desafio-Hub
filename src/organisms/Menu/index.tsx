import * as S from "./styles"

const Menu = () => {
    return (
    <S.MenuList>
        <S.ItemList> 
            <a href="#">Home</a>
        </S.ItemList>

        <S.ItemList>
             <a href="#">Sobre nós</a>
        </S.ItemList>

        <S.ItemList> 
            <a href="#">Como funciona?</a>
        </S.ItemList>

        <S.ItemList> 
            <a href="#">Serviços</a>
        </S.ItemList>

        <S.ItemList>
             <a href="#">Contato</a>
        </S.ItemList>

    </S.MenuList>
    )
};

export default Menu;
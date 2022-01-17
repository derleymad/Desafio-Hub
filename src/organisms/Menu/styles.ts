import styled from 'styled-components';

export const MenuList = styled.ul`
    margin-left: auto;
`
  

export const ItemList = styled.li`
    display: inline-block;
    margin-right: 25px;
    font-weight: 500;
    

    &:hover{
        a{
            color: #17a4d0;
        }
    }
    a{
        transition: color 250ms ease;
        color: #1e255e;
    }
`;
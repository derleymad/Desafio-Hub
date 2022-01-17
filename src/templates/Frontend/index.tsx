import * as S from './styles';

type FrontedProps = {
    children: React.ReactNode;
};

const Frontend = ({children}: FrontedProps) => {
    return <S.Container>Teste Frontend{children}</S.Container>; 
};
export default Frontend;
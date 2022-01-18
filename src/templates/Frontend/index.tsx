import Header from '../../organisms/Header';
import * as S from './styles';

type FrontedProps = {
    children: React.ReactNode;
};

const Frontend = ({children}: FrontedProps) => {
    return(
     <S.Container>
        <Header></Header>
        <main>{children}</main>
    </S.Container>
    );
};
export default Frontend;
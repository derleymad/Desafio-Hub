import * as S from './styles';
import {FcPlus} from 'react-icons/fc';

const CardActivity = () => (
    <S.Container>
        <small>Expansões</small> 
        <div>
            <span>50</span><FcPlus size={20} />
        </div>

        <i className="circle1"></i>
        <i className="circle2"></i>
        <i className="circle3"></i>


    </S.Container>
)

export default CardActivity;
import ButtonContact from '../atoms/ButtonContact';
import Frontend from '../templates/Frontend';
import CardActivity from '../molecules/CardActivity';

import HeroHeaderImage from '../assets/hero-header.png';


import * as S from  "./styles"

function Main() {

  return (
    <Frontend> 
      <S.Container>
        <div>
          <h1>Quer a sua empresa vista em <mark>qualquer</mark> local da internet?</h1>
          <h6>Simples, nós aumentamos o fluxo de clientes e ligações dos pontos de vendas da sua empresa na internet em 50 mecanismos de buscas de forma totalmente automatizada.
          </h6>
          <ButtonContact/>
        </div>
       
        <S.ColumnImage>
          <CardActivity />
          
          <img src={HeroHeaderImage} alt="Uma imagem relacionada a trabalho" /> 
        </S.ColumnImage>
      </S.Container>
    </Frontend>
    );

}

export default Main;

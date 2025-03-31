import styled from 'styled-components';
import me from '../../../assets/images/me.png';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={'center'} justify={'space-around'}>
        <div>
          <span>Hi There</span>
          <Name>I am Alexey</Name>
          <MainTitle>A web Developer</MainTitle>
        </div>
        <Photo src={me} alt="me" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #fff5e7;
`;

const Photo = styled.img`
  width: 300px;
  height: 350px;
  object-fit: cover;
`;

const MainTitle = styled.h1``;

const Name = styled.h2``;

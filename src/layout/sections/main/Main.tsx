import styled from 'styled-components';
import me from '../../../assets/images/me.png';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import { Container } from '../../../components/container/Container';
import { theme } from '../../../styles/Theme';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={'center'} justify={'space-between'}>
          <InformationStyled>
            <SmallText>Hi There</SmallText>
            <Name>
              I am <span>Alexey</span>
            </Name>
            <MainTitle>A web Developer</MainTitle>
          </InformationStyled>
          <PhotoWrapper>
            <Photo src={me} alt="me" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;
  background-color: #fff5e7;
`;

const Photo = styled.img`
  width: 300px;
  height: 350px;
  object-fit: cover;
`;

const InformationStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const SmallText = styled.h2`
  font-weight: 400;
  font-size: 14px;
`;

const Name = styled.h1`
  font-family: Josefin Sans;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;

    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`;

const MainTitle = styled.h2``;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    width: 360px;
    height: 470px;
    border: 6px solid ${theme.colors.accent};

    position: absolute;
    top: -30px;
    left: 25px;
    z-index: -1;

    /* top: 0;
    left: 0; */
  }
`;

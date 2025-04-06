import styled from 'styled-components';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { Button } from '../../../components/button/Button';
import { Container } from '../../../components/container/Container';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';

export const Slogan = () => {
  return (
    <StyledSlogan>
      <Container>
        <FlexWrapper direction={'column'} align={'center'}>
          <SectionTitle>I am Available For Freelance</SectionTitle>
          <Button>Hire me</Button>
        </FlexWrapper>
      </Container>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: #ffe1f5;
`;

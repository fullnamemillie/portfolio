import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/slider/Slider';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';

const Testimony = () => {
  return (
    <StyledTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <FlexWrapper direction={'column'} align={'center'}>
        <Icon id={'html'} width={'50'} height={'50'} />
        <Slider />
      </FlexWrapper>
    </StyledTestimony>
  );
};

export default Testimony;

const StyledTestimony = styled.section`
  min-height: 50vh;
  background-color: #aeb9ff;
`;

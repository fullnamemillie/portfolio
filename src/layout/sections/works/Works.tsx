import styled from 'styled-components';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import { Work } from './work/Work';
import social from '../../../assets/images/proj-1.png';
import timer from '../../../assets/images/proj-2.png';
import { Container } from '../../../components/container/Container';
import TabMenu from './tabMenu/TabMenu';

const workItems: string[] = ['All', 'Landing Page', 'React', 'SPA'];

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={workItems} />
        <FlexWrapper justify={'space-between'} align={'flex-start'}>
          <Work
            src={social}
            title={'Social Network'}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            }
          />
          <Work
            src={timer}
            title={'Timer'}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            }
          />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section``;

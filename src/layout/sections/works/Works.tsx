import styled from 'styled-components';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import Menu from '../../../components/menu/Menu';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import { Work } from './work/Work';
import social from '../../../assets/images/proj-1.png';
import timer from '../../../assets/images/proj-2.png';

const workItems: string[] = ['All', 'Landing Page', 'React', 'SPA'];

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItems={workItems} />
      <FlexWrapper justify={'space-around'}>
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
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #deefff;
`;

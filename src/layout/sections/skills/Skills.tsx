import styled from 'styled-components';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/container/Container';

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap={'wrap'} justify={'space-between'}>
          <Skill
            id={'html'}
            title={'HTML 5'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, fuga?'
            }
          />
          <Skill
            id={'css'}
            title={'CSS 3'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, fuga?'
            }
          />
          <Skill
            id={'js'}
            title={'JS'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, fuga?'
            }
          />
          <Skill
            id={'ts'}
            title={'TS'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, fuga?'
            }
          />
          <Skill
            id={'react'}
            title={'React'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, fuga?'
            }
          />
          <Skill
            id={'redux'}
            title={'Redux'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, fuga?'
            }
          />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;

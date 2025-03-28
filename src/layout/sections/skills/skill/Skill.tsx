import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';

type SkillPropsType = {
  id: string;
  title: string;
  description: string;
};

export const Skill = ({ id, title, description }: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon id={id} width={'50'} height={'50'} />
      <SkillTitle>{title}</SkillTitle>
      <SkillText>{description}</SkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  background-color: #ffffffbb;
  margin: 10px;
  width: 30%;
`;

const SkillTitle = styled.h3``;

const SkillText = styled.p``;

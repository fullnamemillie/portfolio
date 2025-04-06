import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/flexWrapper/FlexWrapper';

type SkillPropsType = {
  id: string;
  title: string;
  description: string;
};

export const Skill = ({ id, title, description }: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper direction={'column'} align={'center'}>
        <IconWrapper>
          <Icon id={id} width={'50'} height={'50'} />
        </IconWrapper>
        <SkillTitle>{title}</SkillTitle>
        <SkillText>{description}</SkillText>
      </FlexWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 380px;
  padding: 62px 20px 40px;
  margin: 10px;
  width: 30%;
`;

export const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.1);

    position: absolute;
    left: 50%;
    top: 50%;
    transform: rotate(45deg) translate(-50%, -50%);
    transform-origin: top left;
  }
`;

const SkillTitle = styled.h3`
  margin: 30px 0 10px;
  text-transform: uppercase;
`;

const SkillText = styled.p`
  text-align: center;
`;

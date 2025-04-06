import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/flexWrapper/FlexWrapper';
import { theme } from '../../styles/Theme';

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={'column'} align={'center'}>
        <Name>Alexey</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon
                id={'instagram'}
                width={'21'}
                height={'21'}
                viewBox={'0 0 21 21'}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                id={'telegram'}
                width={'21'}
                height={'21'}
                viewBox={'0 0 21 21'}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                id={'vk'}
                width={'21'}
                height={'21'}
                viewBox={'0 0 21 21'}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                id={'linkedin'}
                width={'21'}
                height={'21'}
                viewBox={'0 0 21 21'}
              />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>© 2023 Alexey, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`;

const Name = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 3px;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.accent};

  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`;

const Copyright = styled.small`
  font-size: 12px;
  opacity: 0.5;
  text-align: center;
`;

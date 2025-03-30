import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/flexWrapper/FlexWrapper';

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={'column'} align={'center'}>
        <Name>Alexey</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon id={'docker'} width={'35'} height={'35'} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon id={'vscode'} width={'35'} height={'35'} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon id={'redux'} width={'35'} height={'35'} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon id={'git'} width={'35'} height={'35'} />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>© 2023 Alexey, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  min-height: 20vh;
  background-color: #ffd8a5;
`;

const Name = styled.span``;

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;

const Copyright = styled.small``;

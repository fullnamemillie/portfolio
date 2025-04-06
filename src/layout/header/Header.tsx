import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Container } from '../../components/container/Container';
import { FlexWrapper } from '../../components/flexWrapper/FlexWrapper';
import HeaderMenu from './headerMenu/headerMenu';

const headerItems: string[] = [
  'Home',
  'Skills',
  'Work',
  'Testimony',
  'Contact',
];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={'space-between'} align={'center'}>
          <Logo />
          <HeaderMenu menuItems={headerItems} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #d4ffd3;
  background-color: rgba(31, 31, 32, 0.9);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`;

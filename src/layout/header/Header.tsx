import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import Menu from '../../components/menu/Menu';

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
      <Logo />
      <Menu menuItems={headerItems} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #d4ffd3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

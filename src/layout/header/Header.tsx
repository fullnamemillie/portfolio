import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import Menu from '../../components/menu/Menu';
import { Container } from '../../components/container/Container';
import { FlexWrapper } from '../../components/flexWrapper/FlexWrapper';

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
          <Menu menuItems={headerItems} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #d4ffd3;
`;

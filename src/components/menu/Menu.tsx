import styled from 'styled-components';

type MenuProps = {
  menuItems: Array<string>;
};

const Menu = ({ menuItems }: MenuProps) => {
  return (
    <StyledMenu>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href="">{item}</a>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
};

export default Menu;

const StyledMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
`;

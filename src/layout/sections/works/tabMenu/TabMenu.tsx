import styled from 'styled-components';
import { Link } from '../../../../components/link/Link';

type TabMenuProps = {
  menuItems: Array<string>;
};

const TabMenu = ({ menuItems }: TabMenuProps) => {
  return (
    <StyledTabMenu>
      <ul>
        {menuItems.map((item, index) => (
          <ListItem key={index}>
            <Link href="/">{item}</Link>
          </ListItem>
        ))}
      </ul>
    </StyledTabMenu>
  );
};

export default TabMenu;

const StyledTabMenu = styled.nav`
  margin-bottom: 40px;

  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;

const ListItem = styled.li``;

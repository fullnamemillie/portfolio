import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

type MenuProps = {
  menuItems: Array<string>;
};

const HeaderMenu = ({ menuItems }: MenuProps) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {menuItems.map((item, index) => (
          <ListItem key={index}>
            <Link href="/">
              {item}
              <Mask>
                <span>{item}</span>
              </Mask>
              <Mask>
                <span>{item}</span>
              </Mask>
            </Link>
          </ListItem>
        ))}
      </ul>
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
`;

const Link = styled.a`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  font-size: 30px;
  text-align: center;

  color: transparent;
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  /* outline: 1px solid red; */
  color: ${theme.colors.accent};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const ListItem = styled.li`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
  }

  &:hover {
    & {
      &::before {
        transform: scale(1);
      }
    }

    ${Mask} {
      transform: skewx(12deg) translateX(5px);
      color: ${theme.colors.font};

      & + ${Mask} {
        transform: skew(12px) translate(5px);
      }
    }
  }
`;

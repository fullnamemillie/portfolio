import styled from 'styled-components';
import { Link } from '../../../../components/link/Link';
import { theme } from '../../../../styles/Theme';
import { Button } from '../../../../components/button/Button';

type WorkProps = {
  src: string;
  title: string;
  text: string;
};

export const Work = ({ src, title, text }: WorkProps) => {
  return (
    <StyledWork>
      <ImageWrapper>
        <Image src={src} alt={src} />
        <Button>View Project</Button>
      </ImageWrapper>
      <Description>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Link>demo</Link>
        <Link>code</Link>
      </Description>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBg};
  max-width: 540px;
  width: 100%;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    ${Button} {
      display: block;
    }

    &::before {
      content: '';
      height: 260px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;

      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(42px);
    }
  }

  ${Button} {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &::before {
      width: 100%;
      height: 100%;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const Description = styled.div`
  padding: 25px 20px;
`;

const Title = styled.h3``;

const Text = styled.p`
  margin: 14px 0 10px;
`;

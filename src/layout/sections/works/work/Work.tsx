import styled from 'styled-components';

type WorkProps = {
  src: string;
  title: string;
  text: string;
};

export const Work = ({ src, title, text }: WorkProps) => {
  return (
    <StyledWork>
      <Image src={src} alt={src} />
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Link>demo</Link>
      <Link>code</Link>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: #ffe869;
  max-width: 540px;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const Title = styled.h3``;

const Text = styled.p``;

const Link = styled.a``;

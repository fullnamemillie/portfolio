import styled from 'styled-components';

type FlexWrapperProps = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
};

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  flex-wrap: ${({ wrap }) => wrap || 'no-wrap'};
  height: 100%;
`;

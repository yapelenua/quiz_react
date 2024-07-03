import { styled } from "styled-components";

interface SubWrapperProps {
  direction?: string;
}

export const SubWrapper = styled.div<SubWrapperProps>`
  width:100%;
  display:flex;
  flex-direction: ${props => props.direction || 'column'};
  align-items:center;
  justify-content:center;
  gap: 20px;
`;
import styled from "styled-components";

interface QuizWrapperProps {
  active?: boolean;
  width?: string;
  height?: string;
  direction?: string;
  position?: string;
}

export const QuizWrapper = styled.div<QuizWrapperProps>`
  display: flex;
  align-items: center;
  max-width: 320px;
  flex-direction: ${props => props.direction || 'row'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '50px'};
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  background-color: rgb(80, 62, 107);
  cursor: pointer;
  border: 2px solid transparent; 
  justify-content:${props => props.position || 'space-between'};;
  ${({ active }) =>
    active &&
    `
    border-color: rgb(204, 51, 255);
  `}
`;

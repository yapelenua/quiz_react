import styled from "styled-components";

interface BubbleQuizProps {
  active?: boolean;
}

export const BubbleQuiz = styled.div<BubbleQuizProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgb(80, 62, 107);
  cursor: pointer;
  border: 2px solid transparent;
  ${({ active }) =>
    active &&
    `
    border-color: rgb(204, 51, 255);
  `}
  color: white;
  font-size: 16px;
  text-align: center;
  margin: auto;
`;
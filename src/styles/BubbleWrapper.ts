import styled from "styled-components";

export const BubbleWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-items: center;

  & > :nth-child(1) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  & > :nth-child(2) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  & > :nth-child(3) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }

  & > :nth-child(4) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }

  & > :nth-child(5) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  & > :nth-child(6) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }

  & > :nth-child(7) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }

`;

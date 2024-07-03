// StyledCheckbox.ts
import styled from "styled-components";

export const StyledCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCheckbox = styled.input`
  margin-left: 10px;
  width: 20px;
  height: 20px;
  accent-color: rgb(204, 51, 255); // Customize the checkbox color

  &:checked {
    background-color: rgb(204, 51, 255); // Customize the checked background color
  }
`;

import styled from "styled-components";

export const Button = styled.button`
  min-width: 220px;
  background: black;
  color: white;
  outline: none;
  border-radius: 5px;
  height: 44px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: white;
    color: black;
    border: 1px solid black;
  }
`;

export const OutLineButton = styled(Button)`
  background: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background: black;
    color: white;
    border: 1px solid transparent;
  }
`;
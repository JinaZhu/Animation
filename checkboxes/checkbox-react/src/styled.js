import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0;
  margin: 0;
`;

export const CheckboxStyle = styled.input`
  height: 20px;
  width: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border: 1px solid gray;
  border-radius: 4px;
  outline: none;
  transition-duration: 0.3s;
  cursor: pointer;

  &:before {
    content: "\2713";
    display: block;
    text-align: center;
    color: #41b883;
    position: absolute;
    left: 0.7rem;
    top: 0.2rem;
  }
`;

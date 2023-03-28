import styled from '@emotion/styled';

export const Label = styled.label`
  font-size: 22px;
  margin-right: 22px;
`;

export const Input = styled.input`
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%);
  transition: all 0.3s ease;

  font-size: 16px;
  padding: 8px;
  border: 1px solid #0062cc;
  width: 200px;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

import styled from '@emotion/styled';

export const Form = styled.form`
  border: 3px solid black;
  border-radius: 5px;
  padding: 16px;
  max-width: 60vh;
  margin-bottom: 24px;
`;

export const InputContainers = styled.div`
  gap: 16px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  margin-bottom: 24px;
`;

export const LabelStyled = styled.label`
  font-size: 24px;
`;

export const InputStyled = styled.input`
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%);
  transition: box-shadow 0.3s ease;

  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  width: 200px;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  background-color: #0080ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover,
  &:focus {
    background-color: #0022cc;
  }
`;

import styled from '@emotion/styled';

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 75vh;
`;

export const Li = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  gap: 64px;

  margin: 10px 0;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const Span = styled.span`
  font-size: 18px;
`;
export const DeleteButton = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover,
  &:focus {
    background-color: #c82333;
  }
`;

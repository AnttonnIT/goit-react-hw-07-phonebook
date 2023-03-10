import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 350px;
  padding: 30px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  gap: 5px;
  & input {
    width: 300px;
    padding: 5px 3px;
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.1);
  }
`;
export const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  border: 1px solid black;
  background-color: #2c3e50;
  color: #ffffff;
  padding: 10px 20px;
  &:hover {
    background-color: #34495e;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }

  :active {
    background-color: #5f5ffc;
  }
`;

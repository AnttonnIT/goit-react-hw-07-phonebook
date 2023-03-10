import styled from '@emotion/styled';

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

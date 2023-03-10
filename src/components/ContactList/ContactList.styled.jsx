import styled from '@emotion/styled';

export const List = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 350px;
  padding: 30px 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  & li {
    display: flex;
    justify-content: space-between;
  }
`;
export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  color: #ffffff;
  border: 1px solid black;
  margin-left: 5px;
  padding: 3px 10px;
  background-color: #2c3e50;
  :active {
    background-color: #5f5ffc;
  }
  &:hover {
    background-color: #34495e;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  }

  :active {
    background-color: #5f5ffc;
  }
`;
export const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

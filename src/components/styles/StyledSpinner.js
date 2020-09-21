import styled from 'styled-components';

export const StyledSpinner = styled.div`
  margin: 20px auto;
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3; 
  border-top: 5px solid #16d47b;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

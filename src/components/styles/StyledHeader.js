import styled from 'styled-components';

export const StyledHeader = styled.div`
  padding: 0 20px;
  height: 80px;
  background: #1c1c1c;

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    min-height: 80px;
    margin: 0 auto;

    @media (max-width: 500px) {
      height: 50px;
    }
  }
`;

export const StyledRMDBLogo = styled.img`
  width: 200px;

  @media (max-width: 500px) {
    width: 150px;
    margin-top: 5px;
  }
`;

export const StyledTMDBLogo = styled.img`
  width: 120px;

  @media (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }
`;

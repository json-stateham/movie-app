import styled from 'styled-components';

export const StyledActor = styled.div`
  padding: 2px;
  text-align: center;
  font-family: 'Abel', sans-serif;
  color: #fff;
  background: #1c1c1c;
  border-radius: 20px;

  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
  }

  .actor-name {
    display: block;
    margin: 10px 0 0 0;
    font-size: 18px;
  }

  .actor-character {
    display: block;
    margin: 0 0 10px 0;
    font-size: 16px;
  }
`;

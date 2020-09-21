import styled from 'styled-components';

export const StyledHeroImage = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background: ${props =>
    `linear-gradient(
      to bottom, rgba(0,0,0,0)
      39%,rgba(0,0,0,0)
      41%,rgba(0,0,0,0.65)
      100%
    ),
    url('${props.image}'), #1c1c1c`};
  background-size: 100%, cover !important;
  background-position: center, center !important;
  animation: animateHeroimage 1s;

  .heroimage-content {
    margin: 0 auto;
    padding: 20px;
    max-width: 1280px;
  }

  .heroimage-text {
    position: absolute;
    bottom: 40px;
    z-index: 100;
    margin-right: 20px;
    max-width: 700px;
    min-height: 100px;
    color: #fff;
    background: rgba(0, 0, 0, 0);

    h1 {
      font-family: 'Abel', sans-serif;
      font-size: 48px;
      color: #fff;

      @media screen and (max-width: 720px) {
        font-size: 38px;
        color: #fff;
      }
    }

    p {
      font-family: 'Abel', sans-serif;
      font-size: 22px;
      line-height: 26px;
      color: #fff;

      @media screen and (max-width: 720px) {
        font-size: 16px;
        line-height: 20px;
        color: #fff;
      }
    }

    @media screen and (max-width: 720px) {
      max-width: 100%;
    }
  }

  @keyframes animateHeroimage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

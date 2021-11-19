import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: whitesmoke;
  border: 2px solid #ccc;
  box-shadow: -3px -1px 15px -1px rgba(0, 0, 0, 0.77);
  width: 100%;
  display: flex;
  flex-flow: column;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;

  figure {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    img {
      width: 80px;
      height: unset;
      border-radius: 5px;
      border: 5px solid transparent;
    }
    .animated {
      background-image: linear-gradient(white, white),
        linear-gradient(180deg, cornflowerblue, purple 50%, cornflowerblue);
      background-repeat: no-repeat;
      background-size: 100% 100%, 100% 200%;
      background-position: 0 0, 0 100%;
      background-origin: padding-box, border-box;
      animation: highlight 1.2s infinite alternate;
    }

    @keyframes highlight {
      100% {
        background-position: 0 0, 0 0;
      }
    }
  }

  .repoInfo {
    padding: 10px;

    h3 {
      margin-bottom: 10px;
    }
  }

  span {
    a {
      .anchor {
        width: 28px;
        height: 28px;
      }
    }
  }

  @media only screen and (min-width: 480px) {
    flex-flow: row;
    justify-content: space-between;

    figure {
      img {
        width: 120px;
      }
    }

    .repoInfo {
      width: 100%;
      text-align: start;
      padding: 15px;
    }

    span {
      display: flex;

      a {
        align-self: center;

        .anchor {
          width: 30px;
          height: 30px;
        }
      }
    }
  }

  @media only screen and (min-width: 899px) {
    max-width: 900px;
    figure {
      img {
        width: 120px;
      }
    }

    .repoInfo {
      width: 100%;
      text-align: start;
      padding: 15px;
    }

    span {
      display: flex;

      a {
        align-self: center;

        .anchor {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`;

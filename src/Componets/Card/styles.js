import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: gray;
  width: 100%;
  display: flex;
  flex-flow: column;
  padding: 10px;
  margin: 20px 0;

  figure {
    background-color: yellow;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    img {
      width: 80px;
      height: unset;
      border-radius: 50%;
      border: 2px solid #ccc;
    }
  }

  .repoInfo {
    background-color: lightblue;
    padding: 10px;

    h3 {
      background-color: white;
      margin-bottom: 10px;
    }

    p {
      color: gray;
    }
  }

  span {
    background-color: red;

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
`;

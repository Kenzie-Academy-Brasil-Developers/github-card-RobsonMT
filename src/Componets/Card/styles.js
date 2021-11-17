import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: gray;
  display: flex;
  flex-flow: column;
  padding: 10px;
  margin: 20px 0;

  figure {
    background-color: yellow;
    width: inherit;
    display: flex;
    justify-content: space-between;

    figcaption {
      background-color: green;
      width: 100%;
      display: inline-flex;
      justify-content: space-between;
      align-self: center;
      margin-left: 10px;
      text-align: start;

      a {
        align-self: center;
        margin-right: 5px;

        .anchor {
          width: 25px;
          height: 25px;
        }
      }
    }
  }

  img {
    width: 80px;
    height: unset;
    border-radius: 50%;
  }

  div {
    background-color: lightblue;
    padding: 10px;
  }
`;

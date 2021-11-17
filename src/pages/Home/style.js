import styled from "styled-components";

export const HomeContainer = styled.div`
  display: inline-flex;
  flex-flow: column;

  h2 {
    text-shadow: 3px 2px #ccc;
    font-size: 30px;
  }

  li {
    list-style-type: none;
    margin: 8px 0;
    border: 2px solid;
    border-radius: 5px;
    padding: 8px;

    a {
      display: flex;
      align-items: flex-end;

      .signIn,
      .signUp {
        height: 35px;
        width: 35px;
        align-self: baseline;
        margin: 0 10px;
      }

      &:hover {
        text-decoration: none;
      }
    }
  }
`;

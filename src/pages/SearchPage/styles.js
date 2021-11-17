import styled from "styled-components";

export const SearchPageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  border: 2px solid;
  padding: 10px;

  header {
    display: inline-flex;

    h2 {
      text-shadow: 4px 3px 3px #ccc;
    }

    .logo {
      align-self: center;
      margin-left: 10px;
      width: 25px;
      height: 25px;
    }
  }

  input {
    padding: 8px;
  }

  @media only screen and (min-width: 900px) {
  }
`;

export const FormContainer = styled.form`
  border: 2px solid;
  padding: 10px;
  margin: 0px 0 30px 0;

  input {
    padding: 8px;
  }

  @media only screen and (min-width: 900px) {
  }
`;

export const CardsContainer = styled.form`
  background-color: red;
  border: 2px solid;
  padding: 10px;

  @media only screen and (min-width: 900px) {
  }
`;

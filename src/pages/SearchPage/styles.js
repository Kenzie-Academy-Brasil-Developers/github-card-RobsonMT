import styled from "styled-components";

export const SearchPageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
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
    padding: 10px;
  }
`;

export const FormContainer = styled.form`
  padding: 10px;
  margin: 0px 0 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  input {
    padding: 8px;
  }

  input[type="search"] {
    flex: 3;
    max-width: 580px;
  }

  input[type="button"] {
    flex: 1;
    max-width: 120px;

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }

  @media only screen and (min-width: 480px) {
    padding: 10px 20px;
  }
  @media only screen and (min-width: 720px) {
    padding: 10px 40px;
  }
  @media only screen and (min-width: 720px) {
    padding: 10px 60px;
  }
`;

export const CardsContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 480px) {
    padding: 10px 20px;
  }
  @media only screen and (min-width: 720px) {
    padding: 20px 40px;
  }
  @media only screen and (min-width: 720px) {
    padding: 20px 60px;
  }
`;

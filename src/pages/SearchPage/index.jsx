import { SearchPageContainer, FormContainer, CardsContainer } from "./styles";
import { useState } from "react";
import api from "../../services";
import Card from "../../Componets/Card";
import Notify from "../../Componets/Notify";
import { GoMarkGithub } from "react-icons/go";

const SearchPage = () => {
  const [listResult, setListResult] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState("");

  const request = (inputValue) => {
    api
      .get(`/${inputValue}`)
      .then((response) => {
        setListResult([...listResult, response.data]);
        setInputValue("");
      })
      .catch((err) => {
        console.log(err);
        setStatus("Erro na busca do repositório");
      });
  };

  return (
    <SearchPageContainer>
      <header>
        <h2>Github card</h2>
        <GoMarkGithub className="logo" />
      </header>

      <FormContainer>
        <input
          type="search"
          value={inputValue}
          placeholder="procure por um repositorio"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <input
          type="button"
          value="search"
          onClick={() => request(inputValue)}
        />
      </FormContainer>

      {status && <Notify status={status} setStatus={setStatus} />}

      <CardsContainer>
        {listResult.map((result) => (
          <Card key={result.id} result={result} />
        ))}
      </CardsContainer>
    </SearchPageContainer>
  );
};

export default SearchPage;

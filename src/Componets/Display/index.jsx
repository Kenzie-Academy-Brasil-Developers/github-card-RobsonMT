import { DisplayContainer } from "./styles";

const Display = ({ status, setStatus }) => {
  return (
    <DisplayContainer>
      <p style={{ color: status === "requisição concluida" ? "gray" : "red" }}>
        {status}
      </p>
      {setTimeout(() => setStatus(""), 3000)}
    </DisplayContainer>
  );
};

export default Display;

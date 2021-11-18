import { useEffect } from "react";
import { NotifyContainer } from "./styles";

const Notify = ({ status, setStatus }) => {
  useEffect(() => {
    setTimeout(() => setStatus(""), 3000);
  });

  return (
    <NotifyContainer>
      <p>{status}</p>
    </NotifyContainer>
  );
};

export default Notify;

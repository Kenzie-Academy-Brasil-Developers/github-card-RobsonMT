import { toast } from "react-toastify";

const ShowAlert = (status) => {
  switch (status) {
    case "signUp":
      toast.success("Usuario Cadastrado com sucesso!");
      break;
    case "signIn":
      toast.success("Requisição concluida com sucesso!");
      break;
    case "error":
      toast.error("Usuario não encontrado!");
      break;
    default:
      return false;
  }
};

export default ShowAlert;

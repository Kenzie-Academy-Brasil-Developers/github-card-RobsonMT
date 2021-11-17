import GlobalStyle from "./assets/styles/global";
import { AppContainer } from "./styles";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <AppContainer>
        <Routes />
        <GlobalStyle />
      </AppContainer>
    </>
  );
};

export default App;

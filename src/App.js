import GlobalStyle from "./assets/styles/global";
import { AppContainer } from "./styles";
import Routes from "./routes";

const App = () => {
  return (
    <AppContainer>
      <Routes />
      <GlobalStyle />
    </AppContainer>
  );
};

export default App;

import { Link } from "react-router-dom";
import { HomeContainer } from "./style";
import MotionContainer from "../../Componets/MotionContainer/index";

const Home = () => {
  return (
    <MotionContainer>
      <HomeContainer>
        <h2>Home</h2>
        <ul>
          <li>
            <Link to="/SearchPage"></Link>
          </li>
        </ul>
      </HomeContainer>
    </MotionContainer>
  );
};

export default Home;

import { Link } from "react-router-dom";
import { CardContainer } from "./styles";
import { BiLink } from "react-icons/bi";
// import { BsChevronCompactRight } from "react-icons/bs";

const Card = ({ key, result }) => {
  return (
    <CardContainer key={key}>
      <figure>
        <img
          src={result.organization.avatar_url}
          alt={result.organization.login}
        />
      </figure>
      <div className="repoInfo">
        <h3>{result.full_name}</h3>
        <p>{result.description}</p>
      </div>
      <span>
        <Link to={{ pathname: result.html_url }} target="_blank">
          <BiLink className="anchor" />
        </Link>
      </span>
    </CardContainer>
  );
};

export default Card;

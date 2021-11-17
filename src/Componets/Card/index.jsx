import { Link } from "react-router-dom";
import { CardContainer } from "./styles";
import { BiLink } from "react-icons/bi";

const Card = ({ key, result }) => {
  return (
    <CardContainer key={key}>
      <figure>
        <img
          src={result.organization.avatar_url}
          alt={result.organization.login}
        />
        <figcaption>
          <h3>{result.full_name}</h3>
          <Link to={{ pathname: result.html_url }} target="_blank">
            <BiLink className="anchor" />
          </Link>
        </figcaption>
      </figure>
      <div>
        <p>{result.description}</p>
      </div>
    </CardContainer>
  );
};

export default Card;

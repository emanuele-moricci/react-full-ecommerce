import ErrorImg from "src/assets/img/error.png";
import * as Styled from "./error.styles";

interface IErrorPageProps {
  statusCode?: number;
  error?: Error;
}

const Error = ({ error, statusCode }: IErrorPageProps): JSX.Element => {
  if (error) console.error(error);

  let msg;
  switch (statusCode) {
    case 404:
      msg = "Seems like you got lost...";
      break;
    case 500:
      msg = "Internal server error";
      break;
    default:
      msg = "Oops, looks like something went wrong...";
  }

  return (
    <Styled.ErrorImageOverlay>
      <Styled.ErrorImageContainer imageUrl={ErrorImg} />
      <Styled.ErrorImageText>{msg}</Styled.ErrorImageText>
    </Styled.ErrorImageOverlay>
  );
};

export default Error;

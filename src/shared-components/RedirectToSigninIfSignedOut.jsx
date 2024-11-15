import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SessionContext from "context/SessionContext";

const RedirectToSignInIfSignedOut = props => {
  const { children } = props;
  const { userName } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    !userName && navigate("/");
  }, [userName, navigate]);
  return children;
};

export default RedirectToSignInIfSignedOut;

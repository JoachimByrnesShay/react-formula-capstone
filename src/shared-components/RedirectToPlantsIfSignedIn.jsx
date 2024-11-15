import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SessionContext from "context/SessionContext";

const RedirectToPlantsIfSignedIn = props => {
  const { children } = props;
  const { userName } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    userName && navigate("/plants");
  }, [userName, navigate]);
  return <>{children}</>;
};

export default RedirectToPlantsIfSignedIn;

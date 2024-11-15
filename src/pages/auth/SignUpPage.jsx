import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";
import * as userServices from "services/user.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import SessionContext from "context/SessionContext";
import RedirectToPlantsIfSignedIn from "shared-components/RedirectToPlantsIfSignedIn";
const SignUpPage = props => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const contextValue = useContext(SessionContext);
  console.log("it is here: ", contextValue.dog);

  return (
    <RedirectToPlantsIfSignedIn>
      <FormContainer>
        {error && <div className="text-red-800">{error}</div>}
        {success && <div className="text-green-800">user created</div>}
        <AuthForm
          fields={[
            { label: "username", type: "text" },
            { label: "password", type: "password" },
            { label: "confirm password", type: "password" },
          ]}
          submitButtonLabel="create an account"
          handleSubmit={async values => {
            setSuccess(false);
            setError("");
            console.log("submitting this form with: ", values);
            if (values.username.trim().length < 4) {
              setError("name must be 4+ chars");
              return;
            }
            if (values.password.trim().length < 7) {
              setError("password must be 7+ chars");
              return;
            }
            if (values.password.trim() !== values["confirm password"].trim()) {
              setError("passwords do not match");
              return;
            }
            const response = await userServices.createUser({
              username: values.username.trim(),
              password: values.password.trim(),
            });
            if (response.status === 201) {
              setSuccess(true);
              setError("");
              navigate("/", { state: { newAccount: true } });
            } else {
              const data = await response.json();
              setError(data.error);
            }

            console.log(response.status);
          }}
        />
        <Link
          className="mt-4 underline text-green-700 text-lg"
          to="/"
        >
          sign in
        </Link>
      </FormContainer>
    </RedirectToPlantsIfSignedIn>
  );
};

export default SignUpPage;

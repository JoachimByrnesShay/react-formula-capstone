import { useState, useContext } from "react";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link, useLocation } from "react-router-dom";
import * as userServices from "services/user";
import SessionContext from "context/SessionContext";
import RedirectToPlantsIfSignedIn from "shared-components/RedirectToPlantsIfSignedIn";

const SignInPage = props => {
  window.history.replaceState({}, "");
  const [error, setError] = useState("");
  const location = useLocation();
  const { signIn, signOut, sessionToken } = useContext(SessionContext);
  // console.log(location.state)
  console.log("sessiontoken is now: ", sessionToken);
  return (
    <RedirectToPlantsIfSignedIn>
      <FormContainer>
        {location.state?.newAccount && (
          <div className="bg-green-200 text-green-700 py-2 px-4 rounded-lg border border-green-700">
            Account created successfully. Please log in.
          </div>
        )}
        {error && <div className="text-red-700">{error}</div>}
        <AuthForm
          fields={[
            { label: "username", type: "text" },
            { label: "password", type: "password" },
          ]}
          submitButtonLabel="sign in"
          handleSubmit={async values => {
            console.log(values);
            const response = await userServices.createSession({
              username: values.username,
              password: values.password,
            });
            console.log(response.status);
            const data = await response.json();
            if (response.status === 201) {
              setError("");
              const capstone_session_token = data.capstone_session_token;

              console.log("signin is this: ", signIn);
              signIn(capstone_session_token);
            } else {
              console.log(data.error);
              setError(data.error);
            }
          }}
        />
        <Link
          className="mt-6 underline text-green-700 text-lg"
          to="/sign-up"
        >
          create an account
        </Link>
      </FormContainer>
    </RedirectToPlantsIfSignedIn>
  );
};

export default SignInPage;

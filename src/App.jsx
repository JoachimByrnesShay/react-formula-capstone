import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollToTop from "shared-components/ScrollToTop";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import PlantListPage from "./pages/PlantListPage";
import PlantShowPage from "./pages/PlantShowPage";
import apiFetch from "./services/apiFetch";
import SessionContext from "context/SessionContext";
import * as userServices from "services/user";
import { jwtDecode } from "jwt-decode";

// const response = await apiFetch("GET", "/api-key/info");

// console.log(response.status);

function App() {
  const [sessionToken, setSessionToken] = useState(() => userServices.getSessionTokenStorage());
  const userName = sessionToken ? jwtDecode(sessionToken)?.username : null;
  console.log("decoded is: ", userName);
  useEffect(() => {
    const fetchHelper = async function () {
      const response = await apiFetch("GET", "/api-key/info");
      console.log(response.status);
    };
    fetchHelper();
  }, []);
  return (
    <SessionContext.Provider
      value={{
        signOut: () => {
          setSessionToken(null);
          userServices.removeSessionTokenStorage();
        },
        signIn: sessionToken => {
          setSessionToken(sessionToken);
          userServices.setSessionTokenStorage(sessionToken);
        },
        sessionToken: sessionToken, //just to take a look
        userName: userName,
      }}
    >
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={<SignInPage />}
          />
          <Route
            path="/sign-up"
            element={<SignUpPage />}
          />
          <Route
            path="/plants"
            element={<PlantListPage />}
          />
          <Route
            path="/plants/:plantId"
            element={<PlantShowPage />}
          />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  );
}

export default App;

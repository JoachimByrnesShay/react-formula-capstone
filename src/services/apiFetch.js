const { VITE_API_BASE_URL, VITE_API_KEY } = import.meta.env;
import * as userService from "services/user";

const apiFetch = (method, path, body = null) => {
  const options = {
    method,
    credentials: "include",
    mode: "cors",

    headers: {
      Authorization: "Bearer " + VITE_API_KEY,
      "Content-Type": "application/json",
    },
  };

  const sessionToken = userService.getSessionTokenStorage();
  if (sessionToken) {
    options.headers["Capstone-Session"] = sessionToken;
  }

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(VITE_API_BASE_URL + path, options);
};

export default apiFetch;

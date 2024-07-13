import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const App = () => {
  const [cookies, setCookies] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/check-cookies", { withCredentials: true })
      .then((response) => {
        setCookies(response.data);
      })
      .catch((error) => {
        console.error("There was an error making the request!", error);
      });
  }, []);

  const setFrontEndCookie = () => {
    Cookies.set("frontEndCookie", "frontEndValue", { expires: 7 });
    alert("Cookie has been set!");
  };

  const checkCookies = () => {
    axios
      .get("http://localhost:5000/check-cookies", { withCredentials: true })
      .then((response) => {
        setCookies(response.data);
      })
      .catch((error) => {
        console.error("There was an error making the request!", error);
      });
  };

  return (
    <div className="App">
      <h1>Check Cookies</h1>
      <button onClick={setFrontEndCookie}>Set Front End Cookie</button>
      <button onClick={checkCookies}>Check Cookies</button>
      <pre>{cookies && JSON.stringify(cookies, null, 2)}</pre>
    </div>
  );
};

export default App;

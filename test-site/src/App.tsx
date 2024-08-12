import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const App = () => {
  const [cookies, setCookies] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    const doCookies = async () => {
      await axios.get("http://localhost:5000/set-cookie", {
        withCredentials: true,
      });
      const response = await axios.get("http://localhost:5000/check-cookies", {
        withCredentials: true,
      });
      setCookies(response.data);
    };
    doCookies();
  }, []);

  const setFrontEndCookie = () => {
    Cookies.set("frontEndCookie", "frontEndValue", { expires: 7 });
    alert("Cookie has been set!");
  };

  const checkCookies = async () => {
    const response = await axios.get("http://localhost:5000/check-cookies", {
      withCredentials: true,
    });
    setCookies(response.data);
  };

  return (
    <div className="App">
      <h1>Check Cookies</h1>
      <button onClick={setFrontEndCookie}>Set Front End Cookie</button>
      <button onClick={checkCookies}>Check Cookies</button>
      {cookies === null ? (
        <p>Loading cookies...</p>
      ) : (
        <pre>{JSON.stringify(cookies, null, 2)}</pre>
      )}
    </div>
  );
};

export default App;

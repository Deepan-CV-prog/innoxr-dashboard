import Login from "./components/Login";
import DeviceDashboard from "./components/DeviceDashboard";
import AnalyticsDashboard from "./components/AnalyticsDashboard";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAnalytics, setShowAnalytics] = useState(false);

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Please enter email and password");
      return;
    }

    setLoggedIn(true);
  };
  if (loggedIn && showAnalytics) {
    return (
      <AnalyticsDashboard
        setShowAnalytics={setShowAnalytics}
      />
    );
  }
  if (loggedIn && !showAnalytics) {
    return (
      <DeviceDashboard
        setShowAnalytics={setShowAnalytics}
      />
    );
  }

  return (
    <Login
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      handleLogin={handleLogin}
    />
  );
}

export default App;
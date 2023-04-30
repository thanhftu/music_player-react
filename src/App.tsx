import { Route, Routes } from "react-router-dom";
import Library from "./components/library/Library";
import SideBar from "./components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import Login from "./components/auth/Login";
import { setClientToken } from "./spotify";
import Player from "./components/player/Player";

function App() {
  const [token, setToken] = useState<string | null>("");
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);
  return !token ? (
    <Login />
  ) : (
    <div className="h-[100vh] w-[100vw] bg-tct_cybian-200 border rounded-3xl flex flex-row">
      <SideBar />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/library" element={<Library />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;

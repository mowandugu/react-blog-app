import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const currentUser = false;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/post/:postId" element={<Single />}></Route>
      </Routes>
      {currentUser ? (
        <Routes>
          <Route path="/register" element={<Homepage />}></Route>
          <Route path="/login" element={<Homepage />}></Route>
          <Route path="/write" element={<Write />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/write" element={<Login />}></Route>
        </Routes>
      )}
    </Router>
  );
}

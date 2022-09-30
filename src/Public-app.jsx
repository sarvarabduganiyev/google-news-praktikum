import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PublicHome from "./pages/PublicHome";

function PublicApp() {
  return (
    <Routes>
      <Route path="/" element={<PublicHome />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default PublicApp;

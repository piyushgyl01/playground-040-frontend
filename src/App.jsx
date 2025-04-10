import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Post from "./pages/Post";
import Update from "./pages/Update";

import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route element={<ProtectedRoute />}> */}
            <Route path="/post" element={<Post />} />
            <Route path="/update/:id" element={<Update />} />
          {/* </Route> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

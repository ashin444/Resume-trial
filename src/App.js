import Home from "./components/home/Home";
import Header from "./components/header/Header";
import SignUp from "./components/signup/Signup";
import Login from "./components/login/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderItems from "./components/header/HeaderItems";
function App() {
  return (
    <Router>
      <Header />
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/nav-menu" element={<HeaderItems />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
    </Router >
  );
}

export default App;
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import SignUp from "./components/signup/Signup";
import Login from "./components/login/Login";
import Checkout from "./components/form/Checkout";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<Checkout />} />
        </Routes>
      </>
    </Router >
  );
}


export default App;

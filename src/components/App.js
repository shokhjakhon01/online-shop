import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./index";
import { Main, Footer, Products, Login, Register } from "./index";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={<Main />}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
        <Route
          path="/products"
          element={<Products loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/login"
          element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/register"
          element={<Register loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

import React from "react";
// import RouteButton from "./components/buttons/ColorButton";
// import CounterButton from "./components/buttons/CounterButton";
// import { UpDownButton } from "./components/buttons/UpDownButton";
// import { TextField } from "./components/forms/TextField";
// import { Header } from "./components/header/Header";
import { Navbar2 } from "./components2/Navbar2";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home2 } from "./pages2/Home2";
import { Services2 } from "./pages2/Services2";
import { Products2 } from "./pages2/Products2";
import { SignUp2 } from "./pages2/SignUp2";

const App: React.FC = () => {
  return (
    // <>
    //   <Header />
    //   <div className="App">
    //     <h1>Color Changing Button Example</h1>
    //     <RouteButton text="hello, click here" />
    //     <h2>Counter Button</h2>
    //     <CounterButton initNumber={5} />
    //     <UpDownButton />
    //     <TextField />
    //   </div>
    // </>
    <Router>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/service" element={<Services2 />} />
        <Route path="/products" element={<Products2 />} />
        <Route path="/sign-up" element={<SignUp2 />} />
      </Routes>
    </Router>
  );
};

export default App;

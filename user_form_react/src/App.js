import "./App.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { Route, Routes } from "react-router-dom";
import AllUsers from "./components/AllUsers";
import NewUser from "./components/NewUser";
import Success from "./components/Success";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllUsers />}></Route>
        <Route path="/newUser" element={<NewUser />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </>
  );
}

export default App;

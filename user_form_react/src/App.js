import "./App.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { Route, Routes } from "react-router-dom";
import AllUsers from "./components/AllUsers";
import NewUser from "./components/NewUser";
import Success from "./components/Success";
import UpdateUser from "./components/UpdateUser";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<AllUsers />}></Route>
        <Route path="/newUser" element={<NewUser />}></Route>
        <Route path="/updateUser" element={<UpdateUser />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Outlet />
    </AuthProvider>
  );
}

export default App;

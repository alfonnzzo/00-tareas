import './App.css';
import { useState } from "react";
import { Login } from "./components/Login";
import { Register } from "./components/Register";


export const App = () => {
  const [user, setUser] = useState("");

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser("");
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {!user ? (
          <>
            <div className="col-md-6">
              <Register />
            </div>
            <div className="col-md-6">
              <Login onLogin={handleLogin} />
            </div>
          </>
        ) : (
          // Mostrar mensaje de bienvenida y botón logout
          <div className="text-center">
            <h2>¡Hola de nuevo {user}!</h2>
            <button
              className="btn btn-primary mt-3"
              type="button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

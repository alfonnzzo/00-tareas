import { useForm } from "../hooks/useForm";

export const Login = ({ onLogin }) => {
  const { formState, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });

  const { username, password } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert("Por favor, complete ambos campos.");
      return;
    }

    onLogin(username);
    console.log("Datos del formulario:", formState);
    handleReset();
  };

  return (
    <div className="col-md-6">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="username1" className="col-sm-2 col-form-label mx-1">
            Username
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="username1"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Ingrese su usuario"
              autoComplete="username"
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="password1" className="col-sm-2 col-form-label mx-1">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="password1"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Ingrese su contraseña"
              autoComplete="current-password"
            />
          </div>
        </div>

        <div className="d-flex justify-content-start">
          <button type="submit" className="btn btn-primary mx-2">
            Sign in
          </button>
          <button type="button" className="btn btn-secondary mx-2" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

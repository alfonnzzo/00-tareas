import { useForm } from "../hooks/useForm";

export const Register = () => {
    const { formState, handleChange, handleReset } = useForm({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
    });
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(formState);
        handleReset;
    };
    return (
    <>
      <div className="col-md-6">
        <form className="py-2" onSubmit={(e) => handleRegister(e)}>
          <div className="row mb-3">
            <label htmlFor="email" className="mx-1 col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="password" className="mx-1 col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="firstName" className="mx-1 col-sm-2 col-form-label">
              FirstName
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="lastName" className="mx-1 col-sm-2 col-form-label">
              LastName
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="lastName"
                id="lastName"
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </form>
      </div>
    </>
  );
};
import React, { useEffect } from "react";
import "./login.css";
import logo from "../../images/logo.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import validationSchema from "./validationSchema";
import { useLogin } from "../../hooks/useLogin";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function Login() {
  const navigate = useNavigate();

  const {
    sendAccessToken,
    setEmail,
    email,
    setSenha,
    isError,
    isPending,
    isSuccess,
    error,
  } = useLogin();

  const formik = useFormik({
    initialValues: { email: "", senha: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Enviar os dados de login
      sendAccessToken(values);
    },
  });

  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      navigate("/dashboard");
    }
  }, [token]);

  useEffect(() => {
    if (isError && error) {
      // Suponha que 'error' contenha informações sobre o campo que falhou
      // Exemplo: { field: "senha", message: "Senha incorreta" }
      if (error.field && error.message) {
        formik.setFieldError(error.field, error.message);
      } else {
        formik.setFieldError("email", "Email ou senha incorreto"); // Mensagem genérica
      }
    }
  }, [isError, error]);

  return (
    <>
      {isPending && (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <p>Loading...</p>
        </div>
      )}

      <div className="container">
        <div className="login">
          <img src={logo} alt="logo" />
          <h2>Login</h2>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              label="Senha"
              name="senha"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formik.values.senha}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.senha && Boolean(formik.errors.senha)}
              helperText={formik.touched.senha && formik.errors.senha}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                const email = formik.values.email;
                const senha = formik.values.senha;
                setEmail(email);
                setSenha(senha);
              }}
            >
              Login
            </Button>
            <p className="semConta">
              Não tem uma conta?{" "}
              <span>
                <Link to={"/cadastrar"} className="link">
                  clique aqui!
                </Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

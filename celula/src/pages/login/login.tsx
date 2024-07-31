import React from "react";
import style from "./login.module.css";
import logo from "../../images/logo.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import  validationSchema  from "./validationSchema.tsx";
function Login() {
  const formik = useFormik({
    initialValues: { email: "", senha: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={style.container}>
      <div className={style.login}>
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
            type="password" // Use "password" para campo de senha
            variant="outlined"
            fullWidth
            margin="normal"
            value={formik.values.senha}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.senha && Boolean(formik.errors.senha)}
            helperText={formik.touched.senha && formik.errors.senha}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;

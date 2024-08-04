import { Button, TextField } from "@mui/material";
import "./cadastrar.css";
import { Link } from "react-router-dom";
import validationSchema from "./validationSchema";
import { useFormik } from "formik";
import { useMutation, useQuery } from "@tanstack/react-query";
import { BuscarCelulas } from "../../services/routes";
import { useEffect } from "react";
function Cadastrar() {
  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["fetchCelulas"],
    queryFn: BuscarCelulas,
  });
  console.log(data)

  const formik = useFormik({
    initialValues: {
      nome: "",
      endereco: "",
      bairro: "",
      data_de_nascimento: "",
      data_Batismo: "",
      cidade: "",
      telefone: "",
      email: "",
      senha: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className=" container">
      <div className="cadastrar">
        <form onSubmit={formik.handleSubmit}>
          <div className="listCd"></div>
          <div className="listCd">
            <TextField
              label="Nome"
              name="nome"
              type="text"
              variant="outlined"
              margin="normal"
              className="custom-textfield"
              value={formik.values.nome}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // error={formik.touched.senha && Boolean(formik.errors.senha)}
              // helperText={formik.touched.senha ? formik.errors.senha || "" : ""}
            ></TextField>
            <TextField
              label="Endereco"
              name="endereco"
              type="text"
              variant="outlined"
              margin="normal"
              className="custom-textfield"
              value={formik.values.endereco}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></TextField>
          </div>
          <div className="listCd">
            <TextField
              label="Bairro"
              name="bairro"
              type="text"
              variant="outlined"
              margin="normal"
              className="custom-textfield"
              value={formik.values.bairro}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // value={formik.values.senha}
            ></TextField>
            <TextField
              label="Data do Batismo"
              name="data_Batismo"
              type="text"
              variant="outlined"
              margin="normal"
              className="custom-textfield"
              value={formik.values.data_Batismo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // value={formik.values.senha}
            ></TextField>
          </div>
          <div className="listCd">
            <TextField
              label="Data de Nascimento"
              name="data_de_nascimento"
              type="text"
              variant="outlined"
              margin="normal"
              className="custom-textfield"
              value={formik.values.data_de_nascimento}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // value={formik.values.senha}
            ></TextField>
            <TextField
              label="Telefone"
              name="telefone"
              type="text"
              variant="outlined"
              margin="normal"
              className="custom-textfield"
              value={formik.values.telefone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // value={formik.values.senha}
            ></TextField>
          </div>
          <div className="listCd">
            <TextField
              label="Cidade"
              name="cidade"
              type="text"
              variant="outlined"
              margin="normal"
              className="custom-textfield"
              value={formik.values.cidade}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // value={formik.values.senha}
            ></TextField>
            <TextField
              label="Celula"
              name="Celula"
              type="text"
              variant="outlined"
              margin="normal"
              className="custom-textfield"
              // value={formik.values.senha}
            ></TextField>
          </div>
          <div className="listCd">
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              margin="normal"
              className="custom-textfield"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // value={formik.values.senha}
            ></TextField>
            <TextField
              label="Senha"
              name="senha"
              type="password"
              variant="outlined"
              margin="normal"
              className="custom-textfield"
              value={formik.values.senha}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // value={formik.values.senha}
            ></TextField>
          </div>
          <div className="listCd">
            <Button type="submit" variant="contained">
              {" "}
              Cadastrar
            </Button>
          </div>
          <div className="listCd">
            <p>
              Já possui uma conta?{" "}
              <span>
                <Link to={"/"} className="link">
                  {" "}
                  Clique aqui!
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastrar;

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
              error={formik.touched.nome && Boolean(formik.errors.nome)}
              helperText={formik.touched.nome ? formik.errors.nome || "" : ""}
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
              error={formik.touched.endereco && Boolean(formik.errors.endereco)}
              helperText={formik.touched.endereco ? formik.errors.endereco || "" : ""}
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
              error={formik.touched.bairro && Boolean(formik.errors.bairro)}
              helperText={formik.touched.bairro ? formik.errors.bairro || "" : ""}            ></TextField>
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
              error={formik.touched.data_Batismo && Boolean(formik.errors.data_Batismo)}
              helperText={formik.touched.data_Batismo ? formik.errors.data_Batismo || "" : ""}
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
              error={formik.touched.data_de_nascimento && Boolean(formik.errors.data_de_nascimento)}
              helperText={formik.touched.data_de_nascimento ? formik.errors.data_de_nascimento || "" : ""}            ></TextField>
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
              error={formik.touched.telefone && Boolean(formik.errors.telefone)}
              helperText={formik.touched.telefone ? formik.errors.telefone || "" : ""}
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
              error={formik.touched.cidade && Boolean(formik.errors.cidade)}
              helperText={formik.touched.cidade ? formik.errors.cidade || "" : ""}
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

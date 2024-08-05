import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./cadastrar.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik"; // Certifique-se de importar o useFormik
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { BuscarCelulas } from "../../services/routes";
import validationSchema from "./validationSchema";

function Cadastrar() {
  const [dados, setDados] = useState<any[]>([]);
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["celulas"],
    queryFn: () => BuscarCelulas(),
  });
  useEffect(() => {
    if (data) {
      setDados(data.data);
    }
  }, [data]);
  const formik = useFormik({
    initialValues: {
      nome: "",
      endereco: "",
      bairro: "",
      data_Batismo: "",
      data_de_Nascimento: "",
      telefone: "",
      cidade: "",
      email: "",
      senha: "",
      celula: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container">
      <div className="cadastrar">
        <form onSubmit={formik.handleSubmit}>
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
              helperText={formik.touched.nome && formik.errors.nome}
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
              helperText={
                formik.touched.endereco ? formik.errors.endereco || "" : ""
              }
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
              helperText={
                formik.touched.bairro ? formik.errors.bairro || "" : ""
              }
            ></TextField>
           <TextField
              label="Data deBatismo"
              name="data_Batismo"
              type="date"
              variant="outlined"
              margin="normal"
              className="custom-textfield"
              InputLabelProps={{
                shrink: true,
              }}
              value={formik.values.data_Batismo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.data_Batismo &&
                Boolean(formik.errors.data_Batismo)
              }
              helperText={
                formik.touched.data_Batismo
                  ? formik.errors.data_Batismo || ""
                  : ""
              }
            />
          </div>
          <div className="listCd">
            <TextField
              label="Data de Nascimento"
              name="data_de_Nascimento"
              type="date"
              variant="outlined"
              margin="normal"
              className="custom-textfield"
              InputLabelProps={{
                shrink: true,
              }}
              value={formik.values.data_de_Nascimento}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.data_de_Nascimento &&
                Boolean(formik.errors.data_de_Nascimento)
              }
              helperText={
                formik.touched.data_de_Nascimento
                  ? formik.errors.data_de_Nascimento || ""
                  : ""
              }
            />

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
              helperText={
                formik.touched.telefone ? formik.errors.telefone || "" : ""
              }
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
              helperText={
                formik.touched.cidade ? formik.errors.cidade || "" : ""
              }
            ></TextField>
            <FormControl
              variant="filled"
              margin="normal"
              className="custom-textfield"
              error={formik.touched.celula && Boolean(formik.errors.celula)}
              sx={{
                width: "330px",
              }}
            >
              <InputLabel>Celula</InputLabel>
              <Select
                name="celula"
                value={formik.values.celula}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                renderValue={(selected: any): React.ReactNode => {
                  const selectedItem = dados.find(
                    (item: any) => item.id === selected
                  );
                  return selectedItem
                    ? selectedItem.nome
                    : "Selecione uma Celula";
                }}
              >
                {dados.map((item: any) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.nome}
                  </MenuItem>
                ))}
                <MenuItem value="">
                  <em>Selecione uma Celula</em>
                </MenuItem>
              </Select>
              {formik.touched.celula && formik.errors.celula && (
                <FormHelperText>{formik.errors.celula}</FormHelperText>
              )}
            </FormControl>
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
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email ? formik.errors.email || "" : ""}
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
              error={formik.touched.senha && Boolean(formik.errors.senha)}
              helperText={formik.touched.senha ? formik.errors.senha || "" : ""}
            ></TextField>
          </div>
          <div className="listCd">
            <Button type="submit" variant="contained">
              Cadastrar
            </Button>
          </div>
          <div className="listCd">
            <p>
              Já possui uma conta?{" "}
              <span>
                <Link to={"/"} className="link">
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

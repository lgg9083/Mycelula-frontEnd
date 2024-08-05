import { Button, TextField } from "@mui/material";
import "./cadastrar.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik"; // Certifique-se de importar o useFormik

function Cadastrar() {
  const formik = useFormik({
    initialValues: {
      nome: "",
      endereco: "",
      bairro: "",
      data_Batismo: "",
      data_de_nascimento: "",
      telefone: "",
      cidade: "",
      email: "",
      senha: "",
    },
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
              name="Nome"
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
              name="Endereco"
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
              name="Bairro"
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
              label="Data do Batismo"
              name="Data do Batismo"
              type="text"
              variant="outlined"
              margin="normal"
              className="custom-textfield"
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
            ></TextField>
          </div>
          <div className="listCd">
            <TextField
              label="Data de Nascimento"
              name="Data de Nascimento"
              type="text"
              variant="outlined"
              margin="normal"
              className="custom-textfield"
              value={formik.values.data_de_nascimento}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.data_de_nascimento &&
                Boolean(formik.errors.data_de_nascimento)
              }
              helperText={
                formik.touched.data_de_nascimento
                  ? formik.errors.data_de_nascimento || ""
                  : ""
              }
            ></TextField>
            <TextField
              label="Telefone"
              name="Telefone"
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
              name="Cidade"
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
            <TextField
              label="Celula"
              name="celula"
              type="text"
              variant="outlined"
              margin="normal"
              className="custom-textfield"
              // value={formik.values}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // error={formik.touched.celula && Boolean(formik.errors.celula)}
              // helperText={formik.touched.celula ? formik.errors.celula || "" : ""}
            ></TextField>
          </div>
          <div className="listCd">
            <TextField
              label="Email"
              name="Email"
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
              name="Senha"
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

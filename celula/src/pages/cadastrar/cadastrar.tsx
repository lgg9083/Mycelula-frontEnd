import { Button, TextField } from "@mui/material";
import "./cadastrar.css";

function Cadastrar() {
  return (
    <div className=" container">
      <div className="cadastrar">
        <form>
          <div className="listCd">
            <TextField
              label="Nome"
              name="Nome"
              type="text"
              variant="outlined"
              margin="normal"
              // value={formik.values.senha}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // error={formik.touched.senha && Boolean(formik.errors.senha)}
              // helperText={formik.touched.senha ? formik.errors.senha || "" : ""}
            ></TextField>
            <TextField
              label="Endereco"
              name="Endereco"
              type="text"
              variant="outlined"
              margin="normal"
              // value={formik.values.senha}
            ></TextField>
          </div>
          <div className="listCd">
            <TextField
              label="Bairro"
              name="Bairro"
              type="Bairro"
              variant="outlined"
              margin="normal"
              // value={formik.values.senha}
            ></TextField>
            <TextField
              label="Data do Batismo"
              name="Data do Batismo"
              type="text"
              variant="outlined"
              margin="normal"
              // value={formik.values.senha}
            ></TextField>
          </div>
          <div className="listCd">
            <TextField
              label="Data de Nascimento"
              name="Data de Nascimento"
              type="text"
              variant="outlined"
              margin="normal"
              // value={formik.values.senha}
            ></TextField>
            <TextField
              label="Telefone"
              name="Telefone"
              type="text"
              variant="outlined"
              margin="normal"
              // value={formik.values.senha}
            ></TextField>
          </div>
          <div className="listCd">
            <TextField
              label="Cidade"
              name="Cidade"
              type="text"
              variant="outlined"
              margin="normal"
              // value={formik.values.senha}
            ></TextField>
            <TextField
              label="Celula"
              name="Celula"
              type="text"
              variant="outlined"
              margin="normal"
              // value={formik.values.senha}
            ></TextField>
          </div>
          <div className="listCd">
            <TextField
              label="Email"
              name="Email"
              type="email"
              variant="outlined"
              margin="normal"
              // value={formik.values.senha}
            ></TextField>
            <TextField
              label="Senha"
              name="Senha"
              type="password"
              variant="outlined"
              margin="normal"
              // value={formik.values.senha}
            ></TextField>
          </div>
          <div className="listCd">
            <Button type="submit" variant="contained">
              {" "}
              Cadastrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastrar;

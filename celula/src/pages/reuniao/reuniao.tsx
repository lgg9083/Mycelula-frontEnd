import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import NavBar from "../../components/NavBar";
import "./reuniao.css";
import { useFormik } from "formik";
function Reuniao() {
    const formik = useFormik({
        initialValues:{
            date: '',
            celula: '',
            responsavel_louvor: '',
            responsavel_palavra: '',
            responsavel_quebragelo: '',
            membros: [],
        },
        // validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    })
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="cadastrarReuniao">
          <form>
            <div className="listCd">
              <TextField
                label="Data"
                name="date"
                type="date"
                variant="outlined"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                className="custom-textfield"
                sx={{ width: "330px" }}

                // value={formik.values.nome}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // error={formik.touched.nome && Boolean(formik.errors.nome)}
                // helperText={formik.touched.nome && formik.errors.nome}
              />
              <FormControl
                variant="filled"
                margin="normal"
                className="custom-textfield"
                // error={formik.touched.celula && Boolean(formik.errors.celula)}
                sx={{ width: "330px" }}
              >
                <InputLabel>Responsavel Louvor</InputLabel>
                <Select
                  name="celula"
                  //   value={formik.values.celula}
                  //   onChange={formik.handleChange}
                  //   onBlur={formik.handleBlur}
                  //   renderValue={(selected: any): React.ReactNode => {
                  //     const selectedItem = data?.data?.find((item: any) => item.id === selected);
                  //     return selectedItem ? selectedItem.nome : "Selecione uma Celula";
                  //   }}
                >
                  {/* {data
                    ? data.data.map((item: any) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.nome}
                        </MenuItem>
                      ))
                    : null}
                  <MenuItem value="">
                    <em>Selecione uma Celula</em>
                  </MenuItem> */}
                </Select>
                {/* {formik.touched.celula && formik.errors.celula && (
                  <FormHelperText>{formik.errors.celula}</FormHelperText>
                )} */}
              </FormControl>
            </div>
            <div className="listCd">
              <FormControl
                variant="filled"
                margin="normal"
                className="custom-textfield"
                // error={formik.touched.celula && Boolean(formik.errors.celula)}
                sx={{ width: "330px" }}
              >
                <InputLabel>Responsavel Palavra</InputLabel>
                <Select
                  name="celula"
                  //   value={formik.values.celula}
                  //   onChange={formik.handleChange}
                  //   onBlur={formik.handleBlur}
                  //   renderValue={(selected: any): React.ReactNode => {
                  //     const selectedItem = data?.data?.find((item: any) => item.id === selected);
                  //     return selectedItem ? selectedItem.nome : "Selecione uma Celula";
                  //   }}
                >
                  {/* {data
                    ? data.data.map((item: any) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.nome}
                        </MenuItem>
                      ))
                    : null}
                  <MenuItem value="">
                    <em>Selecione uma Celula</em>
                  </MenuItem> */}
                </Select>
                {/* {formik.touched.celula && formik.errors.celula && (
                  <FormHelperText>{formik.errors.celula}</FormHelperText>
                )} */}
              </FormControl>
              <FormControl
                variant="filled"
                margin="normal"
                className="custom-textfield"
                // error={formik.touched.celula && Boolean(formik.errors.celula)}
                sx={{ width: "330px" }}
              >
                <InputLabel>Responsavel quebra gelo</InputLabel>
                <Select
                  name="celula"
                  //   value={formik.values.celula}
                  //   onChange={formik.handleChange}
                  //   onBlur={formik.handleBlur}
                  //   renderValue={(selected: any): React.ReactNode => {
                  //     const selectedItem = data?.data?.find((item: any) => item.id === selected);
                  //     return selectedItem ? selectedItem.nome : "Selecione uma Celula";
                  //   }}
                >
                  {/* {data
                    ? data.data.map((item: any) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.nome}
                        </MenuItem>
                      ))
                    : null}
                  <MenuItem value="">
                    <em>Selecione uma Celula</em>
                  </MenuItem> */}
                </Select>
                {/* {formik.touched.celula && formik.errors.celula && (
                  <FormHelperText>{formik.errors.celula}</FormHelperText>
                )} */}
              </FormControl>
            </div>
            <div className="listCd">
             
              <FormControl
                variant="filled"
                margin="normal"
                className="custom-textfield"
                // error={formik.touched.celula && Boolean(formik.errors.celula)}
                sx={{ width: "330px" }}
              >
                <InputLabel>Celula</InputLabel>
                <Select
                  name="celula"
                  //   value={formik.values.celula}
                  //   onChange={formik.handleChange}
                  //   onBlur={formik.handleBlur}
                  //   renderValue={(selected: any): React.ReactNode => {
                  //     const selectedItem = data?.data?.find((item: any) => item.id === selected);
                  //     return selectedItem ? selectedItem.nome : "Selecione uma Celula";
                  //   }}
                >
                  {/* {data
                    ? data.data.map((item: any) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.nome}
                        </MenuItem>
                      ))
                    : null}
                  <MenuItem value="">
                    <em>Selecione uma Celula</em>
                  </MenuItem> */}
                </Select>
                {/* {formik.touched.celula && formik.errors.celula && (
                  <FormHelperText>{formik.errors.celula}</FormHelperText>
                )} */}
              </FormControl>
              <FormControl
                variant="filled"
                margin="normal"
                className="custom-textfield"
                // error={formik.touched.celula && Boolean(formik.errors.celula)}
                sx={{ width: "330px" }}
              >
                <InputLabel> Membros</InputLabel>
                <Select
                  name="celula"
                  //   value={formik.values.celula}
                  //   onChange={formik.handleChange}
                  //   onBlur={formik.handleBlur}
                  //   renderValue={(selected: any): React.ReactNode => {
                  //     const selectedItem = data?.data?.find((item: any) => item.id === selected);
                  //     return selectedItem ? selectedItem.nome : "Selecione uma Celula";
                  //   }}
                >
                  {/* {data
                    ? data.data.map((item: any) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.nome}
                        </MenuItem>
                      ))
                    : null}
                  <MenuItem value="">
                    <em>Selecione uma Celula</em>
                  </MenuItem> */}
                </Select>
                {/* {formik.touched.celula && formik.errors.celula && (
                  <FormHelperText>{formik.errors.celula}</FormHelperText>
                )} */}
              </FormControl>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Reuniao;

import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import NavBar from "../components/NavBar";
import { useFormik } from "formik";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  atualizarCelula,
  buscarCelularId,
  ICreateCelula,
  listarMembro,
} from "../services/routes";
import validationSchema from "../pages/celula/validationSchema";
import { useAuth } from "../hooks/useAuth";
import { useParams } from "react-router-dom";
import { string } from "yup";

interface Cel {
  id: number;
}

const EditCelula: React.FC = () => {
  const { token, celulaName } = useAuth();
  const { id } = useParams<{ id: string }>();
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["membrocelula"],
    queryFn: async () => {
      const response = await buscarCelularId(Number(id) ?? null);
      console.log(response, "response da celula id");
      return response;
    },
  });
  const { data: dataMembros } = useQuery({
    queryKey: ["membros"],
    queryFn: async () => {
      const response = await listarMembro();
      return response.data;
    },
  });
  const { mutate: atualizarCelulaId, error } = useMutation<
    void,
    Error,
    { id: any; data: ICreateCelula }
  >({
    mutationFn: async ({ id, data }) => {
      const response = await atualizarCelula(id, data);
      return response;
    },
  });

  const formik = useFormik({
    initialValues: {
      nome: data?.nome || "",
      nome_Lider: data?.nome_Lider.nome || "",
      Bairro: data?.Bairro || "",
      Endereco_Da_Celula: data?.endereco_Da_Celula || "",
      Membros: data?.Membros || [],
    },
    enableReinitialize: true, // Permite reinitializar os valores quando "data" é carregado
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const id = data?.id; // Supondo que você tenha o ID da célula para atualizar
      atualizarCelulaId({ id, data: values });
    },
  });

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="cadastrarReuniao">
          <form onSubmit={formik.handleSubmit}>
            <div className="listti">
              <h1>Cadastro de Célula</h1>
              <p>
                Preencha as informações necessárias para registrar uma nova
                célula.
              </p>
            </div>
            <div className="listCd">
              <TextField
                label="Nome"
                name="nome"
                type="text"
                placeholder="Digite o nome da célula"
                variant="outlined"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                className="custom-textfield"
                sx={{ width: "330px" }}
                value={formik.values.nome}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.nome && Boolean(formik.errors.nome)}
                helperText={
                  typeof formik.errors.nome === "string"
                    ? formik.errors.nome
                    : undefined
                }
              />
              <FormControl
                variant="filled"
                margin="normal"
                className="custom-textfield"
                error={
                  formik.touched.nome_Lider && Boolean(formik.errors.nome_Lider)
                }
                sx={{ width: "330px" }}
              >
                <InputLabel>Selecione um membro como Líder</InputLabel>
                <Select
                  name="nome_Lider"
                  value={formik.values.nome_Lider} // Verifique se o valor está correto
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  renderValue={(selected) => {
                    // Verifica se o valor selecionado é o ID de um membro e retorna o nome correspondente
                    const selectedMember = dataMembros.find(
                      (membro: any) => membro.idMembro === selected
                    );

                    // Caso o membro seja encontrado, retorna o nome, caso contrário, retorna o valor selecionado
                    return selectedMember ? selectedMember.nome : selected;
                  }}
                >
                  {dataMembros?.map((item: any) => (
                    <MenuItem key={item.idMembro} value={item.idMembro}>
                      {item.nome}
                    </MenuItem>
                  ))}
                  <MenuItem value="">
                    <em>Selecione um membro</em>
                  </MenuItem>
                </Select>

                {formik.touched.nome_Lider && formik.errors.nome_Lider && (
                  <FormHelperText>
                    {typeof formik.errors.nome_Lider === "string"
                      ? formik.errors.nome_Lider
                      : null}
                  </FormHelperText>
                )}
              </FormControl>
            </div>
            <div className="listCd">
              <TextField
                label="Bairro"
                name="Bairro"
                type="text"
                placeholder="Qual o bairro da célula?"
                variant="outlined"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                className="custom-textfield"
                sx={{ width: "330px" }}
                value={formik.values.Bairro}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.Bairro && Boolean(formik.errors.Bairro)}
                helperText={
                  typeof formik.errors.Bairro === "string"
                    ? formik.errors.Bairro
                    : undefined
                }
              />
              <TextField
                label="Endereço da célula"
                name="Endereco_Da_Celula"
                type="text"
                placeholder="Qual o endereço da célula?"
                variant="outlined"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                className="custom-textfield"
                sx={{ width: "330px" }}
                value={formik.values.Endereco_Da_Celula}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.Endereco_Da_Celula &&
                  Boolean(formik.errors.Endereco_Da_Celula)
                }
                helperText={
                  typeof formik.errors.Endereco_Da_Celula === "string"
                    ? formik.errors.Endereco_Da_Celula
                    : undefined
                }
              />
            </div>
            <div className="listCd">
              <FormControl
                variant="filled"
                margin="normal"
                className="custom-textfield"
                error={formik.touched.Membros && Boolean(formik.errors.Membros)}
                sx={{ width: "330px" }}
              >
                <InputLabel>Membros</InputLabel>
                <Select
                  name="Membros"
                  value={formik.values.Membros}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  multiple
                  renderValue={(selected) => {
                    return selected
                      .map((membroSelected: any) => {
                        // Usar find para obter o membro completo de `dataMembros`
                        const selectedMember = dataMembros?.find(
                          (membro: any) => membro.idMembro === membroSelected.idMembro
                        );
                  
                        // Retornar o nome do membro, ou null se não for encontrado
                        return selectedMember ? selectedMember.nome : null;
                      })
                      .filter((nome: any) => nome !== null) // Filtra valores nulos
                      .join(", "); // Junta todos os nomes com uma vírgula
                  }}
                  
                >
                  {dataMembros?.map((item: any) => (
                    <MenuItem key={item.idMembro} value={item}>
                      {item.nome}
                    </MenuItem>
                  ))}
                  <MenuItem value="">
                    <em>Selecione os participantes</em>
                  </MenuItem>
                </Select>
                {formik.touched.Membros && formik.errors.Membros && (
                  <FormHelperText>
                    {typeof formik.errors.Membros === "string"
                      ? formik.errors.Membros
                      : null}
                  </FormHelperText>
                )}
              </FormControl>
            </div>
            <div className="listCd">
              <Button type="submit" variant="contained">
                Atualizar
              </Button>
              {error && <p>{error.message}</p>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditCelula;

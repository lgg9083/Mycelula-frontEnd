import { useQuery } from "@tanstack/react-query";
import { buscarCelularId } from "../services/routes";
interface CelulaDetails {
  id: number;
}

const CelulaDetails: React.FC<CelulaDetails> = ({ id }) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["celula43"],
    queryFn: async () => {
      const response = await buscarCelularId(id);
      console.log(response, 'response detais')
      return response;
    },
  });
  console.log("ID recebido:", data);

  return (
    <div className="containerCard">
      {data ? (
        <div key={data?.id} className="card">
          <p>Nome: {data?.nome}</p>
          <p>Endereço da celula: {data?.endereco_Da_Celula}</p>
          <p>Bairro: {data?.Bairro}</p>
          <p>Lider: {data?.nome_Lider.nome}</p>
          <p>
            Membros: {data?.Membros.map((item: any) => item.nome).join(", ")}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default CelulaDetails;

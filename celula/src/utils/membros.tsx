import { useQuery } from "@tanstack/react-query";
import React from "react";
import { listarMembro } from "../services/routes";

function Membros() {
  const { data, isError, isPending, isSuccess } = useQuery({
    queryKey: ["membros"],
    queryFn: async () => {
      const response = await listarMembro();
      console.log(response)
      return response.data;
    },
  });
  return (
    <div className="containerCard">
      <div>
       membros
      </div>
    </div>
  );
}


export default Membros

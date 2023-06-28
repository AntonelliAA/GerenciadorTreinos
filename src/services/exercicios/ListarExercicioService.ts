import prismaClient from "../../prisma";

interface ListarExercicios {
    id_usuario: number;
    id_exercicio: number;
}

class ListarExercicioService {
  async execute({id_usuario,id_exercicio}: ListarExercicios) {

    if(!id_usuario || !id_exercicio){
        throw new Error("Erro ao encontrar exercicio")
    }

    const exercicio = await prismaClient.exercicio.findFirst({
        where:{
            id_usuario: id_usuario,
            id_exercicio: id_exercicio
        }
    });

    return exercicio;
  }
}

export { ListarExercicioService };

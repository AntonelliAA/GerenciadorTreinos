import prismaClient from "../../prisma";

interface Listar{

    id_usuario: number,
    id_treino: number

}

class ListarTodosExerciciosService {
  async execute({ id_usuario,id_treino }: Listar) {

    if(!id_treino || !id_usuario){
      throw new Error("Erro ao listar treinos!")
    }


    const listaTreinos = await prismaClient.exercicio.findMany({
        where:{
            id_usuario: id_usuario,
            id_treino: id_treino
        }
    });

    return listaTreinos;
  }
}

export { ListarTodosExerciciosService };

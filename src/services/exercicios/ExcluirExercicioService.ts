import prismaClient from "../../prisma";

interface ExcluirExercicio{
    id_exercicio: number,
}

class ExcluirExercicioService {
  async execute({id_exercicio}: ExcluirExercicio) {

    const exercicioExcluido = await prismaClient.exercicio.delete({
        where:{
            id_exercicio: id_exercicio
        }
    });

    return exercicioExcluido;
  }
}

export { ExcluirExercicioService };

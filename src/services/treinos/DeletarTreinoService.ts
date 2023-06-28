import prismaClient from "../../prisma";

interface Treino {
  id_treino: number;
}

class DeletarTreinoService {
  async execute({ id_treino }: Treino) {
    if (!id_treino) {
      throw new Error("Erro ao deletar");
    }
    
    const exercicios = await prismaClient.exercicio.deleteMany({
      where: {
        id_treino: id_treino,
      },
    });
    
    const treino = await prismaClient.treinos.delete({
      where: {
        id_treino: id_treino,
      },
    });

    if (!treino) {
      throw new Error("Erro ao deletar");
    }


    return { treino, exercicios };
  }
}

export { DeletarTreinoService };

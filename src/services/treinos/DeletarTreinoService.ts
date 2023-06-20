import prismaClient from "../../prisma";

interface Treino{
    id_treino: number;
}

class DeletarTreinoService {
  async execute({id_treino}: Treino) {

    const treino = await prismaClient.treinos.delete({
        where:{
            id_treino: id_treino
        }
    });

    return treino;
  }
}

export { DeletarTreinoService };

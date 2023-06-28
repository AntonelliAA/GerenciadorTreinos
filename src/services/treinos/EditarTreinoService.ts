import prismaClient from "../../prisma";

interface Treino{
    id_treino: number;
    nome: string;
}

class EditarTreinoService {
  async execute({id_treino,nome}:Treino) {

    const treino = await prismaClient.treinos.update({
        where:{
            id_treino: id_treino
        },data:{
            nome: nome
        }
    });

    return treino;
  }
}

export { EditarTreinoService };

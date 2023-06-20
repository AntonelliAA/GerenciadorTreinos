import prismaClient from "../../prisma";


interface Treino{
    nome: string,
    id_usuario: number
}

class CriarTreinoService {
  async execute({nome,id_usuario}:Treino) {

    const treino = await prismaClient.treinos.create({
        data:{
            nome:nome,
            id_usuario: id_usuario
        }
    });

    return treino;
  }
}

export { CriarTreinoService };

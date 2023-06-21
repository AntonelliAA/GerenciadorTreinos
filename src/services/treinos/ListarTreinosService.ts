import prismaClient from "../../prisma";

interface Usuario{
    id_usuario: number;
}

class ListarTreinosService {
  async execute({ id_usuario }:Usuario) {

    if(!id_usuario){
      throw new Error("id_usuario inválido!")
    }

    const treinos = await prismaClient.treinos.findMany({
        where:{
            id_usuario: id_usuario,
        }
    })

    return treinos;
  }
}

export { ListarTreinosService };

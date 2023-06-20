import prismaClient from "../../prisma";

interface Usuario {
  id_usuario: number;
}

class ListarInformacoesUsuarioService {
  async execute({ id_usuario }: Usuario) {
    const usuario = await prismaClient.usuarios.findFirst({
      where: {
        id_usuario: id_usuario,
      },
      select: {
        nome: true,
        email: true,
        idade: true,
        altura: true,
        peso: true,
      },
    });

    return usuario;
  }
}

export { ListarInformacoesUsuarioService };

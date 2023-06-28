import prismaClient from "../../prisma";

interface Usuario{
    id_usuario: number;
    nome: string;
    email: string;
    idade: number;
    altura: number;
    peso: number;
}

class EditarUsuarioService {
  async execute({ id_usuario,nome,email,idade,altura,peso }: Usuario) {

    const usuario = await prismaClient.usuarios.update({
        where:{
            id_usuario: id_usuario
        },data:{
            nome,
            email,
            idade,
            altura,
            peso
        }
    });

    return usuario;
  }
}

export { EditarUsuarioService };

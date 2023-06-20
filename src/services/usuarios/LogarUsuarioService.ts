import prismaClient from "../../prisma";

interface Logar{
    email: string,
    senha: string
}

class LogarUsuarioService {
  async execute({email,senha}:Logar) {

    const usuarioExistente = await prismaClient.usuarios.findFirst({
        where:{
            email
        }
    })

    if(!usuarioExistente){
        throw new Error("Usuário inválido!")
    }

    const usuarioLogado = await prismaClient.usuarios.findFirst({
        where:{
            email: email,
            senha: senha
        }
    });

    if(!usuarioLogado){
        throw new Error("Usuário inválido!")
    }

    return usuarioLogado;
  }
}

export { LogarUsuarioService };

import prismaClient from "../../prisma";

interface CriarUsuario{
  nome: string;
  email: string;
  idade: number;
  altura: number;
  peso: number;
  senha: string;
}

class CriarUsuarioService {
  async execute({ nome,email,senha,idade,altura,peso }: CriarUsuario) {

    if(!nome || !email || !senha || !idade || !altura || !peso){
      throw new Error("Preencha todos os campos!")
    }

    const usuarioExistente = await prismaClient.usuarios.findFirst({
      where:{
        email: email
      }
    })

    if(usuarioExistente){
      throw new Error("Email já cadastrado!")
    }


    const usuario = await prismaClient.usuarios.create({
      data:{
        nome: nome,
        email: email,
        idade: idade,
        altura: altura,
        peso: peso,
        senha: senha,
      },select:{
        nome: true,
        email: true,
        idade: true,
        altura: true,
        peso: true,
      }
    });
  
    return usuario;
  }
}

export { CriarUsuarioService };
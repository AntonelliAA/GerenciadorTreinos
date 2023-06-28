import { Request, Response } from "express";
import { EditarUsuarioService } from "../../services/usuarios/EditarUsuarioService";

class EditarUsuarioController {
  async handle(req: Request, res: Response) {

    const {id_usuario,nome,email,idade,altura,peso} = req.body;

    if(!id_usuario || !nome || !email || !idade || !altura || !peso){
        throw new Error("Erro ao editar usuario!")
    }

    const editarUsuarioService = new EditarUsuarioService();

    const something = await editarUsuarioService.execute({id_usuario,nome,email,idade,altura,peso})

    return res.json(something)
  }
}

export { EditarUsuarioController };

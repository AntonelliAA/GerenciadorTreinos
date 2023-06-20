import { Request, Response } from "express";
import { CriarUsuarioService } from "../../services/usuarios/CriarUsuarioService";

class CriarUsuarioController {
  async handle(req: Request, res: Response) {

    const {nome,email,idade,altura,peso,senha} = req.body

    const criarUsuarioService = new CriarUsuarioService();

    const usuario = await criarUsuarioService.execute({nome,email,idade,altura,peso,senha})

    return res.json(usuario)
  }
}

export { CriarUsuarioController };

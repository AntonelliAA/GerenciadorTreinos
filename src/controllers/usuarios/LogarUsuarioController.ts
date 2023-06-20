import { Request, Response } from "express";
import { LogarUsuarioService } from "../../services/usuarios/LogarUsuarioService";

class LogarUsuarioController {
  async handle(req: Request, res: Response) {

    const {email,senha} = req.body

    if(!email || !senha){
        throw new Error("Preencha todos os campos")
    }

    const logarUsuarioService = new LogarUsuarioService();

    const usuario = await logarUsuarioService.execute({email,senha})

    return res.json(usuario)
  }
}

export { LogarUsuarioController };

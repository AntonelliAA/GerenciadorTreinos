import { Request, Response } from "express";
import { ListarInformacoesUsuarioService } from "../../services/usuarios/ListarInformacoesUsuarioService";

class ListarInformacoesUsuarioController {
  async handle(req: Request, res: Response) {

    const id_usuario = Number(req.query.id_usuario)

    if(!id_usuario){
        throw new Error("Informe um id válido!")
    }

    const listarInformacoesUsuarioService = new ListarInformacoesUsuarioService();

    const informacoesUsuario = await listarInformacoesUsuarioService.execute({id_usuario})

    return res.json(informacoesUsuario)
  }
}

export { ListarInformacoesUsuarioController };

import { Request, Response } from "express";
import { ListarTreinosService } from "../../services/treinos/ListarTreinosService";

class ListarTreinosController {
  async handle(req: Request, res: Response) {

    const {id_usuario} = req.body

    const listarTreinosService = new ListarTreinosService();

    const treinos = await listarTreinosService.execute({id_usuario})

    return res.json(treinos)
  }
}

export { ListarTreinosController };

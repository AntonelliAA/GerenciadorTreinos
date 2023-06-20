import { Request, Response } from "express";
import { DeletarTreinoService } from "../../services/treinos/DeletarTreinoService";

class DeletarTreinoController {
  async handle(req: Request, res: Response) {

    const {id_treino} = req.body;

    const deletarTreinoService = new DeletarTreinoService();

    const treino = await deletarTreinoService.execute({id_treino})

    return res.json(treino)
  }
}

export { DeletarTreinoController };

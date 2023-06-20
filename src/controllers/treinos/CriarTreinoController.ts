import { Request, Response } from "express";
import { CriarTreinoService } from "../../services/treinos/CriarTreinoService";

class CriarTreinoController {
  async handle(req: Request, res: Response) {
    
    const {nome,id_usuario} = req.body

    const criarTreinoService = new CriarTreinoService();

    const treino = await criarTreinoService.execute({nome,id_usuario})

    return res.json(treino)
  }
}

export { CriarTreinoController };

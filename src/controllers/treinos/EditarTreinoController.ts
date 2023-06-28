import { Request, Response } from "express";
import { EditarTreinoService } from "../../services/treinos/EditarTreinoService";

class EditarTreinoController {
  async handle(req: Request, res: Response) {

    const {id_treino,nome} = req.body

    if(!id_treino || !nome){
        throw new Error("Dados inválidos!");
    }

    const editarTreinoService = new EditarTreinoService();

    const treino = await editarTreinoService.execute({id_treino,nome})

    return res.json(treino)
  }
}

export { EditarTreinoController };

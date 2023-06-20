import { Request, Response } from "express";
import { ExcluirExercicioService } from "../../services/exercicios/ExcluirExercicioService";

class ExcluirExercicioController {
  async handle(req: Request, res: Response) {

    const {id_exercicio} = req.body;

    const excluirExercicioService = new ExcluirExercicioService();

    const exercicio = await excluirExercicioService.execute({id_exercicio})

    return res.json(exercicio)
  }
}

export { ExcluirExercicioController };

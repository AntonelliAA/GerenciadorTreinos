import { Request, Response } from "express";
import { CriarExercicioService } from "../../services/exercicios/CriarExercicioService";

class CriarExercicioController {
  async handle(req: Request, res: Response) {
    const { series, repeticoes, carga, nome, id_usuario, id_treino } = req.body;

    const criarExercicioService = new CriarExercicioService();

    const exercicio = await criarExercicioService.execute({series, repeticoes, carga, nome, id_usuario,id_treino});

    return res.json(exercicio);
  }
}

export { CriarExercicioController };

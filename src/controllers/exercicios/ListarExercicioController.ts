import { Request, Response } from "express";
import { ListarExercicioService } from "../../services/exercicios/ListarExercicioService";

class ListarExercicioController {
  async handle(req: Request, res: Response) {

    const id_usuario = Number(req.query.id_usuario)

    const id_exercicio = Number(req.query.id_exercicio)

    const listarExercicioService = new ListarExercicioService();

    const exercicio = await listarExercicioService.execute({id_usuario,id_exercicio})

    return res.json(exercicio)
  }
}

export { ListarExercicioController };

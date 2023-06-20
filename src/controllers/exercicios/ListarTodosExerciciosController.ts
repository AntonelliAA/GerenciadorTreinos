import { Request, Response } from "express";
import { ListarTodosExerciciosService } from "../../services/exercicios/ListarTodosExerciciosService";

class ListarTodosExerciciosController {
  async handle(req: Request, res: Response) {

    const {id_usuario,id_treino} = req.body

    const listarTodosExerciciosService = new ListarTodosExerciciosService();

    const exercicio = await listarTodosExerciciosService.execute({id_usuario,id_treino})

    return res.json(exercicio)
  }
}

export { ListarTodosExerciciosController };

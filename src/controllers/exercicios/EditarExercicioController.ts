import { Request, Response } from "express";
import { EditarExercicioService } from "../../services/exercicios/EditarExercicioService";

class EditarExercicioController {
  async handle(req: Request, res: Response) {

    const {series,repeticoes,carga,nome,id_exercicio} = req.body;

    const editarExercicioService = new EditarExercicioService();

    const exercicio = await editarExercicioService.execute({series,repeticoes,carga,nome,id_exercicio})

    return res.json(exercicio)
  }
}

export { EditarExercicioController };

import { Router, Request, Response } from "express";



import { CriarUsuarioController } from "./controllers/usuarios/CriarUsuarioController";
import { LogarUsuarioController } from "./controllers/usuarios/LogarUsuarioController";
import { ListarInformacoesUsuarioController } from "./controllers/usuarios/ListarInformacoesUsuarioController";
import { CriarExercicioController } from "./controllers/exercicios/CriarExercicioController";
import { CriarTreinoController } from "./controllers/treinos/CriarTreinoController";
import { ListarTreinosController } from "./controllers/treinos/ListarTreinosController";
import { DeletarTreinoController } from "./controllers/treinos/DeletarTreinoController";
import { EditarExercicioController } from "./controllers/exercicios/EditarExercicioController";
import { ListarTodosExerciciosController } from "./controllers/exercicios/ListarTodosExerciciosController";
import { ExcluirExercicioController } from "./controllers/exercicios/ExcluirExercicioController";





const router = Router();

//rotas para usuarios

router.post("/cadastro", new CriarUsuarioController().handle)

router.post("/login", new LogarUsuarioController().handle)

router.get("/usuarios", new ListarInformacoesUsuarioController().handle)

//rotas treinos

router.post("/treinos", new CriarTreinoController().handle)
router.get("/treinos", new ListarTreinosController().handle)
router.delete("/treinos", new DeletarTreinoController().handle)


//rotas exercicios

router.post("/exercicios", new CriarExercicioController().handle)
router.put("/exercicios", new EditarExercicioController().handle)
router.get("/exercicios", new ListarTodosExerciciosController().handle)
router.delete("/exercicios", new ExcluirExercicioController().handle)




export { router };

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
import { ListarExercicioController } from "./controllers/exercicios/ListarExercicioController";
import { EditarTreinoController } from "./controllers/treinos/EditarTreinoController";
import { EditarUsuarioController } from "./controllers/usuarios/EditarUsuarioController";





const router = Router();

//rotas para usuarios

router.post("/cadastro", new CriarUsuarioController().handle)

router.post("/login", new LogarUsuarioController().handle)

router.get("/conta", new ListarInformacoesUsuarioController().handle)

router.put("/conta", new EditarUsuarioController().handle)

//rotas treinos

router.post("/treinos", new CriarTreinoController().handle)
router.get("/treinos", new ListarTreinosController().handle)
router.delete("/treinos", new DeletarTreinoController().handle)
router.put("/treinos", new EditarTreinoController().handle)


//rotas exercicios

router.post("/exercicios", new CriarExercicioController().handle)
router.put("/exercicios", new EditarExercicioController().handle)
router.get("/exercicios", new ListarTodosExerciciosController().handle)
router.delete("/exercicios", new ExcluirExercicioController().handle)

router.get("/exercicios/editar", new ListarExercicioController().handle)




export { router };

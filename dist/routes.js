"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CriarUsuarioController_1 = require("./controllers/usuarios/CriarUsuarioController");
const LogarUsuarioController_1 = require("./controllers/usuarios/LogarUsuarioController");
const ListarInformacoesUsuarioController_1 = require("./controllers/usuarios/ListarInformacoesUsuarioController");
const CriarExercicioController_1 = require("./controllers/exercicios/CriarExercicioController");
const CriarTreinoController_1 = require("./controllers/treinos/CriarTreinoController");
const ListarTreinosController_1 = require("./controllers/treinos/ListarTreinosController");
const DeletarTreinoController_1 = require("./controllers/treinos/DeletarTreinoController");
const EditarExercicioController_1 = require("./controllers/exercicios/EditarExercicioController");
const ListarTodosExerciciosController_1 = require("./controllers/exercicios/ListarTodosExerciciosController");
const ExcluirExercicioController_1 = require("./controllers/exercicios/ExcluirExercicioController");
const router = (0, express_1.Router)();
exports.router = router;
//rotas para usuarios
router.post("/cadastro", new CriarUsuarioController_1.CriarUsuarioController().handle);
router.post("/login", new LogarUsuarioController_1.LogarUsuarioController().handle);
router.get("/usuarios", new ListarInformacoesUsuarioController_1.ListarInformacoesUsuarioController().handle);
//rotas treinos
router.post("/treinos", new CriarTreinoController_1.CriarTreinoController().handle);
router.get("/treinos", new ListarTreinosController_1.ListarTreinosController().handle);
router.delete("/treinos", new DeletarTreinoController_1.DeletarTreinoController().handle);
//rotas exercicios
router.post("/exercicios", new CriarExercicioController_1.CriarExercicioController().handle);
router.put("/exercicios", new EditarExercicioController_1.EditarExercicioController().handle);
router.get("/exercicios", new ListarTodosExerciciosController_1.ListarTodosExerciciosController().handle);
router.delete("/exercicios", new ExcluirExercicioController_1.ExcluirExercicioController().handle);

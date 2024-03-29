"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListarTodosExerciciosController = void 0;
const ListarTodosExerciciosService_1 = require("../../services/exercicios/ListarTodosExerciciosService");
class ListarTodosExerciciosController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_usuario = Number(req.query.id_usuario);
            const id_treino = Number(req.query.id_treino);
            const listarTodosExerciciosService = new ListarTodosExerciciosService_1.ListarTodosExerciciosService();
            const exercicio = yield listarTodosExerciciosService.execute({ id_usuario, id_treino });
            return res.json(exercicio);
        });
    }
}
exports.ListarTodosExerciciosController = ListarTodosExerciciosController;

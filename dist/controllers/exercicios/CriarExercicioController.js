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
exports.CriarExercicioController = void 0;
const CriarExercicioService_1 = require("../../services/exercicios/CriarExercicioService");
class CriarExercicioController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { series, repeticoes, carga, nome, id_usuario, id_treino } = req.body;
            const criarExercicioService = new CriarExercicioService_1.CriarExercicioService();
            const exercicio = yield criarExercicioService.execute({ series, repeticoes, carga, nome, id_usuario, id_treino });
            return res.json(exercicio);
        });
    }
}
exports.CriarExercicioController = CriarExercicioController;

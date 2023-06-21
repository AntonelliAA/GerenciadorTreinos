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
exports.EditarExercicioController = void 0;
const EditarExercicioService_1 = require("../../services/exercicios/EditarExercicioService");
class EditarExercicioController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { series, repeticoes, carga, nome, id_exercicio } = req.body;
            const editarExercicioService = new EditarExercicioService_1.EditarExercicioService();
            const exercicio = yield editarExercicioService.execute({ series, repeticoes, carga, nome, id_exercicio });
            return res.json(exercicio);
        });
    }
}
exports.EditarExercicioController = EditarExercicioController;

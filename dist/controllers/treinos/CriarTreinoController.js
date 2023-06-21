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
exports.CriarTreinoController = void 0;
const CriarTreinoService_1 = require("../../services/treinos/CriarTreinoService");
class CriarTreinoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, id_usuario } = req.body;
            const criarTreinoService = new CriarTreinoService_1.CriarTreinoService();
            const treino = yield criarTreinoService.execute({ nome, id_usuario });
            return res.json(treino);
        });
    }
}
exports.CriarTreinoController = CriarTreinoController;

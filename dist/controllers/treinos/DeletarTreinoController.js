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
exports.DeletarTreinoController = void 0;
const DeletarTreinoService_1 = require("../../services/treinos/DeletarTreinoService");
class DeletarTreinoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_treino } = req.body;
            const deletarTreinoService = new DeletarTreinoService_1.DeletarTreinoService();
            const treino = yield deletarTreinoService.execute({ id_treino });
            return res.json(treino);
        });
    }
}
exports.DeletarTreinoController = DeletarTreinoController;

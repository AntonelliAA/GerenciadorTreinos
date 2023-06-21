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
exports.ListarInformacoesUsuarioController = void 0;
const ListarInformacoesUsuarioService_1 = require("../../services/usuarios/ListarInformacoesUsuarioService");
class ListarInformacoesUsuarioController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_usuario } = req.body;
            if (!id_usuario) {
                throw new Error("Informe um id válido!");
            }
            const listarInformacoesUsuarioService = new ListarInformacoesUsuarioService_1.ListarInformacoesUsuarioService();
            const informacoesUsuario = yield listarInformacoesUsuarioService.execute({ id_usuario });
            return res.json(informacoesUsuario);
        });
    }
}
exports.ListarInformacoesUsuarioController = ListarInformacoesUsuarioController;

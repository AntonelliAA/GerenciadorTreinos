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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogarUsuarioService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class LogarUsuarioService {
    execute({ email, senha }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioExistente = yield prisma_1.default.usuarios.findFirst({
                where: {
                    email
                }
            });
            if (!usuarioExistente) {
                throw new Error("Usuário inválido!");
            }
            const usuarioLogado = yield prisma_1.default.usuarios.findFirst({
                where: {
                    email: email,
                    senha: senha
                }
            });
            if (!usuarioLogado) {
                throw new Error("Usuário inválido!");
            }
            return usuarioLogado;
        });
    }
}
exports.LogarUsuarioService = LogarUsuarioService;

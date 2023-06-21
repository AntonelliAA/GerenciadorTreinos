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
exports.CriarExercicioService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CriarExercicioService {
    execute({ series, repeticoes, carga, nome, id_usuario, id_treino, }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!series || !repeticoes || !carga || !nome || !id_treino || !id_usuario) {
                throw new Error("Preencha todos os campos!");
            }
            const exercicio = yield prisma_1.default.exercicio.create({
                data: {
                    series: series,
                    repeticoes: repeticoes,
                    carga: carga,
                    nome: nome,
                    id_usuario: id_usuario,
                    id_treino: id_treino,
                },
            });
            return exercicio;
        });
    }
}
exports.CriarExercicioService = CriarExercicioService;

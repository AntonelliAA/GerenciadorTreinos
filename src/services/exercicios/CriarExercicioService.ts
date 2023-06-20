import prismaClient from "../../prisma";

interface Exercicio {
  series: number;
  repeticoes: number;
  carga: number;
  nome: string;
  id_usuario: number;
  id_treino: number;
}

class CriarExercicioService {
  async execute({
    series,
    repeticoes,
    carga,
    nome,
    id_usuario,
    id_treino,
  }: Exercicio) {
    if (!series || !repeticoes || !carga || !nome || !id_treino || !id_usuario) {
      throw new Error("Preencha todos os campos!");
    }

    const exercicio = await prismaClient.exercicio.create({
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
  }
}

export { CriarExercicioService };

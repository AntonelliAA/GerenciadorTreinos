import prismaClient from "../../prisma";

interface Exercicio {
  series: number;
  repeticoes: number;
  carga: number;
  nome: string;
  id_exercicio: number;
}

class EditarExercicioService {
  async execute({ series, repeticoes, carga, nome, id_exercicio }: Exercicio) {
    const Exercicio = await prismaClient.exercicio.update({
      where: {
        id_exercicio: id_exercicio,
      },
      data: {
        series: series,
        repeticoes: repeticoes,
        carga: carga,
        nome: nome,
      },
    });

    return Exercicio;
  }
}

export { EditarExercicioService };

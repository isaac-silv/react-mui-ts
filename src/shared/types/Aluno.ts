export type Aluno = {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  idade: number;
  peso: number;
  altura: number;
  Fotos: string[];
}

export type AlunoFilter = {
  nome: string | null;
  sobrenome: string | null;
  email: string | null;
  idade: number | null;
  peso: number | null;
  altura: number | null;
}

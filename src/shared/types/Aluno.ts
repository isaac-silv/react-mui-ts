export type Aluno = {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  idade: number;
  peso: number;
  altura: number;
  Fotos: Foto[];
}

export type AlunoFilter = {
  id?: number;
  nome: string | null;
  sobrenome: string | null;
  email: string | null;
  idade: number | null;
  peso: number | null;
  altura: number | null;
}

type Foto = {
  url: 'string';
  filename: 'string';
}

import { Api } from '../axios-config';
import { AlunoFilter } from '../../../types/Aluno';



const getAll = async (): Promise<any> => {
  try {

    const { data } = await Api.get('/alunos/');

    if(data) {
      return data;
    }

    return new Error('Error no login');

  } catch (error: any) {
    const { errors } = error.response.data;

    return new Error(errors);
  }
};

const getById = async (id: number): Promise<any> => {
  try {

    const { data } = await Api.get(`/alunos/${id}`);

    if(data) {
      return data;
    }

    return new Error('Error de conexão');

  } catch (error: any) {
    const { errors } = error.response.data;

    return new Error(errors);
  }
};

const edit = async (id: number, alunoData: AlunoFilter): Promise<any> => {
  try {

    const { data } = await Api.put(`/alunos/${id}`, alunoData);

    if(data) {
      return data;
    }

    return new Error('Error de conexão');

  } catch (error: any) {
    const { errors } = error.response.data;

    return new Error(errors);
  }
};


export const AlunoService = {
  getAll,
  getById,
  edit,
};

import {Api} from '../axios-config';

const newFoto = async (fotoData: any, options: any) => {
  try {

    const { data } = await Api.post('/fotos', fotoData, options);

    if(data) {
      return data;
    }

    return new Error('Error de conexão');

  } catch (error: any) {
    const { errors } = error.response.data;

    return new Error(errors);
  }
};

export const FotoService = {
  newFoto,
};

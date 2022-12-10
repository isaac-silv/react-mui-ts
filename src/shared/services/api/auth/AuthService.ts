import { User } from '../../../types/User';
import { Api } from '../axios-config';

interface IAuth {
  user: User | null,
  token: string,
}

const auth = async (email: string, password: string): Promise<IAuth | Error> => {
  try {

    const { data } = await Api.post('/tokens/', {email, password});

    if(data) {
      return data;
    }

    return new Error('Error no login');

  } catch (error: any) {
    const { errors } = error.response.data;

    return new Error(errors);
  }
};

const verifyToken = async () => {
  try {

    const { data } = await Api.get('/');

    if(data) {
      return data;
    }

    return new Error('Error de autenticação');

  } catch (error: any) {
    const { errors } = error.response.data;

    return new Error(errors);
  }
};

export const AuthService = {
  auth,
  verifyToken,
};

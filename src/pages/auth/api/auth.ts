import { httpService } from 'src/services/http-service';

export interface SignInDTO {
  userName: string;
  password: string;
}

export class AuthAPI {
  static async login(data: SignInDTO) {
    const login = await httpService({
      url: '/api/auth/login',
      method: 'POST',
      data,
    });

    return login.data;
  }
}

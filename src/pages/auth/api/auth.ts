import { httpService } from 'src/services/http-service';
import { LoginDTO } from '../interface/login-dto';
import { LoginResponse } from '../interface/login-response';

export class AuthAPI {
  static async login(data: LoginDTO): Promise<LoginResponse> {
    const login = await httpService({
      url: '/api/auth/login',
      method: 'POST',
      data,
    });

    return login.data;
  }
}

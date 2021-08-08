import { httpService } from 'src/services/http-service';
import { LoginDTO } from '../interface/login-dto';
import { LoginResponse } from '../interface/login-response';

export class AuthAPI {
  static async login(data: LoginDTO) {
    const login = await httpService<LoginResponse>({
      url: '/api/auth/login',
      method: 'POST',
      data,
    });

    return login.data;
  }
}

export interface LoginResponse {
  token: string;
  user: {
    email: string;
    userId: string;
  };
  roles: string[];
}

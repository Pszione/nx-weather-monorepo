// import { LoginResponse, RegisterResponse } from '@libs/models';

export interface IAuthRepository {
  // register(email: string, password: string): Promise<RegisterResponse>;
  register(email: string, password: string): Promise<void>;
  // loginWithEmail(email: string, password: string): Promise<LoginResponse>;
  loginWithEmail(email: string, password: string): Promise<void>;
  sendPasswordResetEmail(email: string): Promise<void>;
}

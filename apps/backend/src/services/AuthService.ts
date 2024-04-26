// import { ApiError, LoginResponse, RegisterResponse, ResponseCode, UserProfile } from '@libs/models';
import { AuthRepositoryFirebase } from '../repos/implementations/AuthRepositoryFirebase';
// import { ProfileRepositoryFirebase } from '../repos/implementations/ProfileRepositoryFirebase';
import { IAuthRepository } from '../repos/interfaces/IAuthRepository';
// import { IProfileRepository } from '../repos/interfaces/IProfileRepository';
import { defaultErrorHandler } from '../utils/DefaultErrorHandler';



export class AuthService {
  private _authRepo: IAuthRepository;
  //   private _profileRepo: IProfileRepository;

  constructor(authRepo?: IAuthRepository) {
    this._authRepo = authRepo ?? new AuthRepositoryFirebase();
    // this._profileRepo = profileRepo ?? new ProfileRepositoryFirebase();
  }

  private _handleError(error: any): any {
    defaultErrorHandler(error);
  }

  async loginWithEmail(
    email: string,
    password: string
  // ): Promise<LoginResponse> {
  ): Promise<void> {
    try {
      const response = await this._authRepo.loginWithEmail(email, password);
      // if (!response.uid) {
      //   throw new ApiError(ResponseCode.OK, 'Invalid credentials or user not found');
      // }
      return response
    } catch (err) {
      return this._handleError(err);
    }
  }

  async register(data: { email: string; password: string })
  // : Promise<RegisterResponse> {
  : Promise<void> {
    try {
      const registerResponse = await this._authRepo.register(data.email, data.password);
      // data.id = registerResponse.uid
      //   await this._profileRepo.createProfile(data);
      return registerResponse
    } catch (err) {
      return this._handleError(err);
    }
  }

  async recoveryPassword(email: string) {
    try {
      return await this._authRepo.sendPasswordResetEmail(email);
    } catch (err) {
      return this._handleError(err);
    }
  }
}
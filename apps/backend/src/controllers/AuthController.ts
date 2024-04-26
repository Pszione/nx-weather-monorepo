// import { LoginResponse, UserProfile } from '@libs/models';
import { Body, Post, Route, Tags } from 'tsoa';
import { AuthService } from '../services/AuthService';
import { defaultErrorHandler } from '../utils/DefaultErrorHandler';

@Route('auth')
@Tags('auth')
export class AuthController {
    private _authService: AuthService = new AuthService();

    private _handleError(error: any): any {
        defaultErrorHandler(error);
    }

    @Post('/register/email')
    public async register(
        @Body() data: { email: string; password: string }) {
        return await this._authService.register(data);
    }

    @Post('/login/email')
    public async loginWithEmail(
        @Body() data: { email: string; password: string }
    // ): Promise<LoginResponse> {
    ): Promise<void> {
        return await this._authService.loginWithEmail(data.email, data.password);
    }

    @Post('/recovery-password')
    public async recoveryPassword(@Body() data: { email: string }) {
        return await this._authService.recoveryPassword(data.email);
    }
}
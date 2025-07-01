import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: { username: string; password: string; role: 'Admin' | 'Viewer' }) {
    try {
      return await this.authService.register(body.username, body.password, body.role);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.authService.login(body.username, body.password);
    if (!user) {
      throw new BadRequestException('Invalid username or password');
    }
    return user;
  }
}

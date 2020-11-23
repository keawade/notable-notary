import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LoginDto } from './dataTransferObjects/login.dto';
import { RegisterDto } from './dataTransferObjects/register.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: { user: LoginDto }): Promise<{ access_token }> {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() user: RegisterDto): Promise<{ access_token }> {
    return await this.authService.register(user);
  }
}

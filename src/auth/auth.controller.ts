import { Controller, Get, Post, Body, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("login")
    async login(@Body() body) {
      if (body.user === 'admin' && body.password === 'admin') {
        const id = 1; 
        const token = await this.authService.createToken(id);
        return { auth: true, token: token };
      }
     
      throw new UnauthorizedException();
    }
  
}

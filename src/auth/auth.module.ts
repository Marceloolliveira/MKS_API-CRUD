import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        ConfigModule.forRoot(),
            JwtModule.register({
            secret: process.env.SECRET,
            signOptions: {
                expiresIn: parseInt(process.env.EXPIRES)
            }
        })
    ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}




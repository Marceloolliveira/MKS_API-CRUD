import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movie.entity';

@Module({
  imports : [AuthModule,
    TypeOrmModule.forFeature([Movie])
  ],
  controllers: [MovieController],
  providers: [MovieService]
})
export class MovieModule {}

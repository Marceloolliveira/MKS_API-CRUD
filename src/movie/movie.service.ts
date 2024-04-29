import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { Movie } from './movie.entity';
import { MovieDto } from './dto/movie.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class MovieService {
    constructor(
      @InjectRepository(Movie)
      private readonly movieRepository: Repository<Movie>
    ) {}

    async getAll(): Promise<Movie[]> {
      const movies = await this.movieRepository.find();
      return movies;
    }

    async getById(id: string): Promise<Movie | null> {
      return await this.movieRepository.findOne({ where: { id } });
  }
  
     
    async insert(movieDTO: MovieDto): Promise<MovieDto> {
      const movie = plainToClass(Movie, movieDTO);
      const updatedMovie = await this.movieRepository.save(movie);
      return plainToClass(MovieDto, updatedMovie);
  }

  async update(id: string, movieDTO: MovieDto): Promise<MovieDto | null> {
    const movie = await this.movieRepository.findOne({ where: { id } });
    if (!movie) {
        return null;
    }
    Object.assign(movie, movieDTO);
    const updatedMovie = await this.movieRepository.save(movie);
    return plainToClass(MovieDto, updatedMovie);
  }

  async delete(id: string): Promise<boolean> {
    const movie = await this.movieRepository.findOne({where: {id}});
    if (!movie) {
        return false;
    }
    await this.movieRepository.remove(movie);
    return true;
  }
}

  


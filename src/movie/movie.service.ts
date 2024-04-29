import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { Movie } from './movie.entity';
import { MovieDto } from './dto/movie.dto';
import { plainToClass } from 'class-transformer';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
    @Inject(CACHE_MANAGER) 
    private cacheService: Cache,
  ) {}

  async getAll(): Promise<Movie[]> {
    const cachedMovies = await this.cacheService.get<Movie[]>('allMovies');
    if (cachedMovies) {
      console.log(`Obtendo todos os filmes do cache`);
      return cachedMovies;
    }
    
    const movies = await this.movieRepository.find();
    if (movies.length > 0) {
      await this.cacheService.set('allMovies', movies);
    }
    return movies;
  }

  async getById(id: string): Promise<Movie | null> {
    const cachedMovie = await this.cacheService.get<Movie>(id);
    if (cachedMovie) {
      console.log(`Obtendo dados do cache para o ID ${id}`);
      return cachedMovie;
    }

    const movie = await this.movieRepository.findOne({ where: { id } });
    if (movie) {
      await this.cacheService.set(id, movie);
    }
    return movie; 
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




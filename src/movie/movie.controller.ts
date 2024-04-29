import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Res } from '@nestjs/common';
import { MovieService } from './movie.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { response } from 'express';
import { MovieDto } from './dto/movie.dto';

@UseGuards(AuthGuard)
@Controller('movie')
export class MovieController {

    constructor(private readonly service: MovieService) {}

    @Get("all")
    async getAll(@Res() response) {
        const movies = await this.service.getAll();
        return response.status(200).json(movies);
    }  

    @Post('insert')
    async insert(@Res() response, @Body() movieDTO: MovieDto) {
        const insertMovie = await this.service.insert(movieDTO);
        return response.status(201).json(insertMovie);
    } 

    @Get(':id')
    async getById(@Param('id') id: string, @Res() response) {
        const movie = await this.service.getById(id);
        if (!movie) {
            return response.status(404).json({ message: 'Movie not found' });
        }
        return response.status(200).json(movie);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() movieDTO: MovieDto, @Res() response) {
        const updatedMovie = await this.service.update(id, movieDTO);
        if (!updatedMovie) {
            return response.status(404).json({ message: 'Movie not found' });
        }
        return response.status(200).json(updatedMovie);
    }

    @Delete(':id')
    async delete(@Param('id') id: string, @Res() response) {
        const deleted = await this.service.delete(id);
        if (!deleted) {
            return response.status(404).json({ message: 'Movie not found' });
        }
        return response.status(200).json({ message: 'Movie deleted successfully' });
    }
}

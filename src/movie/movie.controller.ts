import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Res } from '@nestjs/common';
import { MovieService } from './movie.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { response } from 'express';
import { MovieDto } from './dto/movie.dto';
import { ApiTags, ApiResponse, ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiTags('movies')
@Controller('movie')
export class MovieController {

    constructor(private readonly service: MovieService) {}

    @Get("all")
    @ApiOkResponse({ description: 'Returns all movies', type: [MovieDto] })
    async getAll(@Res() response) {
        const movies = await this.service.getAll();
        return response.status(200).json(movies);
    }  

    @Post('insert')
    @ApiCreatedResponse({ description: 'Movie successfully created', type: MovieDto })
    @ApiBadRequestResponse({ description: 'Invalid request body or missing fields' })
    async insert(@Res() response, @Body() movieDTO: MovieDto) {
        const insertMovie = await this.service.insert(movieDTO);
        return response.status(201).json(insertMovie);
    } 

    @Get(':id')
    @ApiOkResponse({ description: 'Returns the movie with the given ID', type: MovieDto })
    @ApiNotFoundResponse({ description: 'Movie not found' })
    async getById(@Param('id') id: string, @Res() response) {
        const movie = await this.service.getById(id);
        if (!movie) {
            return response.status(404).json({ message: 'Movie not found' });
        }
        return response.status(200).json(movie);
    }

    @Put(':id')
    @ApiOkResponse({ description: 'Movie successfully updated', type: MovieDto })
    @ApiNotFoundResponse({ description: 'Movie not found' })
    async update(@Param('id') id: string, @Body() movieDTO: MovieDto, @Res() response) {
        const updatedMovie = await this.service.update(id, movieDTO);
        if (!updatedMovie) {
            return response.status(404).json({ message: 'Movie not found' });
        }
        return response.status(200).json(updatedMovie);
    }

    @Delete(':id')
    @ApiOkResponse({ description: 'Movie successfully deleted' })
    @ApiNotFoundResponse({ description: 'Movie not found' })
    async delete(@Param('id') id: string, @Res() response) {
        const deleted = await this.service.delete(id);
        if (!deleted) {
            return response.status(404).json({ message: 'Movie not found' });
        }
        return response.status(200).json({ message: 'Movie deleted successfully' });
    }
}

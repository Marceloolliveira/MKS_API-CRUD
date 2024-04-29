import { IsPositive, Min, ValidationError, ValidatorOptions, IsNegative, IsNotEmpty } from "class-validator";

export interface ValidationPipeOptions extends ValidatorOptions {
    transform?: boolean;
    disableErrorMessages?: boolean;
    exceptionFactory?: (errors: ValidationError[]) => any;
}

export class MovieDto {

    readonly id?: string;
    
    /**
     * The title will be used to register the movie's title.
     * @example The Dark Knight
     */
    @IsNotEmpty({ message: "The title cannot be empty" })
    readonly title: string;

    /**
     * The synopsis will be used to describe the plot of the movie.
     * @example A group of superheroes must come together to save the world.
     */
    @IsNotEmpty({ message: "The synopsis cannot be empty" })
    readonly synopsis: string;

    /**
     * The director will be used to specify who directed the movie.
     * @example Christopher Nolan
     */
    @IsNotEmpty({ message: "The director cannot be empty" })
    readonly director: string;

    /**
     * The genre will be used to categorize the type of movie.
     * @example Action, Adventure, Science Fiction
     */
    @IsNotEmpty({ message: "The genre cannot be empty" })
    readonly genre: string;

    /**
     * The release year will be used to indicate when the movie was released.
     * @example 1888
     */
    @IsNotEmpty({ message: "The release year cannot be empty" })
    @IsPositive({ message: "The release year must be a positive number", each: true })
    @Min(1888, { message: "The release year must be greater than or equal to 1888" })
    readonly releaseYear: number;

    /**
     * The timestamp when the movie was created.
     * @example 2024-04-29T06:30:58.748Z
     */
    readonly created_at?: string;

    /**
     * The timestamp when the movie was last updated.
     * @example 2024-04-29T06:30:58.748Z
     */
    readonly updated_at?: string;
}

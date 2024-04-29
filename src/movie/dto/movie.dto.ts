import { IsPositive, Min, ValidationError, ValidatorOptions, IsNegative, IsNotEmpty } from "class-validator";

export interface ValidationPipeOptions extends ValidatorOptions {
    transform?: boolean;
    disableErrorMessages?: boolean;
    exceptionFactory?: (errors: ValidationError[]) => any;
}

export class MovieDto {
    readonly id?: string;

    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    readonly synopsis: string;

    @IsNotEmpty()
    readonly director: string;

    @IsNotEmpty()
    readonly genre: string;

    @IsNotEmpty()
    @IsPositive()
    @Min(1888)
    readonly releaseYear: number;

    readonly creted_at?: string;
    readonly update_at?: string;
}

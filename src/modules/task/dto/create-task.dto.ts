import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateTaskDto {

    @ApiProperty({
        description: "Please provide a title",
        maxLength: 100,
        minLength: 2,
        example: "Task 1"
    })
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    @IsNotEmpty()
    readonly title: string;


    @ApiProperty({
        description: "Please provide a description",
        maxLength: 1000,
        minLength: 50,
        example: "Task 1"
    })
    @IsString()
    @MinLength(50)
    @MaxLength(1000)
    @IsNotEmpty()
    readonly description: string;


    @ApiProperty({
        description: "Please provide a completed",
        example: true
    })
    @IsBoolean()
    @IsNotEmpty()
    readonly completed: boolean;



}

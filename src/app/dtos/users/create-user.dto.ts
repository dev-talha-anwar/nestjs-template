import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {
    
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    @Length(1,255)
    email:string

    @IsNotEmpty()
    @IsString()
    @Length(1,255)
    password:string

}

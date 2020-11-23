import { IsAlpha, IsNotEmpty, IsString, Length } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 64)
  @IsAlpha()
  username: string;

  @IsString()
  @IsNotEmpty()
  @Length(10, 128)
  password: string;
}

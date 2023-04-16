import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class SignUpDto {
  @IsString()
  @MinLength(5)
  @MaxLength(18)
  id: string;

  @IsString()
  @MinLength(2)
  @MaxLength(10)
  username: string;

  @IsString()
  @MinLength(5)
  @MaxLength(18)
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'password only accepts english and number',
  })
  password: string;
}

export class SignInDto {
  @IsString()
  @MinLength(5)
  @MaxLength(18)
  id: string;

  @IsString()
  @MinLength(5)
  @MaxLength(18)
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'password only accepts english and number',
  })
  password: string;
}

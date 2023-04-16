import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { SignInDto, SignUpDto } from './dto/auth-credential.dto';
import { User } from './user.schema';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  // signUp
  async signUp(signUpDto: SignUpDto): Promise<User> {
    return await this.userRepository.createUser(signUpDto);
  }

  // signIn
  async signIn(signInDto: SignInDto): Promise<{ accessToken: string }> {
    const { id, password } = signInDto;
    const user = await this.userRepository.findOne({ id });
    // await this.userModule.findOne({ id });

    // id & pw가 모두 일치하면 success 반환
    if (user && (await bcrypt.compare(password, user.password))) {
      // 유저 토큰 생성(Secret + Payload)
      const payload = { id };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('login failed');
    }
  }
}

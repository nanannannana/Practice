import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { SignInDto, SignUpDto } from './dto/auth-credential.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private userModule: Model<User>,
    private jwtService: JwtService,
  ) {}

  // signUp
  async createUser(signUpDto: SignUpDto): Promise<User> {
    const { id, username, password } = signUpDto;

    // password 암호화
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      // 생성한 user값 return
      return await this.userModule.create({
        id,
        username,
        password: hashedPassword,
      });
    } catch (err) {
      // id가 중복될 경우 예외 처리
      if (err.code === 11000) throw new ConflictException('Duplicate ID value');
      else throw new InternalServerErrorException();
    }
  }

  async findOne({ id }): Promise<User> {
    return await this.userModule.findOne({ id });
  }
}

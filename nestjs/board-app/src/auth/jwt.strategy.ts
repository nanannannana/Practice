import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserRepository } from './user.repository';
import { User } from './user.schema';

@Injectable()
// JwtStrategy 클래스는 PassportStrategy 클래스 상속 받음.
// Strategy 클래스는 PassportStrategy 하위 클래스로, passport-jwt모듈에서 제공하는 jwt 인증전략 구현
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userRepository: UserRepository) {
    super({
      secretOrKey: process.env.JWT_SECRET, // 토큰이 유효한 지 체크
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // JWT 토큰을 추출할 위치와 방법을 설정
      // Authorization 헤더에서 Bearer 토큰 추출
    });
  }

  async validate(payload) {
    const { id } = payload;
    const user: User = await this.userRepository.findOne({ id });

    if (!user) throw new UnauthorizedException();
    return user;
  }
}

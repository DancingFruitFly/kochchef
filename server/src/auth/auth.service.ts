import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { UserRole } from 'src/user/enums/user-role.enum';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const user = await this.usersService.create({
      username: dto.username,
      email: dto.email,
      password: dto.password,
    });

    return this.signToken(
      user._id.toString(),
      user.email,
      user.username,
      user.role,
    );
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.findByEmail(dto.email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordMatches = await bcrypt.compare(dto.password, user.password);

    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.signToken(
      user._id.toString(),
      user.email,
      user.username,
      user.role,
    );
  }

  private async signToken(
    userId: string,
    email: string,
    username: string,
    role: UserRole,
  ) {
    const payload = {
      sub: userId,
      email,
      username,
      role,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        id: userId,
        email,
        username,
        role,
      },
    };
  }
}

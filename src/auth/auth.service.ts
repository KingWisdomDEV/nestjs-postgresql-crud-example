import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    // private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(
    walletAddress: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersRepository.findOne({where: {walletAddress}});
    // if (user?.password !== pass) {
    //   throw new UnauthorizedException();
    // }
    const payload = {  walletAddress: user.walletAddress };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
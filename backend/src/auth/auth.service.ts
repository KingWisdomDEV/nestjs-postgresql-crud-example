import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
        private jwtService: JwtService,
    ) {}

    async signIn(
        username: string,
        password: string,
    ): Promise<{ access_token: string }> {
        const user = await this.usersRepository.findOne({
            where: { username },
        });
        const isMatch = await bcrypt.compare(password, user?.password);

        if (!isMatch) {
            throw new UnauthorizedException();
        }
        const payload = { userId: user.id, username: user.username };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}

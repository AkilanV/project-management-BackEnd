import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  //  Register Api

  async register(username: string, password: string, role: 'Admin' | 'Viewer') {
    const user = this.userRepo.create({ username, password, role });
    return await this.userRepo.save(user);
  }

  //  Login Api

  async login(username: string, password: string) {
    return await this.userRepo.findOne({ where: { username, password } });
  }
}

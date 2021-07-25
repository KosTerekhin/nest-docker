import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import Post from './app.entity';

@Injectable()
export class AppService {
  constructor(private readonly postRepository: Repository<Post>) {}

  getHello(): any {
    console.log('AppService running');
    return 'Hello World';
  }

  async postData({ title }): Promise<Post> {
    return await this.postRepository.save({ title });
  }
}

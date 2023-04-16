import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './boards.repository';
import { Board } from './board.schema';
import { ObjectId } from 'mongoose';
import { User } from 'src/auth/user.schema';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}

  // Read
  async getBoardAll(user: User): Promise<Board[]> {
    return await this.boardRepository.findAll(user);
  }

  async getBoardById(id: ObjectId): Promise<Board> {
    const found = await this.boardRepository.findOne(id);
    if (!found) throw new NotFoundException(`Can't find Board with id ${id}`);
    return found;
  }

  //create
  async createBoard(
    createBoardDto: CreateBoardDto,
    user: User,
  ): Promise<Board> {
    return await this.boardRepository.create(createBoardDto, user);
  }

  // Update
  async updateBoard(id: ObjectId, status: string): Promise<Board> {
    return await this.boardRepository.update(id, status);
  }

  // Delete
  async deleteBoard(id: ObjectId, user: User): Promise<string> {
    return await this.boardRepository.deleteBoard(id, user);
  }
}

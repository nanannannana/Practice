import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './boards.repository';
import { Board } from './board.schema';
import { ObjectId } from 'mongoose';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}

  // Read
  async getBoardAll(): Promise<Board[]> {
    return await this.boardRepository.findAll();
  }

  async getBoardById(id: ObjectId): Promise<Board> {
    const found = await this.boardRepository.findOne(id);
    if (!found) throw new NotFoundException(`Can't find Board with id ${id}`);
    return found;
  }

  //create
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return await this.boardRepository.create(createBoardDto);
  }

  // Update
  async updateBoard(id: ObjectId, status: string): Promise<Board> {
    return await this.boardRepository.update(id, status);
  }

  // Delete
  async deleteBoard(id: ObjectId): Promise<string> {
    return await this.boardRepository.deleteBoard(id);
  }
}

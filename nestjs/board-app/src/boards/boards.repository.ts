import { InjectModel } from '@nestjs/mongoose';
import { Board } from './board.schema';
import { Model, ObjectId } from 'mongoose';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';
import { NotFoundException } from '@nestjs/common';

export class BoardRepository {
  constructor(@InjectModel(Board.name) private boardModel: Model<Board>) {}

  async findAll(): Promise<Board[]> {
    return await this.boardModel.find().exec();
  }

  async findOne(id: ObjectId): Promise<Board> {
    return await this.boardModel.findById(id);
  }

  async create(createBoardDto: CreateBoardDto): Promise<Board> {
    const board = {
      title: createBoardDto.title,
      description: createBoardDto.description,
      status: BoardStatus.PUBLIC,
    };
    const createdBoard = new this.boardModel(board);
    return await createdBoard.save();
  }

  async update(id: ObjectId, status: string): Promise<Board> {
    // 수정된 게시물 반환
    const result = await this.boardModel.findOneAndUpdate(
      { _id: id },
      { status },
      { new: true },
    );
    return result;
  }

  async deleteBoard(id: ObjectId): Promise<string> {
    // 삭제된 게시물 개수 반환
    const result = await this.boardModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0)
      throw new NotFoundException(`Can't delete Board with id ${id}`);
    else return '삭제 완료';
  }
}

import { InjectModel } from '@nestjs/mongoose';
import { Board } from './board.schema';
import { Model, ObjectId } from 'mongoose';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';
import { NotFoundException } from '@nestjs/common';
import { User } from 'src/auth/user.schema';

export class BoardRepository {
  constructor(@InjectModel(Board.name) private boardModel: Model<Board>) {}

  async findAll(user: User): Promise<Board[]> {
    return await this.boardModel.find({ user: user._id }).exec();
  }

  async findOne(id: ObjectId): Promise<Board> {
    return await this.boardModel.findById(id);
  }

  async create(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
    const board = {
      title: createBoardDto.title,
      description: createBoardDto.description,
      status: BoardStatus.PUBLIC,
      user,
    };
    return await new this.boardModel(board).save();
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

  async deleteBoard(id: ObjectId, user: User): Promise<string> {
    // 삭제된 게시물 개수 반환
    const result = await this.boardModel
      .deleteOne({ _id: id, user: user._id })
      .exec();
    if (result.deletedCount === 0)
      throw new NotFoundException(`Can't delete Board with id ${id}`);
    else return '삭제 완료';
  }
}

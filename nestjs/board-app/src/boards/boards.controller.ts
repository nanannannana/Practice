import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.schema';
import { ObjectId } from 'mongoose';
import { ValidateObjectId } from './pipes/validate-object-id.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}
  //Read
  @Get()
  getBoardAll(): Promise<Board[]> {
    return this.boardService.getBoardAll();
  }

  @Get('/:id')
  getBoardById(@Param('id', ValidateObjectId) id: ObjectId): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  //Create
  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardService.createBoard(createBoardDto);
  }

  //Update
  @Patch('/:id/status')
  updateBoard(
    @Param('id') id: ObjectId,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ): Promise<Board> {
    return this.boardService.updateBoard(id, status);
  }

  //Delete
  @Delete()
  deleteBoard(@Body('id', ValidateObjectId) id: ObjectId): Promise<string> {
    return this.boardService.deleteBoard(id);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  UseGuards,
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
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.schema';

@Controller('boards')
@UseGuards(AuthGuard())
export class BoardsController {
  private logger = new Logger('BoardsController');
  constructor(private boardService: BoardsService) {}
  //Read
  @Get()
  getBoardAll(@GetUser() user: User): Promise<Board[]> {
    this.logger.verbose(`User ${user.username} trying to get all boards`);
    return this.boardService.getBoardAll(user);
  }

  @Get('/:id')
  getBoardById(@Param('id', ValidateObjectId) id: ObjectId): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  //Create
  @Post()
  @UsePipes(ValidationPipe)
  createBoard(
    @Body() createBoardDto: CreateBoardDto,
    @GetUser() user: User,
  ): Promise<Board> {
    this.logger.verbose(
      `User ${user.username} creating a new board. Payload: ${JSON.stringify(
        createBoardDto,
      )}`,
    );
    return this.boardService.createBoard(createBoardDto, user);
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
  deleteBoard(
    @Body('id', ValidateObjectId) id: ObjectId,
    @GetUser() user: User,
  ): Promise<string> {
    return this.boardService.deleteBoard(id, user);
  }
}

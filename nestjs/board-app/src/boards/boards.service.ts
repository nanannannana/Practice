import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid'; //uuid모듈의 v1버전 사용
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  // Read
  //[1] boards 배열에 포함된 모든 값 조회
  getAllBoards(): Board[] {
    return this.boards;
  }
  //[2] 특정 게시물 가져오기(ID)
  getBoardById(id: string): Board {
    const found = this.boards.find((v) => v.id === id);
    if (!found) throw new NotFoundException(`Can't find Board witn id ${id}`);
    return found;
  }

  // Create
  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(), //uuid모듈을 사용하여 unique한 값 생성
      title, //title: title
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }

  //Update
  updateBoardStatus(id: string, status: BoardStatus): Board {
    // 업데이트 할 게시물 조회
    const board = this.getBoardById(id);
    // 상태값 업데이트
    board.status = status;
    // 업데이트 된 게시물 return
    return board;
  }

  // Delete
  deleteBoard(id: string): void {
    const found = this.getBoardById(id);
    this.boards.filter((v) => v.id !== found.id);
  }
}

import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];
  transform(value: any) {
    // 데이터값 대문자로 변환
    value = value.toUpperCase();
    // status에 value값이 없을 경우, 예외 발생
    if (!this.isStatusValid(value))
      throw new BadRequestException(`${value} isn't in the status options`);
    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}

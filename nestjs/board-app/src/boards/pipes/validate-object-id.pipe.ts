import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class ValidateObjectId implements PipeTransform {
  transform(value: any) {
    if (!Types.ObjectId.isValid(value) || typeof value === 'number')
      throw new BadRequestException(`Invalid ID ${value}`);
    return value;
  }
}

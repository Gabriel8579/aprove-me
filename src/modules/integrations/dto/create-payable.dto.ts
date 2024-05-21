import { Type } from 'class-transformer';
import {
  IsDateString,
  IsDefined,
  IsEmail,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

export abstract class Payable {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  value: number;

  @IsDateString()
  emissionDate: Date;

  @IsUUID()
  @IsOptional()
  assignor?: string;
}

export abstract class Assignor {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  @MaxLength(30)
  @MinLength(11)
  document: string;

  @IsEmail()
  @MaxLength(140)
  email: string;

  @IsPhoneNumber('BR')
  @MaxLength(20)
  phone: string;

  @IsString()
  @MaxLength(140)
  name: string;
}

export abstract class CreatePayableDto {
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => Payable)
  payable: Payable;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => Assignor)
  assignor: Assignor;
}

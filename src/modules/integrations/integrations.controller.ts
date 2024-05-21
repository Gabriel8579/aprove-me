import { Body, Controller, Post } from '@nestjs/common';
import { CreatePayableDto } from './dto/create-payable.dto';

@Controller('integrations')
export class IntegrationsController {
  @Post('payable')
  payable(@Body() payload: CreatePayableDto): CreatePayableDto {
    return payload;
  }
}

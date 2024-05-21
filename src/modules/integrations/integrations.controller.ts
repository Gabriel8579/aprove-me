import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreatePayableDto } from './dto/create-payable.dto';

@Controller('integrations')
@ApiTags('Integrações')
export class IntegrationsController {
  @Post('payable')
  @ApiBody({ type: CreatePayableDto })
  @ApiCreatedResponse({ type: CreatePayableDto })
  payable(@Body() payload: CreatePayableDto): CreatePayableDto {
    return payload;
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreatePayableDto } from './dto/create-payable.dto';
import { IntegrationsService } from './services/integrations.service';

@Controller('integrations')
@ApiTags('Integrações')
export class IntegrationsController {
  constructor(private readonly integrationsService: IntegrationsService) {}

  @Post('payable')
  @ApiBody({ type: CreatePayableDto })
  @ApiCreatedResponse({ type: CreatePayableDto })
  async payable(@Body() payload: CreatePayableDto): Promise<CreatePayableDto> {
    return this.integrationsService.createNewPayable(payload);
  }
}

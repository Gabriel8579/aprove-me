import { Injectable } from '@nestjs/common';
import { CreatePayableDto } from '../dto/create-payable.dto';
import { PayablesRepository } from 'src/modules/prisma/repositories/payables.repository';

@Injectable()
export class IntegrationsService {
  constructor(private readonly payablesRepository: PayablesRepository) {}

  async createNewPayable(data: CreatePayableDto): Promise<CreatePayableDto> {
    const payable = {
      value: data.payable.value,
      emissionDate: data.payable.emissionDate,
    };

    const assignor = {
      name: data.assignor.name,
      document: data.assignor.document,
      email: data.assignor.email,
      phone: data.assignor.phone,
    };

    const payableCreated = await this.payablesRepository.createNewPayable(
      payable,
      assignor,
    );

    return payableCreated;
  }
}

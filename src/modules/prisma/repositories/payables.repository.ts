import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PayableService } from '../services/payable.service';

@Injectable()
export class PayablesRepository {
  constructor(private readonly payableService: PayableService) {}

  async createNewPayable(
    payable: Prisma.PayableCreateWithoutAssignorInput,
    assignor: Prisma.AssignorCreateInput,
  ): Promise<any> {
    const payableCreated = await this.payableService.create({
      ...payable,
      assignor: {
        connectOrCreate: {
          create: assignor,
          where: {
            document: assignor.document,
          },
        },
      },
    });

    return payableCreated;
  }
}

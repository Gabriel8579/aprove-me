import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AssignorService } from './services/assignor.service';
import { PayableService } from './services/payable.service';
import { PayablesRepository } from './repositories/payables.repository';

@Module({
  providers: [
    AssignorService,
    PrismaService,
    PayableService,
    PayablesRepository,
  ],
  exports: [PrismaService, PayablesRepository],
})
export class PrismaModule {}

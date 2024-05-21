import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AssignorService } from './services/assignor.service';
import { PayableService } from './services/payable.service';

@Module({
  providers: [AssignorService, PrismaService, PayableService],
  exports: [AssignorService, PrismaService, PayableService],
})
export class PrismaModule {}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Payable, Prisma } from '@prisma/client';

@Injectable()
export class PayableService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.PayableCreateInput): Promise<Payable> {
    return this.prisma.payable.create({ data });
  }
}

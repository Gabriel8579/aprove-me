import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Assignor, Prisma } from '@prisma/client';

@Injectable()
export class AssignorService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.AssignorCreateInput): Promise<Assignor> {
    return this.prisma.assignor.create({ data });
  }
}

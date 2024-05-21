import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { IntegrationsModule } from './modules/integrations/integrations.module';

@Module({
  imports: [ConfigModule.forRoot(), IntegrationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

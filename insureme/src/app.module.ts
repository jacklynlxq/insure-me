import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({  // to use variables from .env
      envFilePath: ".env"
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

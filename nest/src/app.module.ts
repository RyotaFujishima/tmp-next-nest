import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TestModule } from './test/test.module'
import options from './ormconfig'

@Module({
  imports: [TypeOrmModule.forRoot(options), TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

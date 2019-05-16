import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://localhost/customer-app', { useNewUrlParser: true }),
      CustomerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/*//127.0.0.1:27017/?gssapiServiceName=mongodb*/

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './customer/customer.module';
import { SurveyModule } from './survey/survey.module';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb+srv://admin:admin2019@cluster0-4wse7.mongodb.net/test?retryWrites=true' || 'mongodb://localhost/customer-app', { useNewUrlParser: true }),
      CustomerModule,
      SurveyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


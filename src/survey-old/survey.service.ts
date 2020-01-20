import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Survey} from './interfaces/survey.interface';
import {CreateSurveyDTO} from './dto/create-survey.dto';

@Injectable()
export class SurveyService {
    constructor(@InjectModel('Survey') private readonly surveyModel: Model<Survey>) { }
    async getAllSurvey(): Promise<Survey[]> {
        return await this.surveyModel.find().exec();
    }

    async addSurvey(createSurveyDTO: CreateSurveyDTO): Promise<Survey> {
        const newSurvey = await this.surveyModel(createSurveyDTO);
        return newSurvey.save();
    }
}

import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { CreateSurveyDTO } from './dto/create-survey.dto';

@Controller('survey')
export class SurveyController {
    constructor(private surveyService: SurveyService) { }

    @Post('/create')
    async addSurvey(@Res() res, @Body() createSurveyDTO: CreateSurveyDTO) {
        const survey = await this.surveyService.addSurvey(createSurveyDTO);
        return res.status(HttpStatus.OK).json({
            message: "Survey has been created successfully",
            survey
        })
    }

    @Get('surveys')
    async getAllSurvey(@Res() res) {
        const surveys = await this.surveyService.getAllSurvey();
        return res.status(HttpStatus.OK).json(surveys);
    }
}

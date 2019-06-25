import { Controller, Get, Post, Body } from '@nestjs/common';
import TechnologyService from 'src/technologies/services/technology.service';
import CreateTechnologyDto from '../dto/create-technology-dto'


@Controller("technology")
export default class TechnologyController {
    constructor(private readonly technologyService: TechnologyService){}

    @Get()
    async getTechnologies(){
        return this.technologyService.getAllTechnologies();
    }

    @Post()
    create(@Body() createtechnologyDto:CreateTechnologyDto):any{
        return {
            created:true
        }
    }
}
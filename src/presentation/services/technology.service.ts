import {Injectable} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import  Technology  from '../../domain/interfaces/technology.interface';



@Injectable()
export default class TechnologyService{
    //se injecta la dependencia indicando la coleccion dentro de la db
    constructor(@InjectModel('tecnologias') private readonly technologyModel: Model<Technology>){}

    async getAllTechnologies():Promise<Technology[]>{
        const technologies = await this.technologyModel.find().exec();
        return technologies;
    }
}
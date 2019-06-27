import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import TechnologyController from './presentation/controllers/technology.controller';
import TechnologyService from './presentation/services/technology.service';
import Enviroment from './../enviroment';
import {TechnologySchema} from './data/schemas/technology.schema'
const s = new Enviroment();


@Module({
  //se entrega la conexion al db
  //tambien se pueden importar modulos
  imports: [
    MongooseModule.forRoot(s.getURL(),{useNewUrlParser:true}),
    MongooseModule.forFeature([{ name: 'tecnologias', schema: TechnologySchema }])
  ],
  controllers: [TechnologyController],
  providers: [TechnologyService],
})
export class AppModule {}

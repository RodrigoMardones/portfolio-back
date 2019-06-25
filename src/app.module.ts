import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
/* import { AppController } from './app.controller';
import { AppService } from './app.service'; */
import TechnologyController from './technologies/controllers/technology.controller';
import TechnologyService from './technologies/services/technology.service';
import Enviroment from './../enviroment';
import {TechnologySchema} from './technologies/schemas/technology.schema'
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

import {IsString , IsNumber} from 'class-validator'; 

export default class CreateTechnologyDto {
    @IsString()
    readonly tecnologia:string;
    
    @IsNumber()
    readonly estrellas:number;
}

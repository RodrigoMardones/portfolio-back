import {Document} from 'mongoose';

export default interface Technology extends Document{
    readonly tecnologia:string;
    readonly estrellas:number;
}
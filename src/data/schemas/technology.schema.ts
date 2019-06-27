import * as mongoose from 'mongoose';

export const TechnologySchema = new mongoose.Schema({
    tecnologia:String,
    estrellas:Number
})

import {Schema} from "mongoose";
import { ISpace } from './space.schema';
import { ISpecies } from "./species.schema";

export interface IAnimal{
    _id: string;
    space?: string | ISpace;
    name: string;
    description: string;
    images: string[];
    species: string | ISpecies;
    bornOn: Date;
    diedOn?: Date;
}

export const animalSchema = new Schema<IAnimal>({
    space: {
        type: Schema.Types.ObjectId,
        ref: "Space",
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: [{
            type: String,
            required: true
        }],
        required: true,
        default: []
    },
    species: {
        type: Schema.Types.ObjectId,
        ref: "Species",
        required: true
    },
    bornOn: {
        type: Date,
        required: true
    },
    diedOn: {
        type: Date,
        required: false
    }
}, {
    timestamps: true,
    collection: 'animal',
    versionKey: false
});
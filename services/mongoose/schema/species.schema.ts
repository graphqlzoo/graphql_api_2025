import {Schema} from "mongoose";

export interface ISpecies{
    _id: string;
    name: string;
    description: string;
    images: string[];
    createdAt: string;
    updatedAt: string;
}

export const speciesSchema = new Schema<ISpecies>({
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
    }
}, {
    timestamps: true,
    collection: 'species',
    versionKey: false
});
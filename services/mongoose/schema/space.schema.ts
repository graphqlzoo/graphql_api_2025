import { Schema } from "mongoose";

export interface ISpace{
    _id: string;
    name: string;
    description: string;
    images: string[];
    types: string[];
    openingHours: number; // 10h25 -> 60*10 + 25
    closingHours: number; // 17h25 -> 60*17 + 25
    disabled: boolean;
    createdAt: string;
    updatedAt: string;
}

const spaceTypes = [
  "Hot",
  "Savanna",
  "Taiga",
  "Tundra",
  "Mountain",
  "Desert",
  "Cold",
  "Humid",
  "Tropical",
  "Other"
];


export const spaceSchema = new Schema<ISpace>({
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
    types: {
        type: [{
            type: String,
            enum: spaceTypes,
            required: true
        }],
        required: true
    },
    openingHours: {
        type: Number,
        required: true
    },
    closingHours: {
        type: Number,
        required: true
    },
    disabled: {
        type: Boolean,
        required: true,
        default: false
    },
}, {
    timestamps: true,
    collection: 'spaces',
    versionKey: false
});
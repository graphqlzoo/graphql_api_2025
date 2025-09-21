import { Schema } from "mongoose";
import { IAnimal } from "./animal.schema";

export interface ISpectacle {
  _id: string;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  animals: (string | IAnimal)[];
}

export const spectacleSchema = new Schema<ISpectacle>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    animals: [
      {
        type: Schema.Types.ObjectId,
        ref: "animal",
        required: false,
      },
    ],
  },
  {
    timestamps: true,
    collection: "spectacle",
    versionKey: false,
  }
);

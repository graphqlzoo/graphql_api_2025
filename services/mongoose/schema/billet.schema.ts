import {Schema} from "mongoose";
import { IUser } from "./user.schema";

enum enumBilletType {
  VIP = "VIP",
  STANDARD = "STANDARD",
  ECONOMY = "ECONOMY"
}

export interface IBillet{
  id: string;
  user: IUser;
  firstNameOfBeneficiary: string;
  lastNameOfBeneficiary: string;
  price: number;
  type: enumBilletType;
  endOfValidityDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export const billetSchema = new Schema<IBillet>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    firstNameOfBeneficiary: {
        type: String,
        required: true
    },
    lastNameOfBeneficiary: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: Object.values(enumBilletType),
        required: true
    },
    endOfValidityDate:{
        type: Date,
        required: true
    }
}, {
    timestamps: true,
    collection: 'ticket',
    versionKey: false,
});
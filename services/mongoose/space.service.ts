import { Model } from "mongoose";
import { MongooseService } from "./mongoose.service";
import { ISpace, spaceSchema } from "./schema";
import { spacesDefaultDb } from "../../utils";

export type ICreateSpace = Omit<ISpace, '_id' | 'createdAt' | 'updatedAt' | 'images'>;

export class SpaceService {

  readonly mongooseService: MongooseService;
  readonly spaceModel: Model<ISpace>;

  constructor(mongooseService: MongooseService) {
      this.mongooseService = mongooseService;
      this.spaceModel = this.mongooseService.mongoose.model("Space", spaceSchema);
  }

  createSpace(space: ICreateSpace): Promise<ISpace> {
    return this.spaceModel.create(space);
  }

  getAllSpaces(): Promise<ISpace[]> {
    return this.spaceModel.find().exec();
  }
}
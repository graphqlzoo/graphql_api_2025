import { Model, FilterQuery, isValidObjectId } from "mongoose";
import { MongooseService } from "./mongoose.service";
import { spectacleSchema, ISpectacle } from "./schema/spectacle.schema";

export type ICreateSpectacle = Omit<ISpectacle, "_id" | "createdAt" | "updatedAt">;

export class SpectacleService {
  readonly mongooseService: MongooseService;
  readonly spectacleModel: Model<ISpectacle>;

  constructor(mongooseService: MongooseService) {
    this.mongooseService = mongooseService;
    this.spectacleModel = this.mongooseService.mongoose.model("spectacle", spectacleSchema);
  }

  createSpectacle(spectacle: ICreateSpectacle): Promise<ISpectacle> {
    return this.spectacleModel.create(spectacle);
  }

  allSpectacles(): Promise<ISpectacle[]> {
    return this.spectacleModel.find().populate("animals");
  }

  spectacleById(id: string): Promise<ISpectacle | null> {
    if (isValidObjectId(id)) {
      const filter: FilterQuery<ISpectacle> = { _id: id };
      return this.spectacleModel.findOne(filter).populate("animals");
    }
    return Promise.reject(new Error("Invalid spectacle id"));
  }
}

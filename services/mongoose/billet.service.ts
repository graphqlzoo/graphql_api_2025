import { Model } from "mongoose";
import { MongooseService } from "./mongoose.service";
import { IBillet } from "./schema";
import { billetSchema } from './schema/billet.schema';

export type ICreateBillet = Omit<IBillet, '_id' | 'createdAt' | 'updatedAt' | 'user'> &  Partial<Pick<IBillet, 'user'>>

export class BilletService {

  readonly mongooseService: MongooseService;
  readonly billetModel: Model<IBillet>;

  constructor(mongooseService: MongooseService) {
      this.mongooseService = mongooseService;
      this.billetModel = this.mongooseService.mongoose.model("Billet", billetSchema);
  }

  createBillet(billet: ICreateBillet): Promise<IBillet> {
    return this.billetModel.create(billet);
  }

  getAllBillet(): Promise<IBillet[]> {
    return this.billetModel.find().populate('user').exec();
  }
}
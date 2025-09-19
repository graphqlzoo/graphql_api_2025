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

  getAllBilletByUserId(userId : string): Promise<IBillet[]> {
    return this.billetModel.find({user: userId}).populate('user').exec();
  }

  getBilletById(id : string): Promise<IBillet | null> {
    return this.billetModel.findById(id).populate('user').exec();
  }

  deleteBillet(id : string): Promise<IBillet | null> {
    return this.billetModel.findByIdAndDelete(id).exec();
  }

  patchBillet(billet: ICreateBillet): Promise<IBillet> {
    const updateData: Partial<ICreateBillet> = {};

    // Only add fields that are defined
    if (billet.firstNameOfBeneficiary !== undefined) {
      updateData.firstNameOfBeneficiary = billet.firstNameOfBeneficiary;
    }
    if (billet.lastNameOfBeneficiary !== undefined) {
      updateData.lastNameOfBeneficiary = billet.lastNameOfBeneficiary;
    }
    if (billet.type !== undefined) {
      updateData.type = billet.type;
    }
    if (billet.price !== undefined) {
      updateData.price = billet.price;
    }

    // Update only the fields provided
    return this.billetModel
      .findByIdAndUpdate(billet.id, updateData, { new: true })
      .exec() as Promise<IBillet>;
  }
}
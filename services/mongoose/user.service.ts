import { Model } from "mongoose";
import { SecurityUtils } from "../../utils";
import {MongooseService} from "./mongoose.service";
import { IUser, userSchema } from "./schema";

export type ICreateUser = Omit<IUser, '_id' | 'createdAt' | 'updatedAt'>;

export class UserService {

  readonly mongooseService: MongooseService;
  readonly userModel: Model<IUser>;

  constructor(mongooseService: MongooseService) {
      this.mongooseService = mongooseService;
      this.userModel = this.mongooseService.mongoose.model("User", userSchema);
  }

  createUser(user: ICreateUser): Promise<IUser> {
    user.password = SecurityUtils.sha256(user.password);
    return this.userModel.create(user);
  }

  findValidUser(login: string, password: string): Promise<IUser | null> {
    const encryptPassword = SecurityUtils.sha256(password);
    return this.userModel.findOne({
        login: login,
        password: encryptPassword,
    });
  }
}
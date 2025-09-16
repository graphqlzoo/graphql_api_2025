import {Mongoose, connect} from "mongoose";
import {UserService} from "./user.service";
import dotenv from "dotenv";

dotenv.config();

export class MongooseService {

    private static instance?: MongooseService;
    public mongoose: Mongoose;
    public userService: UserService;

    private constructor(mongoose: Mongoose) {
        this.mongoose = mongoose;
        this.userService = new UserService(this);
    }

    public static async getInstance(): Promise<MongooseService> {
        if (!MongooseService.instance) {
            const connection = await MongooseService.openConnection();
            MongooseService.instance = new MongooseService(connection);
        }
        return MongooseService.instance;
    }

    private static openConnection(): Promise<Mongoose> {
        return connect(process.env.MONGODB_URI as string)
    };
}
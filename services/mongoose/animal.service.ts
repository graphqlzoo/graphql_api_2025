import {Model, FilterQuery, isValidObjectId} from "mongoose";
import {MongooseService} from "./mongoose.service";
import {animalSchema, IAnimal} from "./schema";

export type ICreateAnimal = Omit<IAnimal, '_id' | 'createdAt' | 'updatedAt' | 'images' | 'diedOn'> &
                            Partial<Pick<IAnimal, 'images'>>

export class AnimalService {

    readonly mongooseService: MongooseService;
    readonly animalModel: Model<IAnimal>;

    constructor(mongooseService: MongooseService) {
        this.mongooseService = mongooseService;
        this.animalModel = this.mongooseService.mongoose.model("animal", animalSchema);
    }

    createAnimal(animal: ICreateAnimal): Promise<IAnimal> {
        return this.animalModel.create(animal);
    }

    allAnimals(): Promise<IAnimal[]> {
        return this.animalModel.find();
    }

    animalBySpaceId(id:string): Promise<IAnimal[]> {
        if(isValidObjectId(id)) {
            const filter: FilterQuery<IAnimal> = {space: id};
            return this.animalModel.find(filter).populate('space').populate('species');
        }
        return Promise.reject(new Error('Invalid space id'));
    }
}
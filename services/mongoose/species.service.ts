import {Model} from "mongoose";
import {MongooseService} from "./mongoose.service";
import {ISpecies, speciesSchema} from "./schema";
import { speciesDefaultDb } from "../../utils";

export type ICreateSpecies = Omit<ISpecies, '_id' | 'createdAt' | 'updatedAt' | 'images'> & Partial<Pick<ISpecies, 'images'>>

export class SpeciesService {

    readonly mongooseService: MongooseService;
    readonly speciesModel: Model<ISpecies>;

    constructor(mongooseService: MongooseService) {
        this.mongooseService = mongooseService;
        this.speciesModel = this.mongooseService.mongoose.model("Species", speciesSchema);
    }

    createSpecies(species: ICreateSpecies): Promise<ISpecies> {
        return this.speciesModel.create(species);
    }

    allSpecies(): Promise<ISpecies[]> {
        return this.speciesModel.find();
    }
}
import {Mongoose, connect} from "mongoose";
import {UserService} from "./user.service";
import dotenv from "dotenv";
import { SpaceService } from './space.service';
import { SpeciesService } from "./species.service";
import { animalsDefaultForestDb,animalsDefaultSavannaDb,animalsDefaultMountainDb, spacesDefaultDb, speciesDefaultDb } from "../../utils";
import { AnimalService } from "./animal.service";
import { BilletService } from "./billet.service";
import { SpectacleService } from "./spectacle.service";

dotenv.config();

export class MongooseService {

    private static instance?: MongooseService;
    public mongoose: Mongoose;
    public userService: UserService;
    public spaceService: SpaceService;
    public speciesService: SpeciesService;
    public animalService: AnimalService;
    public spectacleService: SpectacleService;
    public billetService: BilletService;

    private constructor(mongoose: Mongoose) {
        this.mongoose = mongoose;
        this.userService = new UserService(this);
        this.spaceService = new SpaceService(this);
        this.speciesService = new SpeciesService(this);
        this.spectacleService = new SpectacleService(this);
        this.animalService = new AnimalService(this);
        this.billetService = new BilletService(this);
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

    
    public async seedDb() {
        const animals = await this.animalService.allAnimals();
        if (animals.length > 0) {
            console.log("DB already seeded!");
            return;
        }
        // Create spaces
        const createdSpaces = [];
        for (const space of spacesDefaultDb) {
            const s = await this.spaceService.createSpace(space);
            createdSpaces.push(s);
        }

        // Create species
        const createdSpecies = [];
        for (const sp of speciesDefaultDb) {
            const s = await this.speciesService.createSpecies(sp);
            createdSpecies.push(s);
        }

        const spaceMap = [
            { spaceName: "Forêt", animals: animalsDefaultForestDb },
            { spaceName: "Savane", animals: animalsDefaultSavannaDb },
            { spaceName: "Montagne", animals: animalsDefaultMountainDb }
        ];
        
        for (const { spaceName, animals } of spaceMap) {
            const spaceObj = createdSpaces.find(s => s.name === spaceName);
            if (!spaceObj) continue;

            for (const animal of animals) {
                const speciesObj = createdSpecies.find(s => s.name === animal.species);
                if (!speciesObj) continue;
                await this.animalService.createAnimal({
                    ...animal,
                    space: spaceObj._id,
                    species: speciesObj._id
                });
            }
        }

        console.log("Default DB seeded!");
    }
}
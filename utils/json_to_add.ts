import { ICreateAnimal } from "../services/mongoose/animal.service";
import { ICreateSpace } from "../services/mongoose/space.service";
import { ICreateSpecies } from "../services/mongoose/species.service";

export const spacesDefaultDb : ICreateSpace[] = [
  {
    name: "Savane",
    description : "Espace avec des herbes hautes et quelques arbres",
    types : ["Savanna", "Tropical"],
    openingHours : 9*60,
    closingHours : 18*60,
    disabled : false
  },
  {
    name: "Montagne",
    description : "Espace avec des rochers et des arbres",
    types : ["Mountain", "Cold"],
    openingHours : 10*60,
    closingHours : 17*60,
    disabled : false
  },
  {
    name: "Forêt",
    description : "Espace avec des arbres et des buissons",
    types : ["Taiga", "Humid"],
    openingHours : 9*60,
    closingHours : 18*60,
    disabled : false
  },
  {
    name: "Désert",
    description : "Espace sec avec des cactus et des rochers",
    types : ["Desert", "Hot"],
    openingHours : 10*60,
    closingHours : 16*60,
    disabled : true
  }
];

export const speciesDefaultDb : ICreateSpecies[] = [
  {
    name: "Feline",
    description: "Big cats",
  },
  {
    name: "Canine",
    description: "Wolves, dogs, foxes...",
  },
  {
    name: "Ursidae",
    description: "Bears",
  },
  {
    name : "Cervidae",
    description : "Deers and mooses"
  }
];

export const animalsDefaultSavannaDb : ICreateAnimal[] = [
  {
    name: "Lion",
    description: "King of the jungle",
    species: "Feline",
    bornOn: new Date(),
  },
  {
    name: "Lioness",
    description: "Queen of the jungle",
    species: "Feline",
    bornOn: new Date("2021-06-10"),
  },
  {
    name: "Tiger",
    description: "Big striped cat",
    species: "Feline",
    bornOn: new Date("2020-05-15"),
  },
];

export const animalsDefaultMountainDb : ICreateAnimal[] = [
  {
    name: "Wolf",
    description: "Wild dog",
    species: "Canine",
    bornOn: new Date("2019-03-22"),
  },
  {
    name: "Bear",
    description: "Large mammal",
    species: "Ursidae",
    bornOn: new Date("2018-11-30"),
  },
  {
    name : "White fox",
    description : "Small white fox",
    species : "Canine",
    bornOn : new Date("2022-01-15")
  },
]

export const animalsDefaultForestDb : ICreateAnimal[] = [
  {
    name: "Deer",
    description: "Graceful herbivore",
    species: "Cervidae",
    bornOn: new Date("2021-04-18"),
  },
  {
    name: "Moose",
    description: "Large antlered mammal",
    species: "Cervidae",
    bornOn: new Date("2017-09-05"),
  },
  {
    name: "Brown Bear",
    description: "Forest-dwelling bear",
    species: "Ursidae",
    bornOn: new Date("2016-07-12"),
  }
]
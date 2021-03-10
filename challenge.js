var animals={
  zebra:{
    classification: "mammal",
    appearance:[ "White with black stripes", "4 legs", "Looks like a donkey"],
    habitat: "grasslands",
    lifespanyears :25,
    diet: "Herbivore",
    friendly: true
   },
  crocodile:{
    classification:"reptile",
    appearance: ["Long,wide mouth with many teeth", "close relatives to dinosaurs", "looks like a big lizard"],
    habitat: "Grasslands",
    lifespanyears: 100,
    diet: "carnivore",
    friendly: false

  },
};
var ostrich={
  classification: "Bird",
  appearance:["Big,tall bird","2legs","has long legs"],
  habitat: "grasslands",
  lifespanyears: 45,
  diet: "herbivore",
  friendly: true

};
animals.ostrich= ostrich;

var shark={
  classification:"Fish",
  appearance:["sharp teeth", "has fins","has gills"],
  habitat:"water",
  lifespanyears:30,
  diet: "carnivore",
  friendly: true
};
animals.shark= shark;

console.log(animals);
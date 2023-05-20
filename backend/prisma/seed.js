import { prisma } from "../config/db.config.js";

async function main() {
  
  //Delete the existing seed data
  await prisma.recipeIngredient.deleteMany();
  await prisma.cookingSteps.deleteMany();
  await prisma.recipe.deleteMany();
  await prisma.cookbook.deleteMany();
  await prisma.user.deleteMany();

  // create the users
  const userData = await prisma.user.createMany({
    data: [
      { name: "Sumit", email: "sumit@gmail.com", password: "sumitXD" },
      { name: "Dave", email: "dave@gmail.com", password: "daveXD" },
      { name: "Bob", email: "bob@gmail.com", password: "bobXD" },
      { name: "Alice", email: "alice@gmail.com", password: "aliceXD" },
    ],
  });

  // create the cookbooks
  const cookBookData = await prisma.cookbook.createMany({
    data: [
      { name: "GYM Diet", userId: 1 },
      { name: "Festive Foods", userId: 1 },
      { name: "Healthy", userId: 2 },
      { name: "Authentic", userId: 3 },
    ],
  });

  // create Recipe
  const recipe = await prisma.recipe.createMany({
    data: [
      {
        name: "Chicken Tandoori",
        description: "A mughlai dish prepared in tandoor style",
        cookbookId: 1,
        userId: 1,
      },
      {
        name: "Soya Yoghurt",
        description: "Rich in protien",
        cookbookId: 1,
        userId: 1,
      },
      {
        name: "Oats Meal",
        cookbookId: 1,
        userId: 1,
      },
      {
        name: "Karanji",
        description: "Authentic Diwali Sweet",
        cookbookId: 2,
        userId: 1,
      },
      {
        name: "Rava Ladoo",
        description: "Scrumptious Sweet made from rava(suji)",
        cookbookId: 2,
        userId: 1,
      },
      {
        name: "Chicken Soup",
        cookbookId: 3,
        userId: 2,
      },
      {
        name: "Salad",
        description: "Fibre rich salad with rich nutrients",
        cookbookId: 3,
        userId: 2,
      },
      {
        name: "Corn Roast",
        cookbookId: 4,
        userId: 3,
      },
      {
        name: "Prawns Curry",
        description: "Prawns curry in goan style",
        cookbookId: 4,
        userId: 3,
      },
    ],
  });


// create Recipe Ingredient
const recipeIngredientData = await prisma.recipeIngredient.createMany({
  data: [
      // Chicken Tandoori
      { recipeId: 1 , ingredient: "1 kg Chicken" ,   ingredientOrder: 1},
      {  recipeId: 1 , ingredient: "200 gm Yoghurt" ,  ingredientOrder: 2},
      { recipeId: 1 , ingredient: "2 tablespoon Tandoori Masala"  ,   ingredientOrder: 3},
      { recipeId: 1 , ingredient: "2 tablespoon Ginger" ,  ingredientOrder: 4},
      {  recipeId: 1 , ingredient: "2 tablespoon Garlic" ,   ingredientOrder: 5},
      {  recipeId: 1 , ingredient: "Oil" ,  ingredientOrder: 6},

      // Soya Yoghurt
      {  recipeId: 2 , ingredient: "1 teaspoon Oil" ,   ingredientOrder: 1},
      {  recipeId: 2 , ingredient: "50 gm Soya Chunks" ,  ingredientOrder: 2},
      { recipeId: 2 , ingredient: "Salt as needed" ,   ingredientOrder: 3},
      {recipeId: 2 , ingredient: "Black Pepper" ,   ingredientOrder: 4},

      // Oat meal
      { recipeId: 3 , ingredient: "1 cup Oats" ,  ingredientOrder: 1},
      { recipeId: 3 , ingredient: "1 unit Apple", ingredientOrder: 2},
      { recipeId: 3 , ingredient: "2 tablespoon honey" ,   ingredientOrder: 3},
      { recipeId: 3 , ingredient: "2 cup water" ,   ingredientOrder: 4},

      // Karanji
      {  recipeId: 4 , ingredient: "1 kg Refined Flour" ,  ingredientOrder: 1},
      { recipeId: 4 , ingredient: "1/4 kg sugar", ingredientOrder: 2},
      { recipeId: 4 , ingredient: "1 kg Grated Cocunut" ,   ingredientOrder: 3},
      { recipeId: 4, ingredient: "Oil" ,   ingredientOrder: 4},


      // Rava Laddo
      {  recipeId: 5 , ingredient: "1kg Rava" ,  ingredientOrder: 1},
      { recipeId: 5 , ingredient: "1/2kg Sugar Powder", ingredientOrder: 2},
      { recipeId: 5 , ingredient: "50ml Ghee" ,   ingredientOrder: 3},

      // Soups
      { recipeId: 6 , ingredient: "1 cup Veggies" ,  ingredientOrder: 1},
      {  recipeId: 6 , ingredient: "2 tablespoon Soy Sauce", ingredientOrder: 2},
      {  recipeId: 6 , ingredient: "ketchup" ,   ingredientOrder: 3},
      { recipeId: 6 , ingredient: "starch" , ingredientOrder: 4},

      // green salad

      {   recipeId: 7 , ingredient: "Olive Oil" ,  ingredientOrder: 1},
      {  recipeId: 7 , ingredient: "Tomatoes", ingredientOrder: 2},
      { recipeId: 7 , ingredient: "Letucce",   ingredientOrder: 3},
      { recipeId: 7 , ingredient: "Onion" , ingredientOrder: 4},
      {  recipeId: 7 , ingredient: "pickles",   ingredientOrder: 5},
      { recipeId: 7 , ingredient: "grated cheese" , ingredientOrder: 6},

      // corm roast

      {  recipeId: 8 , ingredient: "oil" ,  ingredientOrder: 1},
      {  recipeId: 8 , ingredient: "corn",  ingredientOrder: 2},
      {  recipeId: 8 , ingredient: "salt",   ingredientOrder: 3},
      {  recipeId: 8 , ingredient: "masala" , ingredientOrder: 4},

      // prawns curry
      { recipeId: 9 , ingredient: "prawns" ,  ingredientOrder: 1},
      { recipeId: 9 , ingredient: "coconut water", ingredientOrder: 2},
      { recipeId: 9 , ingredient: "masala",   ingredientOrder: 3},
      { recipeId: 9 , ingredient: "oil", ingredientOrder: 4},

  ]
})

  // create Cooking Steps

  const coookingSteps = await prisma.cookingSteps.createMany({
    data: [
      // chicken tandoori
      {
        step: "To prepare this dish, start by washing the chicken with some lukewarm water and then wash it again under cold water. Drain out the excess water and pat dry. Cut the chicken pieces, make diagonal incisions all over the chicken.",
        stepOrder: 1,
        recipeId: 1,
      },
      {
        step: "Marinate the chicken with the given spices, lemon juice and refrigerate for 1 hour.",
        stepOrder: 2,
        recipeId: 1,
      },
      {
        step: "Then, put the chicken on a plate and microwave it for 9-10 mins. Now brush with oil and grill for 15-20 mins. Change sides frequently.",
        stepOrder: 3,
        recipeId: 1,
      },
      {
        step: "Sprinkle some chaat masala on the tandoori chicken and serve hot with onion rings and pudina chutney. To accentuate the taste you can also drizzle some lemon juice on it.",
        stepOrder: 4,
        recipeId: 1,
      },

      // Soya Yoghurt
      {
        step: "Boil the Soya chunks for 5 minutes and rinse them in cool water, squeeze them and keep it aside to cool.",
        stepOrder: 1,
        recipeId: 2,
      },
      {
        step: "Add the yoghurt in a bowl and add the salt and pepper in it",
        stepOrder: 2,
        recipeId: 2,
      },
      {
        step: "Once the soya chunks are to the room tempreture add then in the yoghurt mixture.",
        stepOrder: 3,
        recipeId: 2,
      },
      {
        step: "For extra flavours you add lemon juice and coriander if need.",
        stepOrder: 4,
        recipeId: 2,
      },

      // Oat Meal
      {
        step: "Take a pan and add the oats and the water in it and keep it to boil",
        stepOrder: 1,
        recipeId: 3,
      },
      {
        step: "Keep it boiled on medium flame for 10 minutes or till the oats thicken",
        stepOrder: 2,
        recipeId: 3,
      },
      {
        step: "Once done keep if off the heat and let it cool down for room temperature",
        stepOrder: 3,
        recipeId: 3,
      },
      {
        step: "for toppings , slice the apple into thin slices and drizzle a spoon of honey",
        stepOrder: 4,
        recipeId: 3,
      },

      // Karanji
      {
        step: "Prepare the mixture of grated coconut and sugar",
        stepOrder: 1,
        recipeId: 4,
      },
      {
        step: "Kneed the dough of refined flour and keep it aside",
        stepOrder: 2,
        recipeId: 4,
      },
      {
        step: "Roll the dough into small circles and stuff the coconut mixture in it",
        stepOrder: 3,
        recipeId: 4,
      },
      {
        step: "Fry the pieces in hot oil until crisp.",
        stepOrder: 4,
        recipeId: 4,
      },

      //Rava Laddo
      {
        step: "Slightly heat the rava in that add the ghee , sugar",
        stepOrder: 1,
        recipeId: 5,
      },
      {
        step: "Mix the mixture properly to avoid lumps",
        stepOrder: 2,
        recipeId: 5,
      },
      { step: "Roll the mixture into small balls", stepOrder: 3, recipeId: 5 },
      { step: "Once cool keep then in a container", stepOrder: 4, recipeId: 5 },

      // Chicken Soup
      {
        step: "In a pan take some oil, add the whole spices in it",
        stepOrder: 1,
        recipeId: 6,
      },
      {
        step: "After 1 minute  add the chicken in it and fry till the outer layer is golden.",
        stepOrder: 2,
        recipeId: 6,
      },
      {
        step: "Add the remaining veggies like onions and tomotes and water to boil",
        stepOrder: 3,
        recipeId: 6,
      },
      {
        step: "Boil for 30 minutes in medium flame",
        stepOrder: 4,
        recipeId: 6,
      },
      {
        step: "Add the cornstarch slurry and give a 10 minute boil on slow heat. Server hot",
        stepOrder: 5,
        recipeId: 6,
      },

      // Salad
      { step: "In a bowl add all the vegiees", stepOrder: 1, recipeId: 7 },
      {
        step: "Add salt, pepper and other spices as required",
        stepOrder: 2,
        recipeId: 7,
      },
      {
        step: "Add some yoghurt in it and give it a stir",
        stepOrder: 3,
        recipeId: 7,
      },
      { step: "Add some olive oil in the end", stepOrder: 4, recipeId: 7 },
      {
        step: "You can serve it cold or as a side dish.",
        stepOrder: 5,
        recipeId: 7,
      },

      // Corn Roast
      {
        step: "Seperate the kernals from the corn.",
        stepOrder: 1,
        recipeId: 8,
      },
      {
        step: "In a pan take some oil and once heated add the corn.",
        stepOrder: 2,
        recipeId: 8,
      },
      {
        step: "Stir fry the corn until it browns or 5 minutes on slow flame",
        stepOrder: 3,
        recipeId: 8,
      },
      {
        step: "Add the masala and salt and give it a stir",
        stepOrder: 4,
        recipeId: 8,
      },
      {
        step: "Add diced onions and lemon juice if needed and serve hot.",
        stepOrder: 5,
        recipeId: 8,
      },

      // Prawns Curry
      {
        step: " Add all the ingredients for the ground masala into a blender. You can add a little water if required but the coconut milk takes care of the liquid component",
        stepOrder: 1,
        recipeId: 9,
      },
      {
        step: "Grind to a smooth paste. You'll see the paste changing colour and turning to a deep orange",
        stepOrder: 2,
        recipeId: 9,
      },
      {
        step: "To make the gravy, start by sauteing ginger and onions in coconut oil till the onions turn translucent",
        stepOrder: 3,
        recipeId: 9,
      },
      {
        step: "Add the tomatoes and salt and cook them till tomatoes become soft and pulpy",
        stepOrder: 4,
        recipeId: 9,
      },
      {
        step: "Pour the ground curry paste along with about a cup of water. You can add the water to the grinder and swirl it to get any remnants of the curry paste",
        stepOrder: 5,
        recipeId: 9,
      },
      {
        step: "Bring it to a quick boil and then cover and simmer for 10 minutes till you see oil floating to the top",
        stepOrder: 6,
        recipeId: 9,
      },
      {
        step: "Once the gravy has boiled well, add the deveined and cleaned prawns",
        stepOrder: 7,
        recipeId: 9,
      },
      {
        step: "Add curry leaves at this stage to keep their aroma fresh",
        stepOrder: 8,
        recipeId: 9,
      },
      {
        step: "Mix and bring the curry to a quick boil",
        stepOrder: 9,
        recipeId: 9,
      },
      {
        step: "Only 5-7 minutes of simmering and the prawn curry is ready to serve!",
        stepOrder: 10,
        recipeId: 9,
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Database seeded successfully");
  })
  .catch(async (e) => {
    console.error(e);
    console.log("Error Occurred in seeding : ", e);
    await prisma.$disconnect();
    process.exit(1);
  });

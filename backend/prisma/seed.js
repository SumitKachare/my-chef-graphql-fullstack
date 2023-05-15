import { prisma } from "../config/db.config.js"

async function main() {

  // create the users
  const userData = await prisma.user.createMany({
    data: [
        {id: 1 , name: "Sumit" , email: "sumit@gmail.com" , password: "sumitXD"},
        {id: 2 , name: "Dave" , email: "dave@gmail.com" , password: "daveXD"},
        {id: 3 , name: "Bob" , email: "bob@gmail.com" , password: "bobXD"},
        {id: 4 , name: "Alice" , email: "alice@gmail.com" , password: "aliceXD"}
    ]
  })

  // create the cookbooks
  const cookBookData = await prisma.cookbook.createMany({
    data: [
        {id: 1 , name: "GYM Diet" , userId: 1},
        {id: 2 , name: "Festive Foods" , userId: 1},
        {id: 3 , name: "Healthy" , userId: 2},
        {id: 4 , name: "Authentic" , userId: 3}
    ]
  })
    
  // create the section
  const sectionData = await prisma.section.createMany({
    data: [
        {id: 1 , name: "Starters" , cookbookId: 1},
        {id: 2 , name: "High Protien" , cookbookId: 1},
        {id: 3 , name: "Low Calorie" , cookbookId: 1},
        {id: 4 , name: "Diwali" , cookbookId: 2},
        {id: 5 , name: "Soups" , cookbookId: 3},
        {id: 6 , name: "Salads" , cookbookId: 3},
        {id: 7 , name: "Village Food" , cookbookId: 4},
        {id: 8 , name: "Goan Cuisine" , cookbookId: 4}
    ]
  })

      // create Recipe
      const recipe = await prisma.recipe.createMany({
        data : [
            {   
                id: 1 ,
                name : "Chicken Tandoori",
                description : "A mughlai dish prepared in tandoor style",
                sectionId : 1,
                userId: 1
            },
            {   
                id: 2 ,
                name : "Soya Yoghurt",
                description : "Rich in protien",
                sectionId : 2,
                userId: 1
            },
            {   
                id: 3 ,
                name : "Oats Meal",
                sectionId : 3,
                userId: 1
            },
            {   
                id: 4 ,
                name : "Karanji",
                description : "Authentic Diwali Sweet",
                sectionId : 4,
                userId: 1
            },
            {   
                id: 5,
                name : "Rava Ladoo",
                description : "Scrumptious Sweet made from rava(suji)",
                sectionId : 4,
                userId: 1
            },
            {   
                id: 6 ,
                name : "Chicken Soup",
                sectionId : 5,
                userId: 2
            },
            {   
                id: 7 ,
                name : "Salad",
                description : "Fibre rich salad with rich nutrients",
                sectionId : 6,
                userId: 2
            },
            {   
                id: 8 ,
                name : "Corn Roast",
                sectionId : 7,
                userId: 3
            },
            {   
                id: 9,
                name : "Prawns Curry",
                description : "Prawns curry in goan style",
                sectionId : 8,
                userId: 3
            }
        ]
      })

    // create Unit
      const UnitData = await prisma.unit.createMany({
        data: [
            {id: 1 , unit: "Teaspoon" },
            {id: 2 , unit: "Tablespoon" },
            {id: 3 , unit: "Cup" },
            {id: 4 , unit: "Kilo grams" },
            {id: 5 , unit: "Grams" },
            {id: 6 , unit: "Litre" }
        ]
      })

    // create Ingredient
    const IngredientData = await prisma.ingredient.createMany({
        data: [
            {id: 1 , ingredient: "Chicken" },
            {id: 2 , ingredient: "Yoghurt" },
            {id: 3 , ingredient: "Tandoori Masala" },
            {id: 4 , ingredient: "Ginger" },
            {id: 5 , ingredient: "Garlic" },
            {id: 6 , ingredient: "Oil" },
            {id: 7 , ingredient: "Soya Chunks" },
            {id: 8 , ingredient: "Salt" },
            {id: 9 , ingredient: "Pepper" },
            {id: 10 , ingredient: "Oats" },
            {id: 11, ingredient: "Apple" },
            {id: 12 , ingredient: "Honey" },
            {id: 13 , ingredient: "Water" },
            {id: 14, ingredient: "Refined Flour" },
            {id: 15, ingredient: "Sugar" },
            {id: 16, ingredient: "Grated Cocunut" },
            {id: 17, ingredient: "Veggies" },
            {id: 18, ingredient: "Soy Sauce" },
            {id: 19, ingredient: "Onion" },
            {id: 20, ingredient: "Letucce" },
            {id: 21, ingredient: "Tomatoes" },
            {id: 22, ingredient: "Olive Oil" },
            {id: 23, ingredient: "Corn" },
            {id: 24, ingredient: "Home Masala" },            
            {id: 25, ingredient: "Prawns" },
            {id: 26, ingredient: "Goan Masala" },
            {id: 27, ingredient: "Coconut Milk" },
            {id: 28, ingredient: "Rava" },
            {id: 29, ingredient: "Sugar Powder" },
            {id: 30, ingredient: "Ghee" }
        ]
      })



    // create Recipe Ingredient
      const recipeIngredientData = await prisma.recipeIngredient.createMany({
        data: [
            // Chicken Tandoori
            {id: 1 , amount: "1" , recipeId: 1 , ingredientId: 1 , unitId: 4,  ingredientOrder: 1},
            {id: 2 , amount: "1" , recipeId: 1 , ingredientId: 2 , unitId: 3, ingredientOrder: 2},
            {id: 3 , amount: "1" , recipeId: 1 , ingredientId: 3 , unitId: 2,  ingredientOrder: 3},
            {id: 4 , amount: "1" , recipeId: 1 , ingredientId: 4 , unitId: 1, ingredientOrder: 4},
            {id: 5 , amount: "1" , recipeId: 1 , ingredientId: 5 , unitId: 1,  ingredientOrder: 5},
            {id: 6 , amount: "1" , recipeId: 1 , ingredientId: 6 , unitId: 1, ingredientOrder: 6},

            // Soya Yoghurt
            {id: 7 , amount: "50" , recipeId: 2 , ingredientId: 7 , unitId: 5,  ingredientOrder: 1},
            {id: 8 , amount: "1" , recipeId: 2 , ingredientId: 8 , unitId: 1, ingredientOrder: 2},
            {id: 9 , amount: "1/2" , recipeId: 2 , ingredientId: 9 , unitId: 1,  ingredientOrder: 3},
            {id: 10 , amount: "30" , recipeId: 2 , ingredientId: 2 , unitId: 5,  ingredientOrder: 4},

            // Oat meal
            {id: 11 , amount: "1" , recipeId: 3 , ingredientId: 10 , unitId: 3, ingredientOrder: 1},
            {id: 12 , amount: "1" , recipeId: 3 , ingredientId: 11, ingredientOrder: 2},
            {id: 13, amount: "1" , recipeId: 3 , ingredientId: 12 , unitId: 1,  ingredientOrder: 3},
            {id: 14, amount: "3" , recipeId: 3 , ingredientId: 13 , unitId: 3,  ingredientOrder: 4},

            // Karanji
            {id: 15 , amount: "3" , recipeId: 4 , ingredientId: 14 , unitId: 3, ingredientOrder: 1},
            {id: 16 , amount: "1.5" , recipeId: 4 , ingredientId: 15,unitId: 3, ingredientOrder: 2},
            {id: 17, amount: "1.5" , recipeId: 4 , ingredientId: 16 , unitId: 4,  ingredientOrder: 3},
            {id: 18, amount: "1" , recipeId: 4, ingredientId: 6 , unitId: 6,  ingredientOrder: 4},


            // Rava Laddo
            {id: 19 , amount: "1" , recipeId: 5 , ingredientId: 28 , unitId: 4, ingredientOrder: 1},
            {id: 20 , amount: "1.5" , recipeId: 5 , ingredientId: 29,unitId: 4, ingredientOrder: 2},
            {id: 21, amount: "1" , recipeId: 5 , ingredientId: 30 , unitId: 3,  ingredientOrder: 3},

            // Soups
            {id: 22 , amount: "1" , recipeId: 6 , ingredientId: 1 , unitId: 4, ingredientOrder: 1},
            {id: 23 , amount: "1" , recipeId: 6 , ingredientId: 17,unitId: 3, ingredientOrder: 2},
            {id: 24, amount: "1" , recipeId: 6 , ingredientId: 18 , unitId: 2,  ingredientOrder: 3},
            {id: 25, amount: "1" , recipeId: 6 , ingredientId: 19 , ingredientOrder: 4},

            // green salad

            {id: 26 , amount: "1/2" , recipeId: 7 , ingredientId: 19 , unitId: 3, ingredientOrder: 1},
            {id: 27 , amount: "1/2" , recipeId: 7 , ingredientId: 20,unitId: 3, ingredientOrder: 2},
            {id: 28, amount: "1/2" , recipeId: 7 , ingredientId: 21, unitId: 3,  ingredientOrder: 3},
            {id: 29, amount: "1" , recipeId: 7 , ingredientId: 22 , unitId: 1,ingredientOrder: 4},
            {id: 30, amount: "1" , recipeId: 7 , ingredientId: 8, unitId: 1,  ingredientOrder: 5},
            {id: 31, amount: "1" , recipeId: 7 , ingredientId: 9 , unitId: 1,ingredientOrder: 6},

            // corm roast

            {id: 32 , amount: "1" , recipeId: 8 , ingredientId: 6 , unitId: 2, ingredientOrder: 1},
            {id: 33 , amount: "1/2" , recipeId: 8 , ingredientId: 8, unitId: 1, ingredientOrder: 2},
            {id: 34, amount: "1" , recipeId: 8 , ingredientId: 23, unitId: 3,  ingredientOrder: 3},
            {id: 35, amount: "1" , recipeId: 8 , ingredientId: 24 , unitId: 2,ingredientOrder: 4},

            // prawns curry
            {id: 36 , amount: "2" , recipeId: 9 , ingredientId: 6 , unitId: 2, ingredientOrder: 1},
            {id: 37 , amount: "1" , recipeId: 9 , ingredientId: 25,unitId: 4, ingredientOrder: 2},
            {id: 38, amount: "2" , recipeId: 9 , ingredientId: 26, unitId: 2,  ingredientOrder: 3},
            {id: 39, amount: "1" , recipeId: 9 , ingredientId: 27, unitId: 6,ingredientOrder: 4},

        ]
      })

    // create Cooking Steps

    const coookingSteps =  await prisma.cookingSteps.createMany({
        data: [
            // chicken tandoori
            {id: 1 , step: "To prepare this dish, start by washing the chicken with some lukewarm water and then wash it again under cold water. Drain out the excess water and pat dry. Cut the chicken pieces, make diagonal incisions all over the chicken." , stepOrder: 1 , recipeId: 1},
            {id: 2 , step: "Marinate the chicken with the given spices, lemon juice and refrigerate for 1 hour." , stepOrder: 2 , recipeId: 1},
            {id: 3 , step: "Then, put the chicken on a plate and microwave it for 9-10 mins. Now brush with oil and grill for 15-20 mins. Change sides frequently." , stepOrder: 3 , recipeId: 1},
            {id: 4 , step: "Sprinkle some chaat masala on the tandoori chicken and serve hot with onion rings and pudina chutney. To accentuate the taste you can also drizzle some lemon juice on it." , stepOrder: 4 , recipeId: 1},

            // Soya Yoghurt
            {id: 5 , step: "Boil the Soya chunks for 5 minutes and rinse them in cool water, squeeze them and keep it aside to cool." , stepOrder: 1 , recipeId: 2},
            {id: 6 , step: "Add the yoghurt in a bowl and add the salt and pepper in it" , stepOrder: 2 , recipeId: 2},
            {id: 7 , step: "Once the soya chunks are to the room tempreture add then in the yoghurt mixture." , stepOrder: 3 , recipeId: 2},
            {id: 8 , step: "For extra flavours you add lemon juice and coriander if need." , stepOrder: 4 , recipeId: 2},

            // Oat Meal
            {id: 9 , step: "Take a pan and add the oats and the water in it and keep it to boil" , stepOrder: 1 , recipeId: 3},
            {id: 10 , step: "Keep it boiled on medium flame for 10 minutes or till the oats thicken" , stepOrder: 2 , recipeId: 3},
            {id: 11 , step: "Once done keep if off the heat and let it cool down for room temperature" , stepOrder: 3 , recipeId: 3},
            {id: 12, step: "for toppings , slice the apple into thin slices and drizzle a spoon of honey" , stepOrder: 4 , recipeId: 3},

            // Karanji 
			{id: 13 , step: "Prepare the mixture of grated coconut and sugar" , stepOrder: 1 , recipeId: 4},
			{id: 14 , step: "Kneed the dough of refined flour and keep it aside" , stepOrder: 2 , recipeId: 4},
			{id: 15 , step: "Roll the dough into small circles and stuff the coconut mixture in it" , stepOrder: 3 , recipeId: 4},
			{id: 16 , step: "Fry the pieces in hot oil until crisp." , stepOrder: 4 , recipeId: 4},

             //Rava Laddo
			{id: 17 , step: "Slightly heat the rava in that add the ghee , sugar" , stepOrder: 1 , recipeId: 5},
			{id: 18 , step: "Mix the mixture properly to avoid lumps" , stepOrder: 2 , recipeId: 5},
			{id: 19 , step: "Roll the mixture into small balls" , stepOrder: 3 , recipeId: 5},
			{id: 20 , step: "Once cool keep then in a container" , stepOrder: 4 , recipeId: 5},

			// Chicken Soup 
			{id: 21 , step: "In a pan take some oil, add the whole spices in it" , stepOrder: 1 , recipeId: 6},
			{id: 22 , step: "After 1 minute  add the chicken in it and fry till the outer layer is golden." , stepOrder: 2 , recipeId: 6},
			{id: 23 , step: "Add the remaining veggies like onions and tomotes and water to boil" , stepOrder: 3 , recipeId: 6},
			{id: 24 , step: "Boil for 30 minutes in medium flame" , stepOrder: 4 , recipeId: 6},
            {id: 25 , step: "Add the cornstarch slurry and give a 10 minute boil on slow heat. Server hot" , stepOrder: 5 , recipeId: 6},

            // Salad 
			{id: 26 , step: "In a bowl add all the vegiees" , stepOrder: 1 , recipeId: 7},
			{id: 27 , step: "Add salt, pepper and other spices as required" , stepOrder: 2 , recipeId: 7},
			{id: 28 , step: "Add some yoghurt in it and give it a stir" , stepOrder: 3 , recipeId: 7},
			{id: 29 , step: "Add some olive oil in the end" , stepOrder: 4 , recipeId: 7},
            {id: 30 , step: "You can serve it cold or as a side dish." , stepOrder: 5 , recipeId: 7},

            // Corn Roast 
			{id: 31 , step: "Seperate the kernals from the corn." , stepOrder: 1 , recipeId: 8},
			{id: 32 , step: "In a pan take some oil and once heated add the corn." , stepOrder: 2 , recipeId: 8},
			{id: 33 , step: "Stir fry the corn until it browns or 5 minutes on slow flame" , stepOrder: 3 , recipeId: 8},
			{id: 34 , step: "Add the masala and salt and give it a stir" , stepOrder: 4 , recipeId: 8},
            {id: 35 , step: "Add diced onions and lemon juice if needed and serve hot." , stepOrder: 5 , recipeId: 8},

            // Prawns Curry 
			{id: 36 , step: " Add all the ingredients for the ground masala into a blender. You can add a little water if required but the coconut milk takes care of the liquid component" , stepOrder: 1 , recipeId: 9},
			{id: 37 , step: "Grind to a smooth paste. You'll see the paste changing colour and turning to a deep orange" , stepOrder: 2 , recipeId: 9},
			{id: 38 , step: "To make the gravy, start by sauteing ginger and onions in coconut oil till the onions turn translucent" , stepOrder: 3 , recipeId: 9},
			{id: 39 , step: "Add the tomatoes and salt and cook them till tomatoes become soft and pulpy" , stepOrder: 4 , recipeId: 9},
			{id: 40 , step: "Pour the ground curry paste along with about a cup of water. You can add the water to the grinder and swirl it to get any remnants of the curry paste" , stepOrder: 5 , recipeId: 9},
			{id: 41 , step: "Bring it to a quick boil and then cover and simmer for 10 minutes till you see oil floating to the top" , stepOrder: 6 , recipeId: 9},
			{id: 42 , step: "Once the gravy has boiled well, add the deveined and cleaned prawns" , stepOrder: 7 , recipeId: 9},
			{id: 43 , step: "Add curry leaves at this stage to keep their aroma fresh" , stepOrder: 8 , recipeId: 9},
			{id: 44 , step: "Mix and bring the curry to a quick boil" , stepOrder: 9 , recipeId: 9},
			{id: 45 , step: "Only 5-7 minutes of simmering and the prawn curry is ready to serve!" , stepOrder: 10 , recipeId: 9}
        ]
    })


}
main()
  .then(async () => {
    await prisma.$disconnect()
    console.log("Database seeded successfully");
  })
  .catch(async (e) => {
    console.error(e)
    console.log("Error Occurred in seeding : ",e);
    await prisma.$disconnect()
    process.exit(1)
  })
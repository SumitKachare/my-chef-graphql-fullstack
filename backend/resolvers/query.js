import { GraphQLError } from "graphql";
import { prisma } from "../config/db.config.js";

export const Query =  {
    getCookbooks: async () => {
        try {
            const data = await prisma.cookbook.findMany({})
            return data
        } catch (error) {
            throw new GraphQLError(error.message)
        }
    },
    // getRecipies: () => {
    //     return prisma.recipe.findMany({})
    // },
    // getRecipeIngredients: () => {
    //     return prisma.recipeIngredient.findMany({})
    // },
    // getIngredients: () => {
    //     return prisma.ingredient.findMany({})
    // },
    // getUnits: () => {
    //     return prisma.unit.findMany({})
    // },
    // getCookingSteps: () => {
    //     return prisma.cookingSteps.findMany({})
    // },
    // getUser: () => {
    //     return prisma.user.findMany({})
    // }
}
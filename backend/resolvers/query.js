import { prisma } from "../config/db.config.js";

export const Query =  {
    getCookbooks: async () => {
        const data = await prisma.cookbook.findMany({})
        return data
    },
    getSections: () => {
        return prisma.section.findMany({})
    },
    getRecipies: () => {
        return prisma.recipe.findMany({})
    },
    getRecipeIngredients: () => {
        return prisma.recipeIngredient.findMany({})
    },
    getIngredients: () => {
        return prisma.ingredient.findMany({})
    },
    getUnits: () => {
        return prisma.unit.findMany({})
    },
    getCookingSteps: () => {
        return prisma.cookingSteps.findMany({})
    },
    getUser: () => {
        return prisma.user.findMany({})
    }
}
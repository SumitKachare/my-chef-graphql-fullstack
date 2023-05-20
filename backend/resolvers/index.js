import { prisma } from "../config/db.config.js";
import { Query } from "./query.js";
import { Mutation } from "./mutation.js";

const User = {
    cookBooks: (parent , args) => {
        return prisma.cookbook.findMany({
            where: { userId: parent.id },
        });
    },
    recipes: (parent , args) => {
        return prisma.recipe.findMany({
            where: { userId: parent.id },
        });
    }
}

const Cookbook = {
    user: (parent, args) => {
        return prisma.user.findFirst({
          where: { id: parent.userId },
        });
    },
    recipes: (parent, args) => {
        return prisma.recipe.findMany({
            where: {
                cookbookId: parent.id
            }
        })
    }
}

const Recipe = {
    cookbook: (parent, args) => {
        return prisma.cookbook.findFirst({
          where: { id: parent.cookbookId },
        });
    },
    user: (parent, args) => {
        return prisma.user.findFirst({
          where: { id: parent.userId },
        });
    },
    recipeIngredients: (parent, args) => {
        return prisma.recipeIngredient.findMany({
            where: {recipeId: parent.id},
            orderBy: {
                ingredientOrder: "asc"
            }
        })
    },
    cookingSteps: (parent , args) => {
        return prisma.cookingSteps.findMany({
            where: {recipeId: parent.id},
            orderBy: {
                stepOrder: "asc"
            }
        })
    }
}

const RecipeIngredient = {
    recipe: (parent, args) => {
        return prisma.recipe.findFirst({
          where: { id: parent.recipeId },
        });
    }
}

const CookingSteps = {
    recipe: (parent, args) => {
        return prisma.recipe.findFirst({
            where: { id: parent.recipeId },
        });
    }
}


export const resolvers = {
    Query,
    Mutation,
    User,
    Cookbook,
    Recipe,
    RecipeIngredient,
    CookingSteps
  };

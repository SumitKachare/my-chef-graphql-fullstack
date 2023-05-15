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
    },
    ingredients: (parent , args) => {
        return prisma.ingredient.findMany({
            where: { userId: parent.id },
        });
    },
    units: (parent , args) => {
        return prisma.unit.findMany({
            where: { userId: parent.id },
        });
    },
}

const Cookbook = {
    user: (parent, args) => {
        return prisma.user.findFirst({
          where: { id: parent.userId },
        });
    },
    sections: (parent, args) => {
        return prisma.section.findMany({
            where: {
                cookbookId: parent.id
            }
        })
    }
}

const Section = {
    cookbook: (parent, args) => {
        return prisma.cookbook.findFirst({
          where: { id: parent.cookbookId },
        });
    },
    recipes: (parent, args) => {
        return prisma.recipe.findMany({
            where: {
                sectionId: parent.id
            }
        })
    }
}

const Recipe = {
    section: (parent, args) => {
        return prisma.section.findFirst({
          where: { id: parent.sectionId },
        });
    },
    user: (parent, args) => {
        return prisma.user.findFirst({
          where: { id: parent.userId },
        });
    },
    recipeIngredients: (parent, args) => {
        return prisma.recipeIngredient.findMany({
            where: {recipeId: parent.id}
        })
    },
    cookingSteps: (parent , args) => {
        return prisma.cookingSteps.findMany({
            where: {recipeId: parent.id}
        })
    }
}

const RecipeIngredient = {
    recipe: (parent, args) => {
        return prisma.recipe.findFirst({
          where: { id: parent.recipeId },
        });
    },
    ingredient: (parent, args) => {
        return prisma.ingredient.findFirst({
          where: { id: parent.ingredientId },
        });
    },
    unit: (parent, args) => {
        if (parent.unitId) {
            return prisma.unit.findFirst({
                where: { id: parent.unitId },
            });
        }
    }
}

const Ingredient = {
    user: (parent, args) => {
        if (parent.userId) {
            return prisma.user.findFirst({
                where: { id: parent.userId },
              });
        }
    },
    recipeIngredients: (parent, args) => {
        return prisma.recipeIngredient.findMany({
                where: { ingredientId: parent.id },
        });
    }

}

const Unit = {
    user: (parent, args) => {
        if (parent.userId) {
            return prisma.user.findFirst({
                where: { id: parent.userId },
              });
        }
    },
    recipeIngredients: (parent, args) => {
            return prisma.recipeIngredient.findMany({
                where: {unitId: parent.id}
            })
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
    Section,
    Recipe,
    RecipeIngredient,
    Ingredient,
    Unit,
    CookingSteps
  };

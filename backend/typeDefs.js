export const typeDefs = `#graphql

    type User {
        id: ID!                   
        name: String!
        email: String!       
        description: String
        cookBooks: [Cookbook]
        ingredients: [Ingredient]
        recipes: [Recipe]
        units: [Unit]
        createdAt: String     
        updatedAt: String     
    }

    type Cookbook {
        id: ID!       
        name: String!
        description: String
        user: User!
        sections: [Section]
        createdAt: String     
        updatedAt: String  
    }
  
    type Section {
        id: ID!       
        name: String!
        description: String
        createdAt: String     
        updatedAt: String  
        cookbook:  Cookbook!
        recipes: [Recipe]
    }

    type Recipe {
        id: ID!       
        name: String!
        description: String
        imageUrl:  String
        createdAt: String     
        updatedAt: String 
        section: Section 
        user:  User
        recipeIngredients: [RecipeIngredient] 
        cookingSteps: [CookingSteps]
        cookingTime: String
        source: String
        URL: String
        yeild: String
    }

    type RecipeIngredient {
        id: ID!       
        amount: String
        recipe: Recipe!     
        ingredient: Ingredient! 
        unit: Unit       
        ingredientOrder: Int!
    }

    type Ingredient {
        id: ID!
        ingredient: String!        
        recipeIngredients: [RecipeIngredient]
        user: User             
    }

    type Unit {
        id: ID!
        unit: String!
        recipeIngredients: [RecipeIngredient]
        user: User  
    }

    type CookingSteps {
        id: ID!
        step: String!
        stepOrder: Int!
        recipe: Recipe!
    }


    # Inputs here

    input UserInput {      
        name: String!
        email: String!   
        password: String!    
        description: String
    } 

    input CookbookInput {      
        name: String!
        description: String
        userId: Int!
    } 

    input SectionInput {      
        name: String!
        description: String
        cookbookId: Int!
    } 

    input RecipeInput {
        name: String!
        description: String
        imageUrl:  String
        sectionId: Int! 
        userId:  Int!
        cookingTime: String
        source: String
        URL: String
        yeild: String
    } 

    input RecipeIngredientInput {  
        amount: String
        recipeId: Int!     
        ingredientId: Int! 
        unitId: Int       
        ingredientOrder: Int!
    }

    input CookingStepsInput {
        step: String!
        stepOrder: Int!
        recipeId: Int!
    }

    # Queries here

    type Query {
        getCookbooks: [Cookbook]
        getSections: [Section]
        getRecipies: [Recipe]
        getRecipeIngredients: [RecipeIngredient]
        getIngredients: [Ingredient]
        getUnits: [Unit]
        getCookingSteps: [CookingSteps] 
        getUser: [User]
    }

    # Mutation here

    type Mutation {

        # Create
        addUser(userData: UserInput) : User
        addCookbook(cookbookData: CookbookInput): Cookbook
        addSection(sectionData: SectionInput) :  Section
        addRecipe(recipeData: RecipeInput) : Recipe
        addRecipeIngredient(recipeIngData: RecipeIngredientInput) : RecipeIngredient
        addIngredient(ingredient: String! , userId: Int): Ingredient
        addUnit(unit: String , userId: Int): Unit
        addCookingStep(cookingStepData: CookingStepsInput): CookingSteps 
    }

`;
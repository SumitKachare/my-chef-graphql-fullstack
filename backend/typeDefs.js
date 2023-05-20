export const typeDefs = `#graphql

    type User {
        id: ID!                   
        name: String!
        email: String!       
        description: String
        cookBooks: [Cookbook]
        recipes: [Recipe]
        createdAt: String     
        updatedAt: String     
    }

    type Cookbook {
        id: ID!       
        name: String!
        description: String
        user: User!
        recipes: [Recipe]
        createdAt: String     
        updatedAt: String  
    }
  

    type Recipe {
        id: ID!       
        name: String!
        description: String
        imageUrl:  String
        createdAt: String     
        updatedAt: String 
        cookbook: Cookbook 
        user:  User!
        recipeIngredients: [RecipeIngredient] 
        cookingSteps: [CookingSteps]
        cookingTime: String
        source: String
        URL: String
        yeild: String
    }

    type RecipeIngredient {
        id: ID!       
        ingredient: String!
        recipe: Recipe!         
        ingredientOrder: Int!
    }

    type CookingSteps {
        id: ID!
        step: String!
        stepOrder: Int!
        recipe: Recipe!
    }


    # Inputs here

    input CreateUserInput {      
        name: String!
        email: String!   
        password: String!    
        description: String
    } 

    input UserPatch {
        name: String
        password: String    
        description: String
    }

    input UpdateUserInput {      
        patch: UserPatch
        email: String!
    } 

    # Cookbook Input Types

    input CreateCookbookInput {      
        name: String!
        description: String
        userId: Int!
    } 

    input CookbookPatch{
        name: String
        description: String
    }

    input UpdateCookbookInput {      
        patch: CookbookPatch
        id: ID!
    }

    input DeleteCookbookInput {      
        id: ID!
    }

    # Queries here

    type Query {
        getCookbooks: [Cookbook]
        getRecipies: [Recipe]
        getRecipeIngredients: [RecipeIngredient]
        getCookingSteps: [CookingSteps] 
        getUser: [User]
    }

    # Mutation here

    type Mutation {

        # Create
        createUser(input: CreateUserInput): User
        updateUser(input: UpdateUserInput): User
        
        # cookbooks mutations
        createCookbook(input: CreateCookbookInput): Cookbook
        updateCookbook(input: UpdateCookbookInput): Cookbook
        deleteCookbook(input: DeleteCookbookInput): Cookbook


    }

`;
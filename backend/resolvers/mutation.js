import { prisma } from "../config/db.config.js";
import { GraphQLError } from 'graphql';

export const Mutation = {

    // Cookbooks
    createCookbook: async (parent ,args) => {
        try {
            const data = await prisma.cookbook.create({
                data: args.input
            })
        
            return data
        } catch (error) {
            throw new GraphQLError("Error occured in cookbook creation.");
        }
    },
    updateCookbook: async (parent, args) => {
        try {

            // check if the cookbook with that id exists if not throw error
            const cookbook = await prisma.cookbook.findUniqueOrThrow({
                where: {
                    id: parseInt(args.input.id)
                }
            })

            const data = await prisma.cookbook.update({
                where:{
                    id: parseInt(args.input.id)
                },
                data: args.input.patch
            })
            return data
        } catch (error) {
            throw new GraphQLError("Error occured in cookbook updation.");
        }
    },
    deleteCookbook: async (parent, args) => {
        try {            
            // check if the cookbook with that id exists if not throw error
            const cookbook = await prisma.cookbook.findUniqueOrThrow({
                where: {
                    id: parseInt(args.input.id)
                }
            })

            // delete the cook book by id
            const data = await prisma.cookbook.delete({
                where: {
                    id: parseInt(args.input.id)
                }
            })
            return data
        } catch (error) {
            throw new GraphQLError("Error occured in cookbook deletion.");
        }
    },
    // User
    createUser: async (parent , args) => {
        try {            
            const data = await prisma.user.create({
                data : args.input
            })
            return data
        } catch (error) {
            throw new GraphQLError("Error occured in user creation.");
        }
    },
    updateUser: async (parent , args) => {
        try {            
            // check if the user with that email exists if not throw error
            const user = await prisma.user.findUniqueOrThrow({
                where: {
                    email: args.input.email
                }
            })


            const data = await prisma.user.update({
                where:{
                    email: args.input.email
                },
                data: args.input.patch
            })

            return data
        } catch (error) {
            throw new GraphQLError("Error occured in user updation process.");
        }
    }
}
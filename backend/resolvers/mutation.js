import { prisma } from "../config/db.config.js";

export const Mutation = {
    addCookbook: (parent ,args) => {
        return prisma.cookbook.create({
            data : args.cookbookData
        },
        )
    }
}
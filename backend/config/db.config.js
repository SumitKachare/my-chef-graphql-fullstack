import{PrismaClient} from "@prisma/client"
import bcrypt from "bcrypt"

export const prisma = new PrismaClient();

prisma.$use(async(params, next) => {

    // Check incoming query type on user creation
    if (params.model === "User" && params.action === "create") {
        const data = params.args.data
        
        // if no password
        if (!data.password) {
            throw new Error("Password not provided")
        }

        const hash =  bcrypt.hashSync(data.password, 10);
        params.args.data["password"] = hash

    }

    // handle hashing on seed data run
    if (params.model === "User" && params.action === "createMany") {
        const data = params.args.data
        
        for (let i = 0; i < data.length; i++) {
            const user = data[i];
            
            // if no password
            if (!user.password) {
                throw new Error("Password not provided")
            }

            const hash =  bcrypt.hashSync(user.password, 10);
            user["password"] = hash
            }
        }

    // Check incoming query type on user updation
    if (params.model === "User" && params.action === "update" && params.args?.data?.password) {
        const data = params.args.data
        
        // if no password
        if (!data.password) {
            throw new Error("Password not provided")
        }

        const hash =  bcrypt.hashSync(data.password, 10);
        params.args.data["password"] = hash
    }
    
    return await next(params)
  })



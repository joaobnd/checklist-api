import { PrismaClient } from "@prisma/client";
import { LogLevel, logMessage } from "../lib/logger";

const prismaClient = new PrismaClient();

async function main() {

}

main()

    .catch((error) => {
        logMessage(LogLevel.ERROR, 'Database connection failure.', { message: error.message });
        throw error
    })
    .then(async () => {
        logMessage(LogLevel.INFO, 'Database disconnected.');
        await prismaClient.$disconnect()
    })

export default prismaClient;
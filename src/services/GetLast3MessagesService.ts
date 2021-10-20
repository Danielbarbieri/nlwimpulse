import prismaClient from "../prisma";

class GetLast3MessagesService {
    async execute(){
        const messages = await prismaClient.message.findMany({
            take: 3,
            orderBy:{
                created_at: "desc",
            },
            include: {
                user: true,
            },
        });

        return messages;
    }
}

// Select * from messages limit 3 order by created_at desc

export { GetLast3MessagesService};
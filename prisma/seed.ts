import {Prisma, PrismaClient} from "@prisma/client";
import {faker} from "@faker-js/faker";

const prisma = new PrismaClient();

const main = async() => {
    const users = [];

    for (let i = 0; i < 10; i++) {
        const user = {
            username: faker.internet.userName(),
            image: faker.image.avatar(),
            name: faker.person.firstName(),
            email: faker.internet.email(),
        } satisfies Prisma.UserCreateInput;

        const dbUser = await prisma.user.create({data: user});
        users.push(dbUser);
    }

};

main().then(async() => {
    await prisma.$disconnect();
}).catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})
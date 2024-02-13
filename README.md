This is a [Next.js](https://nextjs.org/) starter template bootstrapped with:

- ShadcnUI
- Prisma
- Next Auth (With Github Provider and Prisma adapter)
- Theme Provider with Next Theme
- Icon with Ludid
- Dark/light themes
- Prettier

## Getting Started
Use this template to create a new project, and then clone your repo to your
local machine and run:


```bash
pnpm i
# or
npm i
```
Once you have installed the dependencies, run the prisma cli to migrate database:

```bash
npx prisma migrate dev --name init
```
You can change the datasource provider in <span style="color:green;">prisma/schema.prisma</span>: 
by default is set to sqlite you can use (mysql, postgresql, sqlserver, mongodb, sqlite)

````ts
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
````
Don't forgot to edit DATABASE_URL in .env

Next You can configure The auth provider by default i use (Github)


You can edit <span style="color:green;">src/utils/auth.ts</span> for change the default Provider or add some

````ts
providers: [
    GithubProvider({
        clientId: env.GITHUB_ID,
        clientSecret: env.GITHUB_SECRET,
        profile(profile) {
            return {
                id: profile.id.toString(),
                username: profile.login,
                name: profile.name,
                email: profile.email,
                image: profile.avatar_url
            };
        }
    }),

]
````
And don't forgo to change or add credential in <span style="color:green;">.env</span>

````dotenv
GITHUB_ID="github-app-id"
GITHUB_SECRET="github-app-secret"
````

In <span style="color:green;">src/utils/env.ts</span> you have a utility for type env variable :

````ts
import {createEnv} from "@t3-oss/env-nextjs";
import {z} from "zod";

export const env = createEnv({
    server: {
        GITHUB_ID: z.string().min(1),
        GITHUB_SECRET: z.string().min(1),
    },
    client: {},
    runtimeEnv: {
        GITHUB_ID: process.env.GITHUB_ID,
        GITHUB_SECRET: process.env.GITHUB_SECRET,
    }
});
````
In <span style="color:green;">prisma/seed.ts</span> you have a utility for add faker data in database :

````ts
//exemple for add fake data
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
````

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Documentation
- [Lucid](https://lucide.dev/guide/) - Beautiful & consistent icons.
- [Shadcn/ui](https://ui.shadcn.com/docs) - Beautifully designed components.
- [Prisma](https://www.prisma.io/docs) - Database ORM.
- [NextAuth](https://next-auth.js.org/getting-started/introduction) - Authentication for Next.js.
- [GitHub Apps](https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/about-creating-github-apps) - About creating GitHub Apps.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# [next.js](https://nextjs.org/) / [nextauth](https://next-auth.js.org/) / [apollo](https://www.apollographql.com/) / [graphql](https://graphql.org/) / [prisma](https://www.prisma.io/) - example

 - provides login though oauth / email,password / email otp and more
 - protected urls with helpers
 - database connection trough prisma
 - typegraphql for typesave data

nextauth and apollo server are mounted in the next.js api

## Getting Started

create your app with the bootstrap template

```bash
yarn create next-app --typescript --example https://github.com/philiplehmann/next-bootstrap

cd your-app-name

yarn dev
```

Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.

## Prisma Studio

interface to brows the database

```
yarn prisma:studio
```

Open [http://localhost:5555](http://localhost:5555) with your browser to see the result.

## apollo studio

to get access from the [apollo studio](https://studio.apollographql.com/) you have to expose the development env in the internet.

```
yarn ngrok:start
```

ngrok creates a proxy to the internet. take the https:// url and open it in the browser. for example: https://86d53dd10948.ngrok.io/api/graphql
now press "query your server" to start the apollo graphql studio
# [next.js](https://nextjs.org/) / [nextauth](https://next-auth.js.org/) / [apollo](https://www.apollographql.com/) / [graphql](https://graphql.org/) / [prisma](https://www.prisma.io/) /  - example

 - provides login through oauth / email,password / email otp and more
 - protected urls with helpers
 - database connection trough prisma
 - typegraphql for typesave data
 - maildev mail catcher to preview development mails
 - nodemailer / email-templates for sending emails

nextauth and apollo server are mounted in the next.js api

## Getting Started

### setup environemnt
the project contains a .tool-versions file which defines which dependencies are used through asdf VM.
install asdf with brew `brew install asdf` or check the guide from asdf itself: https://asdf-vm.com/guide/getting-started.html#_3-install-asdf

afterwards two plugins are used for nodejs and postgres.
- https://github.com/smashedtoatoms/asdf-postgres
- https://github.com/asdf-vm/asdf-nodejs

install them with:
```
asdf plugin-add postgres
asdf plugin-add ndoejs
```

### setup first project
create your app with the bootstrap template

```bash
# create a new next.js app with the copy of this bootstrap repository
yarn create next-app --typescript --example https://github.com/philiplehmann/next-bootstrap

# change into the project directory
cd your-app-name

# install the right node and postgres version
asdf install

# install node dependencies
yarn install

# install prisma client
yarn prisma:generate

# start foreman with next.js / graphql server / maildev / postgres
yarn dev
```

 - Open [http://localhost:5000](http://localhost:5000) with your browser to see the website.
 - Open [http://localhost:5100/graphql](http://localhost:5100/graphql) for graphql
 - Open [http://localhsot:1080](http://localhsot:1080) for the email catcher

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
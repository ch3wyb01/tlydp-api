# tlydp-api
- An API to retrieve, post and update data for The Little Yellow Duck Project
- The project aims to increase awareness about blood, bone marrow, tissue and organ donation through the making and placing of knitted yellow ducks
- When a user finds a duck, they can log it on the map

## How to run locally:

### Clone the repo:
- `cd` into the directory where you would like the app to be stored
- clone the repo by using the command `git clone https://github.com/ch3wyb01/becca-news.git` in your terminal.
- `cd` into the newly created directory

#### *Once in the project directory:*

### Install dependencies:
- use the command `npm i` to install all dependencies.

### Set up the database connections
- Create a `.env.test` file and add `PGDATABASE=tlydp_test`

- Create a `.env.development` file and add `PGDATABASE=tlydp`

These files will ensure you are connected to the correct database depending on the environment.

## Seed the databases
- To seed the local database, first run the command `npm run setup-dbs` to create the database and `npm run seed` to populate it with the development data.

- The test database will be seeded with the test data upon running the test file with the command `npm t`

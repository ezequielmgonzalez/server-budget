# server-budget

Backend for BudgetWise, an app that consists of managing your personal budget. \
Developed in Node.js together with the Express framework. Database in PostgreSQL. 

## Getting started

### Creating database

First, we run in the server directory: \
`createdb budgetwisedb` \
Then, run the following command to setup the PostgresSQL database schema: \
`psql -d budgetwisedb < database.sql`

### Starting server

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode. 
Open [http://localhost:5000](http://localhost:5000) to view it in your browser. 

You may also see any lint errors in the console. 

Now, to view the app with its front-end, leave the server open and follow the steps at: https://github.com/ezequielmgonzalez/client-budget-wise .

# server-budget

Backend for BudgetWise, an app that consists of managing your personal budget.
Developed in Node.js together with the Express framework. Database in PostgreSQL.

## Getting started

### Creating database

First, we run in the server directory:
`sudo -u postgres psql`

Then, we create the database:
`CREATE DATABASE budgetWiseDb;`

You move to this new database with:
`\c budgetwisedb;`

Now we create a new table:
`CREATE TABLE movement ( movement_id SERIAL PRIMARY KEY, amount REAL NOT NULL, concept VARCHAR(255) NOT NULL, dateM DATE NOT NULL, typeM CHAR NOT NULL );`

If you want to quit from here, you simply run:
`\q`

### Starting server

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

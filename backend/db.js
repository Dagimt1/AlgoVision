import pg from 'pg';
import dotenv from 'dotenv';
import chalk from 'chalk';

const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/Capstone');

dotenv.config();

const createTables = async () => {
  try {
    await client.connect();
    const SQL = `
          CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
          DROP TABLE IF EXISTS Users;
      
          CREATE TABLE Users(
              id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
              email VARCHAR(255) NOT NULL,
              password VARCHAR(255) NOT NULL
          )
          
          `;
    await client.query(SQL);
    console.log(chalk.green('DB created successfully!!'));
  } catch (err) {
    console.log(chalk.red('Failed to create DB?!', err));
  }
};

export { client, createTables };

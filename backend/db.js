import pg from 'pg';
import dotenv from 'dotenv';
import chalk from 'chalk';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
              password VARCHAR(255) NOT NULL,
              isAdmin Boolean DEFAULT FALSE
          )
          `;
    await client.query(SQL);
    console.log(chalk.green('DB created successfully!!'));
  } catch (err) {
    console.log(chalk.red('Failed to create DB?!', err));
  }
};

const register = async (email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const SQL = `
    INSERT INTO Users(email, password)
    VALUES($1,$2)
    RETURNING *;
    `;
  try {
    const response = await client.query(SQL, [email, hashedPassword]);
    return response.rows;
  } catch (err) {
    console.log(chalk.red('failed to register!'));
    throw err;
  }
};
const getAllUsers = async () => {
  const SQL = `
  SELECT * FROM Users;
  `;
  try {
    const response = await client.query(SQL);
    return response.rows;
  } catch (err) {
    throw err;
  }
};

const logIn = async (email, password) => {
  const jwtSignature = 'superSecret';

  const SQL = `
    SELECT * FROM Users WHERE Email = $1
  `;

  try {
    const result = await client.query(SQL, [email]);
    const user = result.rows[0];
    if (!user) {
      return { msg: 'User not found sign up now!' };
    }

    const isAuthenticated = await bcrypt.compare(password, user.password);

    if (isAuthenticated) {
      const token = jwt.sign(
        {
          id: user.id,
          username: user.name,
        },
        jwtSignature,
        { expiresIn: '1d' }
      );

      return {
        token: token,
        msg: 'successfully logged in',
      };
    } else {
      return { msg: 'Invalid email or password' };
    }
  } catch (err) {
    throw err;
  }
};

const changePassword = async (email, newPassword) => {
  const SQL = `SELECT * FROM Users WHERE email = $1`;
  const isRegistered = await client.query(SQL, [email]);
  if (isRegistered.rows.length !== 0) {
    try {
      const hashedNewPassword = await bcrypt.hash(newPassword, 10);
      const SQL = `
      UPDATE Users SET password = $1 WHERE email = $2
      RETURNING *
      `;
      const result = await client.query(SQL, [hashedNewPassword, email]);
      return {
        msg: 'reset password successfully!',
      };
    } catch (err) {
      s;
      throw err;
    }
  } else {
    return { msg: 'User not found!' };
  }
};
export { client, createTables, register, logIn, getAllUsers, changePassword };


  
const { sql, poolPromise } = require('../db/config');

const getUsers = async () => {
  const pool = await poolPromise;
  const result = await pool.request().query('SELECT * FROM Users');
  return result.recordset;
};

const getUserById = async (id) => {
  const pool = await poolPromise;
  const result = await pool.request()
    .input('id', sql.Int, id)
    .query('SELECT * FROM Users WHERE Id = @id');
  return result.recordset[0];
};

const createUser = async (user) => {
  const pool = await poolPromise;
  const result = await pool.request()
    .input('name', sql.VarChar, user.name)
    .input('email', sql.VarChar, user.email)
    .query('INSERT INTO Users (Name, Email) VALUES (@name, @email)');
  return result.rowsAffected[0]; // Return the number of affected rows
};

const updateUser = async (id, user) => {
  const pool = await poolPromise;
  const result = await pool.request()
    .input('id', sql.Int, id)
    .input('name', sql.VarChar, user.name)
    .input('email', sql.VarChar, user.email)
    .query('UPDATE Users SET Name = @name, Email = @email WHERE Id = @id');
  return result.rowsAffected[0]; // Return the number of affected rows
};

const deleteUser = async (id) => {
  const pool = await poolPromise;
  const result = await pool.request()
    .input('id', sql.Int, id)
    .query('DELETE FROM Users WHERE Id = @id');
  return result.rowsAffected[0]; // Return the number of affected rows
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };

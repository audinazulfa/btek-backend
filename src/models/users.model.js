const db = require("../helpers/db");

const table = "users";

exports.insertUser = (data) => {
  const sql =`INSERT INTO ${table} ("email", "password") VALUES ($1, $2) RETURNING *`;
  const params = [data.email, data.password];
  return db.query(sql, params);
};

exports.selectAllUsers = (data) => {
  const sql = `SELECT * FROM "${table}" WHERE "${data.searchBy}" LIKE '%${data.search}%' ORDER BY "${data.sortBy}" ${data.reverse? "DESC" : "ASC"} LIMIT $1 OFFSET $2`;
  const params = [data.limit, data.offset];
  return db.query(sql, params);
};

exports.selectAll = (data)=> {
  const sql = `SELECT * FROM ${table} WHERE "${data.searchBy}" LIKE '%${data.search}%'`;
  return db.query(sql);
};

exports.selectUserById = (id) => {
  const sql = `SELECT * FROM "${table}" WHERE id=$1`;
  const params = [id];
  return db.query(sql, params);
};

exports.selectUserByEmail =  (email) => {
  const sql = `SELECT * FROM "${table}" WHERE email=$1`;
  const params = [email];
  return db.query(sql, params);
};

//update user berdasarkan id
exports.editUser = (id, data) => {
  const sql = `UPDATE ${table} SET email = $2, password = $3 WHERE id = $1 RETURNING *`;
  const params = [id, data.email, data.password];
  return db.query(sql, params);
};

//delete user berdasarkan id
exports.deleteUser = (id) => {
  const sql = `DELETE FROM ${table} WHERE id = $1 RETURNING *`;
  const params = [id];
  return db.query(sql, params);
};

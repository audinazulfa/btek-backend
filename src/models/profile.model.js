const db = require("../helpers/db");
const table = "profile";

exports.insertProfile = (data)=> {
  const sql = `INSERT INTO "${table}" ("fullName", "picture", "birthDate", "userId") VALUES ($1, $3, $2, $4) RETURNING *`;
  const params = [data.fullName,  data.picture, data.birthDate, data.userId];
  return db.query(sql, params);
};

exports.selectProfileByUserId = (id)=> {
  const sql = `SELECT * FROM "${table}" WHERE "userId"=$1`;
  const params = [id];
  return db.query(sql, params);
};

exports.updateProfileById = (id, data)=> {
  const column = Object.keys(data);
  const values = Object.values(data);

  const conditionalSql = [];
  column.forEach((col, i)=>{
    conditionalSql.push(`"${col}"=$${2+i}`);
  });

  const sql = `UPDATE "${table}" SET ${conditionalSql.join(", ")} WHERE "userId"=$1 RETURNING *`;
  const params = [id, ...values];
  return db.query(sql, params);
};

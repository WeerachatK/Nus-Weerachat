const express = require("express");
const req = require("express/lib/request");
const { json } = require("express/lib/response");
const router = express.Router();
const mariadb = require("mariadb");

const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "9999",
    database: "company",
    connectionLimit: 5,
});

router.post("/create", async (req, res) => {
    const body = req.body;
    const connection = await pool.getConnection();
    try{
        const result = await connection.query(`INSERT INTO employee VALUES ("${body.employeeName}", ${body.age}, "${body.SSN}", 
        ${body.salary}, ${body.department}, ${body.graduated})`);
        connection.release();
        connection.end();
        console.log(result);
    return res.json({
        msg: "Work!!",
    });
    }
    catch(e){
        return res.json({
            msg: "error",
            err: e
        });
    }
    
});

router.delete("/delete/:asdf", async (req, res) => {
    const ssn = req.params.asdf
    const connection = await pool.getConnection();
    await connection.query(`DELETE FROM employee WHERE SSN = "${ssn}";`);
    connection.release();
    connection.end();
    return res.json({
        msg: "DELETE!!!"
    });
});

router.patch("/update/:ssn", async (req, res) => {
    const ssn = req.params.ssn;
    const data = req.body;
    let queryString = "UPDATE employee SET ";
    for (let key in data) {
        if (key == "Emp_name" || key == "SSN"){
            queryString += `${key} = "${data[key]}", `;
        }else{
            queryString += `${key} = ${data[key]}, `;
        }
    }
    queryString = queryString.slice(0, -2);
    queryString += `WHERE SSN = ${ssn};`;
    const connection = await pool.getConnection();
    await connection.query(queryString);
    connection.release();
    connection.end();
    return res.json({
        msg: "UPDATE!!!"
    });
});

router.get("/all", async (req, res) => {
    const connection = await pool.getConnection();
    const data = await connection.query("SELECT * FROM employee;");
    connection.release();
    connection.end();
    return res.json(data);
});

module.exports = router;

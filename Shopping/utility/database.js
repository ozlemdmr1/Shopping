//sequelize ile mysql e bağlanmak için

const Sequelize=require('sequelize')
const sequelize =new Sequelize('node_app','root','11.09.YBk',
{dialect: 'mysql', host: 'localhost'})

module.exports=sequelize

/*
mysql e bağlanmak için
sequelize a geçtiğimiz için buna gerek kalmadı
 const mysql= require('mysql2')

 const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'node_app',
    password:'11.09.YBk'
 })
 module.exports=connection.promise()
 */
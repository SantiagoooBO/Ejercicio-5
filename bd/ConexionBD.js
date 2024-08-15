
require('dotenv').config();
class ConectarDB{
    constructor(){
        this.conexion=null;
        this.mysql=require("mysql2/promise")
    }
    async conectarMySql(){
        try {
            this.conexion=await this.mysql.createConnection({
                host:process.env.HOSTMYSQL,
                user:process.env.USERMYSQL,
                password:process.env.PASSWORDMYSQL,
                database: process.env.DATABASEMYSQL,
                port:process.env.PORTMYSQL
            });
            console.log("conectado a mysql");
        } catch (error) {
            console.error("error al conectar con my ql"+error)
        }
    }
    async cerrarConexion(){
        if(this.conexion!=null){
            try {
                await this.conexion.end();
                console.log("Conexion cerrada de Nysql chao");
            } catch (error) {
                console.error("Error al cerar conexion "+error);
            }
        }
    }
}


console.log(process.env);

module.exports=ConectarDB;
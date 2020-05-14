const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


/*teste envio
/**
 * rota / recurso
 */

 /**
  * metodos HTTP:
  * 
  * GET: buscar uma informaçao do backend
  * POST: criar uma informaçao no backend
  * PUT: alterar
  * DELETE: deletar 
  */

  /**
   * 
   * Query Params: parametros nomeados enviados na rota apos "?" (filtros, paginaçao)
   * Route Params: parametros utilizados para identificar recursos
   * Request Body: corpo da requisiçao, utilizado para criar ou alterar recursos
   */



   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * from users
     * Query Builder: table('users').select('*').where()
     */




app.listen(3333);
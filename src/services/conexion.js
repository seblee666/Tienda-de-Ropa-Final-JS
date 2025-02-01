import pg from 'pg';
const { Client } = pg;

const config = {
    user: 'productosdb_tiendaropa_user',
    host: 'dpg-cuetmj5ds78s73fc2ce0-a.oregon-postgres.render.com',
    database: 'productosdb_tiendaropa',
    password: 'FVss3lHFko8TXddlnkqjiPBn0Y1vERfC',
    port: 5432,
    ssl:
        {
            rejectUnauthorized: false
        }
}
export async function Conectar(params) {
    const client = new Client(config);
    try{
        await client.connect();
        console.log('Conectado a la base de datos');
    }catch(error){
        console.log('Error al conectar a la base de datos');
    }
}
export async function Consultarproductos(){
    const client = new Client(config);
    try{
        await client.connect();
        const result = await client.query('SELECT * FROM productos');
        return result.rows;
    }catch(error){
        console.log('Error al consultar productos');
    }
}
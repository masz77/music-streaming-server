import { Db, MongoClient } from "mongodb";
const connectionString = process.env.DATABASE_URL_pwd_auth;
const client = new MongoClient(connectionString);

let db: Db;

export const connectToServer = async () => {
  await client.connect();
  db = client.db(process.env.DB_NAME);
  console.log("Successfully connected to MongoDB.");
};

const getDb = () => db;

export default getDb;

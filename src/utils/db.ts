import { MongoClient, Db, MongoClientOptions } from 'mongodb';

interface Cached {
  client: MongoClient | null;
  db: Db | null;
}

const cached: Cached = {
  client: null,
  db: null,
};

export async function getDB(): Promise<{ client: MongoClient; db: Db }> {
  if (cached.client && cached.db) {
    return { client: cached.client, db: cached.db };
  }

  const isDebug = process.env.DEBUG == 'true';
  const uri = isDebug
    ? (process.env.MONGO_DB_URI_DEV as string)
    : (process.env.MONGO_DB_URI_PRODUCTION as string);

  const dbName = isDebug ? 'TestArticles' : 'Articles';

  if (!uri) {
    throw new Error(
      'Database URI is not defined. Please define it in .env file.',
    );
  }

  const options: MongoClientOptions = {};

  const client = new MongoClient(uri, options);

  await client.connect();
  const db = client.db(dbName);

  cached.client = client;
  cached.db = db;

  return { client, db };
}

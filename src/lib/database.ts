import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { DATABASE_URL } from '$env/static/private';
import { PrismaClient } from '../../generated/prisma/client';

const adapter = new PrismaBetterSqlite3({ url: DATABASE_URL });
const db = new PrismaClient({ adapter });

export default db;

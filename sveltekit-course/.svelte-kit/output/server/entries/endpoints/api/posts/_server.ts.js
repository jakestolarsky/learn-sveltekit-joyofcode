import { json } from "@sveltejs/kit";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import * as runtime from "@prisma/client/runtime/client";
//#region \0virtual:env/static/private
/** @type {import('$env/static/private').DATABASE_URL} */
var DATABASE_URL = "file:./dev.db";
//#endregion
//#region generated/prisma/internal/class.ts
var config = {
	"previewFeatures": [],
	"clientVersion": "7.8.0",
	"engineVersion": "3c6e192761c0362d496ed980de936e2f3cebcd3a",
	"activeProvider": "sqlite",
	"inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"sqlite\"\n}\n\nmodel Post {\n  id        Int      @id @default(autoincrement())\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  title     String\n  content   String?\n  slug      String  @unique\n  published Boolean @default(false)\n}\n",
	"runtimeDataModel": {
		"models": {},
		"enums": {},
		"types": {}
	},
	"parameterizationSchema": {
		"strings": [],
		"graph": ""
	}
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Post\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"content\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"published\",\"kind\":\"scalar\",\"type\":\"Boolean\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
	strings: JSON.parse("[\"where\",\"Post.findUnique\",\"Post.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"Post.findFirst\",\"Post.findFirstOrThrow\",\"Post.findMany\",\"data\",\"Post.createOne\",\"Post.createMany\",\"Post.createManyAndReturn\",\"Post.updateOne\",\"Post.updateMany\",\"Post.updateManyAndReturn\",\"create\",\"update\",\"Post.upsertOne\",\"Post.deleteOne\",\"Post.deleteMany\",\"having\",\"_count\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"Post.groupBy\",\"Post.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"createdAt\",\"updatedAt\",\"title\",\"content\",\"slug\",\"published\",\"equals\",\"not\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"contains\",\"startsWith\",\"endsWith\",\"set\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
	graph: "PAsQChwAACwAMB0AAAQAEB4AACwAMB8CAAAAASBAAC4AISFAAC4AISIBAC8AISMBADAAISQBAAAAASUgADEAIQEAAAABACABAAAAAQAgChwAACwAMB0AAAQAEB4AACwAMB8CAC0AISBAAC4AISFAAC4AISIBAC8AISMBADAAISQBAC8AISUgADEAIQEjAAAyACADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACAHHwIAAAABIEAAAAABIUAAAAABIgEAAAABIwEAAAABJAEAAAABJSAAAAABAQgAAAkAIAcfAgAAAAEgQAAAAAEhQAAAAAEiAQAAAAEjAQAAAAEkAQAAAAElIAAAAAEBCAAACwAwAQgAAAsAMAcfAgA8ACEgQAA4ACEhQAA4ACEiAQA5ACEjAQA6ACEkAQA5ACElIAA7ACECAAAAAQAgCAAADgAgBx8CADwAISBAADgAISFAADgAISIBADkAISMBADoAISQBADkAISUgADsAIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgBhUAADMAIBYAADQAIBcAADcAIBgAADYAIBkAADUAICMAADIAIAocAAAaADAdAAAXABAeAAAaADAfAgAbACEgQAAcACEhQAAcACEiAQAdACEjAQAeACEkAQAdACElIAAfACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIAocAAAaADAdAAAXABAeAAAaADAfAgAbACEgQAAcACEhQAAcACEiAQAdACEjAQAeACEkAQAdACElIAAfACENFQAAIQAgFgAAKwAgFwAAIQAgGAAAIQAgGQAAIQAgJgIAAAABJwIAKgAhKAIAAAAEKQIAAAAEKgIAAAABKwIAAAABLAIAAAABLQIAAAABCxUAACEAIBgAACkAIBkAACkAICZAAAAAASdAACgAIShAAAAABClAAAAABCpAAAAAAStAAAAAASxAAAAAAS1AAAAAAQ4VAAAhACAYAAAnACAZAAAnACAmAQAAAAEnAQAmACEoAQAAAAQpAQAAAAQqAQAAAAErAQAAAAEsAQAAAAEtAQAAAAEuAQAAAAEvAQAAAAEwAQAAAAEOFQAAJAAgGAAAJQAgGQAAJQAgJgEAAAABJwEAIwAhKAEAAAAFKQEAAAAFKgEAAAABKwEAAAABLAEAAAABLQEAAAABLgEAAAABLwEAAAABMAEAAAABBRUAACEAIBgAACIAIBkAACIAICYgAAAAAScgACAAIQUVAAAhACAYAAAiACAZAAAiACAmIAAAAAEnIAAgACEIJgIAAAABJwIAIQAhKAIAAAAEKQIAAAAEKgIAAAABKwIAAAABLAIAAAABLQIAAAABAiYgAAAAAScgACIAIQ4VAAAkACAYAAAlACAZAAAlACAmAQAAAAEnAQAjACEoAQAAAAUpAQAAAAUqAQAAAAErAQAAAAEsAQAAAAEtAQAAAAEuAQAAAAEvAQAAAAEwAQAAAAEIJgIAAAABJwIAJAAhKAIAAAAFKQIAAAAFKgIAAAABKwIAAAABLAIAAAABLQIAAAABCyYBAAAAAScBACUAISgBAAAABSkBAAAABSoBAAAAASsBAAAAASwBAAAAAS0BAAAAAS4BAAAAAS8BAAAAATABAAAAAQ4VAAAhACAYAAAnACAZAAAnACAmAQAAAAEnAQAmACEoAQAAAAQpAQAAAAQqAQAAAAErAQAAAAEsAQAAAAEtAQAAAAEuAQAAAAEvAQAAAAEwAQAAAAELJgEAAAABJwEAJwAhKAEAAAAEKQEAAAAEKgEAAAABKwEAAAABLAEAAAABLQEAAAABLgEAAAABLwEAAAABMAEAAAABCxUAACEAIBgAACkAIBkAACkAICZAAAAAASdAACgAIShAAAAABClAAAAABCpAAAAAAStAAAAAASxAAAAAAS1AAAAAAQgmQAAAAAEnQAApACEoQAAAAAQpQAAAAAQqQAAAAAErQAAAAAEsQAAAAAEtQAAAAAENFQAAIQAgFgAAKwAgFwAAIQAgGAAAIQAgGQAAIQAgJgIAAAABJwIAKgAhKAIAAAAEKQIAAAAEKgIAAAABKwIAAAABLAIAAAABLQIAAAABCCYIAAAAAScIACsAISgIAAAABCkIAAAABCoIAAAAASsIAAAAASwIAAAAAS0IAAAAAQocAAAsADAdAAAEABAeAAAsADAfAgAtACEgQAAuACEhQAAuACEiAQAvACEjAQAwACEkAQAvACElIAAxACEIJgIAAAABJwIAIQAhKAIAAAAEKQIAAAAEKgIAAAABKwIAAAABLAIAAAABLQIAAAABCCZAAAAAASdAACkAIShAAAAABClAAAAABCpAAAAAAStAAAAAASxAAAAAAS1AAAAAAQsmAQAAAAEnAQAnACEoAQAAAAQpAQAAAAQqAQAAAAErAQAAAAEsAQAAAAEtAQAAAAEuAQAAAAEvAQAAAAEwAQAAAAELJgEAAAABJwEAJQAhKAEAAAAFKQEAAAAFKgEAAAABKwEAAAABLAEAAAABLQEAAAABLgEAAAABLwEAAAABMAEAAAABAiYgAAAAAScgACIAIQAAAAAAAAExQAAAAAEBMQEAAAABATEBAAAAAQExIAAAAAEFMQIAAAABMgIAAAABMwIAAAABNAIAAAABNQIAAAABAAAAAAUVAAYWAAcXAAgYAAkZAAoAAAAAAAUVAAYWAAcXAAgYAAkZAAoBAgECAwEFBgEGBwEHCAEJCgEKDAILDQMMDwENEQIOEgQREwESFAETFQIaGAUbGQs"
};
async function decodeBase64AsWasm(wasmBase64) {
	const { Buffer } = await import("node:buffer");
	const wasmArray = Buffer.from(wasmBase64, "base64");
	return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
	getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.sqlite.mjs"),
	getQueryCompilerWasmModule: async () => {
		const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.sqlite.wasm-base64.mjs");
		return await decodeBase64AsWasm(wasm);
	},
	importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
	return runtime.getPrismaClient(config);
}
runtime.Extensions.getExtensionContext;
runtime.NullTypes.DbNull, runtime.NullTypes.JsonNull, runtime.NullTypes.AnyNull;
runtime.makeStrictEnum({ Serializable: "Serializable" });
runtime.Extensions.defineExtension;
//#endregion
//#region generated/prisma/client.ts
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
//#endregion
//#region src/lib/database.ts
var db = new (getPrismaClientClass())({ adapter: new PrismaBetterSqlite3({ url: DATABASE_URL }) });
//#endregion
//#region src/routes/api/posts/+server.ts
var GET = async () => {
	return json(await db.post.findMany());
};
//#endregion
export { GET };

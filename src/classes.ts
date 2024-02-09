import https from "https"
import sqljs, { SqlJsStatic } from "sql.js"

export class Server {
    private server: https.Server;
    private sql;

    constructor(httpServer: https.Server) {
        this.server = httpServer;
    }

    async initializeSql() {
        const result = await sqljs({
            locateFile: file => `https://sql.js.org/dist/${file}`
        });
        this.sql = new result.Database();
    }

    async addRoute(route: string, room: string) {

    }

    async runServer() {
        await this.initializeSql()

        this.server.listen()
    }
}
import Database from 'better-sqlite3'
import bcrypt from 'bcrypt'

const db = new Database('pouriag.sqlite3')

class User {
    constructor () {
        db.prepare(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE,
                password TEXT,
                record INTEGER
            )
        `).run()

        this.db = db
    }

    async insert(username, password, record) {
    

        let hash = await bcrypt.hash(password, 1)
        const ins = this.db.prepare('INSERT INTO users (username, password, record) VALUES(?, ?, ?)')
        let info = ins.run(username, hash, record)

        return info;

    }

    read(username) {
         
        const rd = this.db.prepare('SELECT * FROM users WHERE username = ?')
        return rd.get(username)

        

    }

    updateRecord(id, newRecord) {
        const ud = this.db.prepare('UPDATE users SET record = ? WHERE id = ?')
        return ud.run(newRecord, id)
    }
}


export default User;
const db = require('../config/db');

class User {

    constructor(first_name, last_name, username, pwd) 
    {
        this.firstName = first_name;
        this.lastName = last_name;
        this.email = username;
        this.password = pwd;
    }

    async save() 
    {
        let sql = `
            INSERT INTO user
            (
                first_name,
                last_name,
                user_name,
                password,
                date_added
            )
            VALUES
            (
                '${this.firstName}',
                '${this.lastName}',
                '${this.email}',
                '${this.password}',
                NOW()
            )
        `;

        return db.execute(sql);
    }

    static findAll() 
    {
        let sql = `SELECT * FROM user;`;

        return db.execute(sql);
    }

    static findOne(id) 
    {
        let sql = `SELECT * FROM user WHERE user_name = '${id}';`;

        return db.execute(sql);
    }
}

module.exports = User;
const db = require('../config/db');

class Plane {
    constructor(tail, type) 
    {
        this.tailNum = tail;
        this.model = type;
    }

    save()
    {
        let sql = `
            INSERT INTO plane
            (
                tailNum,
                model
            ) VALUES
            (
                '${this.tailNum}',
                '${this.model}'
            )
        `;

        return db.execute(sql);
    }

    static findAll() 
    {
        let sql = `SELECT * FROM plane;`;

        return db.execute(sql);
    }

    static findOne(id) 
    {
        let sql = `SELECT * FROM plane WHERE tailNum = '${id}';`;

        return db.execute(sql);
    }
}

module.exports = Plane;
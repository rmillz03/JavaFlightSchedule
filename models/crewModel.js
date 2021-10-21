const db = require('../config/db');

class Crew {
    constructor(realName, nickname, isPilot, flyUH60) 
    {
        this.name = realName;
        this.callSign = nickname;
        this.pilot = isPilot;
        this.UH60 = flyUH60;
    }

    save()
    {
        let sql = `
            INSERT INTO crew
            (
                name,
                callSign,
                pilot,
                UH60
            ) VALUES
            (
                '${this.name}',
                '${this.callSign}',
                '${this.pilot}',
                '${this.UH60}'
            )
        `;

        return db.execute(sql);
    }

    static findAll() 
    {
        let sql = `SELECT * FROM crew;`;

        return db.execute(sql);
    }

    static findOne(id) 
    {
        let sql = `SELECT * FROM crew WHERE crewID = '${id}';`;

        return db.execute(sql);
    }
}

module.exports = Crew;
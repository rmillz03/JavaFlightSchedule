const db = require('../config/db');

class Mission {
    constructor(pilot, plane, time, julian) 
    {
        this.aircrew = pilot;
        this.aircraft = plane;
        this.ETD = time;
        this.julianDate = julian;
    }

    save()
    {
        let sql = `
            INSERT INTO missions
            (
                pilot1,
                tailNum,
                ETD,
                julianDate
            ) VALUES
            (
                '${this.aircrew}',
                '${this.aircraft}',
                '${this.ETD}',
                '${this.julianDate}'
            )
        `;

        return db.execute(sql);
    }

    static findAll() 
    {
        //let sql = `SELECT * FROM missions;`;
        let sql = `
            SELECT missions.missionID, missions.pilot1, missions.tailNum,
                    missions.ETD, missions.julianDate, crew.name, crew.callSign,
                    plane.tailNum, plane.model
            FROM missions
            INNER JOIN crew ON missions.pilot1=crew.crewID
            INNER JOIN plane ON missions.tailNum=plane.tailNum;
        `;

        return db.execute(sql);
    }

    static findOne(id) 
    {
        let sql = `SELECT * FROM missions WHERE missionID = '${id}';`;

        return db.execute(sql);
    }
}

module.exports = Mission;
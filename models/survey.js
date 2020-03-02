'use strict'

const db = require('./conn');

class classInfo {
    constructor(id, name, rank) {
        this.id = id;
        this.name = name;
        this.rank = rank;
    }
    static async getAll() {
        try {
            const response = await db.any(`SELECT topic.name as topic, ranking.name as rank FROM topic JOIN ranking ON ranking_id = ranking.id;`);
            return response;
        } catch (error) {
            return error;
        }
    }
    static async getRanks() {
        try {
            const response = await db.any(`SELECT * FROM ranking;`);
            return response;
        } catch(error) {
            return error;
        }
    }
    // static async updateDb(value) {
    //     try {
    //         const response = db.none(`INSERT INTO topic(ranking.id) VALUES (${value});`);
    //         return response;      
    //     } catch(error) {
    //         return error;
    //     }
    // }
}





module.exports = classInfo;
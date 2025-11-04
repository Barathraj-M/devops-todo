const request= require("supertest")
const {app,server} = require("../index")
const mongoose = require("mongoose")

describe('Get API Tasks',()=>{
    it('it should return 200 ok',async()=>{
        const res = await request(app).get('/api/tasks')
        expect(res.statusCode).toEqual(200)
    })
    it('it should return Object data',async()=>{
        const res = await request(app).get('/api/tasks')
        // expect(Array.isArray(res.body)).toBe(true)
        expect(typeof res.body).toBe("object")
        expect(res.body).toHaveProperty('tasks')
        console.log(res.body.tasks)
    })
})

afterAll(async()=>{
    await mongoose.connection.close()
    server.close()
})
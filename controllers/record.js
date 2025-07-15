import User from "../model/users.js"

function getAllRecords(req, res) {
    const user = new User
    let ans = user.readAll()

    res.send(ans)
} 

function newRecord(req, res) {
    
    const user = new User
    user.updateRecord(req.user.id, req.body.record)

    res.sendStatus(200)

}


export {newRecord, getAllRecords}
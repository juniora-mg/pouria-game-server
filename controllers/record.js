import User from "../model/users.js"

function recordNew(req, res) {
    
    const user = new User
    user.updateRecord(req.user.id, req.body.record)

    res.sendStatus(200)

}


export {recordNew}
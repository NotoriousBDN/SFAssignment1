var fs = require('fs');

module.exports = function(req, res) {
    var u = req.body.username;
    console.log(u);
    check = false;
    fs.readFile('./data/newUsers.json', 'utf8', function(err, data) {
        // the above path is with respect to where we run server.js
        if (err) throw err;
        let userArray = JSON.parse(data);
        console.log(userArray);
        a = "DOES NOT WORK";
        let i = userArray.findIndex(user =>
            (user.username == u));


        for (let i=0; i < userArray.length; i++) {
            if (u == userArray[i].username) {
                console.log("Match");
                userInfo = userArray[i];
                check = true;
            }
        }
        if (check == false) {
            res.send({"ok": false});
        } else {
            userInfo = userArray[i];
            userInfo["ok"] = true;
            res.send(userInfo);   
        } 
    });   
}
var fs = require('fs');

module.exports = function(req, res) {
    var u = req.body.username;
    console.log(u);
    fs.readFile('./data/newUsers.json', 'utf8', function(err, data) {
        // the above path is with respect to where we run server.js
        if (err) throw err;
        let userArray = JSON.parse(data);
        console.log(userArray);
        let i = userArray.findIndex(user =>
            (user.username == u));
        if (i == -1) {
            res.send({
                "ok": false
            });
        } else {
            role = userArray[i].role;
            if (role == 0) {
                role = "No Role";
            } else if (role == 1) {
                role = "Group Assistant";
            } else if (role == 2) {
                role = "Group Admin";
            } else if (role == 3) {
                role = "Super Admin";
            }
            console.log("Role: ",role);
            fs.readFile('./data/groups.json', 'utf8', function(err, data) {
                // the above path is with respect to where we run server.js
                if (err) throw err;
                let extendedUserArray = JSON.parse(data);
                console.log(extendedUserArray);
                console.log(extendedUserArray[0].userList);
                //let i = extendedUserArray.findIndex(user =>
                //    ((user.userList == u)));

                let userData = extendedUserArray[0];

                for (let i=0; i < extendedUserArray[0].userList.length; i++) {
                    //console.log(extendedUserArray[0].userList[i]);

                    // Check to see if username is in userlist
                    // userData will only be ok if it does match
                    if (extendedUserArray[0].userList[i] == u ) {
                        console.log(u);
                        userData["ok"] = true;
                        userData["username"] = u;
                        userData["role"] = role;
                    }
                }
                console.log(i);
                //let userData = extendedUserArray[0];
                //userData["ok"] = true;
                console.log(userData);
                res.send(userData);
            });
            
        }
        
    });

}
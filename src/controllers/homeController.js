const connection = require('../config/database');

const getHomepage = (req, res) => {
    connection.query('SELECT * FROM Users u', function (err, results, fields) {
        if (err) {
            console.error("Database query error: ", err);
            return res.status(500).send("Database query error");
        }
        let users = results;
        console.log(">>>results= ", results); // results contains rows returned by server
        console.log(">> check users: ", users);
        res.send(JSON.stringify(users));
    });
};

const getabc = (req, res) => {
    res.send('what the hell Luc');
};

const getLucNguyen = (req, res) => {
    res.render('sample');
};

module.exports = {
    getHomepage,
    getabc,
    getLucNguyen
};

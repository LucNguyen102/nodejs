const getHomepage = (req, res) => {
    res.send('Hello World!')
}

const getabc = (req, res) => {
    res.send('what the hell Luc')
}

const getLucNguyen = (req, res) => {
    res.render('sample')
};

module.exports = {
    getHomepage, getabc, getLucNguyen
}
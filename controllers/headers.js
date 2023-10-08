module.exports = (req, res) => {
    let headers = Object.assign({}, req.headers);
    if ( headers.cookie ){
        headers.cookie = 'HIDDEN';
    }
    res.json(headers);
};

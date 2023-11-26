/**
 * Provides request headers hiding cookies
 */
export default function headers(req, res){
    let result = Object.assign({}, req.headers);
    if ( result.cookie ){
        result.cookie = 'HIDDEN';
    }
    res.json(result);
};



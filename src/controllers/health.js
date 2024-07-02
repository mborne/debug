/**
 * Just says "OK" to provide a liveness probe.
 */
export default function health(req,res){
    res.json({
        "message": "OK"
    });
}

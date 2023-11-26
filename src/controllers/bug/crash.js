/**
 * Allows to crash the process
 */
export default function crash(req, res){
    // TODO logger
    console.error("Ooops! someone called crash :'(");
    res.send("Oh no!");
    process.exit(1);
};


import {readFileSync} from 'fs';

const __dirname = import.meta.dirname;
const YAML_SPECS = readFileSync(__dirname+'/../specs/debug-api.yaml');

/**
 * Provide the content of /debug-api.yaml specifications
 */
export default function specs(req,res){
    res.send(YAML_SPECS);
}

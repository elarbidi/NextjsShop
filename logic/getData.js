import fs from "fs";
import path from "path";

async function getData(){
    const filePath = path.join(process.cwd(), './data/products.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const products = JSON.parse(jsonData);
    return (products);
}

export default getData;
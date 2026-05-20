const fs = require('fs');
const path = require('path');

const packagesPath = path.join(__dirname, 'data', 'packages.ts');
const newDataPath = path.join(__dirname, 'new_packages_data.ts');

if (!fs.existsSync(newDataPath)) {
    console.error("No new_packages_data.ts found.");
    process.exit(1);
}

let packagesContent = fs.readFileSync(packagesPath, 'utf8');
const newDataContent = fs.readFileSync(newDataPath, 'utf8');

const lastBracketIndex = packagesContent.lastIndexOf('];');
if (lastBracketIndex === -1) {
    console.error("Could not find the end of the packages array.");
    process.exit(1);
}

const beforeInjection = packagesContent.substring(0, lastBracketIndex).trimEnd();
const needsComma = !beforeInjection.endsWith(',');

const finalContent = 
    beforeInjection + 
    (needsComma ? ',\n  ' : '\n  ') + 
    newDataContent + 
    '\n];\n';

fs.writeFileSync(packagesPath, finalContent, 'utf8');
console.log("Successfully injected new packages!");

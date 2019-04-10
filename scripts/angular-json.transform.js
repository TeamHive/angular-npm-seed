const editJsonFile = require("edit-json-file");

const args = process.argv.slice(2);

const filePath = args[0];
let file = editJsonFile(filePath);

file.unset('projects.demo-web-e2e');


const buildOptionsPath = 'projects.demo-web.architect.build.options';
const stylesPath = `${buildOptionsPath}.styles`;

file.set(stylesPath, [...file.get(stylesPath), ...[
    "node_modules/prismjs/themes/prism.css",
    "node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css"]]);

const scriptsPath = `${buildOptionsPath}.scripts`;

file.set(scriptsPath, [...file.get(scriptsPath), ...[
    "node_modules/marked/lib/marked.js",
    "node_modules/prismjs/prism.js",
    "node_modules/prismjs/components/prism-bash.min.js",
    "node_modules/prismjs/components/prism-typescript.min.js",
    "node_modules/prismjs/components/prism-scss.min.js",
    "node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js"]]);

file.save();
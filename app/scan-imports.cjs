const fs = require("fs");
const path = require("path");

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath, fileList);
    } else if (filePath.endsWith(".ts") || filePath.endsWith(".tsx")) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const tsFiles = walk(path.join(process.cwd(), "src"));
const imports = new Set();
for (const f of tsFiles) {
  const content = fs.readFileSync(f, "utf8");
  const matches = content.matchAll(/from\s+["']([^"']+)["']/g);
  for (const m of matches) {
    imports.add(m[1]);
  }
}
const external = Array.from(imports).filter(
  (i) => !i.startsWith(".") && !i.startsWith("@/")
);
console.log(JSON.stringify(external, null, 2));
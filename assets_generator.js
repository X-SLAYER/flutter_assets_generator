const fs = require("fs");
const path = require("path");

const savePath = path.join(__dirname, "../lib/constant/assets.dart");

function generateDartFile(assets) {
  let content = "class Assets {\n  Assets._();\n\n";
  for (const [assetName, assetPath] of Object.entries(assets)) {
    const propertyName = camalize(assetName);
    content += `  static const ${propertyName} = '${assetPath}';\n`;
  }
  content += "}";

  fs.writeFileSync(savePath, content);
}

const camalize = function camalize(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};

function scanAssetsFolder(folder, skipFolders = [], assetObject = {}) {
  const files = fs.readdirSync(folder);
  files.forEach((file) => {
    const filePath = path.join(folder, file);
    if (fs.statSync(filePath).isDirectory()) {
       if (!skipFolders.includes(path.basename(filePath))) {
        scanAssetsFolder(filePath, skipFolders, assetObject);
      }
    } else {
      const assetName = path.basename(file, path.extname(file)).trim();
      const assetPath = path
        .relative(__dirname, filePath)
        .replace(/\\/g, "/")
        .replace("../", "");
      assetObject[assetName] = assetPath;
    }
  });
  return assetObject;
}

const args = process.argv.slice(2);
const skipIndex = args.findIndex((arg) => arg === "-s");
const skipFolders = skipIndex !== -1 ? args[skipIndex + 1].split(",") : [];

const assets = scanAssetsFolder(path.join(__dirname, "../assets"), skipFolders);
generateDartFile(assets);
console.log(`assets.dart generated successfully 🥰\nSaved to: ${savePath}`);

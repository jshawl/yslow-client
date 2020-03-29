const {JSDOM} = require("jsdom")
const {YSLOW} = require("@jshawl/yslow")
const fs = require("fs")

const har = filename => JSON.parse(fs.readFileSync(filename, 'utf-8'))
const document = harish => new JSDOM(harish.log.entries[0].response.content).window

const h = har("example.com.brotli.har")
var content = YSLOW.util.getResults(
  YSLOW.harImporter.run(document(h).document, h, 'ydefault').context,
  'all'
);
console.log(content.g);
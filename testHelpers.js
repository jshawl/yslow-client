const {JSDOM} = require("jsdom")
const fs = require("fs")
const har = filename => JSON.parse(fs.readFileSync(filename, 'utf-8'))
const document = harish => new JSDOM(harish.log.entries[0].response.content).window
const compressionScore = (filename) => {
  const h = har(filename)
  return YSLOW.util.getResults(
    YSLOW.harImporter.run(document(h).document, h, 'ydefault').context,
    'all'
  ).g.ycompress.score
}

module.exports = {
  compressionScore
}
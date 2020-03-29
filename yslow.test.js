const {YSLOW} = require("yslow")
const {compressionScore} = require("./testHelpers")

describe("yslow", () => {
  it("scores 100 when compression is gzip", () => {
    expect(compressionScore("example.com.gzip.har")).toBe(100)
  })
  it("does not score 100 when compression is brotli", () => {
    expect(compressionScore("example.com.brotli.har")).not.toBe(100)
  })
})

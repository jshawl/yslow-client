const { YSLOW } = require("@jshawl/yslow")
const { compressionScore } = require("./testHelpers")

describe("@jshawl/yslow", () => {
  it("scores 100 when compression is gzip", () => {
    expect(compressionScore("example.com.gzip.har")).toBe(100)
  })
  it("scores 100 when compression is brotli", () => {
    expect(compressionScore("example.com.brotli.har")).toBe(100)
  })
})

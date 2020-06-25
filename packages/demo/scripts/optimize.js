const sharp = require("sharp")
const glob = require("glob")
const fs = require("fs-extra")

console.log("Optimizing demo site images")

const matches = glob.sync("**/**/*.{png,jpg,jpeg}")
const MAX_WIDTH = 1800
const QUALITY = 75

Promise.all(
  matches.map(async (match) => {
    const stream = sharp(match)
    const info = await stream.metadata()

    if (info.width < MAX_WIDTH) {
      return
    }

    const optimizedName = match.replace(
      /(\..+)$/,
      (match, ext) => `-optimized${ext}`
    )

    await stream
      .resize(MAX_WIDTH)
      .jpeg({ quality: QUALITY })
      .toFile(optimizedName)

    return fs.rename(optimizedName, match)
  })
)

const { write } = require("node:fs");
const fs = require("node:fs/promises");

class Writer {
  static async Write(filename, data) {
    try {
      await fs.writeFile(filename, data);
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = Writer

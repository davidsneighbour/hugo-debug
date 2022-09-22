const defaultStandardVersion = require("@davidsneighbour/config/standard-version");
const localStandardVersion = {
  bumpFiles: [
    ...defaultStandardVersion.bumpFiles,
    {
      filename: "data/dnb/debug/build.json",
      type: "json",
    },
  ],
  skip: {
    changelog: true
  },
};

const standardVersion = {
  ...defaultStandardVersion,
  ...localStandardVersion,
};
module.exports = standardVersion;

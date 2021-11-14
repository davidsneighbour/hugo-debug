const defaultStandardVersion = require("@dnb-org/standard-version-config");
const localStandardVersion =  {
  bumpFiles: [
    ...defaultStandardVersion.bumpFiles,
    {
      filename: "data/dnb/debug/build.json",
      type: "json",
    },
  ],
};

const standardVersion = {
  ...defaultStandardVersion,
  ...localStandardVersion,
};
module.exports = standardVersion;

var fs = require('fs-extra')
var package = require('../package.json');

try {
    fs.copySync(package.config.tsdlocation, package.config.tsdlocationTarget)
} catch (err) {
    console.error(err)
}
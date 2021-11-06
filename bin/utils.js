const constants = require('./constants');

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function prefixName(name) {
    return constants.PREFIX + capitalizeFirstLetter(name);
}

module.exports = { prefixName };
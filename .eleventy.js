//This will ensure these folders are added to the _site folder once you compile with Eleventy
module.exports = function (eleventyCofig) {
    eleventyCofig.addPassthroughCopy("assets");
    eleventyCofig.addPassthroughCopy("css");
};
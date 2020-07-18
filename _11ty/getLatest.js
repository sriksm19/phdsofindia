module.exports = function (collection) {
  return collection.getFilteredByGlob("posts/**/*.html");
};
